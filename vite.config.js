import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: './index.html',
        signup: './sign-up.html',
        signin: './sign-in.html',
        activation: './activation.html',
        lost_password: './lost-password.html',
      },
    },
  },
});
