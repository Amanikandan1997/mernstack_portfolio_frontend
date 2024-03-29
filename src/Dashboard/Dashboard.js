import React from 'react';
import Main from './main'
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
function Dashboard() {
    const {
        token: { colorBgContainer },
      } = theme.useToken();
  return (
    
        
    <Layout>
    
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={(broken) => {
        console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
    >
      <div className="demo-logo-vertical" />
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={['4']}
        items={[UserOutlined, VideoCameraOutlined, UploadOutlined, UserOutlined].map(
          (icon, index) => ({
            key: String(index + 1),
            icon: React.createElement(icon),
           
            
          }),
        )}
      />
    </Sider>
   
    <Layout>
      <Header
        style={{
          padding: 0,
          background: colorBgContainer,
        }}
      />
      <Content
        style={{
          margin: '24px 16px 0',
        }}
      >
        <div
          style={{
            padding: 24,
            minHeight: 360,
            background: colorBgContainer,
          }}
        >
          <Main/>
        </div>
      </Content>
      <Footer
        style={{
          textAlign: 'center',
        }}
      >
        © <a href="https://github.com/Amanikandan1997">Manikandan Arunachalam {new Date().getFullYear()} </a> <br /> All rigths reserved.
      </Footer>
    </Layout>
  </Layout>

  )
}

export default Dashboard