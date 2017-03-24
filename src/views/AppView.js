'use strict';
import React from 'react';
import swiper from 'swiper';
import Style from '../style.css';
function AppView(props) {
  return (
    <div>
      <Main {...props} />
      <Footer {...props} />
    </div>
  );
}

function Footer(props) {
  const buttonlist = [1, 2, 3, 4, 5];
  const textList = ["首页", "商品分类", "购物车", "订单中心", "随心订"];
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
    case "0":
      return (<FirstPage {...props} />);
    // case "1":
    // return(<SecondPage {...props}/>);
    // case "2":
    // return(<ThirdPage {...props}/>);
    // case "3":
    // return(<LastPage {...props}/>);
    default:
      return (<FirstPage {...props} />);
  }
}

function FirstPage(props) {
  return (<section className="pages">
    <h3>每日精选</h3>
    <Swiper />
    <BittonList {...props} />
  </section>)
}

function BittonList(props){
  return(<ul id="firstPage_label_list">
    <li><img className="self-img-full" src="../images/icons_14.png" /><br></br><span className="self-img-font">折扣</span></li>
    <li><img className="self-img-full" src="../images/icons_10.png" /><br></br><span className="self-img-font">好评</span></li>
    <li><img className="self-img-full" src="../images/icons_03.png" /><br></br><span className="self-img-font">销量</span></li>
    <li><img className="self-img-full" src="../images/icons_07.png" /><br></br><span className="self-img-font">搜索</span></li>
  </ul>)
}

const Swiper = React.createClass({
  componentDidMount() {
    const self = this;
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "data.json", true);
    xhr.onreadystatechange = function () {
      if (this.readyState == 4) {
        if (this.status == 200) {
          const tmp = JSON.parse(this.responseText);
          self.loadData(tmp.swiper);
          var mySwiper = new swiper('#swiper-container', {
            autoplay: 5000,//可选选项，自动滑动
          });
        }
      }
    }
    xhr.send();
  },
  loadData(data) {
    const self = this;
    data.map(function (T, i) {
      self.refs["swiper_a_" + i].href = T.href;
      self.refs["swiper_img_" + i].src = T.src;
    })
  },
  render() {
    const list = ["#", "#", "#", "#"];
    const piclist = list.map(function (value, index) {
      return (<div ref={"cs_"+index} key={index} className="swiper-slide"><a ref={"swiper_a_" + index} href={value[index]} className="thumbnail"><img ref={"swiper_img_" + index} src={value[index]} alt="" /></a></div>)
    });
    return (<div id="swiper-container">
      <div className="swiper-wrapper">
        {piclist}
      </div></div>)
  }
})
export default AppView;
