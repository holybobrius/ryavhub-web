import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'
import * as path from "path";
import svgr from "vite-plugin-svgr";
import vitePluginRequire from "vite-plugin-require";

export default defineConfig({
    root: 'src',
    build: {
        // Relative to the root
        outDir: '../build',
    },
    resolve: {
        alias: {
            src: path.resolve(__dirname, 'src'),
        }
    },
    plugins: [
        react({
            // Use React plugin in all *.jsx and *.tsx files
            include: '**/*.{jsx,tsx}',
        }),
        svgr(),
        // @ts-ignore
        vitePluginRequire.default()
    ]
});