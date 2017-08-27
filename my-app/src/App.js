import React, { Component } from 'react';
import {
  Container,
  TabBar,
  NavBar,
  Card,
  OffCanvas,
  OffCanvasTrigger,
} from 'amazeui-touch';
import '../node_modules/amazeui/dist/css/amazeui.min.css'
import '../node_modules/amazeui/dist/css/amazeui.flat.min.css'
import '../node_modules/amazeui-touch/dist/amazeui.touch.min.css'
import './App.css'

var withOffCanvas = {
  title: 'MeChat',
  leftNav: [{
    icon: 'bars',
    title: 'Menu',
    component: OffCanvasTrigger,
    isClone: true, // IMPORTANT
    offCanvas: 
    <OffCanvas>
      <div className="myfile">
        <div className="touxiang">
          <img src="./touxiang.jpg"/>
        </div>
        <div className="jianjie">
          <p title="个人简介">男的，活的，四肢健全的；男的，活的，四肢健全的；男的，活的，四肢健全的；男的，活的，四肢健全的</p>
        </div>
      </div>
    </OffCanvas>,
  }],
};

class AppHeader extends Component{

  render() {
    return (
          <NavBar
            {...withOffCanvas}
            amStyle="dark"
          />
    );
  }
}

const header = (
  <Card.Child cover="http://lorempixel.com/1000/625/people/">
    <h3 className="card-title">
      标题: 我思念的城市
    </h3>
  </Card.Child>
);
const footer = (
  <Card.Child role="footer">
    <a href="javascript: void(0)">Like</a>
    <a href="javascript: void(0)">Comment</a>
    <a href="javascript: void(0)">ReadMore</a>
  </Card.Child>
);

class AppCard extends Component{
  render() {
    return (
      <Container {...this.props}>

        <Card header={header} footer={footer} >
          风路过的时候  没能吹走 <br />
          这个城市太厚的灰尘 <br />
          多少次的雨水  从来没有 <br />
          冲掉你那沉重的忧伤 <br />
          你的忧伤  像我的绝望 <br />
          那样漫长
        </Card>

      </Container>
    );
  }
}

class AppTabBar extends Component{
  handleClick(key, e) {
    e.preventDefault();
  }

  render() {
    return (
      <TabBar id="TabBar"
        amStyle="dark"
        onAction={this.handleClick}
      >
        <TabBar.Item
          title="广州"
        />
        <TabBar.Item
          title="其它"
        />
      </TabBar>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppHeader/>
        <div className="cb">
        <AppCard/>
        </div>
        <AppTabBar/>
      </div>
    );
  }
}

export default App;
