import Navigation from './Navigation';
import { BrowserRouter as Router } from 'react-router-dom';

export default {
  title: 'Componenets/organisms/Navigation',
  component: Navigation,
};

const Template = (args) => (
  <Router>
    <Navigation {...args} />
  </Router>
);

export const Default = Template.bind({});
Default.args = {
  isLong: false,
};
