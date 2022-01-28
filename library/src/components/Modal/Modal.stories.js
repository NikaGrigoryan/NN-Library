import Modal from "./Modal";

export default {
    title: "Components/Popup",
    component: Modal,
    argTypes:{
        closeModal: {action: 'closeModal'},
        continueModal: {action: 'continueModal'}
    }
}

const Template = (args) => <Modal {...args} />;

export const Dark = Template.bind({});

Dark.args = {
    backgroundColor: '#001222',
    color: 'white',   
    cancelBtnColor: "hsla(208, 100%, 17%, 1)",
    continueBtnColor: 'hsla(208, 21%, 46%, 1)',
}

export const Deafult = Template.bind({});