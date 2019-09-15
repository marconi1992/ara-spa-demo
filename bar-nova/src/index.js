import { load, Vue, mountComponent, loadById } from 'hypernova-vue'
import Example from './components/Example.vue'

const render = (name, { node, data }) => {
  if (name === 'Bar') {
    return mountComponent(Vue.extend(Example), node, data)
  }
}

document.addEventListener('NovaMount', ({ detail }) => {
  const { name, id } = detail

  const payload = loadById(name, id)

  if (payload) {
    render(name, payload)
  }
})

load('Bar').forEach(render.bind(null, 'Bar'))
