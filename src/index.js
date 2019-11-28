import MoanElTable from './components/MoanElTable'

const components = [MoanElTable]

const install = Vue => {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
} else {
  console.error('Vue对象不存在')
}

export default {
  MoanElTable
}
