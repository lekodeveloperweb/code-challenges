import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import EnvironmentPlugin from "vite-plugin-environment"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    EnvironmentPlugin({
      GITHUB_API_URL: "https://api.github.com", //default value
      MOCK_API: "yes",
    }),
  ],
})
