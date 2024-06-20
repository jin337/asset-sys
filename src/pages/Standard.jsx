import { useState } from 'react'
import { Col, Row, Typography, Button, Card, Form, Table, Dropdown, Modal } from '@douyinfe/semi-ui'
import { IconPlus, IconSearch, IconMore } from '@douyinfe/semi-icons'

const Standard = () => {
  const [visible, setVisible] = useState(false)
  const columns = [
    {
      title: '标准编码',
      dataIndex: 'owner'
    },
    {
      title: '建设类型',
      dataIndex: 'name1'
    },
    {
      title: '标准名称',
      dataIndex: 'name2',
      render: (text) => {
        return <Typography.Text link={{ href: '/standard' }}>{text}</Typography.Text>
      }
    },
    {
      title: '状态',
      dataIndex: 'name3'
    },
    {
      title: '操作',
      dataIndex: 'operate',
      render: () => {
        return (
          <Dropdown
            position='bottomRight'
            render={
              <Dropdown.Menu>
                <Dropdown.Item onClick={() => setVisible(true)}>编辑</Dropdown.Item>
                <Dropdown.Item>删除</Dropdown.Item>
              </Dropdown.Menu>
            }
          >
            <IconMore />
          </Dropdown>
        )
      }
    }
  ]
  const data = [
    {
      key: '1',
      owner: 'BZ1001',
      name1: '市政基础设施/市政道路',
      name2: '市政道路标准1',
      name3: '已发布'
    },
    {
      key: '2',
      owner: 'BZ1002',
      name1: '载体办公设施建设',
      name2: '载体办公设施建标准1',
      name3: '待发布'
    }
  ]
  const pagination = {
    total: 90,
    showTotal: true
  }

  const handleOk = () => {
    setVisible(false)
    console.log('Ok button clicked')
  }
  const handleCancel = () => {
    setVisible(false)
    console.log('Cancel button clicked')
  }
  const handleAfterClose = () => {
    console.log('After Close callback executed')
  }

  return (
    <div className="m-5">
      <Row>
        <Col span={12}>
          <div className='flex items-center'>
            <Typography.Title heading={3}>标准管理</Typography.Title>
            <div  className='ml-6 text-base text-blue-500 font-bold'>全部标准（2）</div>
          </div>
        </Col>
        <Col span={12} className="text-right">
          <Button
            icon={<IconPlus />}
            theme='solid'
            aria-label='新建标准'
            onClick={() => setVisible(true)}
          >
            新建标准
          </Button>
        </Col>
      </Row>

      <Card bordered={false} className="mt-5">
        <Form
          layout='horizontal'
          labelPosition='inset'
        >
          <Form.Select
            field='Role1'
            label='建设类型'
            showClear
            style={{ width: 160 }}
          >
            <Form.Select.Option value='admin'>市政基础设施</Form.Select.Option>
            <Form.Select.Option value='admin1'>市政道路</Form.Select.Option>
            <Form.Select.Option value='admin2'>载体办公设施建设</Form.Select.Option>
          </Form.Select>
          <Form.Input
            noLabel={true}
            suffix={<IconSearch />}
            field='key'
            placeholder='请输入关键字'
          />
        </Form>
        <Table
          className="mt-3"
          columns={columns}
          dataSource={data}
          pagination={pagination}
        />
      </Card>

      <Modal
        style={{ width: '800px' }}
        title='新建标准'
        visible={visible}
        onOk={handleOk}
        afterClose={handleAfterClose}
        onCancel={handleCancel}
        closeOnEsc={true}
        okText='确认'
        cancelText='取消'
      >
        <Form
          labelPosition='left'
          labelAlign='left'
          labelWidth='120px'
        >
          <Form.Input
            field='key'
            label='标准编码'
            placeholder='输入'
            rules={[{ required: true, message: 'required error' }]}
          />
          <Form.Input
            field='key1'
            label='标准名称'
            placeholder='输入'
            rules={[{ required: true, message: 'required error' }]}
          />
          <Form.Select
            field='Role'
            label='建设类型'
            style={{ width: '100%' }}
            showClear
            rules={[{ required: true, message: 'required error' }]}
          >
            <Form.Select.Option value='admin'>1</Form.Select.Option>
            <Form.Select.Option value='admin1'>2</Form.Select.Option>
          </Form.Select>
          <Form.TextArea
            field='key1'
            label='备注'
          />
        </Form>
      </Modal>
    </div>
  )
}
export default Standard
