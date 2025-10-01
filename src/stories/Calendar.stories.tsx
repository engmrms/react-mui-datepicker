import type { Meta, StoryObj } from "@storybook/react";
import React, { useState } from "react";
import { Calendar } from "..";
import "../style.css";

const meta: Meta<typeof Calendar> = {
  title: "Example/Calendar",
  component: Calendar,
  parameters: {
    layout: "centered",
    controls: { sort: "requiredFirst" },
    Primary: true,
  },

  tags: ["autodocs"],

  argTypes: {
    lang: {
      options: ["en", "ar"],
      control: { type: "radio" },
    },
  },
} satisfies Meta<typeof Calendar>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    selected: new Date(),
    minDate: new Date("1938-01-01"),
    maxDate: new Date("2075-12-31"),

    locale: "hijri",
    lang: "ar",
  },
  render: (args) => {
    const [selected, setSelected] = useState<Date | null | undefined>(args.selected);
    return <Calendar {...args} selected={selected} onChange={(date) => setSelected(date)} />;
  },
};
//
