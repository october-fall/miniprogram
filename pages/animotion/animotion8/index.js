let canvas, width, height, ctx;
Page({
  data: {
    ballArr:[],
  },

  onReady: function(){
    wx.createSelectorQuery()
      .select('#mycanvas')
      .fields({
        node: true,
        size: true,
      })
      .exec(this.init.bind(this))
  },

  init (res) {
    
    let {node: canvas, width, height} = res[0];
    ctx = canvas.getContext("2d");
    const dpr = wx.getSystemInfoSync().pixelRatio;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);
  },

  Ball(x,y,r){
    this.x = x;
    this.y = y;
    this.r = r;
    //设置随机颜色
    this.color = this.getRandom();
    //设置行进方向
    this.dx = parseInt(Math.random()*2)-1;
    this.dy = parseInt(Math.random()*2)-1;
    var ballArr = this.data.ballArr;
    //渲染小球
    ctx.beginPath();
    ctx.arc(this.x,this.y,this.r,0,Math.PI*2,false);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.closePath();
    
    setInterval(()=>{
      if(this.r>0){
        this.x += this.dx;
        this.y += this.dy;
        this.r -= 0.3;
        ctx.clearRect(0,0,375,600);
        ctx.beginPath();
        ctx.arc(this.x,this.y,this.r,0,Math.PI*2,false);
        ctx.closePath();
      }
    },50)
      
  },


  //canvas设置事件监听，touch的过程中创建小球
  touchStart: function(e){
    this.Ball(e.touches[0].x,e.touches[0].y,20);
  },
  touchMove: function(e){
    this.Ball(e.changedTouches[0].x,e.changedTouches[0].y,20);
  },

  //随机颜色
  getRandom(){
    var allType = "0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f";
    var allTypeArr = allType.split(",");
    var color = "#";
    for(var i = 0;i < 6;i++){
      var random = parseInt(Math.random()*allTypeArr.length);
      color += allTypeArr[random];
    }
    return color;
  },
})