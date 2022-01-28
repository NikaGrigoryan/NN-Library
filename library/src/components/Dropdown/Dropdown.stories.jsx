import React from 'react';

import Dropdown from './Dropdown';



export default {
  title: 'Example/Dropdown',
  component: Dropdown,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => (<Dropdown {...args} />);

export const Default = Template.bind({});
Default.args = {
  options: ['React', 'Vue', 'Angular'],
  value: 'Choose One',
  onSelected: () => {},
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
  options: ['React', 'Vue', 'Angular'],
  value: 'Choose One',
  onSelected: () => {},
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
  options: ['React', 'Vue', 'Angular'],
  value: 'Choose One',
  onSelected: () => {},
};
