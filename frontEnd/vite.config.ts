import { defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import path from 'path' 
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'

export default defineConfig({
  plugins: [vue(),tailwindcss(),    
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
     Components({
      resolvers: [ElementPlusResolver(),
        IconsResolver({
          enabledCollections: ['ep'], 
        }),
      ],
    }),
    Icons({
      autoInstall: true,
    }),
  ],  
  envDir: '../', 
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@A': path.resolve(__dirname,'./src/components/AtomicDesign') ,
      '@H': path.resolve(__dirname,'./src/components/Hooks') 
    },
  },
  
})





