import { Meta, StoryObj } from '@storybook/react';

import Text from './Text';

const meta: Meta<typeof Text> = {
  title: 'Common/Text',
  component: Text,
  tags: ['autodocs'],
};

type Story = StoryObj<typeof Text>;

export default meta;

export const Normal: Story = {};
