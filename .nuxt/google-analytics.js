import Vue from 'vue'
import VueAnalytics from 'vue-analytics'

export default async function ({ app: { router } }) {
  const moduleOptions = {"track":"PageView","id":"UA-131152589-1"}
  Vue.use(VueAnalytics, Object.assign({ router }, moduleOptions))
}
