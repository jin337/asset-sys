import { useState } from 'react'
import { Col, Row, Typography, Button, Card, Form, Table, Dropdown, Modal } from '@douyinfe/semi-ui'
import { IconPlus, IconSearch, IconMore } from '@douyinfe/semi-icons'

const Project = () => {
  const [visible, setVisible] = useState(false)
  const columns = [
    {
      title: '项目编码',
      dataIndex: 'owner'
    },
    {
      title: '项目名称',
      dataIndex: 'name1',
      render: (text) => {
        return <Typography.Text link={{ href: '/project-dashboard/overview' }}>{text}</Typography.Text>
      }
    },
    {
      title: '类型',
      dataIndex: 'name2'
    },
    {
      title: '建设方式',
      dataIndex: 'name3'
    },
    {
      title: '建设类型',
      dataIndex: 'name4'
    },
    {
      title: '形象进度',
      dataIndex: 'name5'
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
                <Dropdown.Item>置顶</Dropdown.Item>
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
      owner: 'XM1001',
      name1: '纬六路、经十八路、恒竞路建设工程',
      name2: '新建',
      name3: '代建',
      name4: '市政基础设施/市政道路',
      name5: '开工建设'
    },
    {
      key: '2',
      owner: 'XM1002',
      name1: '尧辰路以东、栖霞大道以南地块配套新三路一期工程 ',
      name2: '续建',
      name3: '自建',
      name4: '载体办公设施建设',
      name5: '已完工'
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
            <Typography.Title heading={3}>项目管理</Typography.Title>
            <div  className='ml-6 text-base text-blue-500 font-bold'>全部项目（2）</div>
          </div>
        </Col>
        <Col span={12} className="text-right">
          <Button
            icon={<IconPlus />}
            theme='solid'
            aria-label='新建项目'
            onClick={() => setVisible(true)}
          >
            新建项目
          </Button>
        </Col>
      </Row>

      <Card bordered={false} className="mt-5">
        <Form
          layout='horizontal'
          labelPosition='inset'
        >
          <Form.Select
            field='Role'
            label='类别'
            showClear
            style={{ width: 160 }}
          >
            <Form.Select.Option value='admin'>新建</Form.Select.Option>
            <Form.Select.Option value='admin1'>续建</Form.Select.Option>
          </Form.Select>
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
          <Form.Select
            field='Role2'
            label='建设方式'
            showClear
            style={{ width: 160 }}
          >
            <Form.Select.Option value='admin'>代建</Form.Select.Option>
            <Form.Select.Option value='admin1'>自建</Form.Select.Option>
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
        title='项目信息'
        visible={visible}
        onOk={handleOk}
        afterClose={handleAfterClose}
        onCancel={handleCancel}
        closeOnEsc={true}
        okText='提交'
        cancelText='取消'
      >
        <Form
          labelPosition='left'
          labelAlign='left'
          labelWidth='120px'
        >
          <Form.Input
            field='key'
            label='项目编码'
            placeholder='输入'
            showClear
            rules={[{ required: true, message: 'required error' }]}
          />
          <Form.Input
            field='key1'
            label='项目名称'
            placeholder='输入'
            showClear
            rules={[{ required: true, message: 'required error' }]}
          />
          <Row>
            <Col span={11}>
              <Form.Select
                field='Role'
                label='项目类别'
                showClear
                style={{ width: '100%' }}
                rules={[{ required: true, message: 'required error' }]}
              >
                <Form.Select.Option value='admin'>1</Form.Select.Option>
                <Form.Select.Option value='admin1'>2</Form.Select.Option>
              </Form.Select>
            </Col>
            <Col span={11} offset={2}>
              <Form.Select
                field='Role2'
                label='建设方式'
                showClear
                style={{ width: '100%' }}
                rules={[{ required: true, message: 'required error' }]}
              >
                <Form.Select.Option value='admin'>1</Form.Select.Option>
                <Form.Select.Option value='admin1'>2</Form.Select.Option>
              </Form.Select>
            </Col>
          </Row>
          <Row>
            <Col span={11}>
              <Form.Select
                field='Role'
                label='建设类型'
                showClear
                style={{ width: '100%' }}
                rules={[{ required: true, message: 'required error' }]}
              >
                <Form.Select.Option value='admin'>1</Form.Select.Option>
                <Form.Select.Option value='admin1'>2</Form.Select.Option>
              </Form.Select>
            </Col>
            <Col span={11} offset={2}>
              <Form.Select
                field='Role2'
                label='优先级'
                showClear
                style={{ width: '100%' }}
                rules={[{ required: true, message: 'required error' }]}
              >
                <Form.Select.Option value='admin'>1</Form.Select.Option>
                <Form.Select.Option value='admin1'>2</Form.Select.Option>
              </Form.Select>
            </Col>
          </Row>
          <Row>
            <Col span={11}>
              <Form.Select
                field='Role'
                showClear
                label='关联主项目'
                style={{ width: '100%' }}
              >
                <Form.Select.Option value='admin'>1</Form.Select.Option>
                <Form.Select.Option value='admin1'>2</Form.Select.Option>
              </Form.Select>
            </Col>
            <Col span={11} offset={2}>
              <Form.Select
                field='Role2'
                label='负责人'
                style={{ width: '100%' }}
                showClear
                rules={[{ required: true, message: 'required error' }]}
              >
                <Form.Select.Option value='admin'>1</Form.Select.Option>
                <Form.Select.Option value='admin1'>2</Form.Select.Option>
              </Form.Select>
            </Col>
          </Row>
          <Row>
            <Col span={11}>
              <Form.DatePicker
                type="monthRange"
                field='Role'
                label='建设年限'
                style={{ width: '100%' }}
              ></Form.DatePicker>
            </Col>
            <Col span={11} offset={2}>
              <Form.DatePicker
                type="month"
                field='Role2'
                label='计划开工时间'
                style={{ width: '100%' }}
              ></Form.DatePicker>
            </Col>
          </Row>
          <Form.Input
            field='key1'
            label='建设地点'
            placeholder='输入'
            showClear
          />
          <Form.TextArea
            field='key1'
            showClear
            label='规模及内容描述'
            placeholder='请输入内容'
          />
        </Form>
      </Modal>
    </div>
  )
}
export default Project
