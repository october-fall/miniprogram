Page({
  data: {
    arr:[1,8,3,4,5,6,7,8,9],
    
  },
 
  onLoad: function(){
    /*var arr = this.data.arr;
    //有一个函数f(x)=x2，要把这个函数作用在一个数组[1, 2, 3, 4, 5, 6, 7, 8, 9]上，就可以用map实现
    var results1 = arr.map((x) => x*x); */
    //reduce()把一个函数作用在这个Array的[x1, x2, x3...]上
    //这个函数必须接收两个参数，reduce()把结果继续和序列的下一个元素做累积计算
    /*var results2 = arr.reduce((x,y) => x*y); 
    console.log(results1);//返回的是一个新数组
    console.log(results2);*/
    //filter也是一个常用的操作，它用于把Array的某些元素过滤掉，然后返回剩下的元素。
    //filter()把传入的函数依次作用于每个元素，然后根据返回值是true还是false决定保留还是丢弃该元素。
    /*var results3 = arr.filter((x) => x%2!=0); 
    console.log(results3);//返回的是一个新数组*/
    //Array的sort()方法就是用于排序的
    /*var results4 = arr.sort((x,y) => {
      if(x>y){
        return 1;
      }
      if(x<y){
        return -1;
      }
      if(x==y){
        return 0;
      }
    }
    );
    console.log(results4);*/
    //every()方法可以判断数组的所有元素是否满足测试条件
    /*var results5 = arr.every((x)=> x>5)
    console.log(results5);*/
    //find()方法用于查找符合条件的第一个元素，如果找到了，返回这个元素，否则，返回undefined
    /*var results6 = arr.find((x)=> x>5)
    console.log(results6);*/
    //findIndex()和find()类似，也是查找符合条件的第一个元素
    //不同之处在于findIndex()会返回这个元素的索引，如果没有找到，返回-1
    /*var results7 = arr.findIndex((x)=> x>5)
    console.log(results7);*/
    //forEach()和map()类似，它也把每个元素依次作用于传入的函数，但不会返回新的数组。
    //forEach()常用于遍历数组，因此，传入的函数不需要返回值
    //arr.forEach(console.log); 

    //generator和函数不同的是
    //generator由function*定义，并且，除了return语句，还可以用yield返回多次

    /*
    var now = new Date();
    console.log(now);
    console.log(now.getFullYear(),now.getMonth(),now.getDate(),now.getDay()); 
    console.log(now.getHours(),now.getMinutes(),now.getSeconds(),now.getMilliseconds()); 
    console.log(now.getTime());//返回一个时间戳
    var d = new Date(now.getTime());//从时间戳获取时间
    console.log(d,d.getMonth());
    */
    
    //正则表达式中，如果直接给出字符，就是精确匹配。
    //用\d可以匹配一个数字，\w可以匹配一个字母或数字, .可以匹配任意字符,
    //用*表示任意个字符（包括0个），用+表示至少一个字符，用?表示0个或1个字符
    //用{n}表示n个字符，用{n,m}表示n-m个字符V
    //[0-9a-zA-Z\_]+可以匹配至少由一个数字、字母或者下划线组成的字符串
    //A|B可以匹配A或B，所以(J|j)ava(S|s)cript可以匹配'JavaScript'、'Javascript'、'javaScript'或者'javascript'
    //^表示行的开头，^\d表示必须以数字开头。$表示行的结束，\d$表示必须以数字结束。

    //JavaScript有两种方式创建一个正则表达式：
    //第一种方式是直接通过/正则表达式/写出来
    //var re1 = /ABC\-001/;
    //第二种方式是通过new RegExp('正则表达式')创建一个RegExp对象。(因为字符串的转义问题，字符串的两个\\实际上是一个\)
    /*
    var re2 = new RegExp('ABC\\-001');
    console.log(re1,re2);
    var re = /^\d{3}\-\d{3,8}$/;
    console.log(re.test('010-12345'),re.test('010-1234x'),re.test('010 12345'));// true false false
    */
    //把任何JavaScript对象变成JSON，就是把这个对象序列化成一个JSON格式的字符串，这样才能够通过网络传递给其他计算机。
    //如果我们收到一个JSON格式的字符串，只需要把它反序列化成一个JavaScript对象，就可以在JavaScript中直接使用这个对象了。


/* 面向对象编程
    原型对象:
    var Student = {
      name: 'Robot',
      height: 1.2,
      run: function () {
          console.log(this.name + ' is running...');
      }
    };
    function createStudent(name) {
      基于Student原型创建一个新对象:
      var s = Object.create(Student);
      初始化新对象:
      s.name = name;
      return s;
    }
    var xiaoming = createStudent('小明');
    xiaoming.run(); // 小明 is running...
    xiaoming.__proto__ === Student; // true*/


}

  





})