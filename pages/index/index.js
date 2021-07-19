Page({ 
  data: {  
    tabs:[
      {
        id:0,
        name:"游戏",
        isActive:true
      },
      {
        id:1,
        name:"动效",
        isActive:false
      },
    ],
    checkedList:[]
  },  
 //自定义事件，用来接收子组件传递的数据的
 handleItemChange(e){
    //接收传递过来的参数
    const {index} = e.detail;
    let tabs = JSON.parse(JSON.stringify(this.data.tabs));
    tabs.forEach((v,i)=>i===index?v.isActive=true:v.isActive=false);
    this.setData({
      tabs
    })
  }
})