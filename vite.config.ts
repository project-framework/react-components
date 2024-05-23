import { defineConfig /* , ConfigEnv */ } from 'vite';
import { resolve } from 'path';
import react from '@vitejs/plugin-react';

export default defineConfig((/* mode: ConfigEnv */) => {
    return {
        resolve: {
            alias: {
                '@': resolve(__dirname, './src'),
            },
        },
        plugins: [react()],
    };
});
