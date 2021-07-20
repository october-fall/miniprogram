Page({

  data: {
    open: false,
    close: false,
    out: false,
    iin: false,
    bottomopen: false,
    Lindex: false,
    Bindex: false,
    Tindex: false,
    bb1: false,
    bb2: false,
    bb3: false,
    state: false,
    tapTime: '',
  },

  open: function(){
    var state = this.data.state;
    var open = this.data.open;
    var out = this.data.open;
    var bottomopen = this.data.bottomopen;
    var Lindex = this.data.Lindex;
    var Bindex = this.data.Bindex;
    var Tindex = this.data.Tindex;
    var bb1 = this.data.bb1;
    var bb2 = this.data.bb2;
    var bb3 = this.data.bb3;
    var close = this.data.open;
    var iin = this.data.iin;
    if(state){
      var now = new Date();//当前时间
      if (now - this.data.tapTime < 1000) {
        // console.log('阻断')
        return;
      }
      // console.log('执行')
      this.setData({tapTime: now})
    
      state = false;
      close = true;
      iin = true;
      bottomopen = false;
      open = false;
      out = false;
      bb1 = false;
      bb2 = false;
      bb3 = false;
      this.setData({
        state: state,
        close: close,
        iin: iin,
        bottomopen: bottomopen,
        open: open,
        out: out,
        bb1: bb1,
        bb2: bb2,
        bb3: bb3
      })
      Lindex = false;
      Bindex = false;
      Tindex = false;
      setTimeout(() => {
        this.setData({
          Lindex: Lindex,
          Bindex: Bindex,
          Tindex: Tindex,
        })
      }, 500);
    }else{
      var now = new Date();//当前时间
      if (now - this.data.tapTime < 1000) {
        // console.log('阻断')
        return;
      }
      // console.log('执行')
      this.setData({tapTime: now})
      
      close = false;
      iin = false;
      state = true;
      bottomopen = true;
      open = true;
      out = true;
      Lindex = true;
      Bindex = true;
      Tindex = true;
      bb1 = true;
      bb2 = true;
      bb3 = true;
      this.setData({
        state: state,
        close: close,
        iin: iin,
        bottomopen: bottomopen,
        open: open,
        out: out,
        bb1: bb1,
        bb2: bb2,
        bb3: bb3
      })
      setTimeout(() => {
        this.setData({
          Lindex: Lindex,
          Bindex: Bindex,
          Tindex: Tindex,
        })
      }, 500);
    }

  
  }
})