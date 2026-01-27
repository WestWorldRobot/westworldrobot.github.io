// @ts-check
import { defineConfig } from 'astro/config';
import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://astro.build/config
export default defineConfig({
    site: "https://westworldrobot.github.io",
    base: '/',
    publicDir: path.join(__dirname, 'public'),
    vite: {
        publicDir: path.join(__dirname, 'public'),
        server: {
            fs: {
                strict: false,
                allow: [__dirname, path.join(__dirname, 'public')],
            },
        },
    },
});
