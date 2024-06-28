---
typora-root-url: assets
---

# 第一章 Python基础语法(七)--函数(下)

# 一.递归

## 1.函数递归的三个条件

- 函数体内部,调用函数本身
- 递归要有明确的跳出条件
- 不能超出最大调用深度

```python
# 需求
'''
func(1) = 1                  = 1
func(2) = 1 + 2              = func(1) + 2
func(3) = 1 + 2 + 3          = func(2) + 3
...
func(n) = 1 + 2 + 3 + ... +n =func(n - 1) + n
'''


# 这种方法会一直递归下去
# def func(n):
#     return func(n - 1) + n


def func(n):
    if n == 1:
        return 1
    return func(n - 1) + n


print(func(100))  # 5050
```

## 2.最大调用深度

Python中默认的最大调用深度为1000 (Python中函数最大嵌套1000层)

最大调用深度是为了保证系统性能的,否则无限递归下去,内存会满

最大调用深度可以调整,可以调整到很大的数字,只要系统性能跟的上

> 注意:
>
> 编程初期,尽量少用递归,但是要理解递归的特性,别人写的要能看懂

```python
def func(n):
    if n == 1:
        return 1
    return func(n - 1) + n


print(func(998))  # 498501
print(func(999))  # 报错
# RecursionError: maximum recursion depth exceeded in comparison
```

## 3.lambda写递归

```python
func1 = lambda n:func1(n-1) + n if n != 1 else 1
print(func1(100))  # 5050
```

# 二.lambda表达式(重点)

## 1.lambda函数的定义(匿名函数)

- 通过对数据类型的查看:

  - lambda函数和普通函数本质一样
  - 不同的是构造上更为简单

- ```
  在使用lambda函数时可以不同变量接受
  ```

```python
# lambda表达式，也叫匿名函数
# 格式：lambda 参数：返回值

# 根据传入的参数返回最大值（使用lambda函数）
max_num = lambda a, b: a if a > b else b
print(max_num(9, 2))  # 9
print(type(max_num))  # <class 'function'>

# 在使用lambda函数时可以不同变量接受
print((lambda a, b: a if a > b else b)(9, 2))  # 9
```

## 2.lambda函数的缺点

- --缺点:不使用变量接受,只能用一次,使用后函数就被释放
- --缺点:没有办法书写复杂的函数,因为没有具体的函数体,只有返回值,返回值后边只能书写一个表达式
- --缺点:可读性极差

## 3.lambda应用场景

- 用于一次性函数使用
- 可以作为函数的参数进行传递
  - 格式：列表.sort(key= lambda 每次传入的元素：排序所依据的规则)

```python
# list sort(key= )
# list sort排序方法中的key所需要的参数就是一个函数，使用lambda函数表示
list1 = [{'a': 1}, {'b': 12}, {'c': 10}]

# 排序规则：根据字典的第一个键所对应的值进行排序
# 格式：列表.sort(key= lambda 每次传入的元素：排序所依据的规则)

list1.sort(key=lambda x:list(x.values())[0])
print(list1)  # [{'a': 1}, {'c': 10}, {'b': 12}]
```

# 练习

![1646462284571](/1646462284571.png)

```python
在定义函数使用全局变量:不管什么类型,内部的有什么不变化,外部的跟着走
对于可变类型:如果函数外部定义了一个变量,函数内部修改变量,不加global的话,会影响到外部的值
对于不可变类型:如果函数外部定义了一个变量,函数内部修改变量,不加global的话,会形成一个新的变量
```



![1646462309268](/1646462309268.png)

```python
def triangle(a, b, c):
    if a + b > c and a + c > b and b + c > a and abs(a - b) < c and abs(a - c) < b and abs(b - c) < a:
        print('可以组成三角形!')
    else:
        if a + b <= c or a + c <= b or b + c <= a:
            print('无法构成三角形,因为两边之和大于等于第三边!')
        elif abs(a - b) >= c or abs(a - c) >= b or abs(b - c) >= a:
            print('无法构成三角形,因为两边之差小于等于第三边!')


triangle(2, 6, 5)  # 可以组成三角形!
triangle(6, 8, 10)  # 可以组成三角形!
```



![1646462341977](/1646462341977.png)

```python
pos1 = [] 
def find_all_pos(list1, b):
    for index in range(len(list1)):
        if b == list1[index]:
            pos1.append(index)
    return tuple(pos1)


print(find_all_pos([1, 2, 3, 1, 5, 6, 1, 1, 5], 1))  # (0, 3, 6, 7)
```

```python
index_list = []
def find_all_pos(list1, b):
    for index, value in enumerate(list1):
        if value == b:
            index_list.append(index)
    return tuple(index_list)
print(find_all_pos([1, 2, 3, 1, 5, 6, 1, 1, 5], 5))  # (4,8)
```



![1646462432857](/1646462432857.png)

```python
# 斐波那契数列
'''
func(1) = 1
func(2) = 1
func(3) = func(2) + func(1)
func(4) = func(3) + func(2)
...
func(n) = func(n-1) + func(n-2)
# '''

# 循环实现
n = int(input('您想列出斐波那契数列的长度:'))
list1 = []
for i in range(1, n+1):
    if i == 1 or i == 2:
        list1.append(1)
    else:
        index1 = list1[i-2] + list1[i-3]
        list1.append(index1)
print(list1)

# 您想列出斐波那契数列的长度:5
# [1, 1, 2, 3, 5]

# 递归实现
def func(n):
    if n == 1 or n == 2:
        return 1
    return func(n-1) + func(n-2)


print(func(5))  # 5
```



