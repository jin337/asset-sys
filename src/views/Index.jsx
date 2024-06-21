import { useState, useEffect } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'

import { useSelector, useDispatch } from 'react-redux'
import { addTitle } from '../store/reducers/project'
import { switchTheme } from '../store/reducers/common'

import { Layout, Dropdown, Space, Image, Row, Col, Typography, Button } from '@douyinfe/semi-ui'
import { IconBellStroked, IconSearchStroked, IconSun, IconMoon, IconUserCircleStroked, IconClose } from '@douyinfe/semi-icons'
import { IconAvatar, IconConfig, IconChangelog, IconTable, IconPopover, IconToken } from '@douyinfe/semi-icons-lab'

import Menu from '../components/Menu'
const { Header, Sider, Content } = Layout

const Index = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const location = useLocation()
  const project = useSelector((state) => state.project)
  const common = useSelector((state) => state.common)
  const [menuSelect, setMenuSelect] = useState()
  const [theme, setTheme] = useState()

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

  // 判断导航选中
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

  // 判断主题
  useEffect(() => {
    const key = sessionStorage.getItem('theme') ? sessionStorage.getItem('theme') : common.theme
    setTheme(key)

    const body = document.body
    if (key == 'light') {
      body.removeAttribute('theme-mode')
    } else {
      body.setAttribute('theme-mode', 'dark')
    }
  }, [])

  // 清除header标题
  const clearTitle = () => {
    dispatch(addTitle(null))
    navigate('/project')
  }

  // 切换主题
  const checkTheme = () => {
    const body = document.body
    if (body.hasAttribute('theme-mode')) {
      body.removeAttribute('theme-mode')
    } else {
      body.setAttribute('theme-mode', 'dark')
    }

    const key = theme == 'light' ? 'dark' : 'light'
    setTheme(key)
    dispatch(switchTheme(key))
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
        <Header className='dark:bg-[#16161a] dark:border-zinc-500/100 bg-white border-b px-6 py-4'>
          <Row>
            <Col span={12}>
              {!!project.title && (
                <div className='flex items-center'>
                  <IconClose
                    className='cursor-pointer'
                    style={{ color: '#999' }}
                    onClick={clearTitle}
                  />
                  <Typography.Text
                    type='secondary'
                    strong
                  >
                    &nbsp;{project.title}
                  </Typography.Text>
                </div>
              )}
            </Col>
            <Col
              span={12}
              className='text-right'
            >
              <Space spacing='medium'>
                <Button
                  theme='borderless'
                  type='tertiary'
                  icon={<IconSearchStroked size='extra-large' />}
                />
                <Button
                  theme='borderless'
                  type='tertiary'
                  icon={<IconBellStroked size='extra-large' />}
                />
                <Button
                  theme='borderless'
                  type='tertiary'
                  icon={theme == 'light' ? <IconMoon size='extra-large' /> : <IconSun size='extra-large' />}
                  onClick={checkTheme}
                />
                <Dropdown
                  position='bottomRight'
                  render={
                    <Dropdown.Menu>
                      <Dropdown.Item>详情</Dropdown.Item>
                      <Dropdown.Item>退出</Dropdown.Item>
                    </Dropdown.Menu>
                  }
                >
                  <Button
                    theme='borderless'
                    type='primary'
                    icon={<IconUserCircleStroked size='extra-large' />}
                  />
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
