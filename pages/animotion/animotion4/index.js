// pages/mine/calendar/index.js
Page({

  data: {
    numbers:[{
      id: 0,
      src: "https://z3.ax1x.com/2021/07/12/WiVd5d.png"
    },
    {
      id: 1,
      src: "https://z3.ax1x.com/2021/07/12/WiVtbD.png"
    },
    {
      id: 2,
      src: "https://z3.ax1x.com/2021/07/12/WiVUVe.png"
    },
    {
      id: 3,
      src: "https://z3.ax1x.com/2021/07/12/WiV8v6.png"
    },
    {
      id: 4,
      src: "https://z3.ax1x.com/2021/07/12/WiVJKK.png"
    },
    {
      id: 5,
      src: "https://z3.ax1x.com/2021/07/12/WiVYDO.png"
    },
    {
      id: 6,
      src: "https://z3.ax1x.com/2021/07/12/WiVaUH.png"
    },
    {
      id: 7,
      src: "https://z3.ax1x.com/2021/07/12/WiV0PA.png"
    },
    {
      id: 8,
      src: "https://z3.ax1x.com/2021/07/12/WiVB8I.png"
    },
    {
      id: 9,
      src: "https://z3.ax1x.com/2021/07/12/WiVD2t.png"
    }],
    ida1: 0,
    ida2: 0,
    ida3: 0,

    idb1: 0,
    idb2: 0,
    idb3: 0,

    aa: false,
    bb: false
  },

  scoresa: function(e){
    this.setData({
      aa: true
    });
    var ida1 = this.data.ida1;
    var ida2 = this.data.ida2;
    var ida3 = this.data.ida3;
    var ida3 = e.currentTarget.dataset.index+1;
    setTimeout(() => {
    if(10 == ida3){
      var ida2 = this.data.ida2+1;
      this.setData({
        ida3: 0,
        ida2: ida2
      });
      if(10 == ida2){
        var ida1 = this.data.ida1+1;
        this.setData({
          ida2: 0,
          ida1: ida1
        });
      }else{
        this.setData({
          ida2: ida2,
        })
      }
    }else{
      this.setData({
        ida3: ida3,
      })
    }
      var aa = false;
      this.setData({
        aa: aa
      })
    }, 700);
  },
  scoresb: function(e){
    this.setData({
      bb: true
    });
    var idb1 = this.data.idb1;
    var idb2 = this.data.idb2;
    var idb3 = this.data.idb3;
    var idb3 = e.currentTarget.dataset.index+1;
    setTimeout(() => {
    if(10 == idb3){
      var idb2 = this.data.idb2+1;
      this.setData({
        idb3: 0,
        idb2: idb2
      });
      if(10 == idb2){
        var idb1 = this.data.idb1+1;
        this.setData({
          idb2: 0,
          idb1: idb1
        });
      }else{
        this.setData({
          idb2: idb2,
        })
      }
    }else{
      this.setData({
        idb3: idb3,
      })
    }
      var bb = false;
      this.setData({
        bb: bb
      })
    }, 700);
  }
})