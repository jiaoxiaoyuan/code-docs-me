---
typora-root-url: assets
---

# 第二章 Python面向对象基础(一)

# 一.面向对象的编程思想

编程思想:人们用来解决实际问题的一种思维方式

常见编程思想:

- 传统的面向过程
  - 自顶向下,逐步细化!
  - 步骤化
- 面向对象
  - 尽可能的模拟现实世界!
  - 任何一个操作或者业务逻辑都需要一个实体完成,实体就是动作的支配者,没有实体,也就没有动作发生 
  - ①实体--对象:现实中的一个实体,就是编程中的一个对象
  - ②功能--函数/方法 :  功能就是实体可以完成的动作,在面向对象术语中,功能就是封装成了函数或者方法
  - ③让实体去执行相应的功能

Python同时支持面向对象和面向过程的编程语言!

面向对象的组成:

- 对象
- 属性 : 变量
- 功能 : 函数,方法

>  面向过程和面向对象的区别?
>
> 1.都可以实现代码重用和模块化编程,面向对象的模块话更深,数据也更封闭安全
>
> 2.面向对象的思维方式更贴近生活,更容易解决大型的复杂的业务逻辑
>
> 3.从前期开发角度来看,面向对象过程更复杂,但是从维护和扩展来看,面向对象要远比面向过程简单
>
> 4.面向过程的代码执行效率比面向对象更高

# 二.面向对象基本概念

## 1.面向对象基本概念

OOA:面向对象分析

OOD:面向对象设计

OOP:面向对象编程

## 2.对象的概念

对象(object) : 现实业务逻辑的一个动作实体------对应------OOP编程中的一个对象

- 对象使用属性(property)保存数据
- 对象使用方法(method)管理数据

## 3.类的概念

类就是一系列拥有相同或相似功能的对象的集合

对象就是类的具体表现

> 在Python中,采用类(class)来产生对象,用类来规定对象的属性和方法
>
> 在Python中,要得到对象,必须先有类

> 为什么引入类?
>
> - 类本来就是对现实世界的一种模拟
> - 现实生活中,任何实体都有一个类别,类就是具有相同或相似属性和动作的一组实体的集合
> - 在Python中,对象指现实生活中的一个具体的实体,而既然现实中的实体都有一个类别,OOP中的对象也应该有一个类

- 一个对象的所有应该具有特征特性信息,都是由其所属类决定的
- 但是每一个对象可以具有不同的特性特性信息

```python
1.手机?类
2.苹果手机?类
3.iPhonex?类
4.我手里的苹果手机?对象
- 类和对象是相对的
- 具体的,摸得着的看得见的是对象
- 抽象的,事物的统称就是类
```

## 4.类的定义

类的分类

- 经典类:

  - class 类名: 

    ​        pass # 为了保证代码结构完整

  - 不由任意内置类型派生出的类,不继承任何类

- 新式类

  - class 类名(父类名)

    ​         ...    # 为了保证代码结构完整

  - 括号内是父类,存在一定的继承关系 , 派生类

类名: 

- 严格区分大小写 , 类名遵循标识符的命名规则
- 常用**大驼峰**命名法

```python
'''
class 类名():
    pass
class 类名(父类名):
    ...
'''


class Student():
    pass


class Teacher(object):
    ...
```

## 5.类的实例化

- 类的实例化又叫创建对象
- 类中实例化后的对象可以调用类中的方法
- 格式:
  - 类名()

```python
# ①定义一个类
class Student(object):
    # 定义方法（和定义函数类似）
    def study(self):
        print('我在听直播！')

    def eat(self):
        print('我在吃黑巧，提神醒脑！')


# ②类的实例化(创建对象)
# 格式：类名()
s1 = Student()
print(s1)  # <__main__.Student object at 0x000001FFEBEC7F40>
# 直接打印对象，得到的是其所对应的类和所在的内存地址
print(type(s1))  # <class '__main__.Student'>
# 可以打印对象的类型，就是我们创建对象所使用的类
s2 = Student()
print(s1)  # <__main__.Student object at 0x000001B387A87F40>
# 这里，内存地址，一样吗？

# ③实例可以调用实例方法
s1.study()  # 我在听直播！
s1.eat()  # 我在吃黑巧，提神醒脑！
# 理论上类可以创建无数个实例对象
```

![1646662650740](/1646662650740.png)

## 6.self

- self就是将调用方法的实例传入方法内部,在方法内部可以调用实例的属性和方法

```python
# 在类的内部定义方法时，自动传入一个self
# 在调用实例内部，不需要对self进行传值
# self到底是什么？有什么用？
# 可以在方法内部调用实例所拥有的属性或办法
class Student(object):
    def study(self):
        print(self)  # <__main__.Student object at 0x0000021BDF277F40>
        # s1和self指向同一块内存地址，所以为同一个对象
        # 也就是说对象在调用方法时会将本身传入方法的内部进行使用
        print('我在听直播！')

    def eat(self):
        print('我在吃黑巧，提神醒脑！')

# 实例化对象
s1 = Student()
print(s1)  # <__main__.Student object at 0x0000021BDF277F40>
s1.study()  # 我在听直播！
# 为社么要传入对象进去？
# 方法是定义在类的内部的，所有对象共有一个类，所以我们调用方法的时候，需要传入我们调用方法所使用的类

s2 = Student()  # <__main__.Student object at 0x0000021BDF277940>
s2.study()  # 我在听直播1
# 两个不同的对象指向不同的内存空间，修改一个，另一个不会变化
```

# 三.添加和获取对象属性

## 1.属性的定义

- 属性:特征,比如人的姓名,年龄,身高都是对象的属性
- 属性可以在类的外面添加获取
  - 格式 : 对象名.属性名 = 值
-  也可以在类里面添加和获取
  - 格式 : self.属性名

## 2.类的外部添加对象名

- 实例属性添加格式 : 对象名.属性名 = 值
- 实例属性获取  对象.属性名
- 对象属性的删除  del 对象.属性名

```python
# 类外部添加实例属性
# 实例属性添加  对象.属性名 = 值
# 实例属性获取  对象.属性名

# 定义类
class Person(object):
    def eat(self):
        print('今天没吃早饭呢!')


# 实例化属性
p1 = Person()
p1.name = 'Tom'
print(p1.name)  # Tom
p1.age = 18

# 如果我们再创建一个实例,其属性name是否存在? 不存在
# 对象被创建后,添加实例属性,对其他的对象不产生影响
p2 = Person()
p2.age = 18
print(p1.name)  # Tom
# print(p2.name)  # 报错
print(p2.age)  # 18

# 如果我们对同一个实例属性,添加两次值?
# 对象名.属性名 = 值   若当前对象的该属性存在,重新赋值,不存在,则新建一个属性
p1.name = 'Jack'
print(p1.name)  # Jack

# __dict__ :可以通过这个去查询该属性以字典形式保存
print(p1.__dict__)  # {'name': 'Jack', 'age': 18}

# 对象属性的删除
del p1.age
print(p1.__dict__)  # {'name': 'Jack'}
```

## 3.类的内部添加实例属性

- 同一个对象在类的内部和外部添加实例属性 , 本质一样
  - 在类的外部使用对象名,其实是使用的是对象的引用地址,在其引用地址位置添加了对应的实例属性
  - 在类的内部使用self , 其实也是代表该地址 , 也是在其引用地址位置添加了对应的实例属性

> 为什么在类的内部使用self , 而不使用对象的名称?  简便 灵活 复用性高
>
> - 我们每次使用的对象不一致,如果使用对象名,需要每次都传入不同的对象名,或者每个对象定义一个方法,不宜与代码复用
> - 我们在没有将对象赋值给变量时,需要添加属性,这个时候 , 没有办法获取对象名

```python
# 实例化属性在类的内部添加或获取的格式
# self.属性名 = 值

# 定义类
class Person():
    def add_attr(self):
        self.name = 'Tom'
        self.age = 18
        self.gender = 'male'


# 实例化属性
p1 = Person()

# 创建完成后,p1实例属性添加了吗?没有
# print(p1.name, p1.gender, p1.age)
# AttributeError: 'Person' object has no attribute 'name'
# 我们定义的方法没有被调用,因此要先调用添加实例属性的方法,才能使用实例属性

p1.add_attr()
print(p1.name, p1.gender, p1.age)  # Tom male 18

p2 = Person()
p2.add_attr()
print(p2.name)  # Tom
# 在类的外部可以修改内部添加的实例属性吗? 可以
p2.name = 'AKA'
print(p2.name)  # AttributeError: 'Person' object has no attribute 'name'  # AKA
# 两个对象之间没有任何关系,执行方法在第一个对象中添加了实例属性,对第二个对象不产生影响
# 如果想要添加实例属性,需要再次调用方法
```

# 四.魔术方法

_ __xxx_ _ _() : 魔术方法

- 魔术方法: 一般都是系统在特定时机自动调用的函数,绝大多数情况下不需要程序员手动调用
- 在init之外添加的属性,只有被添加属性的对象本身在拥有,需手动添加,手动调用的--独有属性

```python
# 魔术方法 __func__()
# 因此再定义函数名或方法名,禁用这种方法进行定义

# 以下内容是系统内置变量,不是函数也不是方法
# print(__name__)
# print(__file__)
```

## 1.`_ _init_ _ ()`

－　在创建对象完成后，初始化对象时,自动调用

- 在init方法中添加属性,每一个由该类创建的对象都包含这种属性--共有属性

```python
# __init__() 在创建对象完成后，初始化对象过程中自动调用的方法
class Person(object):
    def __init__(self):
        print('我被调用了!')


p1 = Person()  # 我被调用了!
# 只需要实例化对象,不需要手调用,init方法可自动调用
# p1.__init__() 在类的内部外部轻松调用init方法,但是不要调用,会有一些错误
```

```python
# 那么,既然init方法可以在对象被创建后自动调用,那我们将实例属性的代码写入init方法中,是不是可以每个对象被创建后,都自动添加实例属性呢?
# 对
class Person(object):
    def __init__(self):
        # 由于init方法在被对象赋值之前已经调用了,所以不能使用对象名.属性名进行属性添加,只能用self
        self.name = 'Tom'
        self.age = 18


p1 = Person()
print(p1.name)  # Tom　由于自动调用init,所以对象被创建后,自动拥有name,age属性
p2 = Person()
print(p2.age)  # 18

# 结论:在init方法中添加属性,每一个由该类创建的对象都包含这种属性--共有属性
# 在init之外添加的属性,只有被添加属性的对象本身在拥有,需手动添加,手动调用的--独有属性
```

## 2.带参数的`_ _init_ _()`

```python
# 带参数的__init__()
# 每次创建对象,使用init方法,是不是只能添加同一个值的属性呢? 不是
# 我们怎么给init进行传参呢? 在哪里传参? 在类创建对象时,在()内添加参数,传参数量和init方法中的形参必须一致

# 在实例化对象时,类名(参数一,参数二,参数三,...)
class Person(object):
    def __init__(self, name, age):
        print(name, age)


p1 = Person('Tom', '20')  # Tom 20  不传值,就报错
```

```python
# 如果能够将参数传递到init方法中,是不是就可以在创建对象时,动态添加属性值?
# 通过这种方法,我们在创建对象时可以指定不同对象属性的值不同,但所有的对象包含的属性类别相同
# 这种情况下,一定要给每个对象单独赋值,或者给init中的属性一些默认值,否则会报错

class Person(object):
    def __init__(self, name, age):
        # self.属性名 = 参数   将函数外部传入的参数赋值给实例属性
        self.name = name
        self.age = age


# 实例化参数时要正确传参 
p1 = Person('Tom', '20')
print(p1.__dict__)  # {'name': 'Tom', 'age': '20'}
p2 = Person('Mary', '22')
print(p2.__dict__)  # {'name': 'Mary', 'age': '22'}
```

## 3.`__str__()`

- 在类的内部实现`__str__()`方法 , 它会在我们将对象转换为str类型时,自动调用,返回其return值
- str方法内只能返回str类型的数据
- str方法调用的场景
  - 强制类型转化 : str(对象)
  - 隐式类型转换 : %s作为占位符接受对象 , 或者print打印 , 都会自动调用

```python
# __str__()方法是数据被转换为str类型时,自动调用的方法
class Person(object):
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def __str__(self):
        # 在__str__()方法中只能返回字符串类型数字,否则报错
        # return # 报错
        # return None  # 报错
        return f'我的名字是{self.name}, 我的性别是{self.age}'


p1 = Person('Rose', '18')  # 我的名字是Rose, 我的性别是18
print(p1)  # # 我的名字是Rose, 我的性别是18
print(p1.__dict__)  # {'name': 'Rose', 'age': '18'}

str1 = str(p1)
print(str1)  # 我的名字是Rose, 我的性别是18
```

## 4.`__del__()`

- 在对象被释放前自动执行该方法,并且执行之后,对象立即被释放
- 切断引用或释放对象的几个场景
  - 出了函数作用域会自动释放函数内部的局部变量
  - 程序结束会自动释放所有变量
  - 使用del操作可以提前释放变量

```python
# __del__()方法, 在c语言中为析构函数
# 在对象被释放前自动执行该方法,对象立即被释放
class Person(object):
    def __init__(self, name, age):
        self.name = name
        self.age = age


p1 = Person('Tom', '18')
del p1
print(p1)  # NameError: name 'b' is not defined
# 这种情况下,我们能否知道p1已经被释放了? 没有提示
# 如果已经被释放了还继续使用,是不是会报错? 会
# 我们怎么去进行提示? 使用__del__()
```

```python
# # 我们怎么去进行提示? 使用__del__()
class Person(object):
    def __init__(self, name, age):
        self.name = name
        self.age = age
    def __del__(self):
        print('被释放!')


p1 = Person('Tom', '18')  # 被释放!
del p1
print(p1)  # 没有del时,不报错,没有被提前释放 # 有del 后:# NameError: name 'p1' is not defined
print('结束') # 有del# 被释放! 结束 # 没有del 结束 被释放!
print(p1  # 没有del时:<__main__.Person object at 0x000002889D5E7F40> # 有del时:报错,已经被提前释放
# 使用del p1 造成p1被提前释放,在程序结束前将对象释放了
# p1 被释放后,我们就接到提示,证明p1不在了,之后就不要用了
# 如果没有del操作,则在程序结束后,会将所有变量进行统一释放

# 结论:在对象被释放时,会自动调用__del__方法,并且使用del操作可以提前释放对象
# 否则在程序结束后,也会统一将变量释放五.面向对象案例
```

```python
# 如果一个对象,或者同一块内存空间,被多个变量引用,使用del可以释放吗?
p2 = p1 # p1和p2指向同一个内存空间
del p1
del p2
print('结束')
# 如果只删除p1的引用,对象还被p2引用这,该对象不会被释放,必须切断所有的引用,才能正常释放
# 如果将p2的引用也切断了,则对象正常释放

# 结论:对象被引用时无法释放,除非程序终止,如果一个对象被多个变量引用,必须切断所有引用才能正常释放,否则无法释放对象
```

```python
p4 = None
def func():
    p3 = Person('Xiaoming', '15')
    global p4
    p4 = p3
    print(p3)
func()
print('结束')
# 上述代码可以推断,在函数执行完成后,出了作用域,会将所有函数内所有的临时变量释放掉,除非其被外部变量引用

# 切断引用或释放对象的几个场景
# 1.除了函数作用域会自动释放函数内部的局部变量
# 2.程序结束会自动释放所有变量
# 3.使用del操作可以提前释放变量
```

# 五.面向对象案例

## 手机案例

```python
# 面向对象案例

# 案例① 手机案例
'''需求:
1.创建手机类 
2.在类中添加方法,充电 听歌 打电话 玩游戏
3.每个手机可以输入充电时长,并在创建对象时可以手动输入电量
4.充电可以输入充电时常,1h = 20%
5.听歌(-15%) 打电话(-10%) 玩游戏(-30%)消耗电量
6.电量0-100 充电到100,就会结束,使用手机,如果电量不足以支撑完成操作,则警告
'''
# 分析
'''
1.在上述中,有那些类?Phone
2.在上述类中,有那些属性? 电量
3.在上述类中,有哪些方法? 充电 听歌 打电话 玩游戏
4.有哪些数值判断?在使用手机和充电过程中保持电量在[0,100]之间
'''


# 定义类
class Phone(object):
    def __init__(self, power):
        """初始化对象方法,定义对象时,输入电量"""
        self.power = power
        if self.power >= 100:
            self.power == 100
        elif self.power <= 0:
            self.power == 0
        else:
            self.power = power

    def add_power(self, time):
        """充电方法"""
        print(f'充电开始,共充电{time}小时')
        # 电量增加
        self.power += time * 20
        if self.power > 100:
            self.power == 100
            print('充好啦!快拔掉')
        else:
            print(f'充电结束,现有电量{self.power}')

    def lis_music(self):
        """听歌"""
        if self.power < 15:
            print('警告!!电量不足15%,无法听歌!')
        else:
            print('正在听歌')
            self.power -= 15
            print(f'听歌结束,剩余电量{self.power}')

    def lis_phone(self):
        """打电话"""
        if self.power < 20:
            print('警告!!电量不足10%,无法打电话!')
        else:
            print('打个电话')
            self.power -= 10
            print(f'打电话结束,剩余电量{self.power}')

    def play_game(self):
        """打游戏"""
        if self.power < 30:
            print('警告!!电量不足30%,无法玩游戏!')
        else:
            print('开始游戏')
            self.power -= 30
            print(f'玩游戏结束,剩余电量{self.power}')


p1 = Phone(5)
p1.lis_music()  # 警告!!电量不足15%,无法听歌!
p1.add_power(3)  # 充电开始,共充电3小时 充电结束, 现有电量65

p2 = Phone(20)
p2.lis_music()  # 正在听歌 听歌结束,剩余电量5

p3 = Phone(80)
p3.play_game()  # 开始游戏 玩游戏结束,剩余电量50
```

