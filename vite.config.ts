import { copyFileSync, mkdirSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'

// Routes handled client-side by App.tsx. GitHub Pages has no SPA fallback that
// returns 200, so each route gets its own copy of index.html in the build.
const ROUTES = ['clicker/privacidade']

function staticRoutes(): Plugin {
  let outDir = 'dist'
  return {
    name: 'static-routes',
    apply: 'build',
    configResolved(config) {
      outDir = resolve(config.root, config.build.outDir)
    },
    closeBundle() {
      for (const route of ROUTES) {
        const target = resolve(outDir, route, 'index.html')
        mkdirSync(dirname(target), { recursive: true })
        copyFileSync(resolve(outDir, 'index.html'), target)
      }
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), staticRoutes()],
  // Absolute base so assets resolve from nested routes (site is served from the
  // root of the custom domain, see public/CNAME).
  base: '/',
})
