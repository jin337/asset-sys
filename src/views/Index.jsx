import { Outlet } from 'react-router-dom'
import { Layout, Nav, Dropdown, Space, Avatar } from '@douyinfe/semi-ui'
import { IconLanguage, IconBell, IconSearch, IconSun, IconUserCircle } from '@douyinfe/semi-icons'
import { IconCascader, IconAvatar, IconConfig, IconChangelog, IconTable, IconPopover, IconToken } from '@douyinfe/semi-icons-lab'

import Menu from '../components/Menu'

const Index = () => {
  const { Header, Sider, Content } = Layout
  const itemsSider = [
    {
      itemKey: 'dashboard',
      text: '工作台',
      icon: <IconToken size='extra-large' />,
      link: '/dashboard'
    },
    {
      itemKey: 'project',
      text: '项目',
      icon: <IconTable size='extra-large' />,
      link: '/project'
    },
    {
      itemKey: 'standard',
      text: '标准',
      icon: <IconChangelog size='extra-large' />,
      link: '/standard'
    },
    {
      itemKey: 'user',
      text: '用户',
      icon: <IconAvatar size='extra-large' />,
      link: '/user'
    },
    {
      itemKey: 'analyse',
      text: '分析',
      icon: <IconPopover size='extra-large' />,
      link: '/analyse'
    },
    {
      itemKey: 'system',
      text: '系统',
      icon: <IconConfig size='extra-large' />,
      link: '/system'
    }
  ]

  return (
    <Layout className='w-screen h-screen'>
      <Sider>
        <Menu
          className='h-full'
          items={itemsSider}
          header={<IconCascader size='extra-large' />}
        />
      </Sider>
      <Layout>
        <Header>
          <Nav
            mode={'horizontal'}
            footer={
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
            }
          />
        </Header>
        <Content>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  )
}
export default Index
