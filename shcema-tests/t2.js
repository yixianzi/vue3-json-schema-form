// eslint-disable-next-line @typescript-eslint/no-var-requires
const Ajv = require('ajv')

const ajv = new Ajv() // options can be passed, e.g. {allErrors: true}

const schema = {
  type: 'object',
  properties: {
    foo: { type: 'integer' },
    bar: { type: 'string', format: 'test' },
  },
  required: ['foo'],
  additionalProperties: false,
}

ajv.addFormat('test', (data) => {
  // 相当于加了一个validator，在上面就可以使用了
  console.log(data, '---------------')
  return data == 'haha'
})

const data = {
  foo: 1,
  bar: 'haha',
}

const validate = ajv.compile(schema)
const valid = validate(data)
if (!valid) console.log(validate.errors)
