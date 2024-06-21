import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { addTitle } from '../store/reducers/project'

import { Layout, Dropdown, Space, Avatar, Image, Row, Col, Typography } from '@douyinfe/semi-ui'
import { IconBell, IconSearch, IconSun, IconUserCircle, IconClose } from '@douyinfe/semi-icons'
import { IconAvatar, IconConfig, IconChangelog, IconTable, IconPopover, IconToken } from '@douyinfe/semi-icons-lab'

import Menu from '../components/Menu'
import { useState, useEffect } from 'react'

const Index = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const dispatch = useDispatch()
  const project = useSelector((state) => state.project)
  const [menuSelect, setMenuSelect] = useState()

  const { Header, Sider, Content } = Layout
  const itemsSider = [
    {
      itemKey: 'dashboard',
      text: '工作台',
      icon: <IconToken size='extra-large' />,
      link: '/dashboard',
    },
    {
      itemKey: 'project',
      text: '项目',
      icon: <IconTable size='extra-large' />,
      link: '/project',
    },
    {
      itemKey: 'standard',
      text: '标准',
      icon: <IconChangelog size='extra-large' />,
      link: '/standard',
    },
    {
      itemKey: 'user',
      text: '用户',
      icon: <IconAvatar size='extra-large' />,
      link: '/user',
    },
    {
      itemKey: 'analyse',
      text: '分析',
      icon: <IconPopover size='extra-large' />,
      link: '/analyse',
    },
    {
      itemKey: 'system',
      text: '系统',
      icon: <IconConfig size='extra-large' />,
      link: '/system',
    },
  ]

  useEffect(() => {
    if (location.pathname) {
      let key = location.pathname
      let item = itemsSider.find((e) => e.link === key)
      if (!item) {
        item = itemsSider.find((e) => key.includes(e.link))
      }
      item && setMenuSelect(item.itemKey)
    }
  }, [location])

  // 清除
  const clearTitle = () => {
    dispatch(addTitle(null))
    navigate(-1)
  }

  return (
    <Layout className='w-screen h-screen'>
      <Sider>
        <Menu
          select={menuSelect}
          className='h-full'
          items={itemsSider}
          header={
            <Image
              preview={false}
              width={50}
              src='https://lf3-static.bytednsdoc.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/root-web-sites/abstract.jpg'
            />
          }
        />
      </Sider>
      <Layout>
        <Header className='bg-white border-b px-6 py-4'>
          <Row>
            <Col span={12}>
              {!!project.title && (
                <div className='flex items-center'>
                  <IconClose
                    style={{ color: '#999' }}
                    onClick={clearTitle}
                  />
                  <Typography.Text
                    type='secondary'
                    strong
                  >&nbsp;{project.title}
                  </Typography.Text>
                </div>
              )}
            </Col>
            <Col
              span={12}
              className='text-right'
            >
              <Space spacing='loose'>
                <Avatar size='extra-small'>
                  <IconSearch />
                </Avatar>
                <Avatar size='extra-small'>
                  <IconBell />
                </Avatar>
                <Avatar size='extra-small'>
                  <IconSun />
                </Avatar>
                <Dropdown
                  position='bottomRight'
                  render={
                    <Dropdown.Menu>
                      <Dropdown.Item>详情</Dropdown.Item>
                      <Dropdown.Item>退出</Dropdown.Item>
                    </Dropdown.Menu>
                  }
                >
                  <Avatar
                    color='blue'
                    size='extra-small'
                  >
                    <IconUserCircle />
                  </Avatar>
                </Dropdown>
              </Space>
            </Col>
          </Row>
        </Header>
        <Content>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  )
}
export default Index
