Page({
  data: {
    ballTop: 0,
    ballLeft: 0,
    start: 0,
    end: 0,
    width: 60,
    show: false,
    tapTime: '',		// 防止两次点击操作间隔太快
    tapEndTime: '',
    color: 0
  },

  touchStart: function(e){
    var now = new Date();//当前时间
    // console.log(now,this.data.tapTime);
    if (now - this.data.tapTime < 1500) {
      console.log('阻断')
      return;
    }
    console.log('执行')
    this.setData({ tapTime: now })

    var start = this.data.start;
    start = e.timeStamp;
    this.setData({
      start: start
    })
    
  },

  touchEnd: function(e){
    var now = new Date();//当前时间
    if (now - this.data.tapEndTime < 1500) {
      console.log('阻断')
      return;
    }
    console.log('执行')
    this.setData({ tapEndTime: now })

    var end = this.data.end;
    end = e.timeStamp;
    this.setData({
      end: end
    })
    var start = this.data.start;
    var width = this.data.width;
    var time = end-start;
    //console.log(time,width);
    width = width+time/3;
    this.setData({
      width: width
    })
    //console.log(time,width);
    var show = this.data.show;
    //console.log(show);
    var ballTop = this.data.ballTop;
    var ballLeft = this.data.ballLeft;
    ballTop = e.changedTouches[0].clientY*2-width/2;
    ballLeft = e.changedTouches[0].clientX*2-width/2;

    var color = this.data.color;
    color = Math.floor(Math.random()*10);
    console.log(color);

    show = true;
    this.setData({
      show: show,
      ballTop: ballTop,
      ballLeft: ballLeft,
      color: color
    });
    setTimeout(() => {
      show = false;
      width = 60;
      this.setData({
        show: show,
        width: width,
      });
    }, 1400);
    //console.log(show,width);
  }
})