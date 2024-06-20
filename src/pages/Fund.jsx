import {} from 'react'
import { Typography, Row, Col, Card, Avatar, Button, Table } from '@douyinfe/semi-ui'
import { IconPlus } from '@douyinfe/semi-icons'
import { IconLayout, IconOverflow, IconTreeSelect } from '@douyinfe/semi-icons-lab'

const Fund = () => {
  const columns = [
    {
      title: '年度',
      dataIndex: 'name',
      render: (text, record, index) => {
        return index === 2 ? (
          <Typography.Text strong>{text}</Typography.Text>
        ) : (
          <Typography.Text link={{ href: '/dashboard/fund' }}>{text}</Typography.Text>
        )
      }
    },
    {
      title: '计划投资（万元）',
      children: [
        {
          title: '征地拆迁费用',
          dataIndex: 'name0',
          render: (text, record, index) => {
            return index === 2 ? <Typography.Text strong>{text}</Typography.Text> : text
          }
        },
        {
          title: '工程建设费用',
          dataIndex: 'name1',
          render: (text, record, index) => {
            return index === 2 ? <Typography.Text strong>{text}</Typography.Text> : text
          }
        }
      ]
    },
    {
      title: '投资构成（万元）',
      children: [
        {
          title: '市政投资',
          dataIndex: 'name2',
          render: (text, record, index) => {
            return index === 2 ? <Typography.Text strong>{text}</Typography.Text> : text
          }
        },
        {
          title: '开发区自筹',
          children: [
            {
              title: '财政局投资',
              dataIndex: 'name31',
              render: (text, record, index) => {
                return index === 2 ? <Typography.Text strong>{text}</Typography.Text> : text
              }
            },
            {
              title: '平台公司投',
              dataIndex: 'name32',
              render: (text, record, index) => {
                return index === 2 ? <Typography.Text strong>{text}</Typography.Text> : text
              }
            }
          ]
        },
        {
          title: '社会投资',
          dataIndex: 'name4',
          render: (text, record, index) => {
            return index === 2 ? <Typography.Text strong>{text}</Typography.Text> : text
          }
        },
        {
          title: '其他投资',
          dataIndex: 'name5',
          render: (text, record, index) => {
            return index === 2 ? <Typography.Text strong>{text}</Typography.Text> : text
          }
        }
      ]
    },
    {
      title: '实际发生（万元）',
      children: [
        {
          title: '财政预算',
          dataIndex: 'name6',
          render: (text, record, index) => {
            return index === 2 ? <Typography.Text strong>{text}</Typography.Text> : text
          }
        },
        {
          title: '平台公司预算',
          dataIndex: 'name7',
          render: (text, record, index) => {
            return index === 2 ? <Typography.Text strong>{text}</Typography.Text> : text
          }
        },
        {
          title: '社会投资',
          dataIndex: 'name8',
          render: (text, record, index) => {
            return index === 2 ? <Typography.Text strong>{text}</Typography.Text> : text
          }
        }
      ]
    },
    {
      title: '操作',
      dataIndex: 'operate',
      align:"center",
      render: (text, record, index) => {
        return (
          index !== 2 && (
            <>
              <Button
                theme='borderless'
                type='primary'
              >
                修改
              </Button>
              <Button
                theme='borderless'
                type='primary'
                style={{ marginLeft: 8 }}
              >
                删除
              </Button>
            </>
          )
        )
      }
    }
  ]
  const data = [
    {
      key: 1,
      name: '2022',
      name0: '200.00',
      name1: '150.00',
      name2: '200.00',
      name31: '200.00',
      name32: '200.00',
      name4: '200.00',
      name5: '200.00',
      name6: '200.00',
      name7: '200.00',
      name8: '200.00'
    },
    {
      key: 2,
      name: '2023',
      name0: '100.00',
      name1: '0',
      name2: '100.00',
      name31: '100.00',
      name32: '100.00',
      name4: '100.00',
      name5: '100.00',
      name6: '100.00',
      name7: '100.00',
      name8: '100.00'
    },
    {
      key: 3,
      name: '合计',
      name0: '100.00',
      name1: '0',
      name2: '100.00',
      name31: '100.00',
      name32: '100.00',
      name4: '100.00',
      name5: '100.00',
      name6: '100.00',
      name7: '100.00',
      name8: '100.00'
    }
  ]

  return (
    <>
      <Typography.Title heading={3}>资金</Typography.Title>

      <Row className="mt-5">
        <Col span={6}>
          <Card bordered={false}>
            <Row
              type='flex'
              align='middle'
            >
              <Col>
                <Avatar
                  size='small'
                  style={{ backgroundColor: '#f2f2f2' }}
                >
                  <IconLayout size='large' />
                </Avatar>
              </Col>
              <Col offset={1}>
                <Typography.Text strong>立项投资估算金额</Typography.Text>
                <Typography.Title heading={4}>
                  373 <Typography.Text type='tertiary'>万元</Typography.Text>
                </Typography.Title>
              </Col>
            </Row>
          </Card>
        </Col>
        <Col span={6}>
          <Card bordered={false}>
            <Row
              type='flex'
              align='middle'
            >
              <Col>
                <Avatar
                  size='small'
                  style={{ backgroundColor: '#f2f2f2' }}
                >
                  <IconTreeSelect size='large' />
                </Avatar>
              </Col>
              <Col  offset={1}>
                <Typography.Text strong>批复投资金额</Typography.Text>
                <Typography.Title heading={4}>
                  360 <Typography.Text type='tertiary'>万元</Typography.Text>
                </Typography.Title>
              </Col>
            </Row>
          </Card>
        </Col>
        <Col span={6}>
          <Card bordered={false}>
            <Row
              type='flex'
              align='middle'
            >
              <Col>
                <Avatar
                  size='small'
                  style={{ backgroundColor: '#f2f2f2' }}
                >
                  <IconOverflow size='large' />
                </Avatar>
              </Col>
              <Col offset={1}>
                <Typography.Text strong>累计完成投资</Typography.Text>
                <Typography.Title heading={4}>
                  100 <Typography.Text type='tertiary'>万元</Typography.Text>
                </Typography.Title>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>

      <Card bordered={false} className="mt-5">
        <Row>
          <Col span={12}>
            <Typography.Title heading={5}>年度投资信息</Typography.Title>
          </Col>
          <Col span={12} className="text-right">
            <Button
              icon={<IconPlus />}
              theme='solid'
              aria-label='新增投资'
            >
              新增投资
            </Button>
          </Col>
        </Row>

        <Table
          className="mt-5"
          dataSource={data}
          columns={columns}
        />
      </Card>
    </>
  )
}
export default Fund
