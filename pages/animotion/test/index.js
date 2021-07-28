Page({
  data: {
    moveX: 0,
    moveY: 0,
  },
  touchMove: function(e) {
    var moveX = this.data.moveX;
    moveX = e.changedTouches[0].clientX;
    var moveY = this.data.moveyY;
    moveY = e.changedTouches[0].clientY;
    this.setData({
      moveX,
      moveY
    })
    // console.log(moveX,moveY);
  },
})