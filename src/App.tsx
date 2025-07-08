import { Button, Flex, Form, Input, List, notification } from 'antd'
import Title from 'antd/es/typography/Title'
import { useSelectorAddFn, useSelectorTodos } from './hooks'
const { TextArea } = Input

type FieldType = {
  title?: string
  description?: string
}

export type TodoItem = {
  id: number
  title: string
  description: string
}

function App() {
  const [form] = Form.useForm()
  // const { todos, add } = useStore((state) => state)
  const { todos } = useSelectorTodos()
  const { add } = useSelectorAddFn()
  const [api, contextHolder] = notification.useNotification()

  return (
    <Flex
      justify="center"
      align="center"
      style={{ width: '100vw', height: '100vh' }}
      vertical
      gap={20}
    >
      {contextHolder}

      <Form
        form={form}
        layout="vertical"
        style={{
          border: '2px solid grey',
          padding: '12px',
          borderRadius: '12px',
          width: '400px',
        }}
        onFinish={(e) => {
          add({ ...e, id: todos.length + 1 })
          form.resetFields()
          api.success({ message: 'Your todo success created' })
        }}
      >
        <Form.Item<FieldType>
          label="Title"
          name="title"
          rules={[{ required: true, message: 'Please input title!' }]}
        >
          <Input allowClear />
        </Form.Item>

        <Form.Item<FieldType>
          label="Description"
          name="description"
          rules={[{ required: true, message: 'Please input description!' }]}
        >
          <TextArea allowClear />
        </Form.Item>

        <Form.Item label={null}>
          <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
            Submit
          </Button>
        </Form.Item>
      </Form>

      <List
        size="small"
        header={<div>Todos</div>}
        footer={null}
        bordered
        dataSource={todos}
        style={{ width: '400px' }}
        renderItem={(item) => (
          <List.Item key={item.id}>
            <Flex gap={10} align="center" style={{ width: '100%' }}>
              <Title level={5} style={{ margin: 0 }}>
                {item.id + 1}
              </Title>
              -{' '}
              <Title level={4} style={{ margin: 0 }}>
                {item.title}
              </Title>
              <Flex gap={10} style={{ marginLeft: 'auto' }}>
                <Button>Update</Button>
                <Button>Delete</Button>
              </Flex>
            </Flex>
          </List.Item>
        )}
      />
    </Flex>
  )
}

export default App
