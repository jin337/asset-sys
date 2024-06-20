import {} from 'react'
import { Typography, Row, Col, Card,Avatar,Button } from '@douyinfe/semi-ui'
import {IconLayout,IconOverflow,IconSideSheet,IconTreeSelect,IconToken} from '@douyinfe/semi-icons-lab'

const Overview = () => {
  return (
    <>
      <Typography.Title heading={3}>概况</Typography.Title>

      <Row className="mt-5">
        <Col span={6}>
          <Card bordered={false}>
            <Row type="flex" align="middle">
              <Col><Avatar size='small' style={{ backgroundColor: '#f2f2f2'}} ><IconLayout size="large" /></Avatar></Col>
              <Col offset={1}>
                <Typography.Text strong>立项总投资</Typography.Text>
                <Typography.Title heading={4}>373 <Typography.Text type="tertiary">万元</Typography.Text></Typography.Title>
              </Col>
            </Row>
          </Card>
        </Col>
        <Col span={6}>
          <Card bordered={false}>
            <Row type="flex" align="middle">
              <Col><Avatar size='small' style={{ backgroundColor: '#f2f2f2'}} ><IconTreeSelect size="large" /></Avatar></Col>
              <Col  offset={1}>
                <Typography.Text strong>批复投资金额</Typography.Text>
                <Typography.Title heading={4}>360 <Typography.Text type="tertiary">万元</Typography.Text></Typography.Title>
              </Col>
            </Row>
          </Card>
        </Col>
        <Col span={6}>
          <Card bordered={false}>
            <Row type="flex" align="middle">
              <Col><Avatar size='small' style={{ backgroundColor: '#f2f2f2'}} ><IconOverflow size="large" /></Avatar></Col>
              <Col offset={1}>
                <Typography.Text strong>已投资</Typography.Text>
                <Typography.Title heading={4}>100 <Typography.Text type="tertiary">万元</Typography.Text></Typography.Title>
              </Col>
            </Row>
          </Card>
        </Col>
        <Col span={6}>
          <Card bordered={false}>
            <Row type="flex" align="middle">
              <Col><Avatar size='small' style={{ backgroundColor: '#f2f2f2'}} ><IconSideSheet size="large" /></Avatar></Col>
              <Col offset={1}>
                <Typography.Text strong>形象进度</Typography.Text>
                <Typography.Title heading={4}>开工建设</Typography.Title>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>

      <Card bordered={false} className="mt-5">
        <Row>
          <Col span={12}>
            <Typography.Title heading={5}>项目基本信息</Typography.Title>
          </Col>
          <Col span={12} className="text-right">
            <Button
              theme='borderless'
              aria-label='修改'
            >
              修改
            </Button>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col span={8}>
            <Typography.Text type="secondary" strong>项目编码：<Typography.Text>XM1001</Typography.Text></Typography.Text>
          </Col>
          <Col span={8}>
            <Typography.Text type="secondary" strong>项目类别：新建</Typography.Text>
          </Col>
          <Col span={8}>
            <Typography.Text type="secondary" strong>建设方式：自建</Typography.Text>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col span={16}>
            <Typography.Text type="secondary" strong>项目名称：<Typography.Text>纬六路、经十八路、恒竞路建设工程</Typography.Text></Typography.Text>
          </Col>
          <Col span={8}>
            <Typography.Text type="secondary" strong>优先级：A级</Typography.Text>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col span={8}>
            <Typography.Text type="secondary" strong>负责人：张三</Typography.Text>
          </Col>
          <Col span={8}>
            <Typography.Text type="secondary" strong>建设年限：2023-2024</Typography.Text>
          </Col>
          <Col span={8}>
            <Typography.Text type="secondary" strong>计划开工时间：2023年第一季度</Typography.Text>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col span={8}>
            <Typography.Text type="secondary" strong>建设地点：江苏省南京市栖霞区</Typography.Text>
          </Col>
          <Col span={8}>
            <Typography.Text type="secondary" strong>资金来源：开发区财政统筹</Typography.Text>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col span={24}>
            <Typography.Text type="secondary" strong>建设规模及内容：道路、交通、排水、路灯、管线综合、绿化等配套附属设施。纬六路西起经十八路，东至仙新路，长385 米，宽24米;经十八路南起恒竞路，北至恒广路，全长383 米，宽20 米;恒竞路西起经十八路，东至仙新路，长335 米，宽40 米。</Typography.Text>
          </Col>
        </Row>
      </Card>

      <Card bordered={false} className="mt-5">
        <div className='flex items-center'>
          <Typography.Title heading={5}>子工程/项目</Typography.Title>
          <div  className='ml-6 text-sm text-blue-500 font-bold'>项目数（3）</div>
        </div>
        <Row className="mt-5">
          <Col span={7}>
            <Card>
              <Row type="flex" align="start">
                <Col><Avatar size='small' style={{ backgroundColor: '#626aea'}}><IconToken size="large" /></Avatar></Col>
                <Col span={18} offset={1}>
                  <Typography.Title heading={6}>兴建路（恒广路-恒竞路）</Typography.Title>
                  <div className="mt-2">形象进度</div>
                  <Typography.Title heading={4} style={{ color: '#999'}}>开工建设</Typography.Title>
                </Col>
              </Row>
            </Card>
          </Col>
          <Col span={7} offset="1">
            <Card>
              <Row type="flex" align="start">
                <Col><Avatar size='small' style={{ backgroundColor: '#626aea'}} ><IconToken size="large" /></Avatar></Col>
                <Col span={18} offset={1}>
                  <Typography.Title heading={6}>兴建路（恒广路-恒竞路）</Typography.Title>
                  <div className="mt-2">形象进度</div>
                  <Typography.Title heading={4} style={{ color: '#728e48'}}>全部完工</Typography.Title>
                </Col>
              </Row>
            </Card>
          </Col>
          <Col span={7} offset={1}>
            <Card>
              <Row type="flex" align="start">
                <Col ><Avatar size='small' style={{ backgroundColor: '#626aea'}} ><IconToken size="large" /></Avatar></Col>
                <Col span={18} offset={1}>
                  <Typography.Title heading={6}>兴建路（恒广路-恒竞路）</Typography.Title>
                  <div className="mt-2">形象进度</div>
                  <Typography.Title heading={4} style={{ color: '#eeb673'}}>待建设</Typography.Title>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </Card>
    </>
  )
}
export default Overview
