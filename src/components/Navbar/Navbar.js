import React from "react";
import "antd/dist/antd.css";
import "./Navbar.css";
import { Menu } from "antd";
import {
  GithubOutlined,
  HomeOutlined,
  CodeOutlined,
  DesktopOutlined,
  FallOutlined,
  ToolOutlined,
  MediumOutlined

} from "@ant-design/icons";
import {
  NavLink 
} from "react-router-dom";


const centerStyle = {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
  };


class Navbar extends React.Component {

  componentDidMount() {
    if (window.location.pathname === "/") {
      this.setState({
        current: 'home'
      })
    }
    else {
      var path = window.location.pathname.replace(/^\/+/, '')
      this.setState({
        current: path
      })
    }
  }

  state = {
    current: 'home',
  };

  handleClick = e => {
    if (e.key === "github") {
      window.location.href = 'https://github.com/cra1gg'; 
    }
    this.setState({ current: e.key });
  };

  render () {
    const { current } = this.state;
    
    return (
      <Menu
        selectedKeys={[current]}
        mode="horizontal"
        theme="dark"
        style={centerStyle}
        onClick={this.handleClick}
      >
        <Menu.Item key="home" icon={<HomeOutlined />}>
          <NavLink exact to="/">Home</NavLink>
        </Menu.Item>
        <Menu.Item key="github" icon={<GithubOutlined />}>
          GitHub
        </Menu.Item>
        <Menu.Item key="projects" icon={<CodeOutlined />}>
          <NavLink exact to="/projects">Projects</NavLink>
        </Menu.Item>
        <Menu.Item key="battlestation" disabled icon={<DesktopOutlined />}>
          Battlestation
        </Menu.Item>
        <Menu.Item key="pc" disabled icon={<ToolOutlined />}>
          PC Builds
        </Menu.Item>
        <Menu.Item key="blog" disabled icon={<MediumOutlined />}>
          Blog
        </Menu.Item>
        <Menu.Item key="crypto" disabled icon={<FallOutlined />}>
          Cryptocurrency
        </Menu.Item>
      </Menu>
    );
    }
}

export default Navbar;
