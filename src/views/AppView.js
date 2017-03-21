'use strict';

import React from 'react';

function AppView(props) {
  return (
    <div>
      <Footer {...props} />
    </div>
  );
}

//
function Footer(props) {
  const buttonlist = [1,2,3,4,5];
  const textList = ["首页","商品分类","购物车","订单中心","随心订"];
  const iconList = ["home","th-list","shopping-cart","star","user"];
  return (<div id="nav" className="btn-group self-nav-btn" role="group">
    {
      buttonlist.map((data,index)=>(
        <button onClick = {props.onToggleIndex.bind(this,index)} key={index} type="button" className={index == props.showing.get("applistIndex") ? "btn-primary" : "btn-default" + " " + "btn"}>
          <span className={"glyphicon glyphicon" + "-" + iconList[index]}></span>
          <br></br>
          <span className="btn-font">{textList[index]}</span>
        </button>))
    }
  </div>);
}

export default AppView;
