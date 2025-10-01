import type { Meta, StoryObj } from "@storybook/react";
import { DatePicker } from "..";
import "../style.css";
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
    calendar: {
      options: ["gregorian", "hijri"],
      control: { type: "radio" },
    },
    lang: {
      options: ["en", "ar"],
      control: { type: "radio" },
    },
    switchText: { control: "text", if: { arg: "isToggle", truthy: true } },
  },
} satisfies Meta<typeof DatePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    isToggle: true,
    disabled: false,
    calendar: "hijri",
    lang: "ar",
    switchText: "switch calendar",
  },
};
//
