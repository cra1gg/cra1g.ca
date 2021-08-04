import { Layout} from 'antd';
import Navbar from './Navbar.js'
import './SiteLayout.css';
const { Header, Content } = Layout;


function SiteLayout(props) {

  return (
    <Layout>
    <Header style={{ position: 'fixed', zIndex: 1, width: '100%', lineHeight: '40px', height: '40px' }}>
      <Navbar></Navbar>
    </Header>
    <Content className="site-layout">
      {props.children}
    </Content>
  </Layout>
  );
}

export default SiteLayout;
