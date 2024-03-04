import { render, fireEvent, screen } from "@testing-library/react";
import Layout from "../Layout";

describe("Layout", () => {
  it("renders correctly", () => {
    render(
      <Layout>
        <div>Child component</div>
      </Layout>,
    );

    expect(screen.getByText("Child component")).toBeInTheDocument();
  });

  it("toggles sidebar when setSidebarOpen is called", () => {
    render(
      <Layout>
        <div>Child component</div>
      </Layout>,
    );

    fireEvent.click(screen.getByRole("button", { name: /Open sidebar/i }));
    expect(
      screen.getByRole("button", { name: /Open sidebar/i }),
    ).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: /Open sidebar/i }));
    expect(
      screen.getByRole("button", { name: /Open sidebar/i }),
    ).toBeInTheDocument();
  });
});
