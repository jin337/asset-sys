import { Outlet } from 'react-router-dom'
import { Layout, Nav} from '@douyinfe/semi-ui'
import { IconUser,IconDesktop,IconSetting ,IconKanban,IconList,IconServer,IconFile} from '@douyinfe/semi-icons'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
  const navigate = useNavigate()
  const { Content,Sider } = Layout
  const itemsSider = [
    {
      itemKey: 'dashboard',
      text: '概况',
      icon: <IconDesktop />,
      url: '/project-dashboard/overview'
    },
    {
      itemKey: 'project',
      text: '资金',
      icon: <IconServer />,
      url: '/project-dashboard/fund'
    },
    {
      itemKey: 'standard',
      text: '分项',
      icon: <IconList />,
      url: '/project-dashboard'
    },
    {
      itemKey: 'user',
      text: '合同',
      icon: <IconKanban />,
      url: '/project-dashboard'
    },
    {
      itemKey: 'analyse',
      text: '依据',
      icon: <IconFile />,
      url: '/project-dashboard'
    },
    {
      itemKey: 'system',
      text: '成员',
      icon: <IconUser />,
      url: '/project-dashboard'
    },
    {
      itemKey: 'setting',
      text: '配置',
      icon: <IconSetting />,
      url: '/project-dashboard'
    }
  ]

  const onselect = (e) => {
    const key=itemsSider.find(item=>item.itemKey===e.itemKey)
    navigate(key.url);
  }
  return (
    <Layout className="h-full">
      <Sider><Nav className="h-full" style={{ width: '120px' }} items={itemsSider} onClick={onselect} /></Sider>
      <Layout>
        <Content className="m-5">
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  )
}
export default Dashboard
