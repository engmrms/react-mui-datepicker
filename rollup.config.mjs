//import sass from 'rollup-plugin-sass'


import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import { terser } from "rollup-plugin-terser";
import typescript from "rollup-plugin-typescript2";

import dts from 'rollup-plugin-dts';

//import typescript from 'rollup-plugin-typescript2';

import packageJson from './package.json' assert { type: "json" };


export default [
  {
    input: "src/index.tsx",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript({ useTsconfigDeclarationDir: true,tsconfigOverride:{
        exclude:["src/stories/*"]
      } }),
      terser(),
    ],
    external: ["react", "react-dom"],
  },
  {
    input: "src/index.tsx",
    output: [{ file: "dist/esm/index.d.ts", format: "es" }],
    plugins: [dts.default()],
  },

];


// export default {
//   input: 'src/index.tsx',
//   output: [
//     {
//       file: pkg.main,
//       format: 'cjs',
//       exports: 'named',
//       sourcemap: true,
//       strict: false
//     }
//   ],
//   plugins: [
//     // sass({ insert: true }),
//     typescript({ objectHashIgnoreUnknownHack: true })
//   ],
//   external: ['react', 'react-dom']
// }