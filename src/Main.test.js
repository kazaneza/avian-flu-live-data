/* eslint-disable no-unused-vars */
import { Provider } from "react-redux";
import { RouterProvider } from "react-router";
import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import store from "./redux/store";
import { router } from "./App";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ContactPage from "./pages/ContactPage";
import { getCountriesData } from "./redux/countriesSlice";

describe("Header component", () => {
  test("should have 'Space Travelers Hub' text", () => {
    render(
      <Provider store={store}>
        <RouterProvider router={router}>
          <Header />
        </RouterProvider>
      </Provider>
    );

    const ele = screen.getByText("Home");
    expect(ele).toBeInTheDocument();
  });
});

describe("Contact component", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <RouterProvider router={router}>
            <ContactPage />
          </RouterProvider>
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe("Countries reducer", () => {
  it("should return an array ", async () => {
    const arr = getCountriesData;
    expect(arr.length).toBe(1);
  });
});
