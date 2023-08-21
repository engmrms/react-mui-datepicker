import type { Meta, StoryObj } from "@storybook/react";
import { DatePicker } from "..";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Example/DatePicker",
  component: DatePicker,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
    controls: { sort: "requiredFirst" },
    Primary: true,
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    maxDate: { control: "date" },
    calendar: {
      options: ["gregorian", "hijri"],
      control: { type: "radio" },
    },
    lang: {
      options: ["en", "ar"],
      control: { type: "radio" },
    },
    toggleText: { control: "text", if: { arg: "isToggle", truthy: true } },
  },
} satisfies Meta<typeof DatePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    isToggle: false,
    disabled: false,
    calendar: "gregrian",
    lang: "en",
    toggleText: "switch calendar",
    maxDate: new Date(),
    minDate: new Date(),
    toggleClassName: "",
    inputClassName: "",
  },
};
