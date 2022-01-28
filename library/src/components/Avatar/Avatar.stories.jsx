import React from 'react';

import Avatar from '../modules/Avatar';



export default {
  title: 'Example/Avatar',
  component: Avatar,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => (<Avatar {...args} />);

export const Default = Template.bind({});
Default.args = {
  size: "small",
  name: "Test"
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
  imageUrl: "https://yt3.ggpht.com/yti/ANoDKi5rRmeMmSKVg6nhQu115WOLG7PY3O6z7jPISMwO=s88-c-k-c0x00ffffff-no-rj-mo",
  name: "Adarsh"
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
  imageUrl: "https://avatars2.githubusercontent.com/u/49054080?v=4",
  name: "Test"
};
