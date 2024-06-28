---
 typora-root-url: assets
---

# 第一章 Python基础语法(三)--数据序列

# 01-Python数据序列(上)

# 一、了解字符串

- 一对引号内：想手动换行，只能添加转义字符\n \t
- 三对引号内：手动换行，直接敲回车键

## 1.字符串定义

```python
a = 'hello world'
b = "abcdefg"
c = '''abc
       deg
       din'''
d = """abc
       def
       ghi"""
# 可以用单引号，双引号，三个单引号（可以支持换行），三个双引号（可以支持换行）
```

```python
# 字符串含有单引，不能用单引定义，会出错，可以加双引号，也可以加转义字符
str1 = 'I\'m Tom'
str2 = "I'm Tom"
str3 = '你真“傻”'
str4 = """I'm Tom"""
# 字符串含有单引号，双引号，用三个单引号
str5 = '''"I’m 周树人"'''
print(str1)
print(str2)
print(str3)
print(str4)
print(str5)

I'm Tom
I'm Tom
你真“傻”
I'm Tom
"I’m 周树人"
```

## 2.字符串输入输出

```python
# 字符串的输入输出
# input
user_name = input('您的用户名是：')
# 输出，字符串可以进行格式化处理，两种方法
print(f'您的用户名为{user_name}。')
print('您的用户名为%s。' % user_name)

您的用户名是：tianmi
您的用户名为tianmi。
您的用户名为tianmi。
```

## 3.字符串的底层存储结构

- 在计算机底层，Python中的字符是一段连续的内存地址

![1644334691308](/1644334691308.png)

## 4.索引下标

- 保存字符串时：将所有字符依次存入字符串所在的空间，并且按照顺序将元素依次存放
- 字符串索引：为了方便存取数据，我们将元素进行编号，从0开始

- 下标的作用是通过下表快速找到对应数据
- 通过下标索引，可以获取元素，或者进行切片等操作

- 索引
  - 正数索引（从0开始，从左至右，依次递增）
    - i   t  h  e  i  m  a
    - 0 1  2  3  4  5   6
  - 负数索引（从-1开始，从右向左，依次递增）
    - i      t    h    e     i     m   
    - -7   -6  -5   -4   -3    -2    -1

```python
str1 = 'itheima'
# 需求：获取第五个元素--i
# 正数索引
print(str1[4])  # i
# 负数索引
print(str1[-3])  # i
```

# 二、字符串切片

- 切片是根据索引进行字符串分割
- 切片：对操作对象截取其中一部分的操作。
- 字符串、列表、元组都支持切片操作
- 字符串切片，以及其他容器类型的切片，都会重新产生一个新的数据序列，不会对原始数据序列产生影响

```python
数据序列[开始位置索引：结束位置索引：步长]
①步长可省略，默认步长为1（步长可以为正、负）
②开始位置：结束位置【左闭右开区间，不包括结束位置）
# 注意：开发中绝大多数区间都是左闭右开，其余单独记忆（例如randint[m,n]）
③开始位置可省略，步长正负不同时，默认位置不同
④结束位置可省略，步长正负不同时，默认位置不同
```

- 反转字符串
  - 数据序列[：：-1]
- 复制字符串
  - a = 数据序列[:]
- 步长
  - 正：起始位置在终止位置左侧
  - 负：起始位置在终止位置右侧

# 三、字符串常用操作方法

## 1.字符串查找

字符串查找：查找子字符串在字符串中的位置或者出现的次数

- 函数调用：使用.语法进行调用

### find/index/rfind/rindex

- find()：检测某个字串是否包含在这个字符串中，如果在返回这个字串开始的位置下表（正数索引），否则**返回-1**
  - 字符串.find(self(不用传值)，sub(子字符串)，start(起始位置)，end(终止位置))
- index()：检测某个字串是否包含在这个字符串中，如果在返回这个字串开始的位置下表（正数索引），否则**报错**
  - 字符串.index(self(不用传值)，sub(子字符串)，start(起始位置)，end(终止位置))
- rfind()：和find查找方法相同，但查找方向从右侧开始，返回正数索引
- rindex()：和index查找方法相同，但查找方向从右侧开始，返回正数索引

```python
str1 = 'hello python'
# index
# 需求：查找p所在的位置
print(str1.index('p'))  # 6
print(str1.index('o'))  # 4如果字符串中含有多个子字符串，则会返回指定范围内从左至右第一个查找到的子字符串
print(str1.index('o', 5, 18))  # 10证明查询是从左到右依次查询的
# str1.index('o', 5, 10)  # 报错，指定范围内不存在，查找范围是左闭右开区间
# find
print(str1.find('p'))  # 6
print(str1.find('o'))  # 4
print(str1.find('o', 5, 10))  # -1 ,指定范围内不存在
print(str1.find('o', 5, 18))  # 10
# 子字符串，可以为单个，也可以是多个字符
print(str1.find('python'))  # 6
# rfind
print(str1.rindex('o'))  # 从右侧开始查询，但返回的依旧是正数缩影
```

### count

- 可以返回当前子字符串在指定字符串中出现的次数
  - 字符串.count(self(不用传值)，x(要查询个数的子字符串)，start(开始查询位置)，end(结束位置))

```python
# count
str1 = 'hello python'
print(str1.count('o'))  # 2
print(str1.count('h', 9, 12))  # 1 查询范围是左闭右开区间
print(str1.count('h', 1, 9))  # 0 指定范围内不存在，返回0
```

## 2.字符串修改

### replace替换

- 返回替换后的字符串
  - 字符串.replace(self(不用传值)，old(旧值 )，new(新值)，count(替换次数))

### split/join拆分/合并

- 返回切割后的列表序列按照指定分隔符进行拆分，拆分完成后，会将所有的拆分结果以字符串的形式保存到列表中
  - 
  - 字符串.split(self(不用传值)，sep(分隔符)，maxsplit(最大分割次数)）

```python
# split 字符串的拆分
str1 = 'I love Python and java and c and php'
# 需求：将所有单词按照空格为分隔符进行拆分，拆分为多个字符串
print(str1.split(' '))  # 返回值类型为列表
# ['I', 'love', 'Python', 'and', 'java', 'and', 'c', 'and', 'php']
print(str1.split(' ', 3))  # 控制最大分割次数，最大分割次数为a，返回a+1个字符串
# ['I', 'love', 'Python', 'and java and c and php']
print(str1.split('n', 10))  # 分割符为谁，即不会返回，最大拆分次数如果大于可拆分的次数，保持拆分上限，不会报错
# ['I love Pytho', ' a', 'd java a', 'd c a', 'd php']
```

- 返回合并后的字符串
  - 分隔符.join（iterable（可迭代类型））
  - 容器类型中所有元素均为字符串

```python
# join 字符串合并
list1 = str1.split(' ')
list2 = [1, 2, 3, 'a']
print(list1)
print('♥'.join(list1))
# I♥love♥Python♥and♥java♥and♥c♥and♥php
print('♥'.join(list2))  # 报错，数据类型错误
```

### capitalize/title/upper/lower大小写转换

> Python中怎样对单词进行辨别
>
> 非字母字符都可以作为分隔符

- capitalize首字母大写

- title所有单词首字母大写

- upper/lower返回全部大写或小写的字符串

```python
# 字符串中各种大小写转换
str1 = 'hello world and Python and java and c and 周树人'
print(str1.capitalize())  # 首字母大写，同时将其余全部字母小写，数字、汉字不做处理
# Hello world and python and java and c and 周树人
print(str1.title())  # 每个单词首字母大写，其余字母变为小写
# Hello World And Python And Java And C And 周树人
print(str1.upper())  # 每个字符字母大写
# HELLO WORLD AND PYTHON AND JAVA AND C AND 周树人
print(str1.lower())  # 返回每个字母都小写
# hello world and python and java and c and 周树人
```

### lstrip/rstrip/strip去除空白字符

- 除去左边、右边、以及两边的空白字符
- lstrip/rstrip/strip只能接受str类型参数或者None
  -  字符串.strip(self(不传值)，chars(传一个或者多个字符))

```python
# 去除字符串左右两侧指定空白字符
str1 = '    $$hello python$$  \n  \t  '
# 若strip中不传参数,则去除字符串左右两侧的空白(包括空格,换行,制表符)
print(str1.strip())  # $$hello python$$
# strip中可以传一个或多个字符
print(str1.strip('$, ,\n,\t'))  # hello python
str2 = '123421324hello python24321423'
print(str2.strip('1,2'))  # 3421324hello python24321423
print(str2.strip('1,2,3'))  # 421324hello python243214
print(str2.strip('1,3,2'))  # 421324hello python243214
print(str2.strip('1,2,3,4'))  # hello python
# 从两侧开始查找,若出现和传入的字符不同的字符,则停止
# 传入多个字符时,和传入的顺序无关
# 如果在strip中填写多个字符,等号左右两侧出现的字符如果在传入的字符串中,则删除,否则保留
print(str2.lstrip('1234'))  # hello python24321423
print(str2.rstrip('1234'))  # 123421324hello python
```

### ljust/rjust/center对齐

- 返回原字符串左对齐、右对齐、以及居中对齐
  - 字符串.rjust(self(不传值)，width(宽度)，fillchar(不足位置补齐填充))
  - 字符串.ljust(self(不传值)，width(宽度)，fillchar(不足位置补齐填充))
  - 字符串.center(self(不传值)，width(宽度)，fillchar(不足位置补齐填充))

```python
# 字符串对其
str1 = 'Python'
print(str1.center(16, '♥'))  # ♥♥♥♥♥Python♥♥♥♥♥
# 不指定填充字符,默认空格
print(str1.center(16))  #      Python
print(str1.rjust(16, '♥'))  # ♥♥♥♥♥♥♥♥♥♥Python
print(str1.ljust(16, '♥'))  # Python♥♥♥♥♥♥♥♥♥♥
print(str1.center(4, '♥'))  # Python
```

# 练习

```python
# 练习:计算1-10000中出现7的次数(例如77计数两次,777计数三次......)
str1 = range(1, 10001)
count_sum = 0
for i in str1:
    count1 = str(i).count('7')
    count_sum += count1
print(count_sum)  # 4000
```

```python
# 更加简单的书写
sum1 = 0
for i in range(1, 10001):
    sum1 += str(i).count('7')
print(sum1)   # 4000
```

```python
# 更更简单的
print(str(list(range(1, 10001))).count('7'))  # 4000
```

```python
# 如果不用count计数
sum2 = 0
for i in range(1, 10001):
    if i % 10 == 7:
        sum2 += 1
    if i % 100 // 10 == 7:
        sum2 += 1
    if i % 1000 // 100 == 7:
        sum2 += 1
    if i // 1000 == 7:
        sum2 += 1
print(sum2)   # 4000
```

## 3.字符串判断

- 判断真假，返回的结果是布尔型数据类型：Ture 或者False

### startswith/endswith开头/结尾

- 是否以指定字符开头、结尾
  - 字符串.startswith(self(不传值)，prefix(前缀)，start(开始位置)，end(结束位置))
  - 字符串.endswith(self(不传值)，suffix(后缀)，start(开始位置)，end(结束位置))
  - 指定范围用的非常少，也是左闭又开区间

```python
# 字符串判断
# startswith 判断是否以...开头
# endswith 判断是否以...结尾
str1 = 'hello world!'
print(str1.startswith('he'))  # Ture
print(str1.endswith('!'))  # Ture
print(str1.endswith('.'))  # False
```

### is判断

![1645945822496](/1645945822496.png)

![1645945945457](/1645945945457.png)

```python
# is 判断
# isalnum 判断是否全部为数字或字母,不能有空值
str1 = 'hello world!'
str2 = '  '
str3 = '152642'
str4 = '1524六〇③Ⅲ'
print(str1.isalnum())  # False
print(str2.isspace())  # Ture
# isnumeric(可以判断中文数字和罗马数字和阿拉伯数字) isdecimal isdigit都是判断是否为数字的
print(str3.isnumeric())  # Ture
print(str3.isdigit())  # Ture
print(str3.isdecimal())  # Ture
print(str4.isnumeric())  # Ture
# isidentifier判断是否为标识符,遵守标识符的命名规则
str5 = '2abc'
str6 = 'apple'
print(str5.isidentifier())  # F
print(str6.isidentifier())  # T
# isalpha 判断是否全部为字母,默认将中文当作字母来看
str7 = 'abc童装'
print(str6.isalpha())  # T
print(str7.isalpha())  # T
# 强制判断字母和汉字区分开来(了解)
print(str7.encode('utf-8').isalpha())  # F
print(str6.encode('utf-8').isalpha())  # T
```

# 练习/测试

![1645947914595](/1645947914595.png)

```python
# 练习题1
str1 = '是我近喜视欢镜你昆！'
# ①
print(str1[1:10:2])  # 我喜欢你！
# ②
for i in str1:
    if str1.find(i) % 2 == 1:
        print(i, end='')
    else:
        continue  # #  我喜欢你！
```

```python
# 练习题2
user_name = input('请输入您的用户名：')
if 6 <= len(user_name) <= 10:
    print('用户名合法！')
else:
    print('用户名不合法！')

请输入您的用户名：dnunnf
用户名合法！
```

```python
# 练习题3
str1 = '55412545.png'
str2 = '542514.jpg'
print(str1.endswith('.png'))  # True
print(str2.endswith('.png'))  # False
```

```python
# 练习题4
import random
mystr = 'hbgtyudfcvgresxdcfok8757yh45vfgtyu8jhytfgbvsy'
# print(len(mystr))  # 45
i = 0
while i < 4:
    num = random.randint(0, 45)
    print(mystr[num], end='')
    i += 1
```

![1645950917698](/1645950917698.png)

```python
# ①
str1 = 'abc'
new_str = str1[::-1]
print(new_str)
# ②
str1 = 'abc'
num = [2, 1, 0]
new_str1 = ''
for i in num:
    new_str1 += str1[i]
print(new_str1)
# 规范
str1 = 'abc'
for i in range(1,len(str1)+1)
    print(str1[-i],end='')
```

![1645951531012](/1645951531012.png)

```python
name = 'Tom'
age = 28
score = 96.8
print(f'''"姓名是{name},今年{age}岁了，考试分数为{score}"。''')
# "姓名是Tom,今年28岁了，考试分数为96.8"。
print('"姓名是%s，今年%d岁了，考试分数为%.1f".'%(name, age, score))
# "姓名是Tom，今年28岁了，考试分数为96.8".
```

![1645952332412](/1645952332412.png)

```python
words = " great carTes Create great craters, But great craters Create great craters "
# ①
num = words.find('great')  # 也可以用count来判断
if num == -1:
    print('great不在该字符串中')
else:
    new_words = words.replace('great', 'greats')
print(new_words)
# ②
new_words2 = new_words.title()
print(new_words2)
# ③
print(new_words2.strip())

greats carTes Create greats craters, But greats craters Create greats craters 
 Greats Cartes Create Greats Craters, But Greats Craters Create Greats Craters 
Greats Cartes Create Greats Craters, But Greats Craters Create Greats Craters
```

![1645953229975](/1645953229975.png)

```python
sex = input('请输入您的性别:')
age = int(input('请输入您的年龄:'))
if sex == '男':
    if age >= 60:
        print(f'您的性别为{sex}，您的年龄为{age}，可以退休')
    else:
        print(f'您的性别为{sex}，您的年龄为{age}，不可以退休')
elif sex == '女':
    if age >= 55:
        print(f'您的性别为{sex}，您的年龄为{age}，可以退休')
    else:
        print(f'您的性别为{sex}，您的年龄为{age}，不可以退休')
else:
    print('输入错误，请检查！')
```

![1645953702612](/1645953702612.png)

```python
num = int(input('请输入你想计算几以内的偶数累加和：'))
sum1 = 0
for i in range(1, num+1):
    if i % 2 == 0:
        sum1 += i
    else:
        continue
else:
    print(f'{num}以内的偶数累加和为{sum1}')
```

# 四、列表及其应用场景

- 为什么需要列表

> 列表可以一次性存储多个数据

- 列表的定义

> 存储多个数据，而且可以为**不同**的数据类型
>
> 注：但是，在开发中，为了方便使用和后期迭代，数组中一般储存相同类型的数据
>
> 列表名称 = [数据1，数据2，数据3...]

```python
name_list = ['Joy', 'Tom', 'Jack', 'Mary']
print(name_list)  # ['Joy', 'Tom', 'Jack', 'Mary']
print(type(name_list))  # <class 'list'>
```

- 列表的常用操作

> 增、删、改、查

- 列表的索引下标和str字符串一致，对列表进行查询也是通过索引下表来的

![1645967072437](/1645967072437.png)

## 1.列表的查询index/count/in/not in

- index：查询元素在列表中所处的位置（从左至右），返回元素第一次出现的位置下标，如果不在列表中则报错
- count：查询指定元素在列表中出现的次数
- in：查询指定元素是否在列表中
- not in：查询指定元素是否不在列表中

```python
# 列表查询
name_list = ['Joy', 'Tom', 'Jack']

# 索引查询 正向索引(0开始),负向索引(-1开始)
print(name_list[1])  # Tom
print(name_list[-1])  # Jack
# print(name_list[5])  # 报错

# index查询 ，列表中没有rindex
print(name_list.index('Jack'))  # 2
# print(name_list.index('Mary'))  # 报错
# print(name_list.find('Mary'))  # 报错，列表中没有find

# count查询
print(name_list.count('Mary'))  # 0
print(name_list.count('Tom'))  # 1

# in/not in 查询
print('Joy' in name_list)  # True
print('Joy' not in name_list)  # False
```

## 2.列表的增加append/extend/insert

- append():增加指定数据到列表中
  - 默认追加到末尾,追加完成后,原有列表被修改
- extend():列表结尾追加数据,若数据是序列,则将这个序列的数据逐一添加到列表
  - 格式 : 列表1.extend(数据序列)
  - 追加的数据序列必须是数据序列，**是可以迭代的(字符串,空字符串,列表,元组)**
- insert():指定位置新增数据
  - 列表.insert(要插入位置的索引, 要插入的对象)
  - 在insert中第一个参数是要插入位置的索引,插入数据,则该被插入的数据的索引变为第一参数所显示的索引
  - 因此insert可能造成索引混乱,因此开发中,除非明确所有索引都修改完成,否则不用

```python
# append
num_list = [1, 2, 3, 4]
print(num_list.append('5'))  # None
print(num_list.append(5))  # None
# 如果直接打印append方法的调用，将不会输出任何内容
# list类型在使用append方法时不会产生新的列表，而是**原有的列表**上进行修改
# str类型数据，调用replace方法时，不会修改原有数据，而是产生新的字符串
print(num_list)  # [1,  2, 3, 4, '5', 5]   改变了原有的列表
```

![1646014681869](/1646014681869.png)

```python
# extend
list1 = [1, 2, 3]
list2 = [4, 5, 6]
str1 = 'itcast'
list1.extend(list2)
print(list1)  # [1, 2, 3, 4, 5, 6]
print(list2)  # [4, 5, 6]
# 追加数据序列后，调用extend的列表发生变化，追加的数据序列不发生变化，被追加的发生变化
list2.extend(str1)
print(list2)  # [4, 5, 6, 'i', 't', 'c', 'a', 's', 't']
# 底层逻辑就是：追加的数据序列迭代，依次放入调用该方法的列表中
# 追加的数据序列必须是数据序列，是可以迭代的
```

```python
# insert
num_list = [1, 2, 3, 4]
num_list.insert(1, 5)
print(num_list)  # [1, 5, 2, 3, 4]
# append和extend插入数据，更加安全
```

- extend:将list2当作多个元素进行拆分后依次追加
- append:将list2当作一个元素追加到列表末尾

```python
# extend和append比较
list1 = [1, 2, 3, 4]
list2 = [5, 6, 7, 8]
list1.append(list2)
print(list1)   # [1, 2, 3, 4, [5, 6, 7, 8]]
list1.extend(list2)
print(list1)   # [1, 2, 3, 4, 5, 6, 7, 8]
```

## 3.列表的删除del/pop/remove/clear

- del列表[索引]  :删除列表中的某个元素
  - 先查找,后删除
  - 不仅可以删除元素,也可以删除任何变量,非常强大,但是不安全
  - 使用del删除不存在的元素下标 ,  查找阶段就会报错
- pop()  :删除指定下标的数据(默认为最后一个),并返回该数据
  - 若不给pop传值,默认为删除最后一个
  - 删除后,可以返回被删除的对象
  - 删除后,指定位置元素消失后边的元素统一向左移动一位
  - pop也会造成索引变换
  - 使用pop删除不存在的元素下标,会报错
- remove()  :移除列表中某个数据的第一个匹配项
  - 删除从左至右第一次出现的元素
  - remove不会返回删除的内容
  - remove列表中不存在的数据,会报错
- clear()  :清空列表,删除列表中的所有元素,返回空列表
  - 返回[] ,就是将原来的列表置为[] ------删除内容
  - 但是list1=[]  ,就是将原来的列表抛弃,新建一个空列表命名为list1-----新建一个空间

```python
# del 将数据引用切断
list1 = [1, 2, 3, 4]
del list1[2]
print(list1)  # [1, 2, 4]
# 循环中可以删除吗？
# 此处并没有删除，因为i是临时变量，我们使用del是在将i和2的引用关系删除，但是list1和2的引用关系没有解除
for i in list1:
    if i == 2:
        del i
print(list1)  # [1, 2, 4]
```

```python
# pop
list1 = [1, 2, 3, 4]
print(list1.pop(2))  # 3
print(list1)  # [1, 2, 4]
print(list1.pop())  # 4
print(list1)  # [1, 2]
```

```python
# remove
list1 = [1, 2, 3, 3, 4, 2, 1]
# 删除2
list1.remove(2)
print(list1)  # [1, 3, 3, 4, 2, 1] 只删除了从左至右第一个值
```

```python
# clear
list1 = [1, 2, 3, 3, 4, 2, 1]
list1.clear()
print(list1)  # []
```

## 4.列表的修改

- 列表[索引] = 修改后的值  : 修改列表中的某个元素
  - 先查找 , 后修改(本质就是对变量赋值)
  - 索引不存在时,会报错
  - 可以通过对多个变量赋值的形式同时修改多个值
- reverse:将数据序列进行倒叙排列
  - 列表反转后,索引倒置 , 没有产生新的列表
- sort : 对列表进行排序
  - 格式  :  list1.sort(key=排序规则函数 , reverse= True/False)
    - key可以帮助我们进行更复杂的排序
  - 默认升序
  - sort是对原有的数据进行了排序,没有产生虚拟的列表
- copy :对列表序列进行拷贝
  - 

```python
# 通过索引修改
list1 = [1, 2, 3, 4]
list1[1] = 6
print(list1)  # [1, 6, 3, 4]
# list1[2, 3] = 6, 7  # 报错
list1[2], list1[3] = 6, 7
print(list1)  # [1, 6, 6, 7]
```

```python
# reverse 列表反转
list1 = [1, 2, 3, 4]
print(list1.reverse())  # None
print(list1)  # [4, 3, 2, 1]
```

```python
# sort  排序
list2 = [2, 6, 45, 1, 41, 524]
print(list2.sort())  # None
print(list2)  # [1, 2, 6, 41, 45, 524]
# 怎么降序?
# ①先默认升序,再reverse反转
list2.sort()
list2.reverse()
print(list2)  # [524, 45, 41, 6, 2, 1]
# ②reverse=True是否反转,是
list2.sort(reverse=True)
print(list2)  # [524, 45, 41, 6, 2, 1]
```

```python
# copy
list1 = [1, 2, 3, 4]
list2 = list1.copy()
print(list2)  # [1, 2, 3, 4]
```

# 五、列表的循环遍历

## 1.while遍历列表

```python
len()
可以查询列表的长度
```

```python
# while
list1 = [2, 6, 45, 1, 41, 524]
i = 0
while i < len(list1):
    print(list1[i])
    i += 1
'''2
6
45
1
41
524'''
```

## 2.for遍历列表★(推荐)

- **推荐使用for循环遍历容器类型**

```python
list2 = [2, 6, 45, 1, 41, 524]
for i in list2:
    print(i)
'''2
6
45
1
41
524'''
```

# 练习

## ★**总结:**删除后索引变化问题

- 删除列表里的数据(不止一个)时
  - 控制次数: 即为数据的个数,count
  - 循环体就是删除数据
  - 注意索引变化的问题
    - 可以控制 i 的自增
    - 也可以避开

![1646030403093](/1646030403093.png)

```python
# 练习:list1 = [1,2,3,4,5,5,4,3,2,1,1,2,3,4,5]
list1 = [1, 2, 3, 4, 5, 5, 4, 3, 2, 1, 1, 2, 3, 4, 5]
# 需求:使用remove删除所有的5
for i in list1:
    if i == 5:
        list1.remove(i)
print(list1)  # [1, 2, 3, 4, 4, 3, 2, 1, 1, 2, 3, 4, 5]
# 删除不完整,原因不明?
# 原因是删除后,索引发生了改变,for循环时会跳过某些s
for i in list1:
    if list1.count(5):
        list1.remove(5)
print(list1)  # [1, 2, 3, 4, 4, 3, 2, 1, 1, 2, 3, 4]
# 删除完整,但是浪费性能
for i in range(list1.count(5)):
    list1.remove(5)
print(list1)  # [1, 2, 3, 4, 4, 3, 2, 1, 1, 2, 3, 4]
```

```python
# 需求:使用pop删除所有的5
list1 = [1, 2, 3, 4, 5, 5, 4, 3, 2, 1, 1, 2, 3, 4, 5]
for i in range(list1.count(5)):
    list1.pop(list1.index(5))
# index = list1.inedx(5)
# list1.pop(index)
print(list1)  # [1, 2, 3, 4, 4, 3, 2, 1, 1, 2, 3, 4]

i = 0
while i　＜　len(list1):
    if list1[i] == 5:
        list1.pop(i)
        continue
# ★☆★ 这里可以成功的原因是:控制i的自增,当删除后,不自增,就不会收到索引变化的影响
     i += 1
print(list1)  # [1, 2, 3, 4, 4, 3, 2, 1, 1, 2, 3, 4]
```

```python
# 需求:使用del删除所有的5
for i in range(list1.count(5)):
    del list1[list1.index(5)]
print(list1)  # [1, 2, 3, 4, 4, 3, 2, 1, 1, 2, 3, 4]

i = 0
while i　＜　len(list1):
    if list1[i] == 5:
        del list1[i]
        continue
    i += 1
print(list1)  # [1, 2, 3, 4, 4, 3, 2, 1, 1, 2, 3, 4]
```

# 六、列表的嵌套

> 列表嵌套:一个列表里面包含了其他的子列表(多级列表)

注意 : 如果当前的列表内的数据都不是子列表,还有其他数据类型的数据,则不能直接使用循环嵌套,要先进行判断

```python
# 列表嵌套
name_list = [['小明', '小红', '小绿'], ['Tom', 'Jack', 'Rose'], ['张三', '李四', '王五']]
# 需求：想要获取李四的值
# print(name_list[2])  # ['张三', '李四', '王五']
# print(name_list[2][1])  # 李四
# 需求：获取列表中的每一个值
# ①
for i in name_list:  # 一级列表有三个数据，循环三次
    for j in range(len(i)):  # 取出以及列表的长度［０，１，２，３）
        print(name_list[name_list.index(i)][j])  # 打印出每一个元素
# ②        
for i in name_list:
    for j in i:
        print(j)
```

# 七、元组及其应用场景

- 列表:储存多个数据,但是数据可以被修改
- 元组 : 储存多个数据,而且不能被修改
  - 只能被查询

## 1.元组定义

```python
# 元组定义：变量 = （数据1，数据2，数据3,）
# 元组定义:变量 = (数据,)
# 括号可以省略
tuple1 = 1, 2, 3, 4
# 打印后可以展示元组中的全部信息
print(tuple1)  # (1, 2, 3, 4)
# 查询数据类型
print(type(tuple1))  # <class 'tuple'>
```

```python
# 如果元组中只有一个元素怎么定义？在单一元素后加逗号
tuple2 = (5)
print(type(tuple2))  # <class 'int'>
tuple3 = ('5')
print(type(tuple3))  # <class 'str'>
tuple4 = ([5])
print(type(tuple4))  # <class 'list'>
tuple5 = ([5, 6])
print(type(tuple5))  # <class 'list'>
tuple6 = (5,)  # tuple6 = 5，
print(type(tuple6))  # <class 'tuple'>  元组
# 为什么其他都不是元组，小括号的作用是什么？提升算数优先级作用
```

## 2.元组的简单操作

元组中只能被查询,不能进行增删改查

```python
tuple1 = 1, 2, 3, 4,

# 通过索引进行查询，查询方法和列表一致
# 取3（正负向索引）
print(tuple1[2])  # 3
print(tuple1[-2])  # 3

# index 查询指定元素在元组中第一次出现的索正向引值
# 查询3，从左至右依次查询第一个数据的正向索引值，不存在会报错print(tuple1.index(3))  # 2

# count 查询指定元素在元组中出现的次数
print(tuple1.count(3))  # 1

# len:对所有的容器类型使用
print(len(tuple1))  # 4
# len()就是调用了括号内__len__方法
print(tuple1.__len__())  # 4
```