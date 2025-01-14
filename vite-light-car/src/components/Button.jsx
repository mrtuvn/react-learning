"use client";

import React from "react";
import { cva } from "class-variance-authority";

const button = cva("button", {
  variants: {
    intent: {
      primary: ["bg-blue-500", "text-white", "border-transparent"],
      secondary: ["bg-white", "text-gray-800", "border-gray-400"],
    },
    size: {
      small: ["text-sm", "py-1", "px-2"],
      medium: ["text-base", "py-2", "px-4"],
    },
    disabled: {
      false: null,
      true: ["opacity-50", "cursor-not-allowed"],
    },
  },
  compoundVariants: [
    {
      intent: "primary",
      disabled: false,
      class: "hover:bg-blue-600",
    },
    {
      intent: "secondary",
      disabled: false,
      class: "hover:bg-gray-100",
    },
    { intent: "primary", size: "medium", class: "uppercase" },
  ],
  defaultVariants: {
    disabled: false,
    intent: "primary",
    size: "medium",
  },
});

export const Button = ({ className, intent, size, disabled, ...props }) => (
  <button
    className={button({ intent, size, disabled, className })}
    disabled={disabled || undefined}
    {...props}
  />
);
export default Button;
