import { defineConfig } from 'vite';
import viteImagemin from 'vite-plugin-imagemin';

export default defineConfig({
  // ── Dev Server ─────────────────────────────────────────
  server: {
    port: 5173,
    open: false,
    host: true,
  },

  // ── Plugins ────────────────────────────────────────────
  plugins: [
    viteImagemin({
      // JPEG: mozjpeg — industry-standard, ~60-70% smaller
      mozjpeg: { quality: 75, progressive: true },
      // PNG: pngquant lossy first, then optipng lossless
      pngquant: { quality: [0.65, 0.8], speed: 4 },
      optipng:  { optimizationLevel: 5 },
      // SVG: svgo with safe defaults
      svgo: {
        plugins: [
          { name: 'removeViewBox', active: false },
          { name: 'removeEmptyAttrs', active: true },
        ],
      },
      // GIF passthrough (not used here)
      gifsicle: { optimizationLevel: 2 },
    }),
  ],

  // ── Production Build ───────────────────────────────────
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    assetsInlineLimit: 4096,
    cssCodeSplit: true,
    sourcemap: false,
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) return 'vendor';
        },
        entryFileNames: 'assets/[name]-[hash].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash][extname]',
      },
    },
  },

  // ── Preview ────────────────────────────────────────────
  preview: {
    port: 4173,
    host: true,
  },
});

