---
 typora-root-url: assets
---

# 第七章 jQyery基础

# 一.jQuery介绍

## ①定义

- 对js方法的再次封装, 它封装了一些方法,方便我们将数据写入到页面当中
- 它是免费的,开源的Javascript函数库,极大的简化了JavaScript编程

## ②作用/优点

- 和js一样都是负责网页行为操作, 增加网页和用户的交互效果
- 不同的是 , jQuery将js操作处理后的数据写入到页面 , 简化了js编程,jQuery实现交互效果更简单
- 开源免费
- 兼容主流浏览器, 代码编写更加简单

## ③简单的前端框架

Vue

react

# 二.jQuery基本使用

## 1.引入方式

`<script src="路径地址"></script>`

- 本地引入
- 线上引入(推荐)

### ①使用方法

- 选中标签$
- 选择方法.
- 写入要在标签中写入的代码(字符串形式)

### ②基本使用

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>jQuery使用</title>
    <!-- 引入jQuery方法 -->
    <!-- 线上引入:必须要有网络 -->
    <script src="https://cdn.bootcdn.net/ajax/libs/jquery/1.12.4/jquery.js"></script>

    <!-- jQuery的使用 -->
    <script>
        window.onload = function(){
            // 编写jQuery代码
            // 将p标签数据写入div标签
            // 先选中div标签,在通过html方法写入
            var data = '这是一个段落111'
            $('div').html('<p>'+data+'</p>') // 字符串拼接
            // $('div').html('<span>你好!</span>')  // 只能显示一个为什么?因为html写入会覆盖掉原来的数据
        }
    </script>
</head>
<body>
    <div>

    </div>
</body>
</html>
```

![1647667598258](/1647667598258.png)



### ③.简写形式使用jQuery方法

```html
...
<script src="https://cdn.bootcdn.net/ajax/libs/jquery/1.12.4/jquery.js"></script>
<script>
    $(function(){
        // 写jQuery方法 css可以进行样式控制
        $('p').css({color:'red'})
    })
</script>
...
<body>
    <p>段落</p>
</body>
...
```

![1647668176158](/1647668176158.png)

## 2.选择器使用

- 标签选择器
- 类选择器
- id选择器
- 层级选择器
- 过滤选择
  - has
    - 找到一个标签(多个),里面包含xx标签的
  - eq
    - eq选择第几个标签(多个相同标签情况下)(下标从0开始)

```html
...
	<script src="https://cdn.bootcdn.net/ajax/libs/jquery/1.12.4/jquery.js">
	</script>
    <script>
        $(function(){
            // 标签选择器
            $('p').css({color:'red'})
            // 类选择器
            $('.box1').html('<h1>'+'第一行:使用类选择器'+'</h1>')
            $('.box1').css({color:'red'})
            // id选择器
            $('#link1').html('<h2>'+'第二行:使用id选择器'+'</h2>')
            $('#box1').css({color:'green'})
            // 层级选择器
            $('.box2 #link2').css({color:'blue'})
            $('.box2 span').css({color:'gold'})
            // 过滤选择
            $('div').has('h1').css({color:'pink'})
            $('div').eq(1).css({color:'pink'})
        })
    </script>
...
<body>
    <div class="box1"></div>
    <p>使用标签选择器的段落</p>

    <!-- jQuery选择器 -->
    <div id="link1"></div>
    <div class="box2">
        <p id="link2">层级选择器:div下面的段落标签</p>
        <span>层级选择器div下面的文本行标签</span>
    </div>
    <div>
        <h1>div下面h1标签:has过滤</h1>
    </div>
</body>
```

![1647672081738](/1647672081738.png)

![1647673045752](/1647673045752.png)

## 3.数据写入

- html
  - 会覆盖原有标签下的内容
- append
  - 不改变原有标签下的数据,追加到原内容后面

```html
<script src="https://cdn.bootcdn.net/ajax/libs/jquery/1.12.4/jquery.js">
</script>
<script>
        $(function(){
        $('#box5').html('新写入的div数据')  //覆盖掉了
        $('#box5').append('新写入的div数据2') //追加到后面,不改变原标签内部的内容
        })
</script>
<body>
    <div id="box5">
        原有div数据
    </div>
</body>
```

![1647673815770](/1647673815770.png)

## 4.标签属性值操作

- 获取
- 修改
- 添加

```html
<script src="https://cdn.bootcdn.net/ajax/libs/jquery/1.12.4/jquery.js">
</script>
<script>
            $(function(){
            // 标签属性值操作
            // 获取属性值prop
            $('a').prop('href')  // 若用alert弹出则能得到百度网址
            // 属性的修改和添加,添加属性值,若原有属性值存在修改,不存在则添加
            $('a').prop({href:'https://www.jd.com'})
        })
</script>
<body>
        <a href="http://www.baidu.com"></a>
</body>
```

![1647674500732](/1647674500732.png)

## 5.事件处理

- 常用的jQuery事件
  - click()鼠标单击
    - 通常为按钮操作
  - blur()元素失去焦点
    - val获取input标签中的数据

```html
...     
<script src="https://cdn.bootcdn.net/ajax/libs/jquery/1.12.4/jquery.js"></script>
<script>       
            $(function(){
            // 用户事件处理
            function myfunc(){
                alert('点击事件触发')
            }
            function myfunc1(){
                alert('失去焦点事件触发')
                // input标签中数据的获取
                var data = $('.ip2').val()
                alert(data)  // 请输入1235 // 会追加
            }
            // 选择需要出发点击事件的标签
            // input表标签被点击时执行myfunc方法
            $('.ip1').click(myfunc)
            $('.ip2').blur(myfunc1)
             
        }) 
</script>
...
<body>
    <!-- 事件处理 -->
    <input type="button" value="按钮" class="ip1">
    <input type="text" value="请输入" class="ip2">
</body>
```

![1647675653617](/1647675653617.png)

![1647676036613](/1647676036613.png)

![1647676664227](/1647676664227.png)

# 三.JavaScript的数据对象

- 内部
  - 可以定义变量
  - 可以定义函数
- 修改数据
- 添加数据

```html
...     
<script src="https://cdn.bootcdn.net/ajax/libs/jquery/1.12.4/jquery.js"></script>
<script> 
    $(function(){
                    // js数据对象
            var a={
                name:'python',
                age:20,
                myfunc3:function(){
                    alert('myfunc3方法被执行')  //myfunc3方法被执行
                }
            }
            alert(a.age) // 20
            a.myfunc3()
            // 修改数据
            a.age = 22
            alert(a.age)  // 22
            // 添加数据
            a.num = 187
             alert(a.num)  // 187
        })
        
</script> 
<body>
</body>
```

# 四.json

> json数据类型, 是将js数据对象转换为字符串
>
> - > ①json数据格式:var 变量名=' {" key " : " value "} '
>   >
>   > 引号内类似于python中的字典,方便前后端的交互
>   >
>   > ②转化为js:var 变量名1 = JSON.parse(变量名)
>
> - 想要获取对象内的元素
>   - 将json数据转换为js数据

```javascript
var b = '{"name":"Python"}'
var b_obj = JSON.parse(b)
alert(b_obj.name)  // 弹出检测 结果显示python
```

# 五. ajax

## 完整的ajax的请求

- 发送请求
- 获取数据
- 提取数据
- 写入页面

## 1.聚合数据网站的使用

https://www.juhe.cn

①注册-实名认证

②免费API--天气预报--了解详情--立即申请

![1647680691582](/1647680691582.png)

③数据中心--我的API--空气质量

④测试-查看返回的内容

## 2.ajax介绍以及作用

- ajax是Asynchronous Javascript and XML(非同步的js和扩展标记语言)的简写
- 它可以让js发送异步的http请求,与后台通信进行数据的获取
- ajax优点是实现局部刷新,ajax可以发送http请求,当获取到后台数据的时候更新页面显示数据局部更新

> 当前端页面想和后台服务器进行数据交互就可以使用ajax

> 在html页面使用ajax需要在Web服务器环境下运行,一般向自己的Web服务器发送ajax请求

## 3.ajax的使用

> jQuery将它封装成了一个方法$.ajax()
>
> 我们可以直接用这个方法执行ajax请求

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ajax请求三方服务数据</title>
    <script src="https://cdn.bootcdn.net/ajax/libs/jquery/1.12.4/jquery.js"></script>
    <script>
        // 使用jQuery方法
        $(function(){
            // 发送get请求
            // url: string请求的地址, 
            // success?:参数处理成功的方法
            $.get('http://api-toutiao-web.itheima.net/app/v1_1/articles?timestamp=1556789000001&channel_id=0&with_top=1',function(data,status){
                // date 返回的数据(json数据)
                // status 返回的状态码(比如success)
                // 输出终端打印 在浏览器console中显示输出信息
                console.log(data)
                console.log(status)
            }).error(function(){
                // 如果请求失败了,会执行err方法中的业务
                console.log(data)
            })
        })
    </script>
</head>
<body>
    
</body>
</html>
```

![1647691914392](/1647691914392.png)

![1647691937359](/1647691937359.png)

## 4.数据的提取以及层层解析

> data只是接受了返回结果
>
> 下面我们取值

### ①取值步骤

- 先从返回结果中取出数据内容中的data
- 再取data中的results(.)
- 将result数组取出来, 并且遍历出每个内容
- 再从每个内容中去取出(.)的值(根据key)

### ②代码实现

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ajax请求三方服务数据</title>
    <script src="https://cdn.bootcdn.net/ajax/libs/jquery/1.12.4/jquery.js"></script>
    <script>
        // 使用jQuery方法
        $(function(){
            // 发送get请求
            // url: string请求的地址, 
            // success?:参数处理成功的方法
            $.get('http://api-toutiao-web.itheima.net/app/v1_1/articles?timestamp=1556789000001&channel_id=0&with_top=1',function(data,status){
                // date 返回的数据(json数据)
                // status 返回的状态码(比如success)
                // 输出终端打印 在浏览器console中显示输出信息
                console.log('输出终端')
                console.log(data)
                console.log(status)
                console.log('从返回结果中取值')
                console.log(data.data.results)  //他是一个数组

                // 取出数组中的值
                var res_data = data.data.results

                // 遍历数据循环
                for(var index = 0; index < res_data.length; index++){
                    res_data[index]
                    console.log('取出数组的值')
                    console.log(res_data[index])
                    console.log('取出标题信息')
                    console.log(res_data[index].title)
                }

            }).error(function(){
                // 如果请求失败了,会执行err方法中的业务
                console.log(data)
            })  
        })
    </script>
</head>
<body>   
</body>
</html>
```

### ③图片解析

![1647692397487](/1647692397487.png)

![1647692863399](/1647692863399.png)

![1647693013642](/1647693013642.png)

### ④对比python中的数据解析

- 取值方法不同
  - pyhon中是字典 , 字典取值用[索引]或者是[key]
  - 前端当中字典是一个对象 , 对象用'.'取值
- for循环遍历不同

![1647694145598](/1647694145598.png)

## 5.动态写入数据

> 将服务器里的数据写入到页面中

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ajax请求三方服务数据</title>
    <script src="https://cdn.bootcdn.net/ajax/libs/jquery/1.12.4/jquery.js"></script>
    <script>
        // 使用jQuery方法
        $(function(){
            // 发送get请求
            // url: string请求的地址, 
            // success?:参数处理成功的方法
            $.get('http://api-toutiao-web.itheima.net/app/v1_1/articles?timestamp=1556789000001&channel_id=0&with_top=1',function(data,status){
                // date 返回的数据(json数据)
                // status 返回的状态码(比如success)
                // 输出终端打印 在浏览器console中显示输出信息
                console.log('输出终端')
                console.log(data)
                console.log(status)
                console.log('从返回结果中取值')
                console.log(data.data.results)  //他是一个数组

                // 取出数组中的值
                var res_data = data.data.results

                // 遍历数据循环
                for(var index = 0; index < res_data.length; index++){
                    res_data[index]
                    console.log('取出数组的值')
                    console.log(res_data[index])
                    console.log('取出标题信息')
                    console.log(res_data[index].title)

                    var title = res_data[index].title
                    // 将取出的title值动态的写入页面
                    $('ul').append('<li>'+title+'</li>')

                }
            }).error(function(){
                // 如果请求失败了,会执行err方法中的业务
                console.log(data)
            })
        })
    </script>
</head>
<body>
    <!-- 无序列表展示 -->
    <ul>
    </ul>
</body>
</html>
```



![1647694903587](/1647694903587.png)

![1647694878654](/1647694878654.png)

![1647752982540](/1647752982540.png)