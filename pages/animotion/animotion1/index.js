// pages/animotion/animotion1/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    stars:[{
      id: 0,
      value: "img0"
    }]
  },

  addStar: function(){
    //功能：点击+号随机增加一个星星
    let stars = this.data.stars;
    //随机生成0，1，2中的一个数字
    let id = stars.length;
    let value = "img"+Math.round(Math.random()*2);
    stars.push({
      id: id,
      value: value
    });
    this.setData({
      stars: stars
    })
  },

  removeStar: function(){
    let stars = this.data.stars;
    //功能：点击-号删除数组中的最后一个星星
    let id = stars.length-1;
    stars.splice(id,1);
    this.setData({
      stars: stars
    })
  }
})