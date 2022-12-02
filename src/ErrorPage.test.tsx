import ErrorPage from "./ErrorPage";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import { cleanup, render } from "@testing-library/react";

describe("ErrorPage test", () => {
    const router = createMemoryRouter([
        {
            path: "/",
            element: <></>,
            errorElement: <ErrorPage />
        }
    ],
    {
        initialEntries: ["/", "/foo"],
        initialIndex: 1,
    }
    );
    
    it("should render", () => {
        render(<RouterProvider router={router} />);
    });

    it("should match snapshot", () => {
        const { container } = render(<RouterProvider router={router} />);
        expect(container).toMatchInlineSnapshot();
    });
});

afterAll(cleanup);