import MoanElTable from './components/MoanElTable/index.jsx'

const components = [MoanElTable]

const install = Vue => {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

const plugin = {
  install
}

let GlobalVue = null
if (typeof window !== 'undefined') {
  GlobalVue = window.Vue
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue
}
if (GlobalVue) {
  GlobalVue.use(plugin)
}

export default MoanElTable
