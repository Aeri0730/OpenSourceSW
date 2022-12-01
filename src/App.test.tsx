import App from "./App";
import { render } from "@testing-library/react";

describe("App test", () => {
    it("should match snapshot", () => {
        render(<App />);
    });
});