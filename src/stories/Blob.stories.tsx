import { Meta, Story } from "@storybook/react/types-6-0";
import React from "react";
import styled from "styled-components";
import { Blob } from "../components/Blob";
import { IBodyProps } from "../components/common/types";

export default {
  title: "Characters/Blob",
  component: Blob,
  argTypes: {
    color: {
      control: {
        type: "inline-radio",
        options: ["blue", "brown", "pink", "green", "yellow", "red"],
      },
    },
    expression: {
      control: {
        type: "inline-radio",
        options: [
          "happy",
          "sad",
          "angry",
          "awestruck",
          "indifferent",
          "surprised",
          "embarrassed",
          "worried",
        ],
      },
    },
  },
} as Meta;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Template: Story = (args) => (
  <Wrapper>
    <Blob {...(args as IBodyProps)} />
  </Wrapper>
);

export const DefaultBlob = Template.bind({});
DefaultBlob.args = {
  expression: "happy",
  isAnimated: false,
  color: "blue",
};

export const CustomBlob = Template.bind({});
CustomBlob.args = {
  expression: "happy",
  isAnimated: false,
  customStyle: {
    stroke: "#000000",
    fill: "#FFFFFF",
  },
};
