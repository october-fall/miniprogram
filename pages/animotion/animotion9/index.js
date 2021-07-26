let canvas, width, height, ctx;
Page({
  data:{
    size: 3,
    color: "#A2CD5A",
    startX: 0,
    startY: 0,
    clear: false,
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


  touchStart: function(e){
    var startX = this.data.startX;
    var startY = this.data.startY;
    var color = this.data.color;
    var size = this.data.size;
    var clear = this.data.clear;
    startX = e.changedTouches[0].x;
    startY = e.changedTouches[0].y;
    this.setData({
      startX: startX,
      startY: startY
    });
    if(clear){
      //橡皮擦模式
      ctx.strokeStyle = "#f5ffff";
      ctx.fillStyle = "#ffffff";
      ctx.lineWidth = 30;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";//两线交接处样式
      ctx.save();
      ctx.beginPath();
      ctx.arc(startX,startY,15,0,2*Math.PI,true);
      //添加一个弧形路径到当前路径，顺时针绘制  这里总共画了360度  也就是一个圆形 
      ctx.fill();
      ctx.restore();
      //save()把当前状态推入到绘图堆栈中
      //restore()从绘图堆栈中的顶端弹出最近保存的状态，并且根据这些存储的值来设置当前绘图状态。
    }else{
      //画笔模式
      ctx.strokeStyle = color;
      ctx.lineWidth = size;
      ctx.lineCap = "round";
      ctx.beginPath();
    }
  },
  
  touchMove: function (e) {
    var moveX = e.changedTouches[0].x;
    var moveY = e.changedTouches[0].y;
    var startX = this.data.startX;
    var startY = this.data.startY;
    var clear = this.data.clear;
    console.log(moveX,moveY);
    if(clear){
      //橡皮擦模式
      ctx.save();
      ctx.moveTo(startX,startY);
      ctx.lineTo(moveX,moveY);
      ctx.stroke();
      ctx.restore();
      startX = moveX;
      startY = moveY;
      this.setData({
        startX: startX,
        startY: startY
      })
    }else{
      //画笔模式
      ctx.moveTo(startX,startY);
      ctx.lineTo(moveX,moveY);
      ctx.stroke();
      startX = moveX;
      startY = moveY;
      this.setData({
        startX: startX,
        startY: startY
      })
    }
  },
  touchEnd: function () {
      
  },
  //橡皮擦
  clearCanvas: function(){
    var clear = this.data.clear;
    if(clear){
      clear = false;
    }else{
      clear =true;
    }
    this.setData({
      clear: clear
    })
  },

  //画笔选择
  penSelect: function(e){
    var size = this.data.size;
    var clear = this.data.clear;
    size = parseInt(e.currentTarget.dataset.param);
    clear = false;
    this.setData({
      size: size,
      clear: clear
    })
  },

  //颜色选择
  colorSelect: function(e){
    var color = this.data.color;
    var clear = this.data.clear;
    color = e.currentTarget.dataset.param;
    clear = false;
    this.setData({
      color: color,
      clear: clear
    })
  }
})