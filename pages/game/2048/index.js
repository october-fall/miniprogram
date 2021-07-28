Page({

  data: {
    loading: false,
    score: 0,
    time: "00:00:00",
    row0: [0,0,0,0],
    row1: [0,0,0,0],
    row2: [0,0,0,0],
    row3: [0,0,0,0],
    col0: [],
    col1: [],
    col2: [],
    col3: [],
    num: [],
    startX: 0,
    startY: 0,
    endX: 0,
    endY: 0,
    direction: 0,
    way: '',
    finish: false,
    first: true,
    success: false,
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
    
    //获取合并方向
    var touch = e.changedTouches[0];
    var endX = this.data.endX;
    var endY = this.data.endY;
    var startX = this.data.startX;
    var startY = this.data.startY;
    var direction = this.data.direction;
    var way = this.data.way;
    endX = touch.clientX;
    endY = touch.clientY;
    this.setData({
      endX: endX,
      endY: endY
    })
    direction = (endY-startY)/(endX-startX);
    if(endX>startX){
      if(direction+1<=0){
        way = 'top';
      }else if(-1<direction&&direction<1){
        way = 'right';
      }else{
        way = 'bottom';
      }
    }else if(endX<startX){
      if(direction+1<=0){
        way = 'bottom';
      }else if(-1<direction&&direction<1){
        way = 'left';
      }else{
        way = 'top';
      }
    }else{
      if(endY>startY){
        way = 'bottom';
      }else if(endY<startY){
        way = 'top';
      }else{
        way = '';
      }
    }
    this.setData({
      way: way
    })
    // console.log(way);

    //移动与合并
    //移动
    var num = this.data.num;
    var row0 = this.data.row0;
    var row1 = this.data.row1;
    var row2 = this.data.row2;
    var row3 = this.data.row3;
    var col0 = this.data.col0;
    var col1 = this.data.col1;
    var col2 = this.data.col2;
    var col3 = this.data.col3;
    //从行的信息中得到列的信息
    col0 = [row0[0],row1[0],row2[0],row3[0]];
    col1 = [row0[1],row1[1],row2[1],row3[1]];
    col2 = [row0[2],row1[2],row2[2],row3[2]];
    col3 = [row0[3],row1[3],row2[3],row3[3]];
    this.setData({
      col0: col0,
      col1: col1,
      col2: col2,
      col3: col3,
    })
    // console.log("行：");
    // console.log(row0,row1,row2,row3);
    // console.log("列：");
    // console.log(col0,col1,col2,col3);
    var x0 = [];//记录一行中的所有0
    var y0 = [];//记录一行中的所有非0值
    var x1 = [];
    var y1 = [];
    var x2 = [];
    var y2 = [];
    var x3 = [];
    var y3 = [];
    for(var i = 0;i<4;i++){
      if(row0[i]==0){
        x0.push(row0[i])
      }else if(row0[i]!=0){
        y0.push(row0[i])
      }
      if(row1[i]==0){
        x1.push(row1[i])
      }else if(row1[i]!=0){
        y1.push(row1[i])
      }
      if(row2[i]==0){
        x2.push(row2[i])
      }else if(row2[i]!=0){
        y2.push(row2[i])
      }
      if(row3[i]==0){
        x3.push(row3[i])
      }else if(row3[i]!=0){
        y3.push(row3[i])
      }
    }
    var xx0 = [];//记录一列中的所有0
    var yy0 = [];//记录一列中的所有非0值
    var xx1 = [];
    var yy1 = [];
    var xx2 = [];
    var yy2 = [];
    var xx3 = [];
    var yy3 = [];
    for(var i = 0;i<4;i++){
      if(col0[i]==0){
        xx0.push(col0[i])
      }else if(col0[i]!=0){
        yy0.push(col0[i])
      }
      if(col1[i]==0){
        xx1.push(col1[i])
      }else if(col1[i]!=0){
        yy1.push(col1[i])
      }
      if(col2[i]==0){
        xx2.push(col2[i])
      }else if(col2[i]!=0){
        yy2.push(col2[i])
      }
      if(col3[i]==0){
        xx3.push(col3[i])
      }else if(col3[i]!=0){
        yy3.push(col3[i])
      }
    }
    if('left'==way){
      row0 = y0.concat(x0);
      row1 = y1.concat(x1);
      row2 = y2.concat(x2);
      row3 = y3.concat(x3);
    }else if('right'==way){
      row0 = x0.concat(y0);
      row1 = x1.concat(y1);
      row2 = x2.concat(y2);
      row3 = x3.concat(y3);
    }else if('top'==way){
      col0 = yy0.concat(xx0);
      col1 = yy1.concat(xx1);
      col2 = yy2.concat(xx2);
      col3 = yy3.concat(xx3);
    }else if('bottom'==way){
      col0 = xx0.concat(yy0);
      col1 = xx1.concat(yy1);
      col2 = xx2.concat(yy2);
      col3 = xx3.concat(yy3);
    }
    if('top'==way||'bottom'==way){
      row0 = [col0[0],col1[0],col2[0],col3[0]];
      row1 = [col0[1],col1[1],col2[1],col3[1]];
      row2 = [col0[2],col1[2],col2[2],col3[2]];
      row3 = [col0[3],col1[3],col2[3],col3[3]];
    }else if('left'==way||'right'==way){
      col0 = [row0[0],row1[0],row2[0],row3[0]];
      col1 = [row0[1],row1[1],row2[1],row3[1]];
      col2 = [row0[2],row1[2],row2[2],row3[2]];
      col3 = [row0[3],row1[3],row2[3],row3[3]];
    }
    //数组合并
    num = row0.concat(row1).concat(row2).concat(row3);
    this.setData({
      num: num,
      row0: row0,
      row1: row1,
      row2: row2,
      row3: row3,
      col0: col0,
      col1: col1,
      col2: col2,
      col3: col3,
    })
    // console.log(num,row0,row1,row2,row3,col0,col1,col2,col3);

    //合并
      if('left'==way){
        row0 = this.compareL(row0);
        row1 = this.compareL(row1);
        row2 = this.compareL(row2);
        row3 = this.compareL(row3);
      }else if('right'==way){
        row0 = this.compareR(row0);
        row1 = this.compareR(row1);
        row2 = this.compareR(row2);
        row3 = this.compareR(row3);
      }else if('top'==way){
        col0 = this.compareL(col0);
        col1 = this.compareL(col1);
        col2 = this.compareL(col2);
        col3 = this.compareL(col3);
      }else if('bottom'==way){
        col0 = this.compareR(col0);
        col1 = this.compareR(col1);
        col2 = this.compareR(col2);
        col3 = this.compareR(col3);
      }
    // console.log(num,row0,row1,row2,row3);
    
    if('top'==way||'bottom'==way){
      row0 = [col0[0],col1[0],col2[0],col3[0]];
      row1 = [col0[1],col1[1],col2[1],col3[1]];
      row2 = [col0[2],col1[2],col2[2],col3[2]];
      row3 = [col0[3],col1[3],col2[3],col3[3]];
    }else if('left'==way||'right'==way){
      col0 = [row0[0],row1[0],row2[0],row3[0]];
      col1 = [row0[1],row1[1],row2[1],row3[1]];
      col2 = [row0[2],row1[2],row2[2],row3[2]];
      col3 = [row0[3],row1[3],row2[3],row3[3]];
    }
    //数组合并
    num = row0.concat(row1).concat(row2).concat(row3);
    this.setData({
      num: num,
      row0: row0,
      row1: row1,
      row2: row2,
      row3: row3,
      col0: col0,
      col1: col1,
      col2: col2,
      col3: col3,
    })

    //得到当前最大的数值
    var score = this.data.score;
    score = this.score(num);
    this.setData({
      score: score
    })


    if('left'==way||'right'==way||'top'==way||'bottom'==way){
      //在值为0的位置生成新的2或4
      var place = [];
      for(var i = 0;i<16;i++){
        if(num[i]==0){
          place.push(i);
        }
      }
      console.log(place,place.length);
      if(place.length==0){
        // console.log("游戏结束");
        wx.showToast({  
          title: '无法移动', 
          icon: 'none', 
          duration: 2000,
          mask: true,
      })  
      }else{
        var where = Math.floor(Math.random()*place.length);
        var value = Math.floor(Math.random()*2+1)*2;
        num[place[where]] = value;
        //数组拆分
        row0 = num.slice(0,4);
        row1 = num.slice(4,8);
        row2 = num.slice(8,12);
        row3 = num.slice(12,16);
        col0 = [row0[0],row1[0],row2[0],row3[0]];
        col1 = [row0[1],row1[1],row2[1],row3[1]];
        col2 = [row0[2],row1[2],row2[2],row3[2]];
        col3 = [row0[3],row1[3],row2[3],row3[3]];
        this.setData({
          num: num,
          row0: row0,
          row1: row1,
          row2: row2,
          row3: row3,
          col0: col0,
          col1: col1,
          col2: col2,
          col3: col3,
        })
      }
    }
    
  },

  score: function(arr){
    var success = this.data.success;
    var max = arr[0];
    for(var i = 0;i<arr.length;i++){
      if(arr[i]>max){
        max = arr[i];
      }
    }
    if(!success){
      if(max==2048){
        success = true;
        this.setData({
          success: success
        })
        wx.showModal({  
          title: '提示',  
          content: '！已达到2048 ！',  
          confirmText: '继续',
          confirmColor: '#ADC673',
          cancelText: '结束',
          cancelColor: '#FAAB44',
          success: function(res) {  
              if (res.confirm) {  
              // console.log('用户点击继续')  
              } else if (res.cancel) {  
                wx.navigateTo({
                  url:'../2048/index',
                })
              }  
          }  
        })  
      }
    }
    return max;
  },

  compareL: function(arr){
    var array1 = [];
    if(arr[0]==arr[1]&&arr[2]==arr[3]){
      array1.push(arr[0]+arr[1]);
      array1.push(arr[2]+arr[3]);
      array1.push(0,0);
    }else if(arr[0]==arr[1]&&arr[2]!=arr[3]){
      array1.push(arr[0]+arr[1]);
      array1.push(arr[2]);
      array1.push(arr[3]);
      array1.push(0);
    }else if(arr[0]!=arr[1]&&arr[1]==arr[2]){
      array1.push(arr[0]);
      array1.push(arr[1]+arr[2]);
      array1.push(arr[3]);
      array1.push(0);
    }else if(arr[0]!=arr[1]&&arr[1]!=arr[2]&&arr[2]==arr[3]){
      array1.push(arr[0]);
      array1.push(arr[1]);
      array1.push(arr[2]+arr[3]);
      array1.push(0);
    }else if(arr[0]!=arr[1]&&arr[1]!=arr[2]&&arr[2]!=arr[3]){
      array1.push(arr[0]);
      array1.push(arr[1]);
      array1.push(arr[2]);
      array1.push(arr[3]);
    }
    return array1;
  },
  compareR: function(arr){
    var array1 = [];
    if(arr[3]==arr[2]&&arr[1]==arr[0]){
      array1.push(0,0);
      array1.push(arr[0]+arr[1]);
      array1.push(arr[2]+arr[3]);
    }else if(arr[3]==arr[2]&&arr[1]!=arr[0]){
      array1.push(0);
      array1.push(arr[0]);
      array1.push(arr[1]);
      array1.push(arr[2]+arr[3]);
    }else if(arr[3]!=arr[2]&&arr[2]==arr[1]){
      array1.push(0);
      array1.push(arr[0]);
      array1.push(arr[1]+arr[2]);
      array1.push(arr[3]);
    }else if(arr[3]!=arr[2]&&arr[2]!=arr[1]&&arr[1]==arr[0]){
      array1.push(0);
      array1.push(arr[0]+arr[1]);
      array1.push(arr[2]);
      array1.push(arr[3]);
      
    }else if(arr[3]!=arr[2]&&arr[2]!=arr[1]&&arr[1]!=arr[0]){
      array1.push(arr[0]);
      array1.push(arr[1]);
      array1.push(arr[2]);
      array1.push(arr[3]);
    }
    return array1;
  },

  //重新开始
  Restart: function(){
    wx.navigateTo({
      url:'../2048/index',
    })
  },

  //初始化
  onReady: function () {
    var first = this.data.first;
    var num = this.data.num;
    var row0 = this.data.row0;
    var row1 = this.data.row1;
    var row2 = this.data.row2;
    var row3 = this.data.row3;
    row0 = [0,0,0,0];
    row1 = [0,0,0,0];
    row2 = [0,0,0,0];
    row3 = [0,0,0,0];
    num = row0.concat(row1).concat(row2).concat(row3);
    this.setData({
      num: num,
      row0: row0,
      row1: row1,
      row2: row2,
      row3: row3,
    })
    //初始化，随机生成两个2或4
    var x = Math.floor(Math.random()*15);
    var startV1 = Math.floor(Math.random()*2+1)*2;
    var y = Math.floor(Math.random()*15);
    var startV2 = Math.floor(Math.random()*2+1)*2;
    if(x==y){
      y = Math.floor(Math.random()*15);
    }else{
      y = y;
    }
    num[x] = startV1;
    num[y] = startV2;
    row0 = num.slice(0,4);
    row1 = num.slice(4,8);
    row2 = num.slice(8,12);
    row3 = num.slice(12,16);
    // console.log(row0,row1,row2,row3);
    var loading = this.data.loading;
    loading = true;
    this.setData({
      num: num,
      row0: row0,
      row1: row1,
      row2: row2,
      row3: row3,
      loading: loading
    });

    //计时器
    if(first){
      var time = this.data.time;
      var hour = parseInt(time.substring(0,2));
      var minute = parseInt(time.substring(3,5));
      var second = parseInt(time.substring(6,8));
      var time1 = '';
      var time2 = '';
      var time3 = '';
      this.setData({
        time: time,
      })
      setInterval(()=>{
        second++;
        if(second<10){
          time3 = '0'+second;
        }else if(second==60){
          second = 0;
          time3 = '0'+second;
          minute++;
        }else{
          time3 = second;
        }
        if(minute<10){
          time2 = '0'+minute;
        }else if(minute==60){
          minute = 0;
          time2 = '0'+minute;
          hour++;
        }else{
          time2 = minute;
        }
        if(hour<10){
          time1 = '0'+hour;
        }else{
          time1 = hour;
        }
        time = time1+':'+time2+':'+time3;
        this.setData({
          time: time,
          hour: hour,
          minute: minute,
          second: second,
          time1: time1,
          time2: time2,
          time3: time3
        })
      },1000);
    }
      
  },

})