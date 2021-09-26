import { reactive, defineComponent } from 'vue'
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
        </div>
      )
    }
  },
})
