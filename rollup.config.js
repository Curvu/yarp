import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import postcss from "rollup-plugin-postcss";
import dts from "rollup-plugin-dts";

export default [
  {
    input: "src/index.ts",
    output: [
      { file: "dist/index.js", format: "cjs", exports: "named" },
      { file: "dist/index.esm.js", format: "esm" }
    ],
    external: ["react", "react-dom"],
    plugins: [
      resolve(),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json" }),
      postcss({ extract: true, minimize: true, modules: true, use: ["sass"] }),
      {
        name: "inject-css-import",
        generateBundle(options, bundle) {
          for (const file of Object.values(bundle))
            if (file.type === "chunk" && file.isEntry)
              file.code = `import "./index.css";\n` + file.code;
        }
      }
    ]
  },
  {
    input: "dist/types/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "es" }],
    plugins: [dts()],
    external: [/\.scss$/] // Prevents SCSS import errors in .d.ts files
  }
];
