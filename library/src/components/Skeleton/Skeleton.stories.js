import React from 'react';
import Skeleton from './Skeleton';

export default {
  title: 'Components/Skeleton',
  component: Skeleton,
  argTypes: { 
      numberOfChildren: {type: "number", defaultValue: 1}
  }
};

const Template = ({numberOfChildren, ...args}) => {
    let arr = [];
    arr.length = numberOfChildren;
    return arr.fill(<Skeleton {...args}/>)
};


// export const Something = () => <NewSkeleton width="15px" height = "10px" borderRadius = "50%" />

export const Default = Template.bind({});
Default.args = {
    width: 150,
    height: 150,
}

export const Narrow = Template.bind({});
Narrow.args = {
    width: 300,
    height: 15,
    borderRadius: 5,
};

export const Multiple = Template.bind({});
Multiple.args = {
    width: 300,
    height: 15,
    borderRadius: 5,
    numberOfChildren: 5
}

export const BorderRadius = Template.bind({});
BorderRadius.args = {
    width: 150,
    height: 150,
    borderRadius: 50,
}

