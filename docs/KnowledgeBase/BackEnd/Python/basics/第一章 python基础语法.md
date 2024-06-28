---
typora-root-url: assets
---

# 第一章 Python基础语法（阶段二）

# 零、00_Python介绍

- python的基础语法：标识符、关键词、变量、判断循环
- 容器类型（数据类型中的高级类型）
- 函数 
- 文件处理
- 面向对象
- 包和模块
- 异常处理

工作具备能力：

- 可以自己解决问题
- 可以解决没有遇到的问题
- 有信心解决没有遇到的问题

# 一、01-Python环境搭建与输入输出

# 1.Python概述

## ①Python介绍

- Python编程语言界前三
-  Python只有33个关键词、7种基本数据类型
- Python创始人吉多·范罗苏姆，龟叔
- Python是一种跨平台的计算机程序设计语言![1643268124818](/1643268124818.png)

## ②Python在大数据领域的应用 

数据采集——数据存储与冗余备份——数据处理——数据分析——数据建模——可视化——机器学习——深度学习

- 数据采集：爬虫，爬虫有法律风险
- 数据处理：Pandas、Numpy等可以处理数据的格式转换或者数据科学计算
- 数据分析、数据可视化：Pandas、seaborn、pyecharts可视化框架
- 实时计算：传统的spark框架、flink框架都添加了PythonAPI
- 数据建模：机器学习很多框架是Python编写SKLearn、tensorflow

# 2.Python解析器

## ①Python解释器的作用

把Python文件（.py）——机器语言

可以运行Python文件

常见的Python解析器：CPython、IPython、PyPy、JPython、IronPython（运行在.Net）

下载地址：https://www.python.org/downloads/release

# 3.PyCharm开发利器

## ①PyCharm的作用

它是一种PyCharm IDE（集成开发环境），带有一整套可以帮助用户在使用Python语言开发是提高效率的工具

下载地址：https://www.jetbrains.com/pycharm/download/#section=windows

IDE工具同属具备创建文件、书写代码、执行、显示结果

## ②PyCharm基本使用 

### Ⅰ创建项目文件

创建项目——创建python文件——写代码

创建文件：

new——python file不用书写扩展名

new——file要书写扩展名

### Ⅱ终端里运行.py文件

需要创建文件、写代码、终端里运行文件，但是PyCharm可以同时具有所有功能步骤，提高效率

```
cd Desktop
touch hello.txt
vim hello.txt
print('hello world!!')
rename hello.txt hello.py
python hello.py
```



![1643277291558](/1643277291558.png)

## ③PyCharm基本设置

### Ⅰ修改主题

file——settings——appearance——theme

### Ⅱ修改文字格式

file——settings——Editer——Font修改字体

file——settings——Editer——Font——size修改字号

file——settings——Editer——Font——Line Spacing修改行间距

### Ⅲ修改解析器

file——settings——project——python Interpreter选择相应的解析器版本

### Ⅳ项目管理

打开项目

覆盖当前项目

新窗口打开

合并项目在一个窗口

open——project——当前窗口打开/新窗口打开/Attach合并在一个窗口

open——recent 打开最近关闭的项目

关闭项目

remove

file——close project

# 4.Python注释

目的：提高可读性

## ①单行注释##

可以写在文件末尾，但要添加两个空格

【#】号后要添加空格

```
# 注释内容
语句  # 注释内容
```

## ②多行注释:三个单双引号

python种对于单双引号不敏感，但要成对出现

不能出现在语句末尾

```
"""
注释内容
注释内容
"""
或者
'''
注释内容
注释内容
'''
```

## ③PyCharm快速注释键

CTRL+/

快速将选中内容注释

# 5.Python变量

在python中创建变量必须赋值，否则报错

变量：保存数据的容器

案例：牛奶可乐交换杯子

> 量：程序运行中最小单元
>
> 变量：
>
> 存储数据的容器
>
> 在程序运行中可以发生改变的量
>
> 变量存储的数据是临时的 

基本语法

```python
变量名 = 变量的值
# ‘=’不代表相等关系，只表示赋值关系
# ‘=’左右加空格，既美观又不会有灰色波浪线，不加也可以，建议加养成习惯
```

## ①标识符命名规则

> 标识符：程序员自己定义的具有一定功能含义的字符组合
>
> 文件名、变量名、函数名、类型名（只要是让程序员起名字，都是标识符）
>
> 注：文件名在Windows自己的电脑上可以不遵守命名规则，但是在服务器、服务器工具、组件就不支持了，因此养成好的命名习惯
>
> 关键字：select系统定义的具有一定功能含义的字符组合（有 高亮效果）

①由数字、字母、下划线组成

②不能用数字开头

③严格区分大小写

④不能用内置关键字33个

![1643292931943](/1643292931943.png)

>  Windows中不严格区分大小写
>
>  Linux中严格区分大小写

## ②标识符的命名规范

> 见名知意
>
> 大驼峰：每个单词首字母大写MyName（Python中，习惯命名类）
>
> 小驼峰：第二个以及以后的单词首字母大写myName（Python中不常用    ）
>
> 下划线：my_name（Python中，习惯命名变量、函数、包、模块）

## ③变量的使用

**先定义，后调用**

> 定义：变量名=变量
>
> 调用：函数(变量名)  或者 变量名1+变量名2

Python中运行时按顺序，从上到下一行一行执行代码

```python
a = 1
b = 2
print(a + b)
```

## ④变量的数据类型（7种）

还有复数类型，用的不多

![1643368285701](/1643368285701.png)

格式化方法：

```
CTRL + alt + L
```

```python
# 数据类型：基础数据类型 int float bool 容器类型 str tuple list set dict
# 查看数据的类型函数  type()
# 整型
int_1 = 15
print(type(int_1))  # <class 'int'>
# 浮点型
float_1 = 15.6
print(type(float_1))  # <class 'float'>
# 布尔型
bool_1 = True
print(type(bool_1))  # <class 'bool'>
# 字符串类型
str_1 = 'hello Python'
print(type(str_1))  # <class 'str'>
# 元组
tuple_1 = (1, 2, 1, 4, 4)
print(type(tuple_1))  # <class 'tuple'>
# 列表
list_1 = [1, 2, 3]
print(type(list_1))  # <class 'list'>
# 集合
set_1 = {1, 2, 3, 4}
print(type(set_1))  # <class 'set'>
# 字典
dict_1 = {'name': 'xiaoming', 'age': '18'}
print(type(dict_1))  # <class 'dict'>
```

# 6.Python中的Bug

Bug：小甲虫

## ①常见Bug

```python
# 常见Bug

# print(a)
# NameError: name 'a' is not defined(一般是变量名错误)

# a = 15
# print(a / 0)
# ZeroDivisionError: division by zero(零不能做分母)

# a = 3
#     b = 4
#     print(a+b)
# IndentationError: unexpected indent(缩进错误)

# print (‘123’
# SyntaxError: invalid character in identifier(语法错误)

# a = '123'
# print(a + 12)
# TypeError: can only concatenate str (not "int") to str(数据类型错误)

# print('hello world')  Process finished with exit code 0(程序正常结束，0)
# print(a)  Process finished with exit code 1(程序异常结束，1)
```

## ②Debug工具

Ⅰ打断点：程序会运行到断点时停止 

![1643378899304](/1643378899304.png)

ⅡDebug调试

step over：单步执行

resume：让程序执行到下一个断点，或者程序结束

stop：让程序终止

# 7.输出

## ①Python的格式化输出

>  什么是输出？
>
> 输出：给程序员看的
>
> 开发过程中，才会有输出，项目上线后，print都会被删除

> 格式化输出：就是按照一定的格式输出

> 字符串格式化：格式化是字符串所具有的功能
>
> print输出：print函数只能将传入的内容显示到控制台中，与格式化没有任何关系

![1643380141299](/1643380141299.png)

> 不同数据类型的变量，使用不同的占位符进行占位
>
> 格式：‘字符串，占位符’  %  变量名

> 浮点型保留n位小数：%.nf
>
> 整形占用n位数据，不足用0补齐：%0nd

```
# 需求：让Mike的年龄跟着age变量的变化，不断发生变化
# age = 17
# print('Mike is 15 years old.')
# print('Mike is %d years old.' % age)  Mike is 17 years old.

name = 'Mary'
age = 18
height = 1.85
weight = 69.5
id_num = 1523
# 一个占位符的情况
print('Student’s name is %s.' % name)
print('Student’s age is %d.' % age)
print('Student’s height is %f.' % height)
print('Student’s weight is %f.' % weight)
print('Student’s marriage is %d.' % id_num)
'''
Student’s name is Mary.
Student’s age is 18.
Student’s height is 1.850000.
Student’s weight is 69.500000.
Student’s marriage is False.
'''
# 多个占位符的情况下,多个变量要加括号，而且%后的变量数量要和占位符数量相同
print('Student’s name is %s,'
      'Student’s age is %d,'
      'Student’s height is %f,'
      'Student’s weight is %f,'
      'Student’s marriage is %d'
      % (name, age, height, weight, id_num))
# 需求：1.身高保留两位小数，体重保留三位小数
# 需求：2.学院id共占用六位，不足位用0填充
print('Student’s name is %s,'
      'Student’s age is %d,'
      'Student’s height is %.2f,'
      'Student’s weight is %.1f,'
      'Student’s marriage is %06d.'
      % (name, age, height, weight, id_num))
Student’s name is Mary,Student’s age is 18,Student’s height is 1.85,Student’s weight is 69.5,Student’s marriage is 001523.
```

## ②转义字符

> \n：换行符
>
> \t：制表符
>
> %%：输出百分号

‘\’：可以赋予一些字母特殊含义

> 为什么两个print之间可以自动换行？
>
> print在定义的时候，自动在结尾加上了‘\n’，所以会自动换行
>
> 若想取消自动换行，在字符输入结束后，使用end=‘结束符’，可以修改print打印结束后默认插入的换行符

```python
print(123)
print('hello world \n')
print(456)
print(785, end='!')
print('25\t4')
结果：
123
hello world 

456
785!25	4
```

> %的输出：
>
> 不使用字符串格式化时，可以进行%的单独输出
>
> 使用字符串格式化时，%不能单独输出，必须配合占位符，或者可以%%输出

```python
print('我的业绩提高了百分之40%')
score = 40
print('我的业绩提高了%d%%' % score)

我的业绩提高了百分之40%
我的业绩提高了40%
```

## ③格式化方式—f-string

```python
# 拼接
print(f'输出内容{变量1}，输出内容{变量2}...')
# 若要调整精度
print(f'输出内容{整数型变量1:0nd}，输出内容{变量2}...')
# 整形占n位，不足位用0补齐，若数据位数超出n，则原样输出
# d可以省略
print(f'输出内容{变量1}，输出内容{浮点型变量2:.nf}...')
# 浮点型保留n位小数，四舍五入（若不调整，则小数是几位，就输出几位）
% 可以单独输入
```

```python
name = 'Join'
age = 18
height = 1.85
score = 98
i_d = 7
# 传统拼接方式
print('学院姓名为%s，学员年龄为%d，学员盛高为%.2f，学院分数为%d%%，学员的学号为%06d。' % (name, age, height, score, i_d))
# f-string进行字符串拼接
print(f'学院姓名为{name}，学员年龄为{age}，学员盛高为{height}，学院分数为{score}，学员的学号为{i_d}')
# 修改格式
print(f'学院姓名为{name}，学员年龄为{age}，学员盛高为{height:.2f}，学院分数为{score}%，学员的学号为{i_d:06d}')

学院姓名为Join，学员年龄为18，学员盛高为1.85，学院分数为98%，学员的学号为000007。
学院姓名为Join，学员年龄为18，学员盛高为1.85，学院分数为98，学员的学号为7
学院姓名为Join，学员年龄为18，学员盛高为1.85，学院分数为98%，学员的学号为000007
```

练习：输出自己的信息

```python
name = '田咪'
age = 22
height = 1.62
score = 66
i_d = 30
print(f'我是{name}，今年{age}，身高{height:.2f}，分数为{score}%，学号为{i_d:011d}')

我是田咪，今年22，身高1.62，分数为66%，学号为00000000030
```

# 8.Python的input()输入

> 输入：程序接受用户输入的数据（声音、图像、数据等）

> 输入方法：input（）函数
>
> input（）为阻塞函数
>
> 因此input（）会造成程序阻塞，等程序员输入信息，输入完成后，回车键结束输入，程序继续执行

> 提示字符属于输出字符
>
> input（‘请输入一个字母’）

```python
a = 521
print(a)
input('输入一个数字:')
print(2*a)

521
输入一个数字:521
1042
```

如果想使用接受的数据，要用变量进行接受

变量 = input('输入一个数字')

print（变量）

```python
a = input('输入一个数字:')
print('%s是我爱你的意思' % a)
# input接受的数据默认为字符串类型
输入一个数字:521
521是我爱你的意思
```

练习：按要求输入账号和密码，并且进行打印

```python
# 练习
account = input('请输入您的账号：')
password = input('请输入您的密码：')
print(f'账号：{account}\n密码：{password}')

请输入您的账号：4180803010
请输入您的密码：123456
账号：4180803010
密码：123456
```

# 二、02-Python运算符与条件结构

# 1.Python数据类型转换

## ①数据类型转换场景

> 转换什么数据类型就穿什么数据类型的衣服
>
> 数据类型（要转换的变量或值）

```python
# 需求：苹果、橘子
# 让售货员输入苹果的单价，重量，橘子的单价、重量，在控制台输出购买详情以及总价
apple_price = input('苹果单价为：')
apple_weight = input('苹果重量为：')
orange_price = input('橘子单价为：')
orange_weight = input('橘子重量为：')
print(f'您购买了{apple_weight}kg的苹果，单价为{apple_price}元，总计{apple_price*apple_weight}元，{orange_weight}kg的橘子，单价为{orange_price}元，总计{orange_price*orange_weight}元，总消费{apple_price*apple_weight+orange_price*orange_weight}元')

# 报错，不同类型之间不能进行运算
# 因为input接受的数据默认为字符串类型
# 因此要进行数据转换，转换什么数据类型就穿什么数据类型的衣服
```

```python
# 需求：苹果、橘子
# 让售货员输入苹果的单价，重量，橘子的单价、重量，在控制台输出购买详情以及总价
apple_price = float(input('苹果单价为：'))
apple_weight = float(input('苹果重量为：'))
orange_price = float(input('橘子单价为：'))
orange_weight = float(input('橘子重量为：'))
print(f'您购买了{apple_weight}kg的苹果，单价为{apple_price}元，总计{apple_price*apple_weight:.2f}元，{orange_weight}kg的橘子，单价为{orange_price}元，总计{orange_price*orange_weight:.2f}元，总消费{apple_price*apple_weight+orange_price*orange_weight:.2f}元')

苹果单价为：5.236
苹果重量为：2
橘子单价为：3.65
橘子重量为：4.5
您购买了2.0kg的苹果，单价为5.236元，总计10.47元，4.5kg的橘子，单价为3.65元，总计16.43元，总消费26.90元
```

## ②数据类型转换细节

- int > float：会默认转换为意味小数的float类型（.0）
- float > int：将会把小数部分去除，只保留整数部分
- int > str：int类型可以随意转换为str类型，输出结果不变
- float > str：可以随意转换类型
- str > int ：字符串内是int类型数据时，可以转换为int类型
- ​                   字符串内是float类型时，不可以转换int类型
- ​                   字符串内是字符型数据时，不可以转换int类型
- str > float：字符串内是int类型数据时，可以转换为float类型
- ​                     字符串内是float类型时，可以转换为float
- ​                     字符串内是字符型数据时，不可以转换float

## ③数据类型转换函数

![1643803986814](/1643803986814.png)

# 2.运算符的使用

- 算数运算
- 赋值运算
- 复合赋值运算
- 比较运算
- 逻辑运算

## ①算数运算符

bool类型也可以参加算数运算：其中Ture=1，False=0

```python
# 案例求梯形的面积
a = float(input('请输入梯形的上底长度：'))
b = float(input('请输入梯形的下底长度：'))
h = float(input('请输入梯形的高：'))
print(f'梯形的面积为{(a + b) * h / 2}')

请输入梯形的上底长度：5
请输入梯形的下底长度：7
请输入梯形的高：4
梯形的面积为24.0
```

- 在除法运算中，结果必须为浮点型
- 浮点型参与运算后，结果一定为浮点型

```python
# # 案例求梯形的面积
# a = float(input('请输入梯形的上底长度：'))
# b = float(input('请输入梯形的下底长度：'))
# h = float(input('请输入梯形的高：'))
# print(f'梯形的面积为{(a + b) * h / 2}')

int1 = 3
int2 = 6
int3 = 7
int4 = 9
float1 = 18.6
float2 = 18.1
# 加法/减法
print(int1 + int2)  # 9
print(int1 + float1)  # 21.6
print(float1 - int2)   # 12.600000000000001
# 乘
print(int1 * int2)  # 18
print(int1 * float1)  # 55.800000000000004
# 除
print(int2 / int1)  # 2.0
print(float1 / int2)  # 3.1
# //整除 两个数相除，取商
print(float2 // int1)  # 6.0
print(float1 // int2)  # 3.0
print(int3 // int1)  # 2
# %取余或取模  两个数相除，取余
print(int3 % int1)  # 1
print(float1 % int2)  # 0.6000000000000014
print(float2 % int1)  # 0.10000000000000142
# **幂次运算
print(int1 ** 2)  # 9
print(int4 ** 0.5)  # 3.0
```

### 算数运算符的优先级

算数运算符优先级：用小括号控制，先乘除后加减，同级从左到右依次运算

- 先乘除，后加减
- //  %优先级高于 + -
- //  % *  /平级
- ** 优先级高于 *

运算符优先级：** >  * /  %  // >  +  -

## ②赋值运算符

=

+ 单个变量赋值

a = 1

b = a

> 右侧可以是值，也可以是已经被定义的值

+ 多个变量赋值

name , age , gender = 'Mike', '18', 'male'

> 左侧变量的数目 = 右侧值的数量

* 同时给多个变量赋相同的值

a = b = c =10 

> 最后右侧只能由一个值/

## ③复合赋值运算符

![1643816178458](/1643816178458.png)

> 复合赋值运算符  左侧  只能是已经定义的变量
>
> 复合赋值运算符  右侧  可以是值或者已经被定义的变量
>
> 复合赋值运算符不可以连续使用

```python
# +=  -= *= /= //=  %=  **=
a = 1
b = 2
a += 5   # a = a + 1
print(a)   # 6
a **= 2  # a = a ** 2
print(a)   # 36
a //= 5  # a = a // 5
print(a)   # 7
a %= b   # a = a % b
print(a)   # 1
```

## ④比较运算符

+ 比较运算符结果为bool值
  + 成立 Ture
  + 不成立 False
+ 比较运算符可以连用（Python中的特性）
+ <> 不可以使用
+ 判断是否相等：==

```python
# < > <= >= !=
# print(1 > 4)  # False
# a = input('输入一个数：')
# b = input('输入和它比较的数')
# print(a < b < '10')
# 不会报错，但是比较结果不正确，因为不改变数据类型时，参与比较的是ASCⅡ码
# 因此赋值的时候要定义数值类型，int float
# c = int(input('输入一个数：'))
# d = int(input('输入和它比较的数'))
# print(c < d < 10)
'''
输入一个数：3
输入和它比较的数5
True
'''
age = 18
print(age == 15)  # False
```

## ⑤逻辑运算符

![1643824280452](/1643824280452.png)

+ and：同真即真
+ or：同假即假
+ not：假变真，真变假

```python
print(2 > 1 or 5 > 6)  # Ture
print(2 > 1 and 5 > 6)  # False
print(not(1 > 2 and 4 < 5))  # Ture
```

## ⑥短路运算

- 当逻辑运算的第一个表达式已经能决定整个运算值的时候，后边的表达式将不会被运行
-  当第一个判断不出来，就把最后的一项输出来
- 在数据型数据中，非0即真
- 在容器型数据中，非空即真
- None 代表False

```python
# 短路运算：
a = 1
b = 2
print(a > b and a == b)  # False
# 第一个表达式就能判断
print(False and 1)  # False
print(0 and True)   # 0
print(None and False)  # None
# 第一个不能判断
print(True and False)  # False
print(True and 14)  # 14
# 第一个表达式就能判断
print(False or '')  # ''
# 第一个不能判断
print(12 or False)   # 12
```

练习： 

```python
print(3 and 4 and 5)  # 5
print(5 and 6 or 7)  # 6
2 > 3 and print('hello world')  # 不输出
4 > 1 and print('hello world')  # hello world
```

## ⑦运算符的优先级

![1643826694321](/1643826694321.png)

`注意`：

- 不要把一个式子写的过于复杂，可以尝试拆分写
- 用优先级控制表达式的执行顺序，可读性太差，尽量用（）来控制表达式的执行顺序
- （）的优先级最高

## 练习

![1643826932929](/1643826932929.png)

- True为1
- False为0
- True和False可以参与运算

```python
group1 = int(input('请输入球队1的实力：'))
group2 = int(input('请输入球队2的实力：'))
group3 = int(input('请输入球队3的实力：'))
group4 = int(input('请输入球队4的实力：'))
win_1 = (group1 > group2) * 3 + (group1 == group2)
win_2 = (group1 > group3) * 3 + (group1 == group3)
win_3 = (group1 > group4) * 3 + (group1 == group4)
socre = win_3 + win_2 + win_1
print('比赛最终得为：%d分' % socre)

请输入球队1的实力：5
请输入球队2的实力：7
请输入球队3的实力：4
请输入球队4的实力：5
比赛最终得为：4分
```

# 3.if选择结构（分支语句）

`Python中两大流程控制语句之一`

什么是流程控制？

对于一些不需要执行的语句，需要跳过，可以用流程控制。

## ①if else条件语句

条件语句：条件成立则执行某些代码，不成立执行某些代码

基本语法：

```
if 条件:
   条件成立执行的代码1
   条件成立执行的代码2
   ......
else：
    条件不成立执行的代码
print(我没有缩进到if语句块，条件与我无关）
```

```python
age = int(input('输入年龄：'))
if age >= 18:
    print('您可以上网')
else:
    print('抱歉，您还未到年龄，请遵守青少年法律！')
print('查询关闭')

输入年龄：15
抱歉，您还未到年龄，请遵守青少年法律！
查询关闭
```

## ②多重条件判断

```python
# 格式：
'''
if 条件1：
    条件成立执行的代码
elif 条件2：
    条件成立执行的代码
elif 条件3：
     条件成立执行的代码
else：
     所有条件不成立时执行的代码
'''
# 搭讪>oo<
age = int(input('请输入对方的年龄：'))
if age > 100 or age < 0:
    print('输入错误')
elif 23 < age < 36:
    print('无感')
elif 18 < age <= 23:
    print('年龄刚好')
elif 0 <= age <= 18:
    print('不忍心下手')
else:
    print('不考虑了')
```

## ③分支语句的注意事项

- 分支语句中，只有一个分支的命令会被执行
- 如果运行过程中，其中有一个条件成立，则后续所有条件不会继续执行
- 什么内容可以作为条件出现？
  - bool值或者可以转换为布尔值的数据或表达式
    - 表达式：经过运算或者执行后，可以得到一个值的代码块或者语句
- 不能作为条件出现的（结构型的）
  - 分支结构
  - 循环结构
  - 赋值
  - 函数定义

## 练习

输出小明的评级：考试分数从0-100   优秀90-100   良好80-90  中等70-80  合格60-70  不合格0-60

```python
score = int(input('请输入成绩：'))
print('您的成绩等级如下：')
if score > 100 or score < 0:
    print('输入错误')
elif 90 <= score <= 100:
    print('优秀')
elif 80 <= score < 90:
    print('良好')
elif 70 <= score < 80:
    print('中等')
elif 60 <= score < 70:
    print('合格')
else:
    print('不合格')
```

## ④if嵌套结构

- 在分支语句中包含其他分支语句

```python
# 是否有钱可以上车，是否有座可以乘坐
money = int(input('您现在身上有多钱：'))
seat = int(input('车上有几个空座位：'))
if money > 10:
    print('请上车！')
    if seat > 0:
        print('请坐！')
    else:
        print('委屈您，站一会。')
else:
    print('余额不足车费，不能乘车！')
 
您现在身上有多钱：10
车上有几个空座位：5
余额不足车费，不能乘车！

您现在身上有多钱：12
车上有几个空座位：1
请上车！
请坐！
```

```python
if int1 > 0:
    print('正', end='-')
    if int2 == 1:
        print('奇数')
    else:
        print('偶数')
else:
    print('负', end='-')
    if int2 == 1:
        print('奇数')
    else:
        print('偶数')
  
请输入一个整数-6
负-偶数
```

## 练习

### ★导入模块

import 模块名称

### ★random模块

生成[m,n]区间内的任意一个随机整数

a =  random.randint(m,n)

### ★猜拳游戏

```python
# 猜拳游戏
# ①直接比较结果
# ②利用玩家和电脑的差值来比较
'''
p c 差值 赢家
0 1 -1  p
0 2 -2  c
1 0  1  c
1 2  -1 p
2 0  2  p
2 1  1  c
p玩家赢 -1 2
c电脑赢 -2 1
'''
player = int(input('输入玩家拳型（0 石头 1 剪刀 2 布）：'))
import random
computer = random.randint(0, 2)
print('电脑出拳为：%d' % computer)
result = player - computer
if (result == -1) or (result == 2):
    print('玩家获胜！')
elif (result == -2) or (result == 1):
    print('电脑获胜！')
else:
    print('平局！')
    
输入玩家拳型（0 石头 1 剪刀 2 布）：2
电脑出拳为：0
玩家获胜！
```

## ⑤三目运算符

- 三目运算符也叫三元运算符

格式：条件成立时返回的数据  if  条件  else  条件不成立时返回的数据

```python
# 输出最大值
import random
a = random.randint(0, 10)
b = random.randint(0, 10)
print('随机生成的数分别是：%d，%d' % (a, b))
# 下面这个就叫三目运算符
max1 = a if a > b else b
print('最大值为：% d' % max1)

随机生成的数分别是：2，9
最大值为： 9
```

# 练习

#### 养成边写代码边写注释的习惯

![1644112793706](/1644112793706.png)

```python
# 题目1
apple_price = 6.6
orange_price = 5
apple_weight = float(input('请输入苹果重量：'))
orange_weight = float(input('请输入橘子重量：'))
goods_1 = apple_price * apple_weight
goods_2 = orange_price * orange_weight
goods_sum = goods_1 + goods_2
print('苹果单价为6.6元\t您购买苹果重量为%.2fkg\t价格为%.2f元' % (apple_weight, goods_1))
print('橘子单价为5元\t您购买橘子重量为%.2fkg\t价格为%.2f元' % (orange_weight, goods_2))
print('总价为%.2f元！\n欢迎下次光临！' % goods_sum)

请输入苹果重量：3
请输入橘子重量：2
苹果单价为6.6元	您购买苹果重量为3.00kg	价格为19.80元
橘子单价为5元	您购买橘子重量为2.00kg	价格为10.00元
总价为29.80元！
欢迎下次光临！
```

![1644113234150](/1644113234150.png)

```python
# 题目5
# 在正式工作中，密码和用户不需要分开识别，不安全
sys_name = 'aaa'
sys_pwd = 123456
code = 'qwer'
user_name = input('请输入您的用户名：')
password = int(input('请输入您的密码：'))
code_in = input('请输入验证码：')
if code_in == code:
    if user_name == sys_name:
        if password == sys_pwd:
            print('登陆成功！')
        else:
            print('密码错误，请检查！')
    else:
        print('登陆失败！请检查您的用户名是否正确。')
else:
    print('验证码错误，请重新输入！')
    
请输入您的用户名：aac
请输入您的密码：123456
请输入验证码：qwer
登陆失败！请检查您的用户名是否正确。

请输入您的用户名：aaa
请输入您的密码：12345
请输入验证码：qwer
密码错误，请检查！

请输入您的用户名：aaa
请输入您的密码：123456
请输入验证码：wqer
验证码错误，请重新输入！

请输入您的用户名：aaa
请输入您的密码：123456
请输入验证码：qwer
登陆成功！
```
![1644117831488](/1644117831488.png)

```python
# 题目六
Chinese = float(input('输入语文成绩：'))
English = float(input('输入英语成绩：'))
Math = float(input('输入数学成绩：'))
avg = (Chinese + English + Math)/3
print('平均分为：%.2f' % avg)
if (0 <= Chinese < 100) and (0 <= English < 100) and (0 <= Math < 100):
    if avg < 60:
        print('不及格，继续努力！')
    elif avg > 90:
        print('成绩优秀！')
    else:
        print('成绩良好！')
else:
    print('输入错误，请重新输入。')
    
输入语文成绩：91
输入英语成绩：89
输入数学成绩：99
平均分为：93.00
成绩优秀！
```

![1644117973694](/1644117973694.png)

```python
# 题目七
year = int(input('请输入年份:'))
if year % 4 == 0 and year % 100 != 0:
    print('闰年')
elif year % 400 == 0:
    print('闰年')
else:
    print('不是闰年')
    
请输入年份:1900
不是闰年
```

