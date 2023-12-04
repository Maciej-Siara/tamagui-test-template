var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);
var vite_config_exports = {};
__export(vite_config_exports, {
  default: () => vite_config_default
});
module.exports = __toCommonJS(vite_config_exports);
var import_path = require("path"), import_vite_plugin = require("@tamagui/vite-plugin"), import_plugin_react_swc = __toESM(require("@vitejs/plugin-react-swc")), import_vite = require("vite");
const reactNative = require("vitest-react-native");
var vite_config_default = (0, import_vite.defineConfig)({
  plugins: [
    // viteCommonjs(),
    process.env.DISABLE_REACT_NATIVE ? null : reactNative(),
    (0, import_plugin_react_swc.default)({}),
    (0, import_vite_plugin.tamaguiPlugin)({
      components: ["tamagui"],
      config: "./tamagui.config.ts",
      disableWatchTamaguiConfig: !0
    })
  ].filter(Boolean),
  // optimizeDeps: {
  //   esbuildOptions: {
  //     plugins: [esbuildCommonjs(['@tamagui/core'])],
  //   },
  // },
  ...!process.env.DISABLE_NATIVE_TEST && !0 && {
    resolve: {
      alias: {
        "@tamagui/core": require.resolve("@tamagui/core/native-test"),
        "@tamagui/web": require.resolve("@tamagui/core/native-test")
      }
    }
  },
  resolve: {
    alias: {
      "react-native": "react-native-web"
    }
  },
  test: {
    alias: {
      "react-native": "react-native-web"
    },
    // for compat with some jest libs (like @testing-library/jest-dom)
    globals: !0,
    setupFiles: [(0, import_path.join)(__dirname, "test-setup.ts")],
    // happy-dom has issues with components-test
    environment: process.env.TEST_ENVIRONMENT || "happy-dom",
    include: ["**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    deps: {
      inline: [/^(?!.*vitest).*$/, "react-native"]
    }
  }
});
//# sourceMappingURL=vite.config.js.map
