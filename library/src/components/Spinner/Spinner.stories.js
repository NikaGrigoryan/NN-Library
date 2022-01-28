import { DarkBackground } from './styledSpinner';
import Spinner from './Spinner';

export default {
  title: 'Components/Spinner',
  component: Spinner,
};

const Template = (args) => <Spinner {...args} />;

export const Default = Template.bind({});
Default.args = {
    size: 50
}

export const Light = () => (
  <DarkBackground>
    <Spinner size={50} light />
  </DarkBackground>
)