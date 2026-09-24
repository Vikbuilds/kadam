import { PRODUCTS } from './products.js';
import { SNEAKERS } from './sneakers.js';

class Store {
  constructor() {
    this.cart = [];
    this.bundleSlots = [null, null, null];
    this.activeSneaker = SNEAKERS[0];
    this.activeColorway = SNEAKERS[0].colorways[0];
    this.activeLace = PRODUCTS[0];
    this.activeAglet = PRODUCTS[0].agletOptions[0];
    this.hasDubrae = true;
    this.activeLength = '140 cm';
    this.listeners = {};
    
    // Load from localStorage if present
    try {
      const savedCart = localStorage.getItem('kdm_cart');
      if (savedCart) {
        this.cart = JSON.parse(savedCart);
      }
    } catch (e) {
      console.warn('Storage unavailable', e);
    }
  }

  on(event, callback) {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }
    this.listeners[event].push(callback);
  }

  emit(event, data) {
    if (this.listeners[event]) {
      this.listeners[event].forEach(cb => cb(data));
    }
  }

  saveCart() {
    try {
      localStorage.setItem('kdm_cart', JSON.stringify(this.cart));
    } catch (e) {
      console.warn('Could not save cart', e);
    }
    this.emit('cartUpdated', this.getCartSummary());
  }

  addToCart(product, options = {}) {
    const length = options.length || this.activeLength || '140 cm';
    const aglet = options.aglet || product.agletOptions?.[0]?.name || 'Gunmetal Silver';
    const isBundleItem = !!options.isBundleItem;

    const existingIndex = this.cart.findIndex(
      item => item.id === product.id && item.length === length && item.aglet === aglet
    );

    if (existingIndex > -1) {
      this.cart[existingIndex].quantity += 1;
    } else {
      this.cart.push({
        id: product.id,
        code: product.code,
        name: product.name,
        price: product.price,
        originalPrice: product.originalPrice,
        image: product.image,
        category: product.category,
        length,
        aglet,
        isBundleItem,
        quantity: 1
      });
    }

    this.saveCart();
    this.emit('toast', {
      title: 'Cop Confirmed!',
      message: `Added ${product.name} (${length}) to your sole mate setup.`
    });
  }

  updateQuantity(index, delta) {
    if (this.cart[index]) {
      this.cart[index].quantity += delta;
      if (this.cart[index].quantity <= 0) {
        this.cart.splice(index, 1);
      }
      this.saveCart();
    }
  }

  removeFromCart(index) {
    if (this.cart[index]) {
      const removed = this.cart.splice(index, 1)[0];
      this.saveCart();
      this.emit('toast', {
        title: 'Removed',
        message: `${removed.name} removed from setup.`
      });
    }
  }

  clearCart() {
    this.cart = [];
    this.saveCart();
  }

  getCartSummary() {
    const totalItems = this.cart.reduce((sum, item) => sum + item.quantity, 0);
    const rawTotal = this.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    // Dynamic Indian Street Bundle Discount rules:
    // 1 item = full price
    // 2 items = 10% off
    // 3+ items = 20% off + free shipping + free screwdriver kit
    let discountPercent = 0;
    let freeAgletKit = false;
    let freeShipping = false;

    if (totalItems >= 3 || rawTotal >= 1000) {
      discountPercent = 0.20;
      freeShipping = true;
      freeAgletKit = true;
    } else if (totalItems === 2) {
      discountPercent = 0.10;
      freeShipping = rawTotal >= 1000;
    }

    const discountAmount = Math.round(rawTotal * discountPercent);
    const shippingFee = freeShipping ? 0 : 79;
    const finalTotal = Math.max(0, rawTotal - discountAmount + (totalItems > 0 ? shippingFee : 0));

    return {
      items: this.cart,
      totalItems,
      rawTotal,
      discountPercent,
      discountAmount,
      shippingFee,
      freeShipping,
      freeAgletKit,
      finalTotal
    };
  }

  // Bundle & Flex builder methods
  addToBundle(product) {
    const emptyIndex = this.bundleSlots.findIndex(slot => slot === null);
    if (emptyIndex !== -1) {
      this.bundleSlots[emptyIndex] = product;
      this.emit('bundleUpdated', this.getBundleSummary());
      this.emit('toast', {
        title: `Bundle Slot ${emptyIndex + 1} Locked`,
        message: `${product.name} added to your 3-piece flex.`
      });
      return true;
    } else {
      this.emit('toast', {
        title: 'Bundle Slots Full!',
        message: 'You have 3 items ready. Click "Add Bundle to Cart" or remove a slot.'
      });
      return false;
    }
  }

  removeFromBundle(slotIndex) {
    if (this.bundleSlots[slotIndex]) {
      this.bundleSlots[slotIndex] = null;
      this.emit('bundleUpdated', this.getBundleSummary());
    }
  }

  getBundleSummary() {
    const filledSlots = this.bundleSlots.filter(Boolean);
    const count = filledSlots.length;
    const rawTotal = filledSlots.reduce((sum, p) => sum + p.price, 0);

    let discountPercent = 0;
    let freeShipping = false;
    let freeAgletKit = false;

    if (count === 3) {
      discountPercent = 0.20;
      freeShipping = true;
      freeAgletKit = true;
    } else if (count === 2) {
      discountPercent = 0.10;
    }

    const discountAmount = Math.round(rawTotal * discountPercent);
    const finalTotal = rawTotal - discountAmount;

    return {
      slots: this.bundleSlots,
      count,
      rawTotal,
      discountPercent,
      discountAmount,
      finalTotal,
      freeShipping,
      freeAgletKit
    };
  }

  addBundleToCart() {
    const filledSlots = this.bundleSlots.filter(Boolean);
    if (filledSlots.length === 0) return;

    filledSlots.forEach(p => {
      this.addToCart(p, { isBundleItem: true });
    });

    // Reset bundle
    this.bundleSlots = [null, null, null];
    this.emit('bundleUpdated', this.getBundleSummary());
    this.emit('openCart');
    this.emit('toast', {
      title: '20% Bundle Applied!',
      message: 'Unlocked 20% Off + Free Shipping + Free Aglet Screwdriver Kit!'
    });
  }

  // Visualizer configuration
  setVisualizerSneaker(sneaker) {
    this.activeSneaker = sneaker;
    this.activeColorway = sneaker.colorways[0];
    this.emit('visualizerUpdated');
  }

  setVisualizerColorway(colorway) {
    this.activeColorway = colorway;
    this.emit('visualizerUpdated');
  }

  setVisualizerLace(lace) {
    this.activeLace = lace;
    this.activeAglet = lace.agletOptions[0];
    this.emit('visualizerUpdated');
  }

  setVisualizerAglet(aglet) {
    this.activeAglet = aglet;
    this.emit('visualizerUpdated');
  }

  toggleVisualizerDubrae(state) {
    this.hasDubrae = state !== undefined ? state : !this.hasDubrae;
    this.emit('visualizerUpdated');
  }

  // Waitlist Management
  saveWaitlistEntry(entry) {
    try {
      const existing = JSON.parse(localStorage.getItem('kdm_waitlist') || '[]');
      const newEntry = {
        id: 'KDM-W-' + Math.floor(1000 + Math.random() * 9000),
        name: entry.name || '',
        email: entry.email || '',
        sneaker: entry.sneaker || '',
        createdAt: new Date().toISOString()
      };
      existing.push(newEntry);
      localStorage.setItem('kdm_waitlist', JSON.stringify(existing));
      return newEntry;
    } catch (e) {
      console.warn('Could not save waitlist entry', e);
      return { id: 'KDM-W-' + Math.floor(1000 + Math.random() * 9000), ...entry };
    }
  }

  getWaitlistEntries() {
    try {
      return JSON.parse(localStorage.getItem('kdm_waitlist') || '[]');
    } catch (e) {
      return [];
    }
  }
}

export const store = new Store();
