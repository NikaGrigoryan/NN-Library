import Card from "./Card";

export default{
    title: 'Components/Card',
    component: Card
}

const Template = (args) => <Card {...args} />;

export const Default = Template.bind({});
export const Dark = Template.bind({});
Dark.args={
    backgroundColor: '#001222',
    color: '#c9c9c9'
}
