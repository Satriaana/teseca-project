import classNames from "./Navbar.module.scss";
import { Image, Button, Switch, Avatar } from "antd";
import logo from "../../assets/img/logo.svg";
import { Link } from "react-router-dom";
import Menu from "./Menu";

const Navbar = () => {
  return (
    <div className={classNames.navbar}>
      <div className={classNames.nav}>
        <div className={classNames.logo}>
          <Link to="/">
            <Image
              height={40}
              src={logo}
              preview={false}
              className={classNames.logo}
            ></Image>
          </Link>
        </div>
        <div className={classNames.navRight}>
          <Button className={classNames.navBtn}>Create a post</Button>
          <Switch className={classNames.switch} />
          <Avatar size={40}>Nimesh</Avatar>
        </div>
      </div>
      <div className={classNames.navTabs}>
        <Menu />
      </div>
    </div>
  );
};

export default Navbar;
