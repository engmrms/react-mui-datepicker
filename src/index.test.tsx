import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";

import moment from "moment";
import { DatePicker } from ".";

describe("Running Test for DatePicker", () => {
  test("Check DatePicker has Toggle", () => {
    render(<DatePicker isToggle />);
    expect(screen.getByRole("checkbox")).toBeInTheDocument();
  });

  test("Check DatePicker has Toggle", () => {
    const { getByRole } = render(<DatePicker isToggle />);
    const toggleInput = getByRole("checkbox");
    fireEvent.click(toggleInput);

    expect(moment.locale()).toBe("ar-sa");
  });
});
