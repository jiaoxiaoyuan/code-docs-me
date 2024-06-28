---
typora-root-url: assets
---

# 第二章 Python面向对象高级(二)

# 一.面向对象的三大特征

- 封装
- 继承
- 多态

# 二.封装

- 定义 : 将属性和方法写到类里面 , 封装可以为属性和方法添加私有权限 , 保证暴露接口的安全性
- 优点:
  - 可以找到一个对象能够完成所有的功能或者业务 , 迭代和维护较为方便
  - 可以设置私有属性或方法 , 提高代码安全性 , 只暴露我们想要暴露的接口
  - 可以降低模块或者类的使用难度 , 暴露少量接口即可完成全部功能

## ①封装的定义/性质

```python
# 封装
# 私有属性 ,私有方法
# 当前属性或方法只能在类的内部进行调用 , 在类的外部无法使用
# 格式 : 在属性或者方法前加上两个下划线 __属性名 __方法名

class Person(object):
    def __drive(self):
        print('我开着小汽车!')

    def go_shopping(self):
        self.__drive()
        print('去购物!')

p1 = Person()
p1.go_shopping()  # 我开着小汽车!  去购物!

p1.drive()  # 报错 因为私有化,在类的外部无法调用drive方法
# 如果我们只想使用狗去方法,开车只是一个中间方法,不会单独是使用
# 那么暴露多个方法,反而让用户不知道该调用什么方法,所以将无用的方法私有化,降低类或者模块的使用难度

class Women(object):
    def __init__(self, name, age):
        self.name = name
        self.__age = age

    def __str__(self):
        print(f'{self.name},{self.__age}')

w1 = Women('Mary', 30)
print(w1.name)  # Mary
# print(w1.age)  # 报错

# 在类的外部添加的属性,不是私有属性,因此可以在类的外部进行调用
w1.__gender = 'female'
print(w1.__gender)  # female

# 使用 __dict__可以查询私有属性
print(w1.__dict__)  # {'name': 'Mary', '_Women__age': 30, '__gender': 'female'}

# 在类的外部怎么调用私有属性? _类名_ _私有属性名
print(w1._Women__age)  # 30 尽量不要这样做
print(w1)  # Mary,30
```

## ②私有属性的修改和获取方法get/set

- 在使用get方法提取数据的时候，可以对提取的规则进行指定
- 在使用set方法存入数据的时候，可以对规则进行指定

- ```
  # 例如：提取手机号或身份证号进行脱敏
  # 存入数据的逻辑存在差别，比如存入性别0/1或者男/女
  ```

```python
# 我们会设置get方法和set方法进行调用和修改
class Person(object):
    def __init__(self, name, age):
        self.name = name
        self.__age = age

    # 如果一个数据只能存储数据，无法使用数据，那这数据方案没有意义
    def get_age(self):
        return self.__age

    def set_age(self, age):
        self.__age = age


p1 = Person('Rose', '20')
print(p1.name)  # Rose
# 使用get方法，可以直接调用私有属性
print(p1.get_age())  # 20
# 还可以使用set对私有属性进行赋值
p1.set_age(45)
print(p1.get_age())  # 45
```

```python
                        # 为社么花这么大的操作？
    
# 在使用get方法提取数据的时候，可以对提取的规则进行指定
# 在使用set方法存入数据的时候，可以对规则进行指定
class Person(object):
    def __init__(self, name, age):
        self.name = name
        self.__age = age

    def get_age(self):
        # 为了让别人觉得自己年龄小，返回的年龄小于5岁，小于18岁，则数18
        age = self.__age - 5
        if age < 18:
            return 18
        else:
            return age

    def set_age(self, age):
        # 需求：保存的数据必须是大于0小于100的，如果超出范围，大于100存入100，小于0则存入0
        if 0 < age < 100:
            self.__age = age
        else:
            if age < 0:
                self.__age ==  0
            elif age > 100:
                self.__age == 100

p1 = Person('Tom', 20)
print(p1.get_age())  # 18

p1.set_age(-15)
print(p1.get_age())  # 18

# 结论：某些数据，在存入或者提取的时候，需要按照指定的规则进行加工，这时候使用get/set方法即为方便
```

## ③封装的意义?

- 封装数据属性 : 明确区分内外 , 控制外部对隐藏属性的操作行为
- 某些数据，在存入或者提取的时候，需要按照指定的规则进行加工，这时候使用get/set方法极为方便

# 三.Python中的继承

## ①继承的定义

子类默认继承父类的所有属性和方法,于此同时,子类也可以重写父类属性和方法

![1646742917819](/1646742917819.png)

```python
# 继承：子类对象可以使用父类中的属性或者方法
# 格式：class 子类名(父类名):
# object是所有类的公共父类，基类， 顶级类
# 如果使用了经典类，或者新式类括号中什么也不写，默认继承了object
class Person(object):
    pass


class Men(Person):
    pass


class Boy(Men):
    pass
```

## ②与继承相关的几个概念

1. **继承** : 一个类从另一个已有的类获得其成员的相关特性
2. **派生** : 从一个已有的类产生一个新的类

继承/派生 : 本质上相同 , 只是从不同的方向来描述的相同概念而已,本质上相同

1. **父类**: 也叫基类 , 就是指已有被继承的类
2. **子类** :　也叫派生类或者扩展类

1. **扩展类**：在子类中增加一些自己特有的特性 , 就叫扩展 , 没有扩展 , 继承也就没有了意义
2. **单继承** : 一个类只能继承自一个其他的类 , 不能继承多个类 , 但可以多级继承 , 单继承也是大多数面向对象语言的特性
3. **多继承** : 一个类同时继承了多个父类(C++/Python等语言都支持多继承) 

![1646744907822](/1646744907822.png)

## ③单继承

- 在继承中可以多级继承,子类中可以使用父类中非私有的属性和方法
- 如果父类或者更高级的父类中出现init方法,并且写了参数 ,则实例化对象时,必须传入值

> 怎样查询类的继承链条?
>
> 类名.__ _mro_ _ _

```python
# Python中的单继承
# 定义一个Pearson类
class Person(object):
    def __init__(self, name, age):
        self.name = name
        self.age = age


# 定义一个Father类，继承Person
class Father(Person):
    def sing(self):
        print('三巡宝藏！')

    def __dance(self):
        print('我会芭蕾！')

# 定义一个Son类，继承Father类
class Son(Father):
    def play(self):
        self.sing()
        self.__dance()

# 实例化一个Son对象
s1 = Son()  # 报错 因为son继承了father，father继承了Person，而person中写了init方法的参数
s1 = Son('Tom', 20)  # 不会报错

s1.sing()  # 三巡宝藏！
# s1继承了父类的属性和方法，在Son中我们没有写任何方法，但是父类以及多级父类的方法都可以调用
# 但是父类中的私有属性不可以调用
s1.dance()  # AttributeError: 'Son' object has no attribute 'dance'
s1.play()  # 报错  继承父类时，只能继承父类中不是私有属性的属性

# 查看继承链条
print(Son.__mro__)
# (<class '__main__.Son'>, <class '__main__.Father'>, <class '__main__.Person'>, <class 'object'>)
print(Father.__mro__)
# (<class '__main__.Father'>, <class '__main__.Person'>, <class 'object'>)
print(Person.__mro__)
# (<class '__main__.Person'>, <class 'object'>)
```

## ④多继承

- class  子类名(父类名1, 父类名2,...)
- 概念 :一个子类，继承多个父类
- 在多继承中 , 子类可以调用多个父类中的非私有方法或者属性
- 多继承中,如果出现同名属性或者方法 , 优先调用继承位置靠前的父类中的方法和属性

```python
# 多继承
class Father(object):
    def dance(self):
        print('爸爸去工作了！')

    def sing(self):
        print('爸爸在洗碗！')


class Mother(object):
    def sing(self):
        print('妈妈在做饭！')

    def dance(self):
        print('吃完饭，妈妈也要去工作！')


# 同时继承两个父类，则在使用子类对象时可以调用两个父类中所有的非私有属性和方法
class Son(Father, Mother):
    pass


s1 = Son()  # 不报错
s1.sing()  # 妈妈在做饭！
s1.dance()  # 爸爸去工作了！

# 爸爸在洗碗！
# 爸爸去工作了！

# 疑问：如果两个父类有重名方法？
# 结论 ：在继承时，默认会调用继承位置靠前的代码
```

## ⑤重写父类属性和方法(覆盖)

- 子类重写父类方法,则调用方法时,直接调用子类中的方法,不会调用父类中的方法

- 我们进行方法重写时，只需要考虑方法名相同即可,参数不需要也能重写

- > 子类为什么可以重写父类方法?
  >
  > 因为在调用方法或者属性时,会按照继承层级依次查找

```python
class Father(object):
    def dance(self):
        print('爸爸去工作了！')

    def sing(self):
        print('爸爸在洗碗！')


class Mother(object):
    def sing(self):
        print('妈妈在做饭！')

    def dance(self):
        print('吃完饭，妈妈也要去工作！')


class Son(Father, Mother):
    def sing(self):
        print('我去写作业！')

    # def dance


s1 = Son()
s1.sing()  # 我去写作业！
s1.dance()  # 爸爸去工作了！
print(Son.__mro__)
# (<class '__main__.Son'>, <class '__main__.Father'>, <class '__main__.Mother'>, <class 'object'>)

# 为什么子类中重写了父类方法就不能进行调用了?
# __mro__查询继承，方法，属性的调用顺序
# 例如想使用Son对象去调用sing方法，但是不知道从哪里找？
# 于是就根据类的链条从下至上(从子类到父类)依次查找，找到为止，找不到则报错

# 我们进行方法重写时，只需要考虑方法名相同即可，参数不需要也能重写

# 如果要重写有参数的init方法，怎么写？
# def __init__(self):
#     pass
```

# 作业

![1646749589642](/1646749589642.png)

```python
class Star(object):
    pass


zhou_xing_chi = Star()
```

![1646749601902](/1646749601902.png)

```python
class Star(object):
    pass


zhou_xing_chi = Star()
zhou_xing_chi.name = '周星驰'
zhou_xing_chi.movie = '功夫'
print(zhou_xing_chi.movie)  # 功夫
```

![1646749624205](/1646749624205.png)

```python
class Star(object):
    def __init__(self, name, movie):
        self.name = name
        self.movie = movie

    def playing(self):
        print(f'{self.name}出演了{self.movie},非常好看')


zhou_xing_chi = Star('周星驰', '功夫')
zhou_xing_chi.playing()  #　周星驰出演了功夫,非常好看
```

![1646749651871](/1646749651871.png)



```python
错误审题:
    输出对象时添加打印 -----使用__str__方法
```

```python
class Star(object):
    def __init__(self, name, movie):
        self.name = name
        self.movie = movie

    def __str__(self):
        return f'{self.name}为明星姓名,{self.movie}是电影的名字'

s1 = Star('周星驰', '功夫') 
print(s1)  # 周星驰为明星姓名,功夫是电影的名字
```

![1646749676043](/1646749676043.png)

![1646749695888](/1646749695888.png)

```python
class Star(object):
    def __init__(self, name, movie):
        self.name = name
        self.movie = movie

    def playing(self):
        print(f'{self.name}出演了{self.movie},非常好看')

    def __str__(self):
        return f'{self.name}是我偶像,我非常喜欢看他的电影{self.movie}'

    def __del__(self):
        print(f'我不喜欢{self.name}了!')


mov = []
i = 0
while i < 5:
    name = input('请输入你喜欢的明星:')
    movie = input('请输入你喜欢的明星参与的电影:')
    s = Star(name, movie)
    mov.append(s)
    # 对象是可以放在列表里的,不然不能保存下来循环使用
    # 虽然都是s,但是不同对象分配的地址不同
    i +=1
print(mov)
for i in mov:
    i.playing()
    print(i)
'''
请输入你喜欢的明星:1   input
请输入你喜欢的明星参与的电影:2
请输入你喜欢的明星:3   input
请输入你喜欢的明星参与的电影:4
请输入你喜欢的明星:5   input
请输入你喜欢的明星参与的电影:6
请输入你喜欢的明星:7   input
请输入你喜欢的明星参与的电影:8
请输入你喜欢的明星:9   input
请输入你喜欢的明星参与的电影:10
[<__main__.Star object at 0x00000278D2F18400>, <__main__.Star object at 0x00000278D2F58940>, <__main__.Star object at 0x00000278D304BBB0>, <__main__.Star object at 0x00000278D304BCD0>, <__main__.Star object at 0x00000278D3017E50>]
1出演了2,非常好看  playing
1是我偶像,我非常喜欢看他的电影2  __str__
3出演了4,非常好看  playing
3是我偶像,我非常喜欢看他的电影4  __str__
5出演了6,非常好看  playing
5是我偶像,我非常喜欢看他的电影6  __str__
7出演了8,非常好看  playing
7是我偶像,我非常喜欢看他的电影8  __str__
9出演了10,非常好看  playing
9是我偶像,我非常喜欢看他的电影10  __str__
我不喜欢1了!  __del__
我不喜欢3了!  __del__
我不喜欢3了!  __del__
我不喜欢5了!  __del__
我不喜欢7了!  __del__
我不喜欢9了!  __del__
 '''
```

```python
                                **错误解法**		

class Star(object):
    def __init__(self, name, movie):
        self.name = name
        self.movie = movie

    def playing(self, single):
        if single == '1':
            print(f'{self.name}出演了{self.movie},非常好看')
        elif single == '0':
            del_name = input('请输入你不喜欢的明星!')
            print(f'我不喜欢{del_name}了!')
            del del_name

            
i = 0
while i < 5:
    name = input('请输入你喜欢的明星:')
    movie = input('请输入你喜欢的明星参与的电影:')
    name = Star(name, movie)
    i +=1
single = input('您要删除吗?0删除1不删除')
name.playing(single)
```

![1646749730466](/1646749730466.png)

```python
问题:
没有定义子类父类吗?
调用另一个类的方法,不算继承吗?

# 把对象当做参数传进去
```



```python
# 小美和狗玩的案例(自己写的)
class Dog(object):
    def __init__(self, name):
        self.name = name

    def game(self):
        print(f'{self.name}开始奔奔跳跳的玩耍')


class Woman(Dog):
    def __init__(self, o_name, age, name):
        self.o_name = o_name
        self.__age = age
        self.name = name

    def play_with_dog(self):
        print(f'主人是{self.o_name}')
        print(self.name)
        self.game()


w1 = Woman('Tom', 20, 'kily')
w1.game()
w1.play_with_dog()
```

```python
# 小美和狗玩的案例(老师的)
class Dog(object):
    def __init__(self, name):
        self.name = name

    def game(self):
        print(f'{self.name}开始奔奔跳跳的玩耍')


class Woman(object):
    def __init__(self, name, age):
        self.name = name
        self.__age = age
        # self.name = name

    def play_with_dog(self, dog):
        print(f'主人是{self.name},小狗是{dog.name}')
        # print(self.name)
        dog.game()


w1 = Woman('Tom', 20)
xiaohuang = Dog('小黄')
w1.play_with_dog(xiaohuang)
'''
主人是Tom,小狗是小黄
小黄开始奔奔跳跳的玩耍'''
```



![1646749771994](/1646749771994.png)

```python
class Animal(object):
    def run(self):
        print('我在跑步')


class Cat(Animal):
    # def run(self):
      #  print('猫在跑步')

    def eat(self):
        print('我在吃饭')


class BosiCat(Cat):
    def __init__(self):
        self.name = '波斯猫'


b1 = BosiCat()
b1.eat()  # 我在吃饭
b1.run()  # 我在跑步
```

## ⑥子类对象调用父类方法

### 为什么调用?

- 子类方法

### 三种调用方法

**格式** :

- super(从哪一个的上一级开始查找, self).drive()
  - 如果就是从本子类查询 , 括号可以不写 , 也就是下一种方法
  - 所使用的类名 , 必须在当前类的继承类关系中
- super().方法名()
  - 只能调用当前类的上一级类中的方法和函数
- 类名.方法名(self)
  - 所使用的类名 , 必须在当前类的继承类关系中
  - 可以调用不在继承关系中的类方法 , 但是不能使用self作为对象出现

### 调用在继承类中的类方法

```python
# 子类对象调用父类方法
class Person(object):
    def __init__(self, name, age):
        self.name = name
        self.age = age

class Father(Person):
    # 如果我们现在想在原有父类方法上扩展
    # 例如我们需要重写一个init方法,可以接受name,age,gender
    def __init__(self, name, age, gender):
        # 前两个参数,父类方法已经在,不可以直接使用吗?
        super().__init__(name, age)
        # 在父类方法的基础上,添加子类独有的
        self.gender = gender

    def __str__(self):
        return f'{self.name},{self.age},{self.gender}'
        
        
# 实例化对象
f1 = Father('Tom', '20', 'men')
print(f1)  # Tom,20,men
# 说明所有的参数都传递到了Father类中,并且添加为当前对象的参数
```

```python
class Person(object):
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def drive(self):
        print('开车!')


class Father(Person):
    # 如果我们现在想在原有父类方法上扩展
    # 例如我们需要重写一个init方法,可以接受name,age,gender
    def __init__(self, name, age, gender):
        # 前两个参数,父类方法已经在,不可以直接使用吗?
        super().__init__(name, age)
        # 在父类方法的基础上,添加子类独有的
        self.gender = gender

    def drive(self):
        print('我也去开车!')

    def __str__(self):
        return f'{self.name},{self.age},{self.gender}'

class Son(Father):
    def drive(self):
        # 调用Person中的drive
        Person.drive(self)
        super(Father, self).drive()
        # 调用Father中的drive
        super().drive()
        super(Son, self).drive()
        # 写自己的drive
        print('我也也开车!')

# 实例化对象
f1 = Father('Tom', '20', 'men')
s1 = Son('mary', '21', 'female')
s1.drive()  # 我也去开车!  # 开车! 我也去开车! # 开车! 我也去开车! 我也去开车!
'''开车!
开车!
我也去开车!
我也去开车!
我也也开车!'''
```

### 调用不在继承类中的类方法

- 类名称.方法名称()
  - 括号里添加对象
  - 括号里添加一个不是self的参数?
- 类名称( ).方法名称()
  - 其实类名称()--也就是对象

```python
class Person(object):
    def drive(self):
        print('开车!')


class Monkey(object):
    def drive(self):
        Person.drive(p1)
        print(f'我是猴子')

p1 = Person()
m1 = Monkey()
m1.drive()
# 开车!
# 我是猴子
```

```python
class Person(object):
    def drive(self):
        print('开车!')


class Monkey(object):
    def drive(self, name):
        Person.drive(name)
        print(f'我是猴子{name}')


m1 = Monkey()
m1.drive('lucy')
# 开车!
# 我是猴子lucy
```

```python
class Person(object):
    def drive(self):
        print('开车!')


class Monkey(object):
    def drive(self):
        Person.drive(Person())
        print(f'我是猴子')


m1 = Monkey()
m1.drive()
# 开车!
# 我是猴子
```

```python
class Person(object):
    def drive(self):
        print('开车!')


class Monkey(object):
    def drive(self):
        Person().drive()
        print(f'我是猴子')



m1 = Monkey()
m1.drive()
# 开车!
# 我是猴子
```

# 三.Python中的多态

- 多态是同一类事物具有的多种形态 , 不同的对象调用同一个接口(方法) , 表现出不同的状态 , 称为多态
- 多态是一种使用对象的方式 , 子类重写父类方法 , 调用不同子类对象的相同父类方法 , j将其对象传入函数或者方法内部 , 可以产生不同的执行结果
  - 多态依赖继承
  - 子类方法必须要重写父类方法
- **优点:**
  - 调用灵活 , 有了多态 , 更容易编写出通用的代码 , 做出通用的编程 , 以适应需求的不断变化!

# 四.面向对象的其他特性

## 1.类属性(类变量)

- 类属性 , 就是所有的对象所共有的属性 , 在对其修改后,所有对象的类属性均发生了改变
- 实例属性 , 每个对象所独有的,对象被创建后,添加修改实例属性,对其他对象不产生影响

```python
# 类属性:就是在类中创建的属于所有对象的属性
class Chinese(object):
    color = 'yellow'

    def __init__(self, name):
        self.name = name


c1 = Chinese('xiaohong')
c2 = Chinese('xiaolv')
c3 = Chinese('xiaolan')
# 上述三个对象所拥有的实例属性是什么? name
# 他们每个人的实例属性相同吗? 不相同 之间有联系吗? 没有

print(c1.color)  # yellow
print(c2.color)  # yellow
print(c3.color)  # yellow
# 类属性的获取方式
# 1.对象名.类属性名  在实例属性中,不能有与类属性同名的属性,否则不返回类属性
# 2.类名.类属性名

# 修改类属性  : 类名.类属性名 = 值
# 修改类属性不能使用 对象名.属性名 = 值 ,否则会添加一个实例属性
Chinese.color = 'orange'
print(Chinese.color)  # orange
print(c1.color)  # orange
print(c2.color)  # orange
print(c3.color)  # orange


# 类属性使用场景:
# 可以进行计数
# 可以控制或者包含多个变量
class Apple(object):
    Apple_list = []

    def __init__(self):
        Apple.Apple_list.append(self)

    count = 10

    def eat(self):
        Apple.count -= 1


a1 = Apple()
a2 = Apple()
a3 = Apple()
a4 = Apple()

a1.eat()
a2.eat()
a3.eat()
a4.eat()
print(Apple.count)  # 6
print(Apple.Apple_list)  # 包含创建的四个对象
```

## 2.类方法

- 定义方式 : 
  - 在方法上方添加  @classmethod
  - 在类方法括号中会自动传入cls  : 代表当前类本身

- ```python
  # 当方法中不使用实例属性和实例方法
  # 只会使用到类属性和类方法时,就使用类方法
  # 因为类方法不需要使用创建对象就可以使用
  ```

```python
# 类方法
class Apple(object):
    num = 10
    def __init__(self):
        self.eat_num = 0

    def eat(self):
        # 每次吃苹果,当前食用数量加一
        self.eat_num += 1
        Apple.num -= 1

    # 当方法中不使用实例属性和实例方法
    # 只会使用到类属性和类方法时,就使用类方法
    # 因为类方法不需要使用创建对象就可以使用
    @classmethod
    def eat_apple_num(cls):
        print(f'一共被吃了{10 - cls.num},还剩{cls.num}个')


# lei方法的调用
# 格式 : 类名.类方法

# 调用类方法
Apple.eat_apple_num()  # 一共被吃了0,还剩10个
# 类方法可以使用类方法调用吗? 可以,但是不规范,不推荐这样使用

a1 = Apple()
a2 = Apple()
a3 = Apple()
a4 = Apple()

a1.eat()
a2.eat()
a3.eat()
a4.eat()
a4.eat()

# 调用类方法
Apple.eat_apple_num()  # 一共被吃了5,还剩5个

# 查看没人吃了几个苹果
print(a1.eat_num)  # 1
print(a2.eat_num)  # 1
print(a3.eat_num)  # 1
print(a4.eat_num)  # 2
```

```python
# 不用类方法也可以输出 , 但事实上eat_apple_num方法也只调用了类属性 , 因此用类方法更方便

class Apple(object):
    num = 10
    def __init__(self):
        self.eat_num = 0

    def eat(self):
        # 每次吃苹果,当前食用数量加一
        self.eat_num += 1
        Apple.num -= 1


    def eat_apple_num(self):
        print(f'一共被吃了{10 - Apple.num},剩{Apple.num}个')
a1 = Apple()
a2 = Apple()
a3 = Apple()
a4 = Apple()

a1.eat()
a2.eat()
a3.eat()
a4.eat()
a4.eat()
a4.eat()

# 查看每人吃了几个苹果
print(a1.eat_num)  # 1
print(a2.eat_num)  # 1
print(a3.eat_num)  # 1
print(a4.eat_num)  # 3
a1.eat_apple_num()  # 一共被吃了1,剩9个
```

## 3.静态方法

静态方法:既不依赖于类,也不依赖与实例(对象),就是静态方法

开发时,如果需要在类中封装一个方法,这个方法:

- 既不需要访问实例属性或者调用实例方法
- 也不需要访问类属性或者调用类方法
- 则我们可以把方法封装成一个静态方法

格式:

- @staticmethod

  def  静态方法名():

  ​	pass

```python
# 在静态方法中,不会传入self,也不会传入cls,所以我们在使用静态方法时
# 最好不要再静态方法中使用类或对象的属性
class Person(object):
    @staticmethod
    def func():
        print('我是一个静态方法!')


# 可以直接调用,不用创建对象
Person.func()  # 我是一个静态方法!
# 静态方法就是一个普通函数,放到类里面就是为了封装,方便我们去继承和导入模块
```

# 练习

![1646896199154](/1646896199154.png)

```python
'''
分析:
类属性 游泳最初票数  乒乓球最初票数
类方法  数票数
实例属性
实例方法 投票
'''

class Child(object):
    swimming = 0
    ping_pong = 0

    def add_vote(self, cast_vote):
        self.cast_vote = cast_vote
        if self.cast_vote == '0':
            Child.swimming += 1
        elif self.cast_vote == '1':
            Child.ping_pong += 1
        else:
            print('默认弃权!')

    @classmethod
    def end_vote(cls):
        print(f'所有人投票完成:游泳{Child.swimming}票,打乒乓球{Child.ping_pong}票')


list1 = []
list_vote = []
i = 1
while i < 6:
    cast_vote = input('支持有用输入0,支持打乒乓输入1:')
    c1 = Child()
    list1.append(c1)
    list_vote.append(cast_vote)
    c1.add_vote(cast_vote)
    i += 1

Child.end_vote()
'''
支持有用输入0,支持打乒乓输入1:0
支持有用输入0,支持打乒乓输入1:0
支持有用输入0,支持打乒乓输入1:1
支持有用输入0,支持打乒乓输入1:1
支持有用输入0,支持打乒乓输入1:0
所有人投票完成:游泳3票,打乒乓球2票'''
```

# 五.综合案例

![1646890559719](/1646890559719.png)

```python
# 案例
class Game(object):
    top_score = 1

    def __init__(self, player_name):
        self.player_name = player_name

    # 定义一个静态方法
    @staticmethod
    def show_help():
        print('以下是游戏帮助信息:')

    # 定义一个类方法,内部可以调用类属性和类方法,依赖于类
    @classmethod
    def show_top_score(cls):
        print(f'最高分为{cls.top_score}')

    # 定义一个实例属性,内部可以调用实例属性和实例方法,依赖于实例
    def start_game(self):
        print(f'{self.player_name}开始游戏!')


# 调用静态方法
Game.show_help()  # 以下是游戏帮助信息:
# 调用类方法
Game.show_top_score()  # 最高分为1
# 实例方法必须创建实例来使用
g1 = Game('Tom')
g1.start_game()  # Tom开始游戏!
```