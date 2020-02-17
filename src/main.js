import Vue from 'vue'
import App from './App'
import router from '@/router'
import store from '@/store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import i18n from '@/locale'
import config from '@/config'
import importDirective from '@/directive'
import { directive as clickOutside } from 'element-ui/src/utils/clickoutside'
import installPlugin from '@/plugin'
import './index.less'
// 实际打包时应该不引入mock
/* eslint-disable */
if (process.env.NODE_ENV !== 'production') require('@/mock')

// Vue.use(ElementUI);
Vue.use(ElementUI, {
  i18n: (key, value) => i18n.t(key, value)
})
Vue.config.productionTip = false;

/**
 * @description 全局注册应用配置
 */
Vue.prototype.$config = config
/**
 * @description 注册ElementUI内置插件
 */
installPlugin(Vue)
/**
 * 注册指令
 */
importDirective(Vue)
Vue.directive('clickOutside', clickOutside)

new Vue({
  render: h => h(App),
  router,
  i18n,
  store,
}).$mount('#app')
