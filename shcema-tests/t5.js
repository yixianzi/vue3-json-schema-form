// eslint-disable-next-line @typescript-eslint/no-var-requires
const Ajv = require('ajv')
// eslint-disable-next-line @typescript-eslint/no-var-requires
const localize = require('ajv-i18n')

// eslint-disable-next-line @typescript-eslint/no-var-requires
const ajv = new Ajv({ allErrors: true, jsonPointers: true }) // options can be passed, e.g. {allErrors: true}
// eslint-disable-next-line @typescript-eslint/no-var-requires
require('ajv-errors')(ajv /*, {singleError: true} */)

const schema = {
  type: 'object',
  properties: {
    foo: { type: 'integer' },
    bar: { type: 'string', test: '1', errorMessage: '这是不对的' },
  },
  required: ['foo'],
  additionalProperties: false,
}

ajv.addKeyword('test', {
  // validate(schema, data) {
  //   console.log(schema, data)
  //   // 判断条件，true通过，false不通过
  //   return true
  // },

  // compile(sch, parentSchema) {
  //   console.log(sch, parentSchema) // 可以拿到定义规则体parentSchema，但必须要返回一个函数

  //   return () => true
  // },

  // metaSchema: {
  //   // 类型
  //   type: 'string',
  // },
  macro() {
    return {
      minLength: 10, // 添加到原本上面
    }
  },
})

const data = {
  foo: 1,
  bar: 'haha',
}

const validate = ajv.compile(schema)
const valid = validate(data)
if (!valid) {
  localize.zh(validate.errors)
  console.log(validate.errors)
}
