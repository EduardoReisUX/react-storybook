import { Meta, StoryObj } from "@storybook/react";
import { TextInput, InputRootProps } from "./Input";
import { Envelope } from "phosphor-react";

export default {
  title: "Components/Input",
  component: TextInput.Root,
  args: {
    children: [
      <TextInput.Icon>
        <Envelope />
      </TextInput.Icon>,
      <TextInput.Input placeholder="Digite algo no campo" />,
    ],
  },
} as Meta<InputRootProps>;

export const Default: StoryObj<InputRootProps> = {
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
};
