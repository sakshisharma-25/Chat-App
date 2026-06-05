import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    port: 3000,
    proxy: {
      "/api": {
        target: "http://127.0.0.1:5000", // Aapka backend port
        changeOrigin: true,
        secure: false,
        // 🔴 COOKIES BREAKING FIX: Yeh lines cookies ko block nahi hone dengi
        configure: (proxy, _options) => {
          proxy.on('proxyReq', (proxyReq, req, _res) => {
            if (req.headers.cookie) {
              proxyReq.setHeader('cookie', req.headers.cookie);
            }
          });
        }
      }
    }
  },
});

// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// import tailwindcss from '@tailwindcss/vite'
// 
// export default defineConfig({
//   plugins: [react(), tailwindcss()],
//   server: {
//     port: 3000, 
//     proxy: {
//       "/api": {
//         target: "http://localhost:5000", 
//         changeOrigin: true,         
//         secure: false,
//       }
//     }
//   },
// });