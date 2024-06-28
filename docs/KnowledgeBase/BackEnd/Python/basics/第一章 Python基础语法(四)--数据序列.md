---
	 typora-root-url: assets
---

# 第一章 Python基础语法(四)--数据序列

# 02-Python数据序列(下)

# 一.字典的定义及其应用场景

# 1.字典的定义(见名知意)

> 字典:字典里面的数据是以键值对形式出现,字典数据和数据顺序没有关系,即字典不支持下标,后期无论数据如何变化,只需要按照对应的键名查找数据即可
>
> 字典:无序

字典的特点:

- 括号为大括号(花括号)
- 数据为键值对形式出现
- 各个键值对之间用逗号隔开
- 优势:快速存取
- 占用空间远大于列表,牺牲空间确保时间
- 键名取名:见名知意 , 一个字典内的键名不可重复,键是唯一的,否则前面的值就会被覆盖
- 键唯一 , 值可以重复

> 变量名 = {'name':'Mary','age':'20'}
>
> 变量名  =  {}
>
> 变量名  =  dict()

- 冒号前:键-key
- 冒号后:值-value
- key:value就是键值对

```python
# 字典定义
dict1 = {'name': 'Mary', 'age': '20', 'gender': 'female'}
print(dict1)  # {'name': 'Mary', 'age': '20', 'gender': 'female'}
print(type(dict1))  # <class 'dict'>

# 空字典定义
dict2 = {}
dict3 = dict()

# 键唯一 ，值可以重复
dict2 = {'name': 'Mary', 'age': '20', 'name': 'female'}
print(dict2)  # {'name': 'female', 'age': '20'}
dict3 = {'name': 'Mary', 'age': '20', 'gender': '20'}
print(dict3)  # {'name': 'Mary', 'age': '20', 'gender': '20'}
```

# 2.字典的操作

## 增

- 使用 新的键 = 值  的形式增加键值对
- 格式 : 字典变量[新key] = 值

```python
# 增
dict1 = {'name': 'Mary', 'age': '20'}
dict1['gender'] = 'female'
print(dict1)  # {'name': 'Mary', 'age': '20', 'gender': 'female'}
# 还可以用 dict1.update({'id':'001'}) 一般用于两个字典间的拼接
```

## 改

- 格式 : 字典变量[旧key] = 值
  - key必须存在
- update
  - 字典变量.update(键=值)
  - 字典变量.update({键:值})

```python
# 改
dict1 = {'name': 'Mary', 'age': '20', 'gender': 'female'}

dict1['gender'] = 'male'
print(dict1)  # {'name': 'Mary', 'age': '20', 'gender': 'male'}

dict1.update(name='Jack')
print(dict1)  # {'name': 'Jack', 'age': '20', 'gender': 'male'}

dict1.update({'name': 'Tom'})
print(dict1)  # {'name': 'Tom', 'age': '20', 'gender': 'male'}
```

## 删

- del
- clear
- pop
- popitem

```python
# 删

# del 先查找，后删除
dict1 = {'name': 'Mary', 'age': '20'}
del dict1['age']
print(dict1)  # {'name': 'Mary'}

# clear 清空原内存空间
dict1.clear()
print(dict1)  # {}

# pop pop根据指定的key删除键值对，删除的键可以进行返回
dict2 = {'name': 'Mary', 'age': '20'}
print(dict2.pop('name'))  # Mary
print(dict2)  # {'age': '20'}

# popitem 随机删除，大多数删除最后一个键值对，删除后的键值对以元组的形式进行返回
dict3 = {'name': 'Mary', 'age': '20'}
print(dict2.popitem())  # ('age', '20')
print(dict3)  # {'name': 'Mary', 'age': '20'}
```

## 查

- 直接key查询
  - 格式 : 变量名['key']
  - 键不存在,报错

- get(key,默认值)
  - 格式 : 变量值.get(key,默认值)
  - key不存在,默认返回None
  - 设置默认值,可以自定义不存在时返回的值
- keys
  - 格式 : 变量值.keys()
  - 返回内容不是列表,不能使用索引查询,但是可以被迭代
- values
  - 格式 : 变量值.values()
  - 返回内容不是列表,不能使用索引查询,但是可以被迭代
- items
  - 格式 : 变量值.items()
  - 返回内容不是列表,不能使用索引查询,但是可以被迭代

```python
# 查
dict1 = {'name': 'Mary', 'age': '20', 'gender': 'female', 'id': '001'}

# 直接用key进行查询
print(dict1['name'])  # Mary
# print(dict1['apple'])  # 报错，不存在

# get查询
print(dict1.get('apple', 'Nothing'))  # None(默认)  # Nothing
print(dict1.get('id'))  # 001

# keys 获取所有的键
print(dict1.keys())  # dict_keys(['name', 'age', 'gender', 'id'])
print(type(dict1.keys()))  # <class 'dict_keys'>

# values 获取所有的值
print(dict1.values())  # dict_values(['Mary', '20', 'female', '001'])
print(type(dict1.values()))  # <class 'dict_values'>

# items 获取所有的键和值
print(dict1.items())  # dict_items([('name', 'Mary'), ('age', '20'), ('gender', 'female'), ('id', '001')])
print(type(dict1.items()))  # <class 'dict_items'>
```

# 3.字典的遍历

- 对字典的遍历**默认**获取的是键

```python
# 字典的遍历
dict1 = {'name': 'Mary', 'age': '20', 'gender': 'female', 'id': '001'}

# 默认获取字典的所有键
for i in dict1:
    print(i)
'''
name
age
gender
id
'''

# print利用打印,分别输出键和值
for i in dict1:
    print(i, dict1[i])
'''name Mary
age 20
gender female
id 001'''

# .keys  获取字典的所有键
for i in dict1.keys():
    print(i)
    
# .values 获取字典的所有值
for i in dict1.values():
    print(i)
'''Mary
20
female
001'''

# .items 获取字典的键值对组成的元素
for i in dict1.items():
    print(i)
'''('name', 'Mary')
('age', '20')
('gender', 'female')
('id', '001')'''

# 写的见名知意一些
for key, value in dict1.items():
    print(key, value)
'''name Mary
age 20
gender female
id 001'''
```

# 二.集合的定义及其应用场景

# 1.集合的定义

> 集合:无序的不重复元素序列
>
> 即集合里面的元素是**不可重复**的并且集合内的元素是**无序**的

无序:程序员无法控制其排序,程序员无法使用索引查找或修改数据

不重复:没有办法在字典中放入相同的值,会自动去重,类似于字典的键

```python
# 集合 无序+不重复
# 无序
set1 = {1, 5, 6, 4, 8, 9}
# 了解:在集合中会使用数据的值计算哈希值,根据哈希值顺序进行排序
print(set1)  # {1, 4, 5, 6, 8, 9}

# 不重复
set2 = {1, 5, 2, 4, 1, 5, 4, 3}
# set会自动去重
print(set2)  # {1, 2, 3, 4, 5}

# 定义空集合 {}是定义空字典的
set3 = set()
print(set3)  # set()
```

- ```
  字符串,int,float,bool,元组 可以用集合存储
  ```

- 列表,字典,集合**不能**用集合存储(说明不能被哈希)
- 不能作为集合元素的数据类型,同样不能作为字典的键出现(原理相同,都是可以去重)

```python
# 集合能够存储什么数据?

# 布尔值在进行计算时 True == 1 False == 0
# 基础数据类型:int  float bool 字符串  都可以用集合储存
set4 = {1, 2, True, False, ''}
print(set4)  # {False, 1, 2, ''}

# 列表 不能用集合存储
# set5 = {1, 2, True, False, '', [1, 2]}
# print(set5)  # 报错

# 元组 可以用集合存储
set6 = {1, 2, True, False, '', (1, 2)}
print(set6)  # {False, 1, 2, (1, 2), ''}

# 字典 不能用集合存储
set7 = {1, 2, True, False, '', {1:2}}
print(set7)  # 报错

# 集合本身 用集合存储
set8 = {1, 2, True, False, '', {1, 2}}
print(set8)  # 报错
```

```python
# 字典的键可以为:字符串,int,float,bool,元组
dict1 = {'name': '字符串', (1, 2): '元组', 1: 'int', 1.2: 'float', True: 'bool'}
print(dict1)  # {'name': '字符串', (1, 2): '元组', 1: 'bool', 1.2: 'float'}

# 字典的键不能为:列表,集合,字典
dict2 = {[1, 2]: 'list'}  # 报错 TypeError: unhashable type: 'list'
dict2 = {{1, 2}: '集合'}  # 报错 TypeError: unhashable type: 'set'
dict2 = {{1: 2}: '字典'}  # 报错 TypeError: unhashable type: 'dict'
```

# 2.集合的相关操作

## 增

- add()
- update

```python
# 集合的增
# add 增加:只能添加一个值,不会产生新的数据,只在原有集合进行修改
set1 = {1, 2, 3, 4}
print(set1.add((1, 2)))  # None
print(set1)  # {1, 2, (1, 2), 3, 4}

# update 更新:update内部只能填写容器类型(数据序列)
set2 = {1, 2, 3, 4}
set2.update(5)
print(set2)  # 报错 'int' object is not iterable
# 把内部填写的数据序列,迭代加入集合中(一个一个)
print(set2.update((5, 6)))
print(set2)  # {1, 2, 3, 4, 5, 6}
# 更新的数据存在,则去重
set2.update((3, 8))
print(set2)  # {1, 2, 3, 4, 5, 6, 8}
```

## 删

- remove
- pop
- discard

```python
# 集合的删除

# remove 只能删除一个元素,删除元素不存在,会报错
set1 = {1, 2, 3, 4, (1, 3)}
set1.remove((1, 3))
print(set1)  # {1, 2, 3, 4}

# discard 只能删除一个元素,删除元素不存在,不会报错
set2 = {1, 2, 3, 4}
print(set2.discard(4))  # None
print(set2)  # {1, 2, 3}
print(set2.discard(12))  # None
print(set2)  # {1, 2, 3}
set2.discard(1, 3)
print(set2)  # 报错 discard() takes exactly one argument

# pop 随机删除一个元素,并且可以返回删除的元素
set3 = {1, 2, 3, 4}
print(set3.pop())  # 1
print(set3.pop())  # 2
print(set3)  # {3, 4}
```

## 改

## 查:判断

- in
- not in
- 格式:元素 in 集合
- 判断的数据一定要能够在集合中储存

```python
# 集合的判断
set1 = {1, 2, 3, 4}
# in
print(1 in set1)  # True
print(5 in set1)  # False
# not in
print(1 not in set1)  # False
print(5 not in set1)  # True
```

# 3.集合的遍历

```python
# 集合的遍历
set1 = {1, 2, 3, 4}
for i in set1:
    print(i)
'''1
2
3
4'''

# 集合遍历的时候顺序不定
name_set = {'Tom', 'Bob', 'Jack'}
for i in name_set:
    print(i)
'''Jack
Bob
Tom'''
```

# ★练习

![1646202650415](/1646202650415.png)

```python
# 题目1
my_list = ["spring", "look", "strange", "curious", "black", "hope"]
my_list.remove('spring')
my_list.remove('strange')
print(my_list)  # ['look', 'curious', 'black', 'hope']
my_list[0] = 'joke'
print(my_list)  # ['joke', 'curious', 'black', 'hope']
my_list.insert(1, my_list[-1])
print(my_list)  # ['joke', 'hope', 'curious', 'black', 'hope']
```

```python
# 第一步应使用列表的遍历删除
for i in my_list:
    if i.startswith('s'):
        my_list.remove(i)
print(my_list)  # ['look', 'curious', 'black', 'hope']
```

```python
# 但是这种方法只是恰好对了,当第二个元素也为s开头则上面方法错误
# 原因就是删除之后,索引变化,导致有部分元素没有被遍历,因此要控制i的zizeng

you_list = ["spring", "slook", "strange", "curious", "black", "hope"]
for i in you_list:
    if i.startswith('s'):
        you_list.remove(i)
print(you_list)  # ['slook', 'curious', 'black', 'hope']  错误

i = 0
while i < len(you_list):
    if you_list[i].startswith('s'):
        you_list.pop(i)
    i += 1
print(you_list)   # ['slook', 'curious', 'black', 'hope']  错误
```

```python
you_list = ["spring", "slook", "strange", "curious", "black", "hope"]

# 方法一:while 中continue控制自增
i = 0
while i < len(you_list):
    if you_list[i].startswith('s'):
        you_list.pop(i)
        continue  # 控制i的自增
    i += 1
print(you_list)  # ['curious', 'black', 'hope']

# 方法二:利用一个新的列表提取出正确结果
new_list = []
i = 0
while i < len(you_list):
    if not you_list[i].startswith('s'):
        new_list.append(you_list[i])
    i += 1
you_list = new_list
print(you_list)  # ['curious', 'black', 'hope']
```

![1646203639679](/1646203639679.png)

```python
# 题目2
list1 = [11, 45, 34, 51, 90]
list2 = [4, 16, 34, 0]
list1.extend(list2)
print(list1)  # [11, 45, 34, 51, 90, 4, 16, 34, 0]
list3 = set(list1)  # 集合自动去重
list1 = list(list3)
print(list1)  # [0, 34, 4, 11, 45, 16, 51, 90]
list1.sort(reverse=True)
print(list1)  # [90, 51, 45, 34, 16, 11, 4, 0]
```

![1646203656708](/1646203656708.png)

```python
# 题目3
tuple1 = ('tom', 'kaisa', 'alisi', 'xiaoming', '松鼠')
print(tuple1.index('alisi'))  # 2
# ①直接利用下标索引
print(tuple1[2])  # alisi
# ②
print(tuple1.__getitem__(2))  # alisi
# ③利用循环
for i in tuple1:
    if tuple1.index(i) == 2:  # if i == 'alisi'
        print(i)
        break  # alisi
# ④利用切片
print(tuple1[::1][2])  # alisi
```

![1646203677238](/1646203677238.png)

```python
# 题目4
tuple1 = ('tom', 'kaisa', 'alisi', 'xiaoming', '松鼠')
print(len(tuple1))  # 5

也可以循环
```

![1646203701668](/1646203701668.png)

```python
# 题目5
dict1 = {'name': 'python'}
dict1.update({'name': '传智'})
print(dict1)  # {'name': '传智'}
```

![1646203726813](/1646203726813.png)

```python
# 题目6
dict1 = {'name': '传智', 'age': '18'}
dict1.pop('age')
print(dict1)  # {'name': '传智'}
dict1.popitem()  # 随机删除键值对,一般为最后一个
print(dict1)  # {}
dict1.clear()
print(dict1)  # {}
```

![1646203746164](/1646203746164.png)

```python
# 题目7
dict1 = {'name': '传智', 'age': '18'}
for i in dict1.keys():
    print(i)  # name age
for i in dict1.values():
    print(i)  # 传智 18
for i in dict1.items():
    print(i)  # ('name', '传智') ('age', '18')
for i in dict1:
    print(f'{i}: {dict1[i]}')  # name: 传智 age: 18
```

![1646203765267](/1646203765267.png)

```python
# 题目8
product = [
    {'name': '电脑', 'price': 7000},
    {'name': '鼠标', 'price': 30},
    {'name': 'usb电动小风扇', 'price': 20},
    {'name': '遮阳伞', 'price': 50}
]
my_price = 8000
sum1 = 0
for i in product:
    # 取出每一个字典
    for j in i:
        if j[0] == 'price':
            sum1 += int(i.get('price'))
    # ②不用嵌套
    # sum1 += i.get('price') 
if sum1 <= my_price:
    print(f'您有{my_price}元,可以购买下所有产品,共{sum1}')
# 您有8000元,可以购买下所有产品,共7100
```

# 三.数据序列的公共方法

![1646210676871](/1646210676871.png)

# 1.公共方法(一)

## ①加法

- 加法运算适合所有的基础数据类型(int float bool)
- 加运算左右两侧的数据类型要相同(适用于容器类型)
- 加法运算在容器类型中是**拼接**的意思 , 不是相加计算值

```python
# 加法
# 基础数据序列 int float bool
# 基础数据序列:不同类型也可以用加法
int1 = 1
int2 = 3
float1 = 2.1
float2 = 3.1
bool1 = True
bool2 = False
print(int1 + int2)  # 4
print(int1 + float1)  # 3.1
print(int1 + bool1)  # 2
print(float1 + float2)  # 5.2
print(bool1 + bool2)  # 1

# 容器类型(数据序列):适用于列表,元组
# 容器类型:不同类型数据不可以相加
list1 = [1, 2]
list2 = [3, 4]
tuple1 = (1, 2)
tuple2 = (3, 4)
dict1 = {'name': 'Tom'}
dict2 = {'age': '18'}
set1 = {1, 2}
set2 = {2, 3}
print(list1 + list2)  # [1, 2, 3, 4]
print(tuple1 + tuple2)  # (1, 2, 3, 4)

print(dict1 + dict2)  # 报错
print(set1 + set2)  # 报错
print(list1+tuple1)  # TypeError: can only concatenate list (not "tuple") to list
```

## ②乘法

- 基础数据类型都可以进行乘法运算
- 容器类型只能和int类型数据进行乘法运算.并且只有列表 , 元组类型可以
- 对于容器类型数据,乘法运算的效果,就是将容器类型数据复制指定次数,并拼接到一起

```python
# 乘
# 基础数据类型:都可以使用*计算,不同类型之间也可以计算
int1 = 1
int2 = 3
float1 = 2.1
float2 = 3.1
bool1 = True
bool2 = False
print(int1 * int2)  # 3
print(int1 * float1)  # 2.1
print(int1 * bool1)  # 1
print(float1 * float2)  # 6.5100000000001
print(bool1 * bool2)  # 0
```

```python
# 容器类型:列表,元组可以进行乘法运算
# 格式:容器类型 * int类型数据
# (等号左右两侧可以互换)
# 对于容器类型数据,乘法运算的效果,就是将容器类型数据复制指定次数,并拼接到一起
list1 = [1, 2]
list2 = [3, 4]
int1 = 3
float1 = 1.1
tuple1 = (1, 2)
tuple2 = (3, 4)
dict1 = {'name': 'Tom'}
dict2 = {'age': '18'}
set1 = {1, 2}
set2 = {2, 3}

print(list1 * int1)  # [1, 2, 3, 4]
print(list1 * float1)  # TypeError: can't multiply sequence by non-int of type 'float'
print(int1 * list1)  # [1, 2, 1, 2, 1, 2]

print(tuple1 * int1)  # (1, 2, 3, 4)
print(tuple1 * float1)  # TypeError: can't multiply sequence by non-int of type 'float'
print(int1 * tuple1)  # (1, 2, 1, 2, 1, 2)

print(dict1 * int1)  # TypeError: unsupported operand type(s) for *: 'dict' and 'int'
print(set1 * int1)  # TypeError: unsupported operand type(s) for *: 'set' and 'int'
```

## ③in/not in

- 使用in 和 not in时  :  被判断的元素在关键字左侧,数据序列在关键字右侧

- 如果判断该元素是否在容器内,该元素必须能保存到容器内

  - 比如集合不能保存列表,集合,字典,不能判断

- ```
  dict判断时,只能判断是否存在键,不能判断值,字典,列表,集合
  ```

- ```
  str判断时,左侧的元素必须为字符串
  ```

```python
# in 判断元素是否在容器当中
# 判断是否在set中,要注意被判断的元素必须可以被保存在set中,(列表,字典,集合就不可以)
list1 = [1, 2]
tuple1 = (1, 2)
dict1 = {'name': 'Tom'}
set1 = {1, 2}
str1 = 'hello1'

print(1 in list1)  # True
print(1 in tuple1)  # True
print(1 in set1)  # True

print('name' in dict1)  # True
print('Tom' in dict1)  # False dict判断时,只能判断是否存在键,不能判断值,字典,列表,集合

print('e' in str1)  # True
print(1 in str1)  # 报错 str判断时,左侧的元素必须为字符串
print('1' in str1)  # True

# not in 使用方法和in相同,结果取反即可
```

## ④.切片

- 列表,str,元组可以使用切片,使用方法一致
  - 格式:变量[起始位置:终止位置:步长]
- 所有的切片都不会在原有的数据上进行修改
- 字典和集合不可以使用切片:因为不能使用索引获取数据(哈希索引)

# 2.公共方法(二)--公共函数

![1646276959729](/1646276959729.png)

## len()

- 格式:
  - len()
  - 容器名._ _ len_ _ ()
- 和count()不同
  - count(值)
  - len(容器)

```python
# len() 获取容器类型的元素个数/容器的长度
# __len__() 另一种形式,作用相同
str1 = '123'
list1 = [1, 2, 3]
tuple1 = (1, 2, 3)
set1 = {1, 2, 3}
dict1 = {'name': 123}
print(len(str1))  # 3
print(len(list1))  # 3
print(len(tuple1))  # 3
print(len(set1))  # 3
print(len(dict1))  # 1 可以获取字典中的键值对个数
print(dict1.__len__())  # 1
```

## del()

- 列表 , 字典 ,可以使用del删除内部元素
  - 列表删除元素
  - 字典删除的是键值对
- 使用 del 没法 循环遍历 删除set中的元素,因为引用机制问题
- str ,  tuple 内部的元素都不可以更新 , 所以不能使用del删除

```python
# del() 删除容器内指定的元素
str1 = '123'
list1 = [1, 2, 3]
tuple1 = (1, 2, 3)
set1 = {1, 2, 3}
dict1 = {'name': 123}

del list1[0]
print(list1)  # [2,3]

del tuple1[1]
print(tuple1)  # 报错,元组内的元素不能被删除

del dict1['name']
print(dict1)  # {}

del set1[0]
print(set1)  # 报错  TypeError: 'set' object doesn't support item deletion

del str1[0]
print(str1)  # TypeError: 'str' object doesn't support item deletion
```

## min/max()

- list tuple set str 都可以获取容器内部的最大最小值

- dict 可以获取到容器内部键的最大最小值

- > 问题:非数字类型是根据什么判断大小的?

```python
# min/max
str1 = '123abc0f共一那么难哪翻长繁殖魅力藕'
list1 = [1, 2, 3]
tuple1 = (1, 2, 3)
set1 = {1, 2, 3}
dict1 = {'z': 123, 'p': '18', 'o': '123', 'a': '3'}

print(max(str1))  # 魅
print(max(list1))  # 3
print(max(tuple1))  # 3
print(max(set1))  # 3
print(min(dict1))  # a
```

## range(start,end,step)

```python
# range 供for使用
str1 = '123'
list1 = [1, 2, 3]
tuple1 = (1, 2, 3)
set1 = {1, 2, 3}
dict1 = {'name': 123}

for i in range(len(str1)):
    print(i)  # 0  1   2
```

## enumerate()

> 不是函数,是一个类

- 在list tuple  str中**可以当作**索引使用 , 生成的是**序号**,只不过默认的是从0开始

- 对于所有的容器类型都适用 
- 对于dict类型,枚举出的是键

```python
# enumerate 枚举函数:获取容器内的数据时添加序号(默认从0开始一颗作为索引使用)
list1 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
tuple1 = (1, 2, 3)
str1 = '123'
set1 = {1, 2, 3, 4}
dict1 = {'name': 123, 'age': '12'}
for i in list1:
    print(i)  # 1 2 3 4 5 6 7 8 9
# 同时获取索引和元组,打印出来的是(索引,值)组成的元组

for i in enumerate(list1):
    print(i)
'''(0, 1)
(1, 2)
(2, 3)
(3, 4)
(4, 5)
(5, 6)
(6, 7)
(7, 8)
(8, 9)'''

for j in enumerate(tuple1):
    print(j)
'''(0, 1)
(1, 2)
(2, 3)'''

for j in enumerate(set1):
    print(j)
'''(0, 1)
(1, 2)
(2, 3)
(3, 4)'''

for j in enumerate(str1):
    print(j)
'''(0, '1')
(1, '2')
(2, '3')'''

for j in enumerate(dict1):
    print(j)
'''(0, 'name')
(1, 'age')'''
```

# 四.列表集合字典推导式

# 1.推导式定义

推导式 : 又称解析式,是Python的一种独有特性. 通过一定的规则可以推出一个新的序列

- 所有推导式都可以用for改写
- 没有元组和字符串推导式,因为其内部不能改写

# 2.列表推导式

## ![1646288220292](/1646288220292.png)

- 列表推导式格式
  - [要插入列表的表达式  for  临时变量  in 数据序列]
  - [要插入列表的表达式  for  临时变量  in 数据序列  if  条件]

```python
# 推导式:根据一定的规则快速构建数据序列
# 需求:获取从0-9的数据序列
# ① 用循环
list1 = []
for i in range(10):
    list1.append(i)
print(list1)  # [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
list2 = []
i = 0
while i < 10:
    list2.append(i)
    i += 1
print(list2)  # [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

# ②使用推导式
# 格式:[要插入的表达式 for 临时变量 in 数据序列]
list3 = [i for i in range(10)]
print(list3)  # [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

# 需求:创建一个从1-100的偶数序列
list4 = [2*i for i in range(1, 51)]
print(list4)
# 缺点:用了人脑
# 格式:[要插入的表达式 for 临时变量 in 数据序列 if 条件]
list5 = [i for i in range(1, 101) if i % 2 == 0]
print(list5)
```

```python
# 需求:用推导式进行九九乘法表的生成,将所有的算式反放入列表中
# for
for i in range(1, 10):
    for j in range(1, i+1):
        print(f'{j}*{i}={i*j}')
# 推导式
list6 = [f'{i}*{j}={i*j}' for i in range(1, 10) for j in range(1, i+1)]
print(list6)
```

# 3.集合推导式

- 和列表推导式一致 , 只不过用{}包裹 , 并且会去重
- 集合推导式格式
  - {要插入列表的表达式  for  临时变量  in 数据序列}
  - {要插入列表的表达式  for  临时变量  in 数据序列  if  条件}

```python
# 集合推导式
set1 = {i for i in range(10)}
print(set1)  # {0, 1, 2, 3, 4, 5, 6, 7, 8, 9}
```

# 4.字典推导式

- 字典推导式格式:
  - {要插入的键 : 要插入的值  for  临时变量  in  数据序列  if  条件}

![1646290747100](/1646290747100.png)

```python
# 字典推导式
keys = ['name', 'age', 'gender', 'id']
values = ['xiaoming', '18', '女', '001']
# 需求:想将key和value一一对应,形成一个字典
dict1 = dict()
for i in range(len(keys)):
    dict1[keys[i]] = values[i]
print(dict1)  # {'name': 'xiaoming', 'age': '18', 'gender': '女', 'id': '001'}
dict2 = {keys[i]: values[i] for i in range(len(keys))}
print(dict2)  # {'name': 'xiaoming', 'age': '18', 'gender': '女', 'id': '001'}
```