import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import {Blob} from '../components/Blob';

export default {
    title: 'Characters/Blob',
    component: Blob,
    argTypes: {
      backgroundColor: { control: 'color' },
    },
  } as Meta;
  
  const Template: Story = (args) => <Blob {...args}/>;
  
  export const HappyBlob = Template.bind({});
  HappyBlob.args = {
    expression: 'happy'
  };

  export const AwestruckBlob = Template.bind({});
  AwestruckBlob.args = {
    expression: 'awestruck'
  };

  export const SadBlob = Template.bind({});
  SadBlob.args = {
    expression: 'sad'
  };

  export const AngryBlob = Template.bind({});
  AngryBlob.args = {
    expression: 'angry'
  };