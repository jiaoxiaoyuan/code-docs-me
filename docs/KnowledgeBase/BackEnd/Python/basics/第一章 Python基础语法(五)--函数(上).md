---
typora-root-url: assets
---

# 第一章 Python基础语法(五)--函数(上)

# 一.函数的作用以及使用步骤

## 1.函数的定义以及调用

> 把需要重复使用的功能打包起来,封存在一个函数内

- 函数:是一个被**命名的** , 独立的 , **完成特定功能的代码段** , 其可能给调用它的程序一个**返回值**
  - 命名的:在Python中 , 大部分函数都是有名函数 , 没有函数名的函数不能被复用
  - 完成特定功能的代码段 : 函数的功能专一 , 专门为了完成某个功能而定义
  - 返回值 :　当函数执行完成后，其可能会返回一个值给函数的调用处
- 函数的主要作用
  - 模块化编程
  - 代码重用,提高代码重复率,易于维护
- 模块化编程：大多使用　类　对象
  - 函数是类里面方法的雏形
- 注意事项 :
  - 函数的参数根据不同的需求, 可有可无
  - 在Python中,函数必须先定义后使用

```python
# 函数的定义
def 函数名(参数1,参数2,参数3...):
    函数体
    ...
    return 返回值
# 函数的调用:
函数名(参数1,参数2,参数3...)

# 函数名:大部分函数都是有名函数 , 没有函数名的函数不能被复用
# 参数:为了让函数灵活性更高,更容易被复用,会动态对函数进行传值,传递的值可以在函数体内部进行使用
# 函数体:特定功能的代码,写在函数内部,调用函数时可全部执行
# 返回值:写在return之后,将函数内部计算或运行得到的数据
```

```python
# 定义的时候可以不传参,如果不传参,调用的时候也不用传参
def run():
    print('hello')
    print('world')
    print('!')


run()  # 调用的时候将函数内的代码全部执行一遍
'''hello
world
!'''
```

## 2.函数的调用顺序

- 函数需要先定义后调用 , 否则会报错
- 执行顺序为
  - ①将所有函数的函数名执行一遍 , 将其储存到缓存中的方法列表中
  - ②后续调用函数时去方法列表中查询
  - ③如果函数名存在,则调用函数内部的代码 , 如果函数名不存在将报错

```python
# 定义一个唱歌方法
def sing():
    print('我在唱歌')


# 定义一个跳舞方法
def dance():
    print('我在跳舞')
    print(1 / 0)


sing()
dance()
'''我在唱歌
我在跳舞'''
# 输出之后才会报错
```

## 3.函数的参数

- 增加代码灵活性

- ```
  定义的时候传入的参数为：形参，只能在函数体内使用
  ```

- ```
  调用时传入的参数：实参，会传入到函数内部使用
  ```

```python
# 函数的参数
# 需求：定义一个吃eat的方法，可以输出，不同的生物吃不同的事物

# ①不适合大数据
def eat_cat():
    print('猫吃鱼')
def eat_dog():
    print('狗吃肉')
def eat_person():
    print('人吃藕')
    
# ②改进--传参
# 通过传参，可以控制函数体内部的执行结果发生变化
def eat(who, food):  # 定义的时候传入的参数为：形参，只能在函数体内使用
    print(f'{who}吃{food}')
eat('猫', '🐟')  # 调用时传入的参数：实参，会传入到函数内部使用
eat('狗', '肉')
eat('人', '藕')
eat('人')  # 报错 传参数量要满足数量
```

## 4.函数的返回值

- > 将函数体内部运行或计算得到的数据传递到函数体外部

- 当函数执行完毕后,函数调用的位置就替换为函数的返回值

- 返回值不会自动打印到控制台,想看需要手动打印或者debug调试

```python
# 返回值
def sum(a, b):
    print(a + b)


print(sum(1, 7))  # None # 8 None 不能使用结果进行运算


def sum1(a, b):
    return a + b


print(sum1(1, 7) + 1)  # 9 ：函数执行完毕后 ，sum1(1, 7)+1 = 4 替换为函数的返回值
```

- 如果没有返回值,默认返回None
- 只写了return,不写内容,只返回None
- return 执行后会跳出函数,return之后的代码将不会运行(在对应的子代码块内)

```python
def sum2(a, b):
    print('和为')
    return a + b
    print('计算完毕')


print(sum2(2, 5))  # 和为 7
```

- 返回值只能时一个元素,如果要返回多个,会被返回成容器类型打包出来

```python
def sum2(a, b):
    return a + b, a, b


print(sum2(2, 5))  # (7, 2, 5)
```

# 练习

```python
# 需求：使用函数完成计算器，可以进行加减乘除操作
# single = input('请输入+-*/其中一个:')
def compute(a, single, c):
    if single == '+':
        return a + c
    elif single == '-':
        return a - c
    elif single == '*':
        return a * c
    elif single == '/':
        return a / c


print(compute(5, '*', 3))  # 15
```

# 二.函数的说明文档

- 函数说明文档: 对函数进行解释说明

- 方法:  在函数体第一行书写一个多行注释(三对双引号)
  - """手动说明文档"""
  - """回车键"""
    - 自动弹出每个参数的名称:手动填写每个参数的意义
- 查看方法:鼠标悬停到函数名位置,就能看到

![1646299003153](/1646299003153.png)

# 三.函数的嵌套(★)

- 函数的嵌套: 在一个函数的内部, 嵌套了另一个函数的调用
- 定义函数的顺序不做规定，只要在函数调用之前定义好函数即可

```python
# 函数的嵌套
# 前两个函数的顺序不做规定，只要在函数调用之前定义好函数即可
def func1():
    print('1开始执行')
    print('1执行结束')
def func2():
    print('2开始')
    func1()
    print('2结束')
func2()
'''2开始
1开始执行
1执行结束
2结束
'''
```

# 四.函数的应用案例(★)

求三个数的平均数

- 尽量都函数化

```python
# 案例
def avg(num1, num2, num3):
    """
    求三个数的平均值
    :param num1: 第一个数
    :param num2: 第二个数
    :param num3: 第三个数
    :return: 返回三个数的平均数
    """
    return (num1 + num2 + num3)/3


print(avg(5, 25, 30))
```

```python
# 案例
def sum(num1, num2, num3):
    """
    求三个数的和
    :param num1: 第一个数
    :param num2: 第二个数
    :param num3: 第三个数
    :return: 返回三个数的和
    """
    return num1 + num2 + num3


def avg(num1, num2, num3):
    return sum(num1, num2, num3) / 3


print(avg(5, 25, 30))  # 20.0
```

# 五.变量的作用域(★)

- 局部变量: 在函数体内部定义的变量,出了函数体就会被释放掉 , 外部无法调用
- 局部变量: 在函数体内部定义的变量,出了函数体就会被释放掉 , 外部无法调用

## 1.局部变量

```python
def sum1():
    a = 1
    b = 2
    print(a + b)
sum1()  # 3
print(a)  # NameError: name 'a' is not defined 内部变量。出了函数体就被释放掉了
```

## 2.全局变量

```python
a = 1
b = 2
def sum1():
    print(a + b)
sum1()  # 3  函数体内部可以使用
print(a + b)  # 3 函数体外部可以使用
```

## 3.for/if中的变量

```python
# for循环中，if 分支中创建的是什么范围的变量  --都是全局变量
for i in range(5):
    pass
print(i)  # 4 

if True:
    c = 1
print(c)  # 1
```

## 4.global

- global:(全局)作用是申明此变量是全局变量
- global可以在函数体中定义
- 先global变量再修改 , 否则报错
- 根据legb原则从函数体内部开始查找时 , 查找后发现变量在函数体内部 , 但未定义会报错

```python
a = 100
def sum1():
    a = 1  # 使用a = 1相当于在函数体内定义了一个局部变量，并没有修改全局变量的值
sum1()  # 100
print(a)  # 100
```

```python
a = 100

def sum1():
    global a
    a = 1
    return a

print(sum1())  # 1
print(a)  # 100  # 1
```

## 5.扩展:legb原则:调用变量的查询数据

```python
# 调用变量是的查询顺序

'''
L:local首先在函数体内部查询
E:edge在外部函数中查询
G:global在全局变量中查询
B:built-in在系统内置变量中查询
'''

global a
a = '全局变量'
global b
b = '全局'


def func1():
    a = '变量'
    print(a)
# func1()  # 变量 L

def func2():
    print(func1())
func2()  # 变量 L-E

def func3():
    print(a)
func3()  # 全局变量 L-E-G

print(__name__)  # __main__ L-E-G-B
```

# 六.函数参数进阶(★)

## 1.位置参数(形参)

```python
# 位置参数使用时：保证  传入的数据数量 == 定义的参数数量
def func(a, b, c, d):
    print(a)
    print(b)
    print(c)
    print(d)


func(1, 2, 3)  # 报错，位置参数多写少些都会报错
```

## 2.关键字参数(实参)/缺省参数

- 传参方法
  - 参数名 = 值
- 不可以不存在 , 数量也要和定义的参数 数量相同
- 顺序可以乱
- 防止重复赋值
- 必须在顺序赋值之后赋值

```python
def func(a, b, c, d):
    print(a)
    print(b)
    print(c)
    print(d)


func(a=5, b=2, d=1)  # 5 2 9 1
func(1,2,3,c=5)  # 报错，重复赋值
```

## 3.缺省参数(形参)

- 一般,关键字参数都是给默认参数(缺省参数)赋值的
  - 缺省参数:在定义时,给参数一个默认值
  - 若传入新值 , 使用传入的新值 否则使用默认值 
  - 使用关键字给多个缺省值传值时(定义时的缺省值也必须都在没有默认值的后面) , 放到末尾 , 且顺序可以打乱 , 但是其余定义的变量用位置参数就必须按位置

```python
def func(a, b, c, d=10):
    print(a)
    print(b)
    print(c)
    print(d)


func(1, 2, 3)  # 1 2 3 10
func(1, 2, 3, 4)  # 1 2 3 4  # 使用传入的新值
```

```python
def func(a, b, c=5, d=10):
    print(a)
    print(b)
    print(c)
    print(d)


func(1, 2, 3)  # 1 2 3 10
func(1, 2, 3, 4)  # 1 2 3 4
func(1, 3, d=2, c=4)  # 1 3 2 4
func(1, d=2, 3, c=4)  # 报错 使用关键字给多个缺省值赋值时(缺省值也必须都在末尾) , 放到末尾 , 且顺序可以打乱 , 但是其余定义的变量用位置参数就必须按位置
```

# 练习

![1646317169942](/1646317169942.png)

![1646317180236](/1646317180236.png)

```python
list1 = [i for i in range(51) if i % 5 == 0]
print(list1)  # [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50]

list2 = [f'page{i}' for i in range(11)]
print(list2)
# ['page0', 'page1', 'page2', 'page3', 'page4', 'page5', 'page6', 'page7', 'page8', 'page9', 'page10']
```

![1646317216246](/1646317216246.png)

```python
def run():
    print('我在跑步')

for i in range(100):
    run()
```

![1646317265232](/1646317265232.png)

```python
def max1(num1, num2):
    """输出两个参数的最大值"""
    if num1 > num2:
        print(num1)
    else:
        print(num2)
max1(1, 0)  # 1
```

![1646317283484](/1646317283484.png)

```python
def sum_random(m, n):
    if 1 <= m <= 100 and 1 <= n <= 100:
        print(m + n)
    else:
        print('输入错误')
sum_random(5, 6)  # 11
sum_random(5, 111)  # 输入错误
```

![1646317301192](/1646317301192.png)

```python
def year(num):
    if num % 4 == 0 and num % 100 != 0:
        print('闰年')
    elif num % 400 == 0:
        print('闰年')
    else:
        print('不是闰年')
year(1900)  # 不是闰年
```

![1646317322362](/1646317322362.png)

```python
def sum1(num1, num2):
    if (num1 + num2) > 20:
        print('太难！')
    else:
        print(num1 + num2)
sum1(1, 5)  # 6
sum1(1, 51)  # 太难！
```

![1646317346168](/1646317346168.png)

```python
# 省题不对,从a1开始的第a2个字符删除
def cut_str(b, c, a=''):
    a = list(a[b::])
    a.pop(c)
    print(str(a))
cut_str(1, 0, a='abcdef')  # ['c', 'd', 'e', 'f']
```

```python
def cut_str(a, num1, num2):
    a1 = a[:num1-1]
    a2 = a[num1 + num2:]
    return a1 + a2


print(cut_str('123456789', 3, 4))
```

![1646317371993](/1646317371993.png)

```python
def retangle():
    """打印矩形"""
    for i in range(4):
        print('*'*4)
        
def trigon():
    """打印三角形"""
    for i in range(1, 4):
        print('*'*i)
        
while True:
    picture = input('1.打印矩形,2.打印三角形,3.退出 请选择:')
    if picture == '1':
        retangle()
    elif picture == '2':
        trigon()
    elif picture == '3':
        break
```

## 4.位置不定长参数(*args)

> 不定长参数就是在定义函数时,不确定参数的个数

- 位置不定长参数:将多余的位置参数,可以被args接受,并且打包成一个元组,保存在args中

- 位置不定长参数格式:

  - def 参数名(*args):

    ​        函数体

```python
# 位置不定长参数
def func(*args):
    print(*args)
func('123', 1, 2, 3)  #　123 1 2 3
func('123', [1, 2, 3])  #　123 [1, 2, 3]
```

```python
# args变量到底内部是什么样子?
# 数据传入函数内部时,将传入的多个数据进行打包,转换为一个原元组,被args接受,并且在函数体内部可以使用该元组参与运算
def func(*args):
    return args


print(func('abc', [1,2], (1, 2)))  # ('abc', [1, 2], (1, 2))
```

```python
# 案例:
# 输入不确定数量的多个值,判断其中的最大值
def max1(*args):
    return max(args)
print(max1(1, 2, 3, 4, 5, 8, -3))  # 8

def max1(*args):
    max_num = args[0]  # 如果max_num = 0 当输入的数据是负数时,得不到正确的结果
    for i in args:
        if i > max_num:
            max_num = i
    return max_num
print(max1(-5, -2, 9, 5, 16, 20))  # 20
```

## 5.关键字不定长参数(**kwargs)

- 关键字不定长参数就是

- 将多余的关键字参数,打包为一个字典,保存在kwargs当中

- 关键字不定长参数格式:

  - def 函数名(**kwargs):

    ​        函数体

```python
# 关键字不定长参数
def func(**kwargs):
    print(**kwargs)  # 相当于给print输入了多个关键字参数
func(a = 1, b = 3)  # TypeError: 'a' is an invalid keyword argument 
```

```python
def func(**kwargs):
    print(1, 2, kwargs)


func(a=1, b=2)  # 1 2 {'a': 1, 'b': 2}
```

```python
# 使用**kwargs可以将关键字参数进行传递
def func(**kwargs):
    print(1, 2, **kwargs)


func(a='1', b='2')  # 1 2 {'a': 1, 'b': 2} # 报错?为什么?
func(sep='1', end='2')  # 1122
```

```python
# kwargs内部到底是什么存储结构?
# kwargs在传参之后,会将实参位置的所有未定义参数的关键字参数转换未字典的键值对,保存在kwargs中
def func(**kwargs):
    print(kwargs)
func(a='1', b='2')  #{'a': '1', 'b': '2'}
```

```python
# 案例
# 使用创建一个函数可以保存所欲学员的全部信息,并将其储存到字典当中
def student_info(**kwargs):
    return kwargs


print(student_info(name='Tom', age='18', id='001'))
# {'name': 'Tom', 'age': '18', 'id': '001'}
```

## 6.形参和实参的排列顺序

- ```python
  # 定义函数时:位置参数,缺省参数,位置不定长参数,关键字不定长参数 到底在定义时怎么排列?
  # 调用函数时:顺序赋值,关键字赋值 调用时的传参顺序是怎么样的呢?
  结论:形参排布顺序 :  位置参数 + 位置不定长参数 + 缺省参数 + 关键字不定长参数
  结论:实参排布顺序 :  顺序赋值  +  关键字赋值
  
  ```

- ```python
  开发中除非有特殊需求,一般参数种类不要超过三种,参数个数不要超过5个 
  ```

### ①形参

- 定义函数时:形参 -- 位置参数 缺省参数
- 结论 : 位置参数 + 缺省参数

```python
# 定义函数时:形参 -- 位置参数 缺省参数
# 结论 : 位置参数 + 缺省参数
# 有默认值的参数,只能放到没有默认值的参数之后,否则报错
def func(a, b, c=10):
    print(a)
    print(b)
    print(c)


func(1, 2)  # 1 2 10
```

- 定义函数时:位置参数 缺省参数 位置不定长参数
- 结论:位置参数--不定长参数--缺省参数(若想赋值,则用关键字参数赋值)

```python
# 定义函数时:位置参数 缺省参数 位置不定长参数

def fun2(a, b, d=7, *args, c=10):
    print(a)
    print(b)
    print(c)
    print(d)
    print(args)
fun2(1,2,3,4,5,6)  # 1 2 10 3  (4,5,6)
# 结论:位置参数 + 缺省参数位置 + 不定长参数
# 赋值多个参数,位置参数优先接受,然后缺省参数接收数据,多余的数据被args以元组的形式打包接受
# 为什么要设置缺省参数?
# 一般情况下,缺省参数是不进行赋值的,因为绝大多数情况下都会赋默认值,极少情况下会使用关键字参数赋值

# 若不想给缺省参数赋值,就把缺省参数放到后面,就会赋默认值
# 结论:位置参数--不定长参数--默认值(若想赋值,则用关键字参数赋值)
def fun3(a, b, *args, c=10, d=7):  # 官方
    print(a)
    print(b)
    print(c)
    print(d)
    print(args)
fun3(1,2,3,4,5,6)  # 1 2 10 7  (3,4,5,6)

*args可以放在前面吗? 不可以会报错
def fun4(*args, a, b, c=10):
    print(a)
    print(b)
    print(c)
    print(args)


fun4(1, 2, 3, 4, 5, 6, c=5)  # 报错
```

- 定义函数时:位置参数 缺省参数 位置不定长参数  关键字不定长参数
- 结论形参排布顺序 :  位置参数 + 位置不定长参数 + 缺省参数 + 关键字不定长参数

```python
def fun3(a, b, *args, c=10, **kwargs):
    print(a)
    print(b)
    print(c)
    print(args)
    print(kwargs)
fun3(1,2,3,4,5,6,7,8,9)  # 1 2 10  (3,4,5,6,7,8,9) {}
fun3(1,2,3,4,5,6,7,8,9,c=25,name='xiaoming',age='18')  # 1 2 25 (3,4,5,6,7,8,9) {'name':'xiaoming', 'age':'18'}

# **kwargs可不可以放前? 不可以,会报错
```

### ②实参 

- 结论:顺序赋值  +  关键字赋值

```python
# 实参 位置不定长参数 关键字不定长参数
def sum1(a, b):
    print(a + b)


sum1(1, 2)  # 3
sum1(a=2, 1)  #报错 顺序赋值不能在关键字赋值之后
sum1(1, a=2)  # 报错
sum1(2, b=1)  # 3
```

# 七.Python拆包

## 1.组包

```python
组包:将多个值进行组合,打包成一个容器类型的过程
拆包:将一个容器类型,拆分成多个数据,分别赋值给多个变量的过程

# 组包
# ①
def func1():
    return 1, 2, 3, 4


print(func1())  # (1, 2, 3, 4) # 组包:系统自动打包为一个元组

# ②
a = 1, 2, 3, 4, 5
print(a)  # (1, 2, 3, 4, 5)  # 组包过程
```

## 2.拆包

```python
# 拆包/解包
# 将等号右边的容器,拆分开,分别赋值给左侧的变量,叫拆包
a, b, c, d = {1, 2, 3, 4}
print(a, b, c, d)  # 1 2 3 4
# 拆包的案例①
list1 = [5, 6, 7, 8]
for index, value in enumerate(list1):
    print(index, value)
'''0 5
1 6
2 7
3 8'''

dict1 = {'name': 'Tom', 'age': '18'}
for key, value in dict1.items():
    print(key, value)
'''name Tom
age 18'''

# 同时应用拆包和组包的
# 将a,b进行互换
a = 1
b = 2
a, b = b, a
print(a, b)  # 2 1
```

```python
# 字典可以拆包吗? 可以,拆包得到的是键
dict1 = {'a': '1', 'b': '2'}
char1, char2 = dict1
print(char1, char2)  # a b

# 集合可以打印吗? 可以,但一般不这样做,因为赋值顺序不能控制
set1 = {'1', '2', '3'}
a, b, c = set1
print(a, b, c)  # 3 2 1
```

# 八.引用变量及可变类型,非可变类型

![1646379662171](/1646379662171.png)

## 1.Python数据的三个维度

### Ⅰ.三个维度

在Python中所有的数据分为三个维度

- 值(判断)
  - True  1
  - 值相等的,数据类型和唯一标识不一定相等
- 数据类型(int , float, ...)
  - 值和数据类型相等的数据,唯一标识不一定相等
- 唯一标识
  - 唯一标识相等的 , 值和数据类型一定相等
  - id() : 判断数据是否是同一空间中的数据(同一内存空间必然相等)

```python
bool1 = False
int1 = 0
print(bool1 == int1)  # True 值相等
print(type(bool1) == type(int1))  # False 数据类型不相等
print(id(bool1) == id(int1))  # False 唯一标识不等

list1 = [1, 2, 3]
list2 = [1, 2, 3]
print(list1 == list2)  # True 值相等
print(type(list1) == type(list2))  # True 数据类型相等
print(id(list1) == id(list2))  # False 唯一标识不相等,内存空间不一致

str1 = 'abc'
str2 = 'abc'

print(id(str1) == id(str2))  # True 唯一标识符相等
print(str1 == str2)  # True 值相等
print(type(str1) == type(str2))  # True 数据类型相等
```

### Ⅱ.is判断唯一标识

```python
str1 = 'abc'
str2 = 'abc'
list1 = [1, 2, 3]
list2 = [1, 2, 3]
print(str1 is str2)  # True
print(list1 is list2)  # False
```

## 2.可变类型/不可变类型

- 可变数据类型: 内存空间中的数据可以发生改变,这种数据类型我们称为可变数据类型
  - list  dict  set 
- 不可变数据类型 :内存空间中的数据无法被修改值的数据类型为不可变类型
  - str  tuple   int  float  bool 

- 在数据传递的过程中,是引用传递

```python
# 传参或者变量的传递是进行了值的传递还是引用地址的传递? 引用地址
list1 = [1, 2, 3]
list2 = [1, 2, 3]
# id的值称为:引用地址
# list1 和 list2 引用地址不相同
print(id(list1))  # 1892303888960
print(id(list2))  # 1892303888640

# 向list1中添加5,list2为多少? [1,2,3] list1的引用地址会变化吗?  不会
list1.append(4)
print(list1)  # [1, 2, 3, 4]
print(list2)  # [1, 2, 3]
print(id(list1))  # 1892303888960

# 让list1 = list2 ,list1的引用地址变化吗? 会,
# 给list1赋值时,list2将自己的内存地址赋值给list1,此时list1和list2指向同一块内存空间
list1 = list2
print(id(list1))  # 1892303888640

# 若删除list1中的元素,list2会变化吗?  会
# 原因:list1和list2指向同一内存空间,所以内存空间中的数据发生变化,list1和list2均发生了改变
list1.pop(1)
print(list1)  # [1,3]
print(list2)  # [1,3]

# 结论:list 内存空间中的数据可以发生改变,这种数据类型我们称为可变数据类型
```

# 练习

```python
# 练习:
list1 = [1, 2, 3, 4]
list2 = [1, 2, 3, 4]
list1 = [1, 2, 3, 4, 5]
list2 = list1
list1.pop(2)
print(list1 + list2)  # [1, 2, 4, 5, 1, 2, 4, 5]
print(list1)  # [1, 2, 4, 5]
print(list2)  # [1, 2, 4, 5]
```

![1646377957494](/1646377957494.png)

```python
# 练习:
str1 = '12345'
str2 = '12345'
print(id(str1)==id(str2))  # True 唯一标识相等
str1 = str2
str1 = '123'
str1 + str2
print(str1)  # 123
print(str2)  # 12345

# 我们可以修改str内部的元素吗? 不可以
# 既然内部元素不可以修改,系统定义其值相同,数据引用地址也相同
# 内存空间中的数据无法被修改值的数据类型为不可变类型
```



![1646378383245](/1646378383245.png)

## 3.引用当作参数传递

- 在函数传参过程中,变量会以引用的形式进行传参(变量或者参数传递是引用传参) , 不是值传参
  - 对于可变数据类型
    - 在函数内修改应用地址指向空间的数据,外部数据也会发生改变
  - 对于不可变数据类型
    - 引用地址指向的数据空间中的数据无法被修改

```python
# 将数字1所在的空间引用地址赋值给了a
a = 1
# 将a所保存的引用地址给b
b = a
```

```python
def func(num_list):
    print(id(num_list))  # 2492927042112
    num_list.append(2)  # 2492927042112
    return num_list
list1 = [1, 2, 3, 4]
print(id(list1))
print(func(list1))  # [1, 2, 3, 4, 2]
print(list1)  # [1, 2, 3, 4, 2]
# 在进行参数传递时,进行了地址传递,将list1的引用地址传递给了num_list ,这是他们指向同一内存空间
# num_list修改内存中的空间数据时,list1也会发生变化
```

```python
# 对于可变类型:进行参数传递时,引用传递
list1 = [1, 2, 3, 4]
def func(num_list):
    # 无论什么情况下,使用= 赋值运算,就是将等号右侧的数据的引用地址,赋值给等号左侧的变量
    num_list = [1, 2, 3, 4, 5]
    return num_list
print(func(list1))  # [1, 2, 3, 4, 5]
print(list1)  # [1, 2, 3, 4]

# 对于不可变数据类型:进行参数传递时,也是传递引用
# 但是无法修改原有数据空间的数据
# 如果想要修改,只能使用赋值(=),才能改变数据地址,进而改变数据
def func1(char1):
    print(id(char1)) #2496062939952
    char1.replace('a', 'b')
    return char1
str1 = 'abc'
print(id(str1)) # 2496062939952
print(func1(str1))  # abc
print(str1)  # abc
```