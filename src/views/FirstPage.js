import React from 'react';
import swiper from 'swiper';
function FirstPage(props) {
  return (<section className="pages">
    <h3>每日精选</h3>
    <Swiper />
    <BittonList {...props} />
  </section>)
}
function BittonList(props) {
  return (<ul id="firstPage_label_list">
    <li><img className="self-img-full" src="./images/icons_14.png" /><br></br><span className="self-img-font">折扣</span></li>
    <li><img className="self-img-full" src="./images/icons_10.png" /><br></br><span className="self-img-font">好评</span></li>
    <li><img className="self-img-full" src="./images/icons_03.png" /><br></br><span className="self-img-font">销量</span></li>
    <li><img className="self-img-full" src="./images/icons_07.png" /><br></br><span className="self-img-font">搜索</span></li>
  </ul>)
}

const Swiper = React.createClass({
  componentDidMount() {
    var mySwiper = new swiper('#swiper-container', {
      autoplay: 5000,//可选选项，自动滑动
    });
  },
  render() {
    let list = ["images/h.jpg", "images/k.jpg", "images/n.jpg", "images/t.jpg"];
    let listhref = ["#", "#", "#", "#"]
    let piclist = list.map(function (value, index) {
      return (<div ref={"cs_" + index} key={index} className="swiper-slide"><a ref={"swiper_a_" + index} href={listhref[index]} className="thumbnail"><img ref={"swiper_img_" + index} src={value} alt="" /></a></div>)
    });
    return (<div id="swiper-container">
      <div className="swiper-wrapper">
        {piclist}
      </div></div>)
  }
});
module.exports = FirstPage;