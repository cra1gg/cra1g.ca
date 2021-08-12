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

const centerStyle = {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
  };

function handleClick(button_name) {
  if (button_name === "github") {
    window.location.href = 'https://github.com/cra1gg'; 
  }
}

function Navbar() {

  return (
    <Menu
      selectedKeys={0}
      mode="horizontal"
      theme="dark"
      style={centerStyle}
    >
      <Menu.Item key="home" icon={<HomeOutlined />}>
        Home
      </Menu.Item>
      <Menu.Item key="github" onClick={() => handleClick("github")} icon={<GithubOutlined />}>
        GitHub
      </Menu.Item>
      <Menu.Item key="projects" disabled icon={<CodeOutlined />}>
        Projects
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

export default Navbar;
