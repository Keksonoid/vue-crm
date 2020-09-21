import locaizeFilter from '@/filters/localize.filter'

export default {
  install(Vue) {
    Vue.prototype.$title = function(titleKey) {
      const appName = 'Kirill CRM'
      return `${locaizeFilter(titleKey)} | ${appName}`
    }
  }
}
