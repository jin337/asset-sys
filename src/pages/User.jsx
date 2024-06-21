import {} from 'react'
import { useNavigate } from 'react-router-dom'
import { Col, Row, Typography, Button, Card, Form, Table,Dropdown } from '@douyinfe/semi-ui'
import { IconPlus, IconSearch,IconMore } from '@douyinfe/semi-icons'

const User = () => {
  const navigate = useNavigate()
  const columns = [
    {
      title: '用户账户',
      dataIndex: 'owner'
    },
    {
      title: '用户名',
      dataIndex: 'name1'
    },
    {
      title: '角色',
      dataIndex: 'name2',
      render: (text) => {
        return <div  className='ml-6 text-sm text-blue-500 font-bold cursor-pointer' onClick={() => navigate('/user')}>{text}</div>
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
        return <Dropdown
          position="bottomRight"
          render={
            <Dropdown.Menu>
              <Dropdown.Item>编辑</Dropdown.Item>
              <Dropdown.Item>删除</Dropdown.Item>
            </Dropdown.Menu>
          }
        >
          <IconMore />
        </Dropdown>
      }
    }
  ]
  const data = [
    {
      key: '1',
      owner: 'admin',
      name1: '张三',
      name2: '管理员',
      name3: '正常'
    },
    {
      key: '2',
      owner: 'BZ1002',
      name1: '管理员',
      name2: '资管员',
      name3: '正常'
    }
  ]
  const pagination = {
    total: 90,
    showTotal:true
  }

  return (
    <div className="m-5">
      <Row>
        <Col span={12}>
          <Typography.Title heading={3}>用户管理</Typography.Title>
        </Col>
        <Col span={12} className="text-right">
          <Button
            icon={<IconPlus />}
            theme='solid'
            aria-label='新增用户'
          >
            新增用户
          </Button>
        </Col>
      </Row>

      <Card bordered={false} className="mt-5">
        <Form layout='horizontal'>
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
    </div>
  )
}
export default User
