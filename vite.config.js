
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Replace '<REPOSITORY_NAME>' with the actual name of your repository
const repoName = '/news-website/'; 

export default defineConfig({
  plugins: [react()],
  // Set the base path for deployment
  base: process.env.NODE_ENV === 'production' ? repoName : '/',
  // OR, for a simpler fix that generally works:
  // base: './', 
});