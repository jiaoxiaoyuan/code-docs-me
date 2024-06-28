---
typora-root-url: assets
---

# 第六章 Javascript基础

# 一.js介绍

## ①JavaScript的定义

- Javascript是运行在浏览器端的脚本语言 , 是由浏览器解释执行的,简称js
- 前端开发的三大块:
  - HTML:负责网页结构
  - CSS:负责网页样式
  - Javascript:负责网页行为,比如:网页与用户的交互

# 二.js的使用方法

### ①js注释

```javascript
// 注释
```

### ②引入方法	

#### 行内式

> 点击了按钮才会出现弹窗

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <!-- 行内使用js -->
    <!-- type指定为按钮类型;value指定按钮显示的名字;onclick点击事件;alert()当点击后出发的方法,方法会出现弹框 -->
    <input type="button" value="按钮" onclick="alert('按钮事件')">
</body>
</html>
```

![1647583102857](/1647583102857.png)

#### 内嵌式

> 先执行js后出现按钮,代码一运行就会执行

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <!-- 内嵌式 -->
    <script>
        // 在这里面编写js代码
        alert('内嵌式引入js')
    </script>
</head>
<body>
    <!-- 内嵌式 -->
    <input type="button" value="按钮">
</body>
</html>
```

#### 外链式

> 先创建外链js文件

```javascript
// 可以在该文件下编写js代码,然后在html文件当中引入
alert('外链')
```

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <!-- 外链引入js文件 src指定引入文件路径 -->
    <script src="./wailian.js"></script>
</head>
<body>
    <input type="button" value="按钮">
</body>
</html>
```

![1647584002036](/1647584002036.png)

# 三.变量的数据类型

### ①定义变量以及变量的类型

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script>
        // 编写js代码
        // 变量使用,定义
        var a = 10  //number
        var b = 2.2  //number
        var c = 'Python'  //string
        var d = true  //Boolean
        var e = undefined,f = null  //undefined 未定义 object空对象
        var g = {name:'Python',age:20}  //object对象
        alert(typeof a)
        alert(typeof b)
        alert(typeof c)
        alert(typeof d)
        alert(typeof e)
        alert(typeof f)
        // alert(typeof g)
    </script>
</head>
<body>
    <input type="button" value="按钮">
</body>
</html>
```

# 四.函数定义和调用

```javascript
// 定义函数
function 函数名(参数1,参数2,...){
    函数内容
    return 返回值
}
// 函数的调用
函数名()
```



```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script>
        // 函数的基本使用
        var a = 10  //number
        var b = 2.2  //number
        var c = 'Python'  //string
        var d = true  //Boolean
        var e = undefined,f = null  //undefined 未定义 object空对象
        var g = {name:'Python',age:20}

        // 变量的相加
        alert(a+b) // 显示12.2
        // 取对象下边的属性值
        alert(g.age) // 显示20

        // 函数的使用 关键词function
        // 函数的定义/传参
        function addNum(num1,num2){
            //编写业务逻辑
            alert('函数定义')
            // 加法计算
            var data = num1 + num2
            // 返回结果
            return data
        }
        // 函数的执行
        var res_data = addNum(1,50)
        alert(res_data)  // 显示51
    </script>
</head>
<body>
    <input type="button" value="按钮">
</body>
</html>
```

# 五.变量作用域

- 局部变量
  - 函数内部定义的变量就属于内部变量
  - 可以借助return返回变量 , 进而使用内部变量
- 全局变量
  - 在函数内可以使用函数外定义的变量

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script>
        var b = 2.2  //number
        
        // 变量作用域
        function zone(){
            name = 'python'
            return name
            alert(b) // b为全局变量 ,可以在函数内进行调用,返回2.2
        }
        res_name = zone()
        alert(res_name)  //python 可以借助于return在外部返回
        </script>
</head>
<body>
    <input type="button" value="按钮">
</body>
</html>
```



# 六.条件语句

## 1.格式

- if...   
- if ...else
- if ...else if... else

```javascript
function myFunc2(){
    if(条件){
        // 条件成立执行的
    }
    else{
        // 条件不成立执行的
    }
}
```

```javascript
        function myFunc(age){
            if(age >= 18 && age <= 35){
                alert('青年')
            }else if(!(age>=18 || age <= 12)){
                alert('青少年')
            }else{
                alert('中年')
            }
        }
        myFunc(30) //青年
        myFunc(15) //青少年
        myFunc(45) //中年
```

## 2.判等问题

> 注意的是:在Javascript中
>
> ==: 判等会进行隐式转化 , 会将其转化为同一类型后比较
>
> ===:判等 , 数值和数值类型必须都一样才相等

## 3.比较运算符

![1647588775278](/1647588775278.png)

## 4.逻辑运算

- 与
  - 条件1 && 条件2
- 或
  - 条件1 || 条件2
- 非
  - ! 条件

# 七.数组及操作方法

## 1.操作方法

- 定义数组
  - var 变量名 = []
  - 可以写入数字,字符串
- 计算数组长度
  - 变量名.length
- 数组取值
  - 变量名.[索引下标]
- 写入数据
  - 变量名.push
  - 追加到末尾
- 弹出数据
  - 具体是默认将最后一个值弹出 , 删除
  - 变量名.pop()
- splice方法
  - 变量名.splice(开始的下标位置, 删除的元素数量, 要替换的删除的内容)
  - 删除数组里的元素
    - 变量名.splice(开始的下标位置, 删除的元素数量)
  - 替换数组里的元素
    - 变量名.splice(开始的下标位置, 删除的元素数量, 要替换的删除的内容)
  - 插入数据到数组
    - 变量名.splice(开始的下标位置, 0, 要插入的内容)

## 2.代码实现

```javascript
		function myArrFunc(){
            // 定义数组
            var arrDate = [1,2,3,'a','b','c']

            // 计算数组的长度
            alert(arrDate.length)  // 6

            // 数组取值,通过下标
            alert(arrDate[3]) //a

            // 写入数据 将数据写入末尾
            arrDate.push('pyhthon')
            alert(arrDate) // 1,2,3,a,b,c,pyhthon

            // 弹出数据 取最后一个值后,将取出的值进行删除
            alert(arrDate.pop())  //python
            alert(arrDate)  // 1,2,3,a,b,c

            // 数组删除 splice(起始位置下标, 删除的数量)
            arrDate.splice(0,2)
            alert(arrDate)  // 3,a,b,c

            // 数据替换 splice(起始位置下标, 删除数量, 指定删除后替换的内容)
            arrDate.splice(2,1,'bytes')
            alert(arrDate)  // 3,a,bytes,c

            // 数据插入 splice
            arrDate.splice(1,0,'b')
            alert(arrDate)  // 3,b,a,bytes,c
        }
        myArrFunc()
```



![1647593825614](/1647593825614.png)

# 八.循环语句

## 1.for循环

```javascript
for(定义一个临时变量; 循环条件; 临时变量自增){
    循环体
}
```



```javascript
        function myXunHuan(){
            var dataArr = ['5','4','3','2','1']
            alert('倒计时开始')
            // for循环
            for(var index = 0;index < dataArr.length; index++){ 

                alert(dataArr[index])
            
            }
        }
        myXunHuan()
```

## 2.while循环

```javascript
定义while变量
while(结束条件){
      循环体
      变量自增
      }
```



```javascript
        function myXunHuan(){
            var dataArr = ['10','9','8','7','6','5','4','3','2','1']
            alert('倒计时开始')
            // while循环
            var index = 0
            while(index < dataArr.length){
                alert(dataArr[index])
                index++
            }
        }
        myXunHuan()
```

# 九.字符串拼接

## 1.使用场景

> 网址的拼接
>
> - host = 'http://www.baidi.com'
> - path = 's?wd=python'
> - url = host + path

## 2.实现

```javascript
        var str1 = 'hello'
        var str2 = 'python'
        var str3 = str1 + str2
        alert(str3)  //hellopython
```



![1647595901992](/1647595901992.png)