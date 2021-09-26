import { reactive, defineComponent } from 'vue'
import HelloWorld from './components/HelloWorld'
const img = require('./assets/logo.png') // eslint-disable-line

export default defineComponent({
  setup() {
    const state = reactive({
      name: 'gxy',
    })
    return () => {
      // 这里可以继续写一些逻辑
      return (
        <div id="app">
          <img src={img} alt="Vue logo" />
          <p>{state.name}</p>
          <HelloWorld age={12} />
          <input v-model={state.name} />
        </div>
      )
    }
  },
})
