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
    // Inline assets < 4 KB as base64 (fewer HTTP requests)
    assetsInlineLimit: 4096,
    // Enable CSS code-splitting per chunk
    cssCodeSplit: true,
    // Sourcemaps off in production (smaller deploy)
    sourcemap: false,
    // Raise the chunk-size warning threshold
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      output: {
        // Split vendor JS into its own cached chunk
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        },
        // Hashed filenames for long-term browser caching
        entryFileNames:  'assets/[name]-[hash].js',
        chunkFileNames:  'assets/[name]-[hash].js',
        assetFileNames:  'assets/[name]-[hash][extname]',
      },
    },
  },

  // ── Preview (local prod test) ──────────────────────────
  preview: {
    port: 4173,
    host: true,
  },
});
