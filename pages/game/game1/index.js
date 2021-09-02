let srcList = [{
    // src: '',
    // width: 10,
    // distance: 200,
    color: 'black',
  },{
    color: 'green',
  },{
    color: 'yellow',
  },{
    color: 'white',
  }]

// class Item {
//   constructor(src,width,speed = 1,positionIndex = 0,diatanceS,diatanceE) {
//     this.src = src
//     this.width = width
//     this.speed = speed
//     this.distanceS = distanceS
//     this.distanceE = distanceE
//     this.positionIndex = positionIndex
//   }
//   move() {
//     this.positionIndex += this.speed
//   }
// }

Page({
  data: {
    moveX: 0,
    moveY: 0,
    A1: {},
    itemX: '',
    itemY: '',
    laterX: '',
    laterY: '',
    color: '',
    distance: 0,
  },

  touchMove: function(e) {
    let itemX = this.data.itemX;
    let itemY = this.data.itemY;
    let moveX = this.data.moveX;
    let moveY = this.data.moveY;
    const X = e.changedTouches[0].clientX;
    const Y = e.changedTouches[0].clientY;
      // this.where(X,Y);
      moveX = X;
      if(Y>188){
        moveY = Math.sqrt(Math.abs((138*138)-((moveX-188)*(moveX-188))))+188;
      }else{
        moveY = (188 - (Math.sqrt(Math.abs((138*138)-((moveX-188)*(moveX-188))))+188)) + 188;
      }
    this.setData({
      moveX: moveX,
      moveY: moveY,
    })
    // console.log(moveX,moveY);
    this.getItem(itemX,itemY,moveX,moveY);
  },
  // where: (x0,y0) => {
  //   console.log('eeeeee');
  //   const k = (188-y0)/(188-x0);
  //   const b = y0-k*x0;
  //   for(let x = 0; x < 375; x++){
  //     for(let y = 0; x < 375; y++){
  //       if(y==k*x+b&&(((x-188)*(x-188))+((y-188)*(y-188))==138*138)){
  //         console.log(x,y);
  //       }
  //     }
  //   }
  // },
  onShow: function () {
    this.drawItem();
  },

   // 选择哪一个颜色（图片）
   select() {
    return srcList[Math.round(Math.random() * 3)].color
  },
  // 获取移动的方向以及颜色
  newItem() {
    let itemX = this.data.itemX;
    let itemY = this.data.itemY;
    let laterX = this.data.laterX;
    let laterY = this.data.laterY;
    let color = this.data.color;
    color = this.select();
    const x = Math.round(Math.random() * 138);
    const y = Math.sqrt(19052-x*x);
    const symbolX = Math.round(Math.random());
    const symbolY = Math.round(Math.random());
    if(symbolX==0){
      itemX = x;
    }else{
      itemX = -x;
    }
    if(symbolY==0){
      itemY = y;
    }else{
      itemY = -y;
    }
    const k = 145/97.6;
    console.log(itemX,itemY);
// 判断一下正负再加
    // laterX = itemX + itemX*k;
    // laterY = itemY + itemY*k;
    this.setData({
      itemX: itemX,
      itemY: itemY,
      color: color,
      laterX: laterX,
      laterY: laterY,
    });
    console.log(laterX,laterY);
  },
  drawItem() {
    // Item类还没有写，页面里只有一个元素，无法定时生成新的。
    // setInterval(()=>{  },3000)
      this.newItem(); // 获取移动的方向以及颜色
      let itemX = this.data.itemX;
      let itemY = this.data.itemY;
      let laterX = this.data.laterX;
      let laterY = this.data.laterY;
      var animation1 = wx.createAnimation({
        duration: 5000,
        timingFunction: 'ease-in',
      })
      animation1.translate3d(0,0,0).scale(1).translate3d(laterX,laterY,'10000rpx').scale(45).step();
      this.setData({
        A1: animation1.export(),
      })
  },

  // 能否捕捉到item
  getItem(itemX,itemY,moveX,moveY){
    if(moveX){
      let X = 0;
      let Y = 0;
      let distance = this.data.distance;
      // console.log(Number(itemX));
      
      // console.log(X,Y);
      distance = Math.sqrt(((moveX-X)*(moveX-X))+((moveY-Y)*(moveY-Y)));
      this.setData({
        distance: distance,
      })
      console.log(itemX,itemY,moveX,moveY)
      console.log(distance);
    }
  },
    
  
  
})

