export { default as Test } from '../../components/ui/Test.vue'

export const LazyTest = import('../../components/ui/Test.vue' /* webpackChunkName: "components/ui/Test" */).then(c => c.default || c)
