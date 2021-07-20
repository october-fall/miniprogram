Page({
  data: {
    flag:''
  },

  change: function(){
    var flag = this.data.flag;
    if(flag){
      flag = false;
    }else{
      flag = true;
    }
    this.setData({
      flag: flag
    })
  }
})