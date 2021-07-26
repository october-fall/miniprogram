let canvas, width, height, ctx;
Page({
  data: {

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

  //三、canvas的绘制功能（API）
  init (res) {
    let {node: canvas, width, height} = res[0];
    ctx = canvas.getContext("2d");
    const dpr = wx.getSystemInfoSync().pixelRatio;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);
    //绘制填充一个矩形
      // ctx.fillStyle = "#88d599";
      // ctx.fillRect(10,10,30,20);
    //绘制一个矩形边框
      // ctx.strokeStyle = "#88d599";
      // ctx.strokeRect(10,10,30,20);
    //擦除画布
      // ctx.clearRect(0,0,width,height);
    //绘制路径(设置不规则的多边形状态，路径是闭合的)
      // 设置起点 绘制路径 封闭路径 填充
      // ctx.beginPath();
      // ctx.moveTo(20,20);
      // ctx.lineTo(90,90);
      // ctx.lineTo(80,10);
      // ctx.closePath();
      // ctx.strokeStyle = "pink";
      // ctx.stroke();
      // ctx.fillStyle = "orange";
      // ctx.fill();
    //绘制圆弧
      ctx.beginPath();
      //arc(x, y, radius, startAngle, endAngle, anticlockwise)
      //画一个以（x,y）为圆心的以radius为半径的圆弧（圆）
      //从startAngle开始到endAngle结束，按照anticlockwise给定的方向（默认为顺时针false）来生成。
      //arc()函数中表示角的单位是弧度，不是角度。(一个圆的弧度为Math.PI*2，约等于7)
      //角度与弧度的js表达式: 弧度=(Math.PI/180)*角度。
      ctx.arc(60,60,50,0,Math.PI*2,false);
      ctx.strokeStyle = "pink";
      ctx.stroke();
      ctx.fillStyle = "orange";
      ctx.fill();
      

  }

  //二、canvas的像素化
  //一旦绘制成功一个图形，图形就会像素化，无法更改已经在画布上的图像
  //想要canvas图形运动起来，必须按照 清屏-更新-渲染 的逻辑顺序进行编程
  /** 
  init (res) {
    let {node: canvas, width, height} = res[0];
    ctx = canvas.getContext("2d");
    ctx.fillStyle = "#232323";
    //信号量
    var left = 100;
    ctx.fillRect(left,0,30,20)
    //动画过程
    setInterval(()=>{
      ctx.clearRect(0,0,400,400);
      left++;
      ctx.fillRect(left,0,30,20)
    },10)
  }
  */
  /**
   * 一、绘制一个矩形
    init (res) {
      let {node: canvas, width, height} = res[0];
      ctx = canvas.getContext("2d");
      ctx.fillStyle = "#232323";
      ctx.fillRect(80,10,54,20)
    }
   */
  






})