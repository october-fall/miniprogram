let srcList = [{
    id: 0,
    color: '#333333',
    count: 0,
  },{
    id: 1,
    color: '#70a03a',
    count: 0,
  },{
    id: 2,
    color: '#e2cd13',
    count: 0,
  },{
    id: 3,
    color: '#ffffff',
    count: 0,
  }]

let ballList = [{
  id: 0,
  obj: null,
}]

class ballObj {
  constructor(color, width){
    this.color = color;
    this.width = width;
  }
  move() {
    this.width += 10;
  }
}

Page({
  data: {
    moveX: 0,
    moveY: 0,
    r: 138, //绕圈的圈的半径
    
    flag: true,
    xxx: 0,
    yyy: 0,
    height: 2.5,
    width: 2.5,

    srcList,

    ballList,
    X: 0,
    Y: 0,
    
    itemX: '',
    itemY: '',
    color: '',
    distance: 0,
    
  },

  onShow: function () {
   this.drawItem();
  },

  drawItem() {
    this.newItem();
  },

  // 获取移动的方向以及颜色
  newItem() {
    // 随机生成圆上的任意一个点
    let r = this.data.r;
    let itemX = 0;
    let itemY = 0;
    const x = Math.round(Math.random() * r);
    const y = Math.sqrt(r*r-x*x);
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
    const color = this.select();
    // console.log(itemX,itemY,color);
    this.setData({
      color: color
    })
    setInterval(() => {
      let flag = this.data.flag;
      if(flag){
        this.move(itemX,itemY);
        this.getItem();
      }
    }, 1000/60);
  },

  move(itemX,itemY) {
    let xxx = this.data.xxx;
    let yyy = this.data.yyy;
    let width = this.data.width;
    let height = this.data.height;
    const r = this.data.r;
    this.itemX = itemX;
    this.itemY = itemY;
    const speedX = itemX/r;
    const speedY = itemY/r;
    // console.log(xxx,yyy,speedX,speedY,itemX,itemY);
    xxx = xxx + speedX;
    yyy = yyy + speedY;
    width = width + 48/r;
    height = height + 48/r;
    this.setData({
      xxx: xxx,
      yyy: yyy,
      width: width,
      height: height,
    })
    const dis = Math.sqrt(xxx*xxx+yyy*yyy);
    let flag = this.data.flag;
    if( dis >= 300) {
      flag = false;
      this.setData({
        flag: flag
      });
    };
  },

  // 能否捕捉到item
  getItem(){
    let moveX = this.data.moveX-188;
    let moveY = this.data.moveY-188;
    let xxx = this.data.xxx;
    let yyy = this.data.yyy;
    let distance = Math.sqrt(((moveX-xxx)*(moveX-xxx))+((moveY-yyy)*(moveY-yyy)));
    // console.log(distance);
    let flag = this.data.flag;
    if( distance < 10) {
      flag = false;
      this.setData({
        flag: flag
      });
      console.log('获取到了');
      let color = this.data.color;
      let srcList = this.data.srcList;
      for(let i = 0; i < 4 ; i++){
        if(color==srcList[i].color){
          srcList[i].count++;
          this.setData({
            srcList: srcList
          })
        }
      }
    };
  },
  
  // 随机选择一个颜色（图片）
  select() {
    return srcList[Math.round(Math.random() * 3)].color
  },
  // touchmove时圆环在哪
  touchMove: function(e) {
    this.where(e);
  },
  tap: function(e) {
    this.where(e);
  },
  where: function(event) {
    let moveX = this.data.moveX;
    let moveY = this.data.moveY;
    const r = this.data.r;
    const X = event.changedTouches[0].clientX-188;
    const Y = event.changedTouches[0].clientY-188;
    let x = 0;
    let y = 0;
    const dis = Math.sqrt(X*X+Y*Y);
    x = (r / dis) * X;
    y = (r / dis) * Y;
    moveX = x + 188;
    moveY = y + 188;
    this.setData({
      moveX: moveX,
      moveY: moveY,
    })
  },

})

