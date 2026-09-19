import { defineConfig } from 'vite';

export default defineConfig({
  // ── Dev Server ─────────────────────────────────────────
  server: {
    port: 5173,
    open: false,
    host: true,
  },

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

