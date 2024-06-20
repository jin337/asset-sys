import { Outlet } from 'react-router-dom'
import { Layout, Nav} from '@douyinfe/semi-ui'
import { IconUser,IconDesktop,IconSetting ,IconKanban,IconList,IconServer,IconFile} from '@douyinfe/semi-icons'

const Dashboard = () => {
  const { Content,Sider } = Layout
  const itemsSider = [
    {
      itemKey: 'dashboard',
      text: '概况',
      icon: <IconDesktop />,
      link: '/project-dashboard/overview'
    },
    {
      itemKey: 'project',
      text: '资金',
      icon: <IconServer />,
      link: '/project-dashboard/fund'
    },
    {
      itemKey: 'standard',
      text: '分项',
      icon: <IconList />,
      link: '/project-dashboard'
    },
    {
      itemKey: 'user',
      text: '合同',
      icon: <IconKanban />,
      link: '/project-dashboard'
    },
    {
      itemKey: 'analyse',
      text: '依据',
      icon: <IconFile />,
      link: '/project-dashboard'
    },
    {
      itemKey: 'system',
      text: '成员',
      icon: <IconUser />,
      link: '/project-dashboard'
    },
    {
      itemKey: 'setting',
      text: '配置',
      icon: <IconSetting />,
      link: '/project-dashboard'
    }
  ]

  return (
    <Layout className="h-full">
      <Sider><Nav className="h-full" style={{ width: '120px' }} items={itemsSider}/></Sider>
      <Layout>
        <Content className="m-5">
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  )
}
export default Dashboard
