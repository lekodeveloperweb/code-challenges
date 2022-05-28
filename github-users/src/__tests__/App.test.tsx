import { render } from "@testing-library/react"
import App from "../App"

describe("App.tsx", () => {
  test("should render a component", () => {
    const app = render(<App />)
    expect(app).toBeDefined()
  })
})
