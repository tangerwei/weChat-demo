'use strict';
import React from 'react';
import Style from '../style.css';

const FirstPage = require('./FirstPage');
const SecondPage = require('./SecondPage');
const ThirdPage = require('./ThirdPage');
const FourPage = require('./FourPage');
const LastPage = require('./LastPage');

function AppView(props) {
  return (
    <div>
      <Main {...props} />
      <Footer {...props} />
    </div>
  );
}

function Footer(props) {
  const buttonlist = [0, 1, 2, 3, 4];
  const textList = ["首页", "商品分类", "购物车", "订单中心", "用户"];
  const iconList = ["home", "th-list", "shopping-cart", "star", "user"];
  return (<div id="nav" className="btn-group self-nav-btn" role="group">
    {
      buttonlist.map((data, index) => (
        <button onClick={props.onToggleIndex.bind(this, index)} key={index} type="button" className={(index == props.showing.get("applistIndex") ? "btn-primary" : "btn-default") + " " + "btn"}>
          <span className={"glyphicon glyphicon" + "-" + iconList[index]}></span>
          <br></br>
          <span className="btn-font">{textList[index]}</span>
        </button>))
    }
  </div>);
}

function Main(props) {
  switch (props.showing.get("applistIndex")) {
    case 0:
    return (<FirstPage {...props} />);
    case 1:
    return(<SecondPage {...props}/>);
    case 2:
    return(<ThirdPage {...props}/>);
    case 3:
    return(<FourPage {...props}/>);
    case 4:
    return(<LastPage {...props}/>);
    default:
      return (<FirstPage {...props} />);
  }
}

export default AppView;
