import React from 'react'
import logo from "../img/logo2.svg";
import { Link } from "react-router-dom";
import { Button, Flex, Image, Menu, Typography } from "antd";
import mainMenu from "../store/menuNew";
import { DownOutlined } from '@ant-design/icons';


export default function Header() {
  console.log(mainMenu);
  const items = mainMenu.map(item => {
    return {
      ...item,
      label: item.label?.toUpperCase()
      // icon: (item.children && item.children.length > 0) ? <DownOutlined /> : undefined 
    }
  })
  const onClick = (e) => {
    console.log('click ', e);
  }
  return (
    <Flex gap={20} align='center' justify='space-around' style={{ padding: "0 10px" }} >
      <Link to={"/"}>
        <Image src={logo} preview={false} />
      </Link>
      <Menu style={{ flex: 1 }} onClick={onClick} items={items} mode="horizontal" selectable={false} />
      <Flex gap={10}>
        <Button color="orange" variant="solid">
          <Typography.Text style={{ color: "white" }}>Портал потребителя</Typography.Text>
        </Button>
        <Button type='primary' >
          <Typography.Text style={{ color: "white" }}>Узнать об отключениях</Typography.Text>
        </Button>
      </Flex>
    </Flex>
  )
}
