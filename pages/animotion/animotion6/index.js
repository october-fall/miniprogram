Page({
  data: {
    loading: true,
    score: 0,
    time: 0,
    num: [{
      id: 0,
      row: 0,
      col: 0,
      value: 0
    },{
      id: 1,
      row: 0,
      col: 1,
      value: 0
    },{
      id: 2,
      row: 0,
      col: 2,
      value: 0
    },{
      id: 3,
      row: 0,
      col: 3,
      value: 0
    },{
      id: 4,
      row: 1,
      col: 0,
      value: 0
    },{
      id: 5,
      row: 1,
      col: 1,
      value: 0
    },{
      id: 6,
      row: 1,
      col: 2,
      value: 0
    },{
      id: 7,
      row: 1,
      col: 3,
      value: 0
    },{
      id: 8,
      row: 2,
      col: 0,
      value: 0
    },{
      id: 9,
      row: 2,
      col: 1,
      value: 0
    },{
      id: 10,
      row: 2,
      col: 2,
      value: 0
    },{
      id: 11,
      row: 2,
      col: 3,
      value: 0
    },{
      id: 12,
      row: 3,
      col: 0,
      value: 0
    },{
      id: 13,
      row: 3,
      col: 1,
      value: 0
    },{
      id: 14,
      row: 3,
      col: 2,
      value: 0
    },{
      id: 15,
      row: 3,
      col: 3,
      value: 0
    }],
    startX: 0,
    startY: 0,
    endX: 0,
    endY: 0,
    direction: 0,
  },

  touchStart: function(e){
    var touch = e.changedTouches[0];
    var startX = this.data.startX;
    var startY = this.data.startY;
    startX = touch.clientX;
    startY = touch.clientY;
    this.setData({
      startX: startX,
      startY: startY
    })
  },
  touchEnd: function(e){
    var touch = e.changedTouches[0];
    var endX = this.data.endX;
    var endY = this.data.endY;
    var startX = this.data.startX;
    var startY = this.data.startY;
    var direction = this.data.direction;
    endX = touch.clientX;
    endY = touch.clientY;
    this.setData({
      endX: endX,
      endY: endY
    })
    direction = (endY-startY)/(endX-startX);
    if(endX>startX){
      if(direction+1<=0){
        console.log("向上");
      }else if(-1<direction&&direction<1){
        console.log("向右");
      }else{
        console.log("向下");
      }
    }else if(endX<startX){
      if(direction+1<=0){
        console.log("向下");
      }else if(-1<direction&&direction<1){
        console.log("向左");
      }else{
        console.log("向上");
      }
    }else{
      if(endY>startY){
        console.log("向下");
      }else if(endY<startY){
        console.log("向上");
      }else{
        console.log("不动");
      }
    }

    
  },



  onLoad: function () {
    

  },
  onReady: function () {
    var x = Math.floor(Math.random()*15);
    var startV1 = Math.floor(Math.random()*2+1)*2;
    var num = this.data.num;
    var y = Math.floor(Math.random()*15);
    if(x==y){
      y = Math.floor(Math.random()*15);
    }
    var startV2 = Math.floor(Math.random()*2+1)*2;
    num[x].value = startV1;
    num[y].value = startV2;
    this.setData({
      num: num
    })
    console.log("计时开始");
  },

  onShow: function () {
    console.log("计时继续");
  },

  onHide: function () {
    console.log("计时应该暂停");
  },

  onUnload: function () {

  },

  onPullDownRefresh: function () {

  },

  onReachBottom: function () {

  },

  onShareAppMessage: function () {

  }
})