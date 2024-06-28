---
typora-root-url: assets
---

# 第三章 Python异常 模块与包

# 一.了解异常

- 造成系统崩溃的就是异常
- 异常一般会造成程序的终止

# 二.异常的捕获方法

## 1.捕获常规的异常

- try/except捕获异常

-  try:

  ​	可能出错的代码,不报错则执行此代码,报错执行except中的代码

  except:

  ​	出现异常执行的代码

```python
# 异常捕获:通过代码将可能出现异常的文件放入try中,然后如果出现就执行except中的代码
# 格式:
# try:
#     可能出错的代码,不报错则执行此代码,报错执行except中的代码
# except:
#     出现异常执行的代码

try:
    file = open('练习/a.txt', 'r', encoding='utf-8')
except:
    file = open('练习/a.txt', 'w', encoding='utf-8')
# 在正常的Python开发中基本每个函数中都要出现一次异常捕获
# 代码健壮性:代码抵御异常的能力
```

## 2.捕获指定异常

- 捕获指定异常?
  - 在except后边添加异常的类型

- 捕获多种异常?并获取异常信息
  - 就在except后边添加异常的类型,可以多个,逗号隔开,用括号包裹
  - 多写几个except
  - 可以通过获取异常对象(error),并对其进行打印,显示异常信息
    - 所有的Exception我们都指定错误名称为:error?
    - 因为在一个try....except中只有一个分支的命令被执行,捕获到error
- 如果未知异常类型呢?怎么捕获?异常类型呢?
  - 用Exception
  - Exception是所有异常类的父类 , 可以捕获所有的异常类型
  - 获取异常类型,输出 type(error) 即可

```python
try:
    print(1/0)
    print(a)
# 如果想要捕获指定类型,就在except后边添加异常的类型,可以多个(用括号括起来)
# 这种方法只能捕获指定异常
except (NameError, ZeroDivisionError):
    print('出现异常了!')  # 出现异常了!
```

```python
try:
    print(1/0)
    print(a)
# 上面这种情况如果1/0出现异常则直接跳到except,不会执行下一句了(短路)
except NameError:
    print('出现NameError异常了!')  # 出现异常了!
except ZeroDivisionError:
    print('出现ZeroDivisionError异常了!')
```

```python
# 如果想要展示异常信息怎么办?
# 异常信息就是异常类型冒号之后的注释
# 可以通过获取异常对象,并对其进行打印
# 在异常类型之后添加上as 变量名 ,这时候变量名就是异常对象
try:
    print(1/0)
    print(a)

except NameError as error:
    print('NameError:', error)  # NameError:name 'a' is not defined
except ZeroDivisionError as error:
    print('ZeroDivisionError:', error)  # ZeroDivisionError:division by zero
```

```python
                             # 捕获未知异常以及异常类型
try:
    print('2'+1)
    print(1/0)
    print(a)

except NameError as error:
    print('NameError:', error)  # NameError:name 'a' is not defined
except ZeroDivisionError as error:
    print('ZeroDivisionError:', error)
except Exception as error:
    print('出现不知名异常', error, type(error))  # 出现不知名异常 can only concatenate str (not "int") to str <class 'TypeError'>
```

## 3.异常else/finally

### else

```python
'''
格式:
try:
    可能会出现异常的代码
except:
    出现异常后执行的代码
else:
    没有出现异常的情况下,执行的代码
'''

try:
    a = 1
    print(a)
except:
    print('出错!')
else:
    print('没有异常!')
# 1
# 没有异常!
```

### finally

- 任何情况下都会执行,即便程序崩溃 , 但是外部的print在程序奔溃时不可以执行

```python
# 格式:
# try:
#     可能会出现异常的代码
# except:
#     出现异常后执行的代码
# else:
#     没有出现异常的情况下,执行的代码
# finally:
#      无论无何都会执行

# 无论任何情况,finally中的代码都会执行
try:
    print(a)
except:
    print('出错!')
else:
    print('没有异常!')
finally:
    print('出现/不出现都要执行!')
# 出错!
# 出现/不出现都要执行!
```

```python
try:
    print(a)
except TypeError:
    print('出错!')
else:
    print('没有异常!')
finally:
    print('出现/不出现都要执行!')
print('外面的代码')  # 代码终止,不会执行
# 出错!
# 出现/不出现都要执行!

# 那么finally和写在外面的print有什么区别?
# 在finally中,哪怕程序终止,也会执行
# 但是print在程序异常出错奔溃的情况下,不会执行
```

# 三.异常综合案例

```python
# 异常捕获案例:
# 读取文件,监控文件读取过程!
try:
    file = open('练习/a.txt', 'r', encoding='utf-8')
    try:
        while True:
            content = file.read(3)
            if content == '':
                break
            print(content)
    except:
        print('读取出现异常')
    finally:
        print('文件关闭')
        file.close()

except:
    print('没有该文件!')
```

## 2.自定义异常抛出

- 一定要继承自Exception
- 可以使用raise抛出,可以进行捕获或导致程序终止
- raise可以抛出自定义异常 , 也可以抛出系统异常

```python
# 定义异常的逻辑
# 在自定义异常时,只要继承自exception就可以当作异常抛出
# 继承后要重写Exception方法,添加我们需要的内容
# raise 可以手动抛出异常,抛出异常后,可以直接终止程序,或使用try except进行捕获
# raise 可以抛出自定义异常,也可以抛出系统异常
```

### ①定义异常

```python
class PassWorldError(Exception):
    error_count = 0
    #
    def __init__(self, str):
        super().__init__(str)
        # 在此处,可以添加自定义操作
        PassWorldError.error_count += 1
```

### ②抛出异常

```python
password = input('请输入您的密码:')
if len(password) < 6:
    raise PassWorldError('密码不足6位')
    
    
请输入您的密码:3562
Traceback (most recent call last):
  File "C:/Users/田咪/PycharmProjects/pythonProject_1/异常 模块 包_26.py", line 122, in <module>
    raise PassWorldError('密码不足6位')
__main__.PassWorldError: 密码不足6位
```

### ③抛出并捕获异常

```python
try:
    password = input('请输入您的密码:')
    if len(password) < 6:
        raise TypeError('您的密码不足6位,请重新输入')
except PassWorldError as error:
    print(error)
    
    
请输入您的密码:1235
Traceback (most recent call last):
  File "C:/Users/田咪/PycharmProjects/pythonProject_1/异常 模块 包_26.py", line 117, in <module>
    raise TypeError('您的密码不足6位,请重新输入')
TypeError: 您的密码不足6位,请重新输入
```

```python
class PassWorldError(Exception):
    error_count = 0
    #
    def __init__(self, str):
        super().__init__(str)
        # 在此处,可以添加自定义操作
        PassWorldError.error_count += 1

try:
    password = input('请输入您的密码:')
    if len(password) < 6:
        raise PassWorldError('您的密码不足6位,请重新输入')
except PassWorldError as error:
    print(error)


# 请输入您的密码:2156
# 您的密码不足6位,请重新输入
```

# 四.Python模块(Module)

- Python中 的模块就是将别人写好的,或者自己以前写好的功能直接导入新的文件或工程内,导入后可以直接调用  例如:random   time   os
- 我们没有实现模块中的功能,但是我们导入模块之后就可以使用该功能,类似于继承
- 给模块起别名 , 只在当前文件中生效

## 1.模块的导入方式

![1646902029743](/1646902029743.png)

```python
# 导入os模块
import os
# 使用os模块
print(os.listdir())

# 导入os模块中的部分功能
from os import listdir, mkdir
# 使用os模块中的功能
print(listdir())

# 导入os模块中的所有功能
# *:通配符,表示os模块中所有允许导入模块的
from os import *
# 使用os模块中的功能
print(listdir())

# 导入os模块,改名位suiji
# 如果给模块起别名后,则原名称不可使用
import os as suiji
# 使用os模块中的功能
print(suiji.listdir())


# 给模块的功能名起别名
如果给模块功能名起别名后,则原名称不可使用
from os import listdir as showdir
# 使用os模块中的功能
print(showdir())
```

## 2.自定义模块

```python
# 自定义模块可以书写什么?
# 什么都可以写,但是带入时会将模块中的代码全部执行一遍

# 自定义模块可以带入其他文件中什么?
# 可以导入其他文件中的  全局变量  函数  类 

# 自定义模块的注意事项?
# 1.自定义模块的名必须符合标识符的命名规则
# 2.自定义文件名不要和系统模块模块重名,尽量见名知意
```

## 3.测试模块

> 问题 : 在书写模块或者工具类的时候,经常需要调试 , 每次调试完成后还要将代码删除 , 否则导包结束后测试代码都会被执行一遍
>
> 所以我们需要想一个办法,将我们写的测试代码在当前模块执行时,调用 , 在导入模块时不调用
>
> 解决 :　_ _ _name_ _ _就是说明当前文件执行时的文件名是什么

```python
                                    module_01	

# 全局变量
info = '我是module中的全局变量'
age = 20

# 函数
def func():
    print('我是module中的函数')


# 类
class Person(object):
    def information(self):
        print('我是module中的类方法')


# __name__
# print(__name__)  # __main__ :如果在当前文件中执行 , 模块名就是main
# 如果导入其他模块,则__name__的值就是文件名称,例如module_01
# 所以我们根据__name__的判断 , 就可以断定他是在当前文件执行 , 还是导入模块执行

# 使用这个判断 ,让我们的测试代码只有在当前文件中执行的时候才能被调用
if __name__ == '__main__':
    if age > 10:
        print('要自己学会洗澡!')  # 要自己学会洗澡!
```

```python
import module_01

print(module_01.info)  # 我是module中的全局变量

module_01.func()  # 我是module中的函数

p1 = module_01.Person()
p1.information()  # 我是module中的类方法


# 分支语句 循环 函数调用等待是不能导入的
# 在导入某个文件时,我们会先将该文件进行执行,
# 在所有的类和函数保存在内存的同时,模块中的代码也会执行一遍
# 而判断语句在这个情况下已经运行出了结果,因此不可以在自定义模块中写入
```

## 4.模块的定位顺序

- 可以使用sys.path查看模块的定位顺序
  - 如果模块名相同 , 优先从最新的序列查找

```python
import sys
print(sys.path)

# ['C:\\Users\\田咪\\PycharmProjects\\pythonProject_1', 'C:\\Users\\田咪\\PycharmProjects\\pythonProject_1', 'D:\\工作软件\\python3.8\\python38.zip', 'D:\\工作软件\\python3.8\\DLLs', 'D:\\工作软件\\python3.8\\lib', 'D:\\工作软件\\python3.8', 'C:\\Users\\田咪\\PycharmProjects\\pythonProject_2\\venv', 'C:\\Users\\田咪\\PycharmProjects\\pythonProject_2\\venv\\lib\\site-packages']

# sys.path的返回值是一个路径列表,排名越靠前的路径,在调用模块时优先查找
# 如果这个路径下没有对应模块才去下一个路径中查找
# 在开发中,可以在列表中添加路径(了解)
sys.path.append(路径)
```

## 5._ _ ___all___ _ _

- 只对from  模块名  import  * 有效果
  - 在文件开头加  _ _all _ _  =  ['类名' , '变量名' , '函数名']
  - 写在列表里的则在上述调用方法下调用,其余则无法调用
- 对import 模块名  没有效果
- 对from  模块名  import  功能名   没有效果

```python
                                module_02

__all__ = ['age', 'func']

# 全局变量
info = '我是module中的全局变量'
age = 20

# 函数
def func():
    print('我是module中的函数')


# 类
class Person(object):
    def information(self):
        print('我是module中的类方法')
```

```python
from module_02 import *
print(age)  # 20
# print(info)  # 报错

from module_02 import info
print(info)  # 我是module中的全局变量

import module_02
print(info)  # 我是module中的全局变量
```

# 五.Python包

- 包 : 将有联系的模块保存在一个文件夹内,并且文件内有一个`_ _init _ _.py`文件
- 创建包的方式
  - new ---> package : 会自动添加一个`_ _init _ _.py`文件
- 导入包
  - import 包名.模块名
  - from 包名 import 模块名
  - from 包名 import *
    - 这个使用前必须先在init文件中all列表里添加指定模块

### 模块1

```python
                                    module_01.py

age = 18
```

### 模块2

```python
                                    module_02.py

def func():
    print('我是一个my_package包中的函数')
```

`_ _init_ _`.py

```python
__all__ = ['module_01', 'module_02']
```

### 调用

```python
                                    _ _init＿＿.py

# 导入包 : import 包名.模块名
import my_package.module_02
# 调用 : 包名.模块名.功能名称
my_package.module_02.func()  # 我是一个my_package包中的函数

# 导入包 : from 包名 import 模块名
from my_package import module_01
# 调用 : 模块名.功能名称
print(module_01.age)  # 18

# 导入包 from 包名 import *
# 这种方法必须在__init__.py文件里__all__ = []里添加可以使用的模块
from my_package import *
print(module_01.age)  # 18
module_02.func()  # 我是一个my_package包中的函数
```