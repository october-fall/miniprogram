Component({
  // 接收 父向子传递的数据
  properties: {
    //要接收的数据的名称 要接收的数据的类型 默认值
    tabs:{
      type:Array,
      value:""
    }
  },
  data: {
    
  },
  methods: {
    //1. 绑定点击事件 需要在method中绑定
    handleItemTap(e){
      /* 
        获取被点击的索引
        点击事件触发的时候 触发父组件中的自定义事件 同时传递数据给父组件
        this.triggerEvent("父组件中自定义事件的名称",要传递的参数)
      */
      const {index} = e.currentTarget.dataset;
      this.triggerEvent("itemChange",{index});
    }
  }
})
