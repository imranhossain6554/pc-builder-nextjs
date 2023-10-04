import React from "react";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import Link from "next/link";

const { Header, Content, Footer } = Layout;

const Navbar = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <div className="navbar bg-info z-20 relative">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-60 "
          >
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Categories</a>
              <ul className="p-2">
                <li>
                  <Link href={"/categories/processor"}>CPU / Processor</Link>
                </li>
                <li>
                  <a>Motherboard</a>
                </li>
                <li>
                  <a>RAM</a>
                </li>
                <li>
                  <a>Power Supply Unit</a>
                </li>
                <li>
                  <a>Storage Device</a>
                </li>
                <li>
                  <a>Monitor</a>
                </li>
                <li>
                  <a>Others</a>
                </li>
              </ul>
            </li>
            <li>
              <a>About</a>
            </li>
          </ul>
        </div>
        <Link
          href="/"
          className="text-green-950 font-bold no-underline normal-case text-2xl"
        >
          PC Builder App
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="/" className="no-underline">
              Home
            </Link>
          </li>
          <li tabIndex={0}>
            <details>
              <summary>Categories </summary>
              <ul className="p-2">
                <li>
                  <Link href={"/categories/processor"}>CPU / Processor</Link>
                </li>
                <li>
                  <Link href={"/categories/motherboard"}>Motherboard</Link>
                </li>
                <li>
                  <Link href={"/categories/ram"}>Ram</Link>
                </li>
                <li>
                  <Link href={"/categories/power-supply-unit"}>
                    Power Supply Unit
                  </Link>
                </li>
                <li>
                  <Link href={"/categories/storage-device"}>
                    Storage Device
                  </Link>
                  <a></a>
                </li>
                <li>
                  <Link href={"/categories/monitor"}>Monitor</Link>
                </li>
                <li>
                  <Link href={"/categories/others"}>Others</Link>
                  <a></a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <a>About</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <Link href="/pc-builder" className="btn mr-8">
          PC Builder
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

/* import { Layout, Menu, Button } from "antd";
import { HomeOutlined, UserOutlined, SettingOutlined } from "@ant-design/icons";

const { Header } = Layout;

const Navbar = () => {
  return (
    <Layout className="layout">
      <Header style={{ display: "flex", justifyContent: "space-between" }}>
        <div className="logo" style={{ color: "white" }}>
          {" "}
          Logo
        </div>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1" icon={<HomeOutlined />}>
            Home
          </Menu.Item>
          <Menu.Item key="2" icon={<UserOutlined />}>
            Profile
          </Menu.Item>
          <Menu.Item key="3" icon={<SettingOutlined />}>
            Settings
          </Menu.Item>
        </Menu>
        <div>
          <Button type="primary" style={{ marginRight: "10px" }}>
            Sign in
          </Button>
          <Button>Sign up</Button>
        </div>
      </Header>
    </Layout>
  );
};
export default Navbar;
 */
