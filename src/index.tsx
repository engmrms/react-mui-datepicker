import React from "react";
import ReactDOM from "react-dom/client";

import { DatePicker } from "./DatePicker";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <DatePicker name={"datepicker"} />
  </React.StrictMode>
);
