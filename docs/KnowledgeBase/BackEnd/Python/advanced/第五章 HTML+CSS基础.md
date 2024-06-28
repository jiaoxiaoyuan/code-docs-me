---
typora-root-url: assets
---

# 第五章 html+css基础

> html负责控制布局 
>
> css负责美化效果
>
> js负责数据操作处理
>
> jQuery是js的再次封装(升级) , 提供更加简便的方法 , 进行数据操作

# <★HTML★>

## 1.html介绍

### ①html定义

- html全称: HyperText Mark-up Language , 指的是超文本语言标记
  - 标记:就是标签 `<标签名称></标签名称>` , 大多数标签都是成对出现的
  - 超文本 :
    - 超越文本限制 , 图片 , 视频 , 音频等内容
    - 超链接文本

### ②html作用

- html是用来开发网页的 , 它是开发网页的语言
- 负责整体页面布局
  - 头部<></>
  - 中间部分
  - 底部

## 2.html基本结构

```html
<!DOCTYPE html>
<!--文档声明 ,用来指定页面所使用的html版本,这里声明的是一个html5的文档-->
<html>
<!--这里是html文档的开始标签-->
    <head>
<!--网站描述信息,和外部引用-->
<!--用于定义文档的信息,是负责对网页进行设置标题,编码格式以及引入css和js外部文件的-->
        <meta charset="UTF-8">
        <title>网页标题</title>
                <link rel="stylesheet" href="">
<!--        引入cs文件-->
        <script></script>
<!--        引入js文件-->
    </head>
    <body>
<!--展示网页内容-->
    </body>
</html>
<!--这里是html文档的结束标签-->
```

> - 为什么使用h5?
>   - 因为h5对移动端页面展示较好
> - 在vscode文件中
>   - 英文模式下:!+Tab就可以自动生成布局结构

## 3.vscode基本使用

### ①下载

下载网址:https://code.visualstudio.com/Download

![1647499442428](/1647499442428.png)

### ②下载插件

在扩展模块操作

- Chinese
- open in browser

![1647499579570](/1647499579570.png)

### ③vscode快捷键

- 快捷导入模板 : (英文模式下)!+Tab就可以自动生成布局结构
- 快捷注释 : CTRL+/
- 保存快捷键:CTRL+s
  - 运行之前进行保存

### ④运行文件

- 直接进入文件所在的位置
  - 直接点击文件夹里的文件
- 使用open in插件
  - 在vscode已保存的文件页面右击open in browser

### ⑤切换项目目录

- 推拽
- 直接打开

### ⑥创建文件

- 点击图标
- 右击--创建文件

> 注意 : 创建文件要自己加.html

### ⑦删除文件

- 选中文件--右击--删除

## 4.认识常用的html标签

- 单个标签
- 成对标签
- 标签嵌套
- 块标签`<div></div>`
- 标签的属性

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Text</title>
</head>
<body>

    <!-- 成对标签 -->
    <h1>h1标签</h1>
    <h2>h2标签</h2>
    <h3>h3标签</h3>
    <p>文本段落标签</p>

    <!-- 单个标签 -->
    <!-- src指定图片路径 -->
    <img src="D:\桌桌面面\文件\我的图片\动画人物\cat.jpg" alt="">
    <!-- br换行标签 -->
    <br>
    <!-- input 输入标签 type 指定类型 : 输入框,按钮等 -->
    <input type="text">
    <!-- hr分割线 -->
    <hr>
    <input type="button">

    <!-- 标签属性 -->
    <!-- <a 连接标签,可以指定跳转连接 href 就是它的标签属性,可以指定跳转的网址路径 -->
    <a href="http://www.baidu.com">我是百度的链接</a>

    <!-- 标签嵌套 -->
    <!-- div块标签,可以进行页面模块布局,区域划分 -->
    <div>
        <p>段落1</p>
        <p>段落1.1</p>
        <p>段落1.2</p>
    </div>
    <div>
        <p>段落2</p>
        <p>段落2.1</p>
        <p>段落2.2</p>
    </div>

</body>
</html>
```

![1647519339850](/1647519339850.png)

![1647519351862](/1647519351862.png)

## 5.资源路径

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
    <!-- 路径:相对路径或者绝对路径都可以(路径尽量避免出现中文) -->
    <!-- 下面使用绝对路径 -->
    <img src="D:\桌桌面面\文件\我的图片\动画人物\cat.jpg" alt="">
    <!-- 下面使用了相对路径 -->
    <img src="./resource_file/1.png" alt="">
    <!-- video视频标签 -->
    <video src="./resource_file/1.MOV"></video>
</body>
</html>
```

![1647519849974](/1647519849974.png)

## 6.列表标签(排序展示)

- 有序
- 无序

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
    <!-- 数据排序展示--有序 -->
    <ol>
        <li>回家之后</li>
        <li>先换鞋</li>
        <li>再做饭</li>
    </ol>
    <!-- 数据排序展示--无序 -->
    <ul>
        <li>回家后要做的事</li>
        <li>做饭</li>
        <li>换居家服</li>
    </ul>
</body>
</html>
```

![1647520291430](/1647520291430.png)

# <★CSS★>

## 1.css介绍

### ①css定义

- 全称css :Cascading Style Sheet层叠样式表 , 它是用来美化页面的一种语言

### ②css作用

- 美化界面 : 设置标签文字大小 ,颜色,字体加粗等样式
- 控制页面布局 : 设置浮动 , 定位等样式

### ③css的基本语法

```css
选择器{
样式规则
}
样式规则: 
属性名1 :属性值１;
属性名2 :属性值2;
属性名3 :属性值3;
...
```

- 选择器 : 是用来选择标签的,选出来以后给标签加样式.

## 2.css引入方式

- 引入方式
  - 行内式  : 几乎不用
    - 只对当前行有效,对其他标签没有影响
  - 内嵌式(内部样式) : 在学习css样式的阶段使用
    - 只要是选择的标签,所有的此标签都会影响
  - 外链式 : 在公司开发的阶段使用 , 可以对css样式和html页面分别进行开发
    - 只要是选择的标签,所有的此标签都会影响

```css
/* wailian.css文件 */
/* css样式文件后缀为css */
/* 可以在该文件中编写css样式代码,在html文件中进行引入 */
/* 使用选择器选择标签进行控制 */
span{
    /* 编写多个样式时,用分号隔开(英文) */
    color: darkorange;
    size: 21mm;
    font-size: 21px;
}
```

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        /* 内嵌式 */
        /* 控制标签样式 */
        /* 使用控制器选择要操作的标签 : 直接使用标签的名称进行选择 */
        p{
            /* 样式指定 */
            color:cornflowerblue;
            font-size: 52px;
        }
    </style>

    <!-- 外链式 -->
    <!-- 引入外链的css文件 -->
    <link rel="stylesheet" href="./wailian.css">
</head>
<body>
    <!-- 行内式 : 在标签内使用style指定样式-->
    <h1 style="color: brown;">告白气球</h1>

    <!-- 内嵌式: 在head标签内创建stylr编写样式 -->
    <p>塞纳河畔,左岸的咖啡!</p>

    <!-- 外链式 -->
    <span>向你喜欢的Ta告白吧</span>
</body>
</html>
```

![1647522239530](/1647522239530.png)

## 3.css选择器

- 标签选择器:直接用标签进行选择

- > 需求:想要两个相同的标签进行不同控制

- 类选择器

  - class= ''

  - `<style>.类名{}</style>`

- id选择器

  - id = ''
    - id不能为纯数字,要有字母
  - `<style>#id名{}</style>`

- 层级选择器

  - 1层 2层 ...{}

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        #box1{
            color: aqua;
        }
        .box2{
            color:brown;
        }

        #link1{
            color:darkgoldenrod;
        }
        #link2{
            color:forestgreen;
        }
        .img1{
            color:magenta;
        }
        .box4 p{
            color:blue;
        }
    </style>
</head>
<body>
    <div id ="box1">
        块标签111
    </div>
    <div class="box2">
        块标签222
    </div>

    <!-- id选择器 -->
    <a href="" id="link1">链接1</a>
    <a href="" id="link2">链接2</a>
    <a href="" class ="img1">链接3</a>
    
    <!-- 层级选择器 -->
    <div class='box4'>
        <p>
         div内部的段落标签
        </p>
    </div>
</body>
</html>
```

![1647524297499](/1647524297499.png)

## 4.css属性

### ①布局常用样式属性

- width 设置元素(标签)的宽度
  - 如 width:100px
- height 设置高度
  - height:100px
- background 设置元素背景色或者背景图片
  - background:gold
  - background:url(images/logo.png)
- border 设置元素四周的边框
  - border:1px solid black 元素四周边框为1像素的黑色实线

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .box4{
            background-color: blanchedalmond;
            width: 200px;
            height: 100px;
            border: 2px solid sienna;
        }
    </style>
</head>
<body>
    <!-- 布局控制 -->
    <div class="box4">
        块标签333
    </div>
</body>
</html
```

![1647527038726](/1647527038726.png)

### ②文本常用样式属性

- color 设置文字的颜色
- font-size 设置文字的大小
- font-weight 设置文字是否加粗
  - font-weight:bold 加粗
  - font-weight:normal 不加粗
- line-height 设置文字的行高
- text-decoration 设置文字的下划线
  - textdecoration:none去掉下划线
- text-align 设置文字水平对齐方式
  - center
- text-indent 设置文字首行缩进

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        #link1{
            color:chartreuse;
            font-size: 21px;
            font-weight: bolder;

        }
        #link2{
            text-decoration: underline;
            text-indent: 20px;
            line-height: 30px;

        }
        #link3{
            text-align: center;
        }
    </style>
</head>
<body>
    <!-- 文字样式控制 -->
    <p id="link1">你好</p>
    <p id="link2">你好呀</p>
    <p id="link3">你好啊
    </p>
</body>
</html>
```

![1647527567621](/1647527567621.png)