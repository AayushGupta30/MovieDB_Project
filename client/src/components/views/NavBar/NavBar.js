import React, { useState } from 'react';
import LeftMenu from './Sections/LeftMenu';
import SearchMenu from './Sections/SearchMenu';
import AboutMenu from './Sections/AboutMenu';
import RightMenu from './Sections/RightMenu';
import { Drawer, Button, Icon } from 'antd';
import './Sections/Navbar.css';
// const Logo = require('../../../assets/images/Logo.png');
const mylogo = require('../../../assets/images/mylogo.jpg');

function NavBar() {
  const [visible, setVisible] = useState(false)

  const showDrawer = () => {
    setVisible(true)
  };

  const onClose = () => {
    setVisible(false)
  };

  return (
    <nav className="menu" style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
      <div className="menu__logo">
        <a href="/"><img src={mylogo} alt="Logo" style={{ width: '100%', marginTop: '-5px' }} /></a>
      </div>
      <div className="menu__container">
        <div className="menu_left">
          <LeftMenu mode="horizontal" />
        </div>
        <div className="menu_search">
          <SearchMenu mode="horizontal" />
        </div>
        <div className="menu_about">
          <AboutMenu mode="horizontal" />
        </div>
        <div className="menu_rigth">
          <RightMenu mode="horizontal" />
        </div>
        <Button
          className="menu__mobile-button"
          type="primary"
          onClick={showDrawer}
        >
          <Icon type="align-right" />
        </Button>
        <Drawer
          title="Basic Drawer"
          placement="right"
          className="menu_drawer"
          closable={false}
          onClose={onClose}
          visible={visible}
        >
          <LeftMenu mode="inline" />
          <RightMenu mode="inline" />
        </Drawer>
      </div>
    </nav>
  )
}

export default NavBar