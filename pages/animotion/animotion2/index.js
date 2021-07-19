const moveDistance = 100 //滑动距离
Page({ 
  data: {  
    messages:[{
      id: 0,
      value: '哈哈哈哈哈哈哈哈哈'
    }
  ],
    message: '',
    getInput: '',

    selIndex: -1,
    startPageX: '',
  },  

  remove: function(e){
    let messages = this.data.messages;
    let selIndex = this.data.selIndex;
    console.log(selIndex);
    console.log(messages);
    delete messages[selIndex];
    this.setData({
      messages: messages,
    })
    console.log(messages[selIndex]);
    this.setData({
      selIndex: -1
    })
    console.log(selIndex);
  },

  //获取输入的内容
  getInput: function(e){
    let message = e.detail.value;
    this.setData({
      message: message
    })
    //console.log(message);
  },
  //内容不为空时，把内容输出
  submit: function(){
    let messages = this.data.messages;
    let id = messages.length;
    let message = this.data.message;
    //console.log(id,message,''!=message);
    if(''!=message){
      messages.push({
        id: id,
        value: message
      });
      this.setData({
        messages: messages,
        message: ''
      })
    }
  },

  // startPageX 点击的开始点的x坐标 
  startInfo(e) {
    let {
      pageX
     } = e.touches[0]
    this.data.startPageX = pageX
  },
 
  moveInfo(e) {
    // pageX 松开那一刻的x坐标
    let {
      pageX
    } = e.touches[0]
    //index 选中的是哪一条消息
    let {
      index
    } = e.currentTarget.dataset
    // console.log(index)
    //获取目前的点击开始点x坐标 和 状态值-1
    let {
      startPageX,
      selIndex,
    } = this.data
    // console.log(startPageX,selIndex)
    //如果没有点击的话 就返回
    if (!startPageX) return
    //点击了
    //如果  状态值 不等于 目前选中的index
    //且  点击点x-停止点x > moveDistance    实现左滑
    //即：没有元素被左滑的情况下  滑动一个元素且滑动长度达到要求     实现左滑效果
    if (startPageX - pageX > moveDistance && selIndex != index) {
      // console.log(selIndex,index,selIndex!=index);
      this.setData({
        selIndex: index
      })
      // console.log("左滑");
      // console.log(selIndex,index,selIndex!=index);
      return
    }
    //如果  状态值 不等于 -1  
    //且  状态值 等于 被点中元素的index
    //且  停止点x-点击点x > moveDistance    实现恢复
    //即：有元素被左滑 
    //    且当前滑动元素id等于记录的被左滑元素的id  
    //    且滑动长度达到要求     实现恢复效果
    if (pageX - startPageX > moveDistance && selIndex != -1 && selIndex == index) {
      // console.log(selIndex,index,selIndex!=index);
      this.setData({
        selIndex: -1
      })
      // console.log("恢复");
      // console.log(selIndex,index,selIndex!=index);
      return
    }
  }
})