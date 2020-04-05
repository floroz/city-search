import React from "react";
import { Provider } from "react-redux";
import { render } from "@testing-library/react";
import App from "./App";
import { store } from "./redux/store";

describe("<App />", () => {
  test("should render without error", () => {
    const { container } = render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    expect(container).toBeTruthy();
  });
});
