import Button from './button'
import Icon from './icon'
import Modal from './modal'
const plugins = [
    Button,
    Icon,
    Modal
];
const install = app => {
    plugins.forEach(plugin => app.use(plugin));
}
export default {
    install
}