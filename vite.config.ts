import { esbuildCommonjs } from "@originjs/vite-plugin-commonjs";
// import basicSsl from "@vitejs/plugin-basic-ssl";
import viteReact from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: "localhost",
    port: 3000,
    // https: true,
  },

  plugins: [viteReact()],
  // resolve: {
  //     alias: [
  //         { find: '~/Core', replacement: path.resolve(__dirname, './src/Core') },
  //         { find: '~/Models', replacement: path.resolve(__dirname, './src/Models') },
  //         { find: '~/API', replacement: path.resolve(__dirname, './src/API') },
  //         { find: '~/Assets', replacement: path.resolve(__dirname, './src/Assets') },
  //         { find: '~/Pages', replacement: path.resolve(__dirname, './src/Pages') },
  //         { find: '~/Locales', replacement: path.resolve(__dirname, './src/Locales') },
  //     ],
  // },
  optimizeDeps: {
    esbuildOptions: {
      plugins: [esbuildCommonjs(["moment-hijri"])],
    },
    include: ["moment-hijri"],
  },
  // test: {
  //   globals: true,
  // },
});
