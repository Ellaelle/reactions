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
  
  const Template: Story = (args) => <Blob />;
  
  export const BlobExample = Template.bind({});