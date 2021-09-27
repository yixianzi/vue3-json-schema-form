import { reactive, defineComponent, ref, Ref } from 'vue'

import MonacoEditor from './components/MonacoEditor'
import { createUseStyles } from 'vue-jss'

const useStyles = createUseStyles({
  editor: {
    minHeight: 400,
  },
})

function toJson(data: any) {
  return JSON.stringify(data, null, 2) // 第三个参数是定义换行和tab的格数
}

const schema = {
  type: 'string',
}

export default defineComponent({
  setup() {
    const schemaRef: Ref<any> = ref(schema)

    const handleCodeChange = (code: string) => {
      let schema: any
      try {
        schema = JSON.parse(code)
      } catch (err) {
        console.log(err)
      }
      schemaRef.value = schema
    }

    const classesRef = useStyles()

    return () => {
      const classes = classesRef.value
      const code = toJson(schemaRef.value)
      return (
        <div>
          <MonacoEditor
            code={code}
            onChange={handleCodeChange}
            title="Schema"
            class={classes.editor}
          />
        </div>
      )
    }
  },
})
