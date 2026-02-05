import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // GitHub Pages 部署配置
  // 如果部署到 https://<USERNAME>.github.io/<REPO>/，需要设置 base
  // 如果部署到 https://<USERNAME>.github.io/，设置 base: '/'
  base: '/puremark-landing/',
})
