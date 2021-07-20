Page({
  data: {
    loading: false,
    score: 0,
    time: "00:00:00",
    nums: [],
    num: [{
      id: 0,
      row: 0,
      col: 0,
      value: 0
    },{
      id: 1,
      row: 0,
      col: 1,
      value: 0
    },{
      id: 2,
      row: 0,
      col: 2,
      value: 0
    },{
      id: 3,
      row: 0,
      col: 3,
      value: 0
    },{
      id: 4,
      row: 1,
      col: 0,
      value: 0
    },{
      id: 5,
      row: 1,
      col: 1,
      value: 0
    },{
      id: 6,
      row: 1,
      col: 2,
      value: 0
    },{
      id: 7,
      row: 1,
      col: 3,
      value: 0
    },{
      id: 8,
      row: 2,
      col: 0,
      value: 0
    },{
      id: 9,
      row: 2,
      col: 1,
      value: 0
    },{
      id: 10,
      row: 2,
      col: 2,
      value: 0
    },{
      id: 11,
      row: 2,
      col: 3,
      value: 0
    },{
      id: 12,
      row: 3,
      col: 0,
      value: 0
    },{
      id: 13,
      row: 3,
      col: 1,
      value: 0
    },{
      id: 14,
      row: 3,
      col: 2,
      value: 0
    },{
      id: 15,
      row: 3,
      col: 3,
      value: 0
    }],
    startX: 0,
    startY: 0,
    endX: 0,
    endY: 0,
    direction: 0,
    way: '',
    row0: [0,0,0,0],
    row1: [0,0,0,0],
    row2: [0,0,0,0],
    row3: [0,0,0,0],
    col0: [0,0,0,0],
    col1: [0,0,0,0],
    col2: [0,0,0,0],
    col3: [0,0,0,0],
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

    var num = this.data.num;
    var nums = this.data.nums;
    var row0 = this.data.row0;
    var row1 = this.data.row1;
    var row2 = this.data.row2;
    var row3 = this.data.row3;
    var col0 = this.data.col0;
    var col1 = this.data.col1;
    var col2 = this.data.col2;
    var col3 = this.data.col3;
    for(var i = 0;i<num.length;i++){
      if(num[i].value!=0){
        nums.push({
          id: num[i].id,
          row: num[i].row,
          col: num[i].col,
          value: num[i].value});
      }
    };
    for(var i = 0;i<nums.length;i++){
      console.log(nums[i]);
      if(nums[i].row==0){
        row0[nums[i].col] = nums[i].value;
      }else if(nums[i].row==1){
        row1[nums[i].col] = nums[i].value;
      }else if(nums[i].row==2){
        row2[nums[i].col] = nums[i].value;
      }else if(nums[i].row==3){
        row3[nums[i].col] = nums[i].value;
      }
      if(nums[i].col==0){
        col0[nums[i].row] = nums[i].value;
      }else if(nums[i].col==1){
        col1[nums[i].row] = nums[i].value;
      }else if(nums[i].col==2){
        col2[nums[i].row] = nums[i].value;
      }else if(nums[i].col==3){
        col3[nums[i].row] = nums[i].value;
      }
    };
    console.log(row0,row1,row2,row3);
    console.log(col0,col1,col2,col3);

    if(way=='left'){
      for(var i = 0;i<4;i++){
        if(row0[i]!=0){
          console.log(i);
        }
      }
    }
      




  },



  onLoad: function () {

  },
  onReady: function () {
    var x = Math.floor(Math.random()*15);
    var startV1 = Math.floor(Math.random()*2+1)*2;
    var num = this.data.num;
    var y = Math.floor(Math.random()*15);
    if(x==y){
      y = Math.floor(Math.random()*15);
    }
    var startV2 = Math.floor(Math.random()*2+1)*2;
    num[x].value = startV1;
    num[y].value = startV2;
    var loading = this.data.loading;
    loading = true;
    this.setData({
      num: num,
      loading: loading
    });


    var time = this.data.time;

      var hour = parseInt(time.substring(0,2));
      var minute = parseInt(time.substring(3,5));
      var second = parseInt(time.substring(6,8));
      var time1 = '';
      var time2 = '';
      var time3 = '';
      
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
          time: time
        })
      },1000);


  },

  onShow: function () {
  },

  onHide: function () {
  },

  onUnload: function () {

  },

  onPullDownRefresh: function () {

  },

  onReachBottom: function () {

  },

  onShareAppMessage: function () {

  }
})