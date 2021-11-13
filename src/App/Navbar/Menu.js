import { Tabs } from "antd";
import  CardComponent  from "../../Components/Card";

const { TabPane } = Tabs;

const Menu = () => {
  return (
    <div>
      <Tabs defaultActiveKey="1" centered>
        <TabPane tab="Home" key="1">
          Home
          <CardComponent title="dinushi" description="hi kohomada oyalata"/>
        </TabPane>
        <TabPane tab="Food" key="2">
          Food
        </TabPane>
        <TabPane tab="Books" key="3">
          Books
        </TabPane>
        <TabPane tab="Movies" key="4">
          Movies
        </TabPane>
        <TabPane tab="Songs" key="5">
          Songs
        </TabPane>
        <TabPane tab="News" key="6">
          News
        </TabPane>
        <TabPane tab="Web" key="7">
          Web
        </TabPane>
      </Tabs>
    </div>
  );
};

export default Menu;
