import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import {VitePWA} from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        VitePWA({
                registerType: 'autoUpdate',
                devOptions: {enabled: true},
                manifest: {
                    "name": "SimonSays",
                    "short_name": "SimonSays",
                    "start_url": ".",
                    "scope": ".",
                    "display": "standalone",
                    "background_color": "#fff",
                    "theme_color": "#fff",
                    "description": "The best Simon Says game.",
                }
            }
        )],
})
