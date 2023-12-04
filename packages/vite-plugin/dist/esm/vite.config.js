import { join } from "path";
import { tamaguiPlugin } from "@tamagui/vite-plugin";
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
const reactNative = require("vitest-react-native");
var vite_config_default = defineConfig({
  plugins: [
    // viteCommonjs(),
    process.env.DISABLE_REACT_NATIVE ? null : reactNative(),
    react({}),
    tamaguiPlugin({
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
  ...!process.env.DISABLE_NATIVE_TEST && !1,
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
    setupFiles: [join(__dirname, "test-setup.ts")],
    // happy-dom has issues with components-test
    environment: process.env.TEST_ENVIRONMENT || "happy-dom",
    include: ["**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    deps: {
      inline: [/^(?!.*vitest).*$/, "react-native"]
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=vite.config.js.map
