import { screen } from "@testing-library/react";

import { renderWithProviders } from "@/test";
import { NotFoundPage } from "../NotFoundPage";

describe("NotFoundPage", () => {
  it("renders the page title", () => {
    const { asFragment } = renderWithProviders(<NotFoundPage />);

    expect(
      screen.getByRole("heading", {
        name: "Error: Not Found - 404",
      }),
    ).toBeInTheDocument();

    expect(asFragment()).toMatchSnapshot();
  });
});
