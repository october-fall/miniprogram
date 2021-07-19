// pages/type/type.js
Page({
  data:{
    placeholder:'节气歌',
    placeholders:[{
      id: 0,
      value: '春雨惊春清谷天'
    },{
      id: 1,
      value: '夏满芒夏暑相连'
    },{
      id: 2,
      value: '秋处露秋寒霜降'
    },{
      id: 3,
      value: '冬雪雪冬小大寒'
    }],
    id: 0
  },

  onLoad: function(){
    var id = this.data.id;
    setInterval(() => {
      var placeholder = this.data.placeholder;
      var placeholders = this.data.placeholders;
      placeholder = placeholders[id].value;
      this.setData({
        placeholder: placeholder
      })
      if(placeholders.length-1 === id){
        id = 0;
      }else{
        id = id+1;
      }
    },5000);
  }

})