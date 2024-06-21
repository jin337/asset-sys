import { Outlet } from 'react-router-dom'
import { Layout, Nav } from '@douyinfe/semi-ui'
import { IconUser, IconDesktop, IconSetting, IconKanban, IconList, IconServer, IconFile } from '@douyinfe/semi-icons'
import { useNavigate, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { addTitle } from '../store/reducers/project'

const { Content, Sider } = Layout

const Dashboard = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const dispatch = useDispatch()
  const [selectedKey, setSelectKey] = useState()
  const itemsSider = [
    {
      itemKey: 'dashboard',
      text: '概况',
      icon: <IconDesktop />,
      url: '/project-dashboard/overview',
    },
    {
      itemKey: 'project',
      text: '资金',
      icon: <IconServer />,
      url: '/project-dashboard/fund',
    },
    {
      itemKey: 'standard',
      text: '分项',
      icon: <IconList />,
      url: '',
    },
    {
      itemKey: 'user',
      text: '合同',
      icon: <IconKanban />,
      url: '',
    },
    {
      itemKey: 'analyse',
      text: '依据',
      icon: <IconFile />,
      url: '',
    },
    {
      itemKey: 'system',
      text: '成员',
      icon: <IconUser />,
      url: '',
    },
    {
      itemKey: 'setting',
      text: '配置',
      icon: <IconSetting />,
      url: '',
    },
  ]

  useEffect(() => {
    if (location.pathname) {
      const item = itemsSider.find((e) => e.url === location.pathname)
      item && setSelectKey(item.itemKey)
      let title = sessionStorage.getItem('project-title')
      dispatch(addTitle(title))
    }
  }, [location])

  const onSelect = (e) => {
    const key = itemsSider.find((item) => item.itemKey === e.itemKey)
    setSelectKey(e.itemKey)
    navigate(key.url)
  }

  return (
    <Layout className='h-full'>
      <Sider>
        <Nav
          className='h-full'
          style={{ width: '120px' }}
          items={itemsSider}
          onClick={onSelect}
          defaultSelectedKeys={[selectedKey]}
        />
      </Sider>
      <Layout>
        <Content className='m-5'>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  )
}
export default Dashboard
