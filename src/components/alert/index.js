import Alert from './src/Alert.vue';

Alert.install = function(Vue) {
  Vue.component(Alert.name, Alert);
};

export default Alert;