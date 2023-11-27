import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src/'),
      'routes': `${path.resolve(__dirname, './src/routes/')}`,
      'layouts': `${path.resolve(__dirname, './src/layouts/')}`,
      'pages': `${path.resolve(__dirname, './src/pages/')}`,
      'hooks': `${path.resolve(__dirname, './src/hooks/')}`,
      'components': `${path.resolve(__dirname, './src/components/')}`,
      'styles': `${path.resolve(__dirname, './src/styles/')}`,
    },
  },
})
