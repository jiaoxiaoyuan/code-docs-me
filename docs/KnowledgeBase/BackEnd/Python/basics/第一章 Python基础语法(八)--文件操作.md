---
typora-root-url: assets
---

# 第一章 Python基础语法(八)--文件操作

# 一.文件操作概述

## 1.文件的定义

> 内存中存放的数据在计算机关机后就会消失.要长久保存数据,就要用硬盘,光盘,U盘等设备.
>
> 为了便于数据的管理和检索,引入了'文件'的概念

- 文件 : 一篇文章,一段视频 , 一个可执行程序 , 都可以被保存为一个文件 , 并赋予一个文件名.
- 操作系统是以文件为单位管理磁盘中的数据

- 文件分类
  - 文本文件
  - 字节型文件
    - 视频文件
    - 音频文件
    - 图像文件
    - 可执行文件

## 2.文件操作内容

文件操作:

- 打开/关闭
- 读
- 写
- 备份

文件操作的作用

- 把一些内容(数据)存储起来,可以让程序下一次执行的时候直接用,而不用重新制作一份

# 二.文件的基本操作

## 1.打开文件--open

```python
# 格式
file = open(name,type)
type:r(只读)/w(写入)/a(追加)
```

```python
                            文件读写操作体验

# 打开文件--open
# 格式:open(file_name,mode(读写模式))
# 文件路径:可以写相对路径/绝对路径,并以字符串传入
# 使用该函数会返回一个文件对象
file = open('Python.txt', 'r')
print(file)
# <_io.TextIOWrapper  io操作:读写操作
# name='Python.txt' 文件名
# mode='r'  模式:只读
# encoding='cp936'> 默认读取的编码格式 'UTF-8' ,在Windows中,默认读写格式为gbk
print(type(file))  # <class '_io.TextIOWrapper'>

# 读取文件 read
print(file.read())

# 关闭文件
file.close()

# 为什么要关闭文件
# 文件打开状态会保持连接,会持续消耗内存,不利于服务器的性能优化(内存泄漏)

# 关闭文件后,文件对象有没有被释放? 
# 没有，只是与文件的连接状态消失了，对象没有发生变化

print(file)  # <_io.TextIOWrapper name='Python.txt' mode='r' encoding='cp936'>
print(file.read())  # ValueError: I/O operation on closed file.
```

## 2.文件的读取'r'

- read(n)
  - 文件对象.read(最大读取数)
  - 文件每次读取指定字符，都会持续向后读取，直到关闭文件或者程序结束
  - 所有的文件内容读取完成之后，会返回空字符串
  - 读取的文件不存在,直接报错
- readline
  - 文件对象.readline()
  - 每次读取一行，以\n为分隔符，在文件打开状态下，持续读取
  - 所有的文件内容读取完成之后，会返回空字符串
- readlines
  - 文件对象.readlines()
  - 一次性全部读取 , 读取后,将文字以一行为一个元素保存到列表当中进行返回

```python
# 文件在’r‘模式下可以进行文件读取
# read 可以读取文件
# read(n):n 传入数值，代表最大读取字符数 ，一般开发中最大读取字符限定为(1024*1024)，大约是3M

# 打开文件
file = open('Python.txt', 'r')
# 读取文件 n=3
# 文件每次读取指定字符，都会持续向后读取，直到关闭文件或者程序结束，所以可以用循环读取
# 所有的文件内容读取完成之后，会返回空字符串
# ①
content = file.read(3)
print(content)  # pri
content = file.read(3)
print(content)  # nt(
content = file.read(3)
print(content)  # ’he
# ②
while True:
    content = file.read(2)
    if content == '':
        break
    print(content)
'''ll
o 
wo
rl
d'
)'''
file.close()
```

```python
# 文件的其他读取方式

# 文件打开
file = open('Python.txt', 'r')

# 文件操作
# readline 每次读取一行，以\n为分隔符，在文件打开状态下，持续读取
# while True:
#     content = file.readline()
#     if content == '':
#         break
#     print(content)
'''ABCDEFG

HIJKLMN

OPQRSTU

VWXYZ'''

# readlines 每一行为一个结构，包括\n
content = file.readlines()
print(content)  # ['ABCDEFG\n', 'HIJKLMN\n', 'OPQRSTU\n', 'VWXYZ']

# 关闭文件
file.close()
```

## 3.文件的写入'w'

- write:可以写入字符

- 游标在最开始

  - ```
    - 执行写入模式打开时，如果文件存在，则会将源文件的字符清空
    - 如果不存在，重新创建一个新的文件
    ```

  - ```
    如果使用Windows电脑进行开发时，写入文件需要制定编码格式为‘utf-8’
    ```

- writelines:是配合readlines进行使用的,可以将一个人由字符串元素组成的列表一次性写入文件

```python
# 当文件读写模式时’w‘ ， 可以使用文件的写入操作
# 执行写入模式打开时，如果文件存在，则会将源文件的字符清空，如果不存在，重新创建一个新的文件
# 如果使用Windows电脑进行开发时，写入文件需要制定编码格式为‘utf-8’，Linux或者mac默认为utf-8
# write
file = open('python.txt', 'r+', encoding='utf-8')
print(file)  # <_io.TextIOWrapper name='pyth on.txt' mode='w' encoding='utf-8'>
# 写入操作
file.write('床前明月光\n疑是地上霜')
file.read()
'''床前明月光
疑是地上霜'''
file.close()
```

## 4.文件的追加'a'

- 追加也是使用write进行追加
- 游标在字符的最末尾

```python
# 在'a'追加模式下，可以进行文件字符的追加，在原有的数据末尾添加新的字符
# 在追加模下打开文件，如果文件存在，不会清空源文件，如果不存在，新建一个文件
# 追加方式也是用write进行写入，不同于文件写入，不会删除原文件
file = open('Python.txt', 'a', encoding='utf-8')
file.write('\n举头望明月\n低头思故乡')
'''床前明月光
疑是地上霜
举头望明月
低头思故乡'''
file.close()
```

## 5.文件读写模式扩展

![1646629847087](/1646629847087.png)

```python
- a:a a+ ab ab+
    - a:字符追加
    - a+:字符追加模式下可以进行字符读取
    - ab:字节追加模式
    - ab+:字节追加模式下,可以进行字节读取
- r:r r+ rb rb+
    - r:字符读取
    - r+:字符读取模式下可以进行字符写入
    - rb:字节读取模式
    - rb+:字节读取模式下,可以进行字节写入
- w:w w+ wb wb+
    - w:字符写入
    - w+:字符写入模式下可以进行字符读取
    - wb:字节写入模式
    - wb+:字节写入模式下,可以进行字节读取
```



## 6.关闭文件

```python
file.close()
```

# 案例:文件备份案例

- 如果不是多次打开关闭文件,追加操作和写入操作作用相同
- 但是如果下次打开,写入操作就会清空文件,但追加操作不会

```python
# 需求：用户输入一个文件名，通过文件读写操作进行备份，并且将备份文件名更改为：
# 1.获取用户输入的文件名
file_name = input('请输入您要备份的文件名称(不加后缀)：')
suffix_name = input('请输入您要备份的文件的后缀名称：')
# 2.通过文件读写操作进行备份
# 2.1 拼接备份后的文件的文件名
new_file_name = f'{file_name}(backups).{suffix_name}'

# 2.2读取原文件
file1 = open(f'{file_name}.{suffix_name}', 'r', encoding='utf-8')
content = file1.read()
print(content)
file1.close()
# # 2.3写入新文件
file2 = open(new_file_name, 'w+', encoding='utf-8')
file2.write(content)
file2.close()
```

```python
file_name = input('请输入您要备份的文件名称：')
file1 = open(file_name, 'r', encoding='utf-8')
new_file_name = file_name.replace('.', '(backups).')
copy_file = open(new_file_name, 'a', encoding='utf-8')
while True:
    content = file1.read(3)
    if content == '':
        break
    copy_file.write(content)
file1.close()
copy_file.close()
```

# 三.文件和文件夹的操作

## 1.文件

### ①os模块

- 导入模块:import os
- 使用os模块的相关功能:os.函数()

### ②文件操作

- os.rename
- os.remove

```python
# 如果想要使用这两个方法，要进行模块导入

import os
# rename 重命名/移动(移动的位置由新文件的路径决定，移动后改名)
# rename 原文件路径必须存在，新路径不能为文件夹，必须有文件名称
# os.rename(旧文件路径， 新文件路径)
# 需求：将Python.txt重命名为abc.txt
os.rename('Python.txt', 'abc.txt')
os.rename('abc.txt', 'venv/abc.txt')
os.rename('venv/abc.txt', 'C:/Users/田咪/PycharmProjects/pythonProject_1/a.txt')

# remove 删除文件，不会有任何提示，也不会出现在回收站中，无法恢复，谨慎使用
os.remove('a.txt')
```

## 2.文件夹操作

- os.mkdir:创建一个空文件夹,不能创建多级文件夹
- os.mkdirs:创建多级文件夹
- os.rmdir:删除一个空文件夹
- os.getcwd:获取当前使用的工作路径
- os.chdir:切换当前的工作目录
- os.listdir:查询指定的目录结构,将该目录下的文件名以字符串形式保存在列表中
  - 默认为查询当前工作目录的目录结构
  - 若填写路径,则是对指定目录的查询

```python
# 文件夹的操作
import os

# mkdir 创建文件夹
# mkdirs() 创建多级目录
# 如果文件夹已存在，报错
# 可以在已有文件夹下创建文件夹
# 不能递归创建文件夹，也就是上级目录 不存在，无法创建文件夹
os.mkdir('练习')
os.mkdir('练习/练习1')

# rmdir 删除文件夹
# 如果文件不存在，报错
# 如果文件夹非控，不能删除，需要递归删除
os.rmdir('练习')  #　OSError: [WinError 145] 目录不是空的。: '练习'

# getcwd 获取当前活动的工作目录
print(os.getcwd())  # C:\Users\田咪\PycharmProjects\pythonProject_1

# chdir 切换工作目录
os.chdir('练习')
print(os.getcwd())  # C:\Users\田咪\PycharmProjects\pythonProject_1\练习

# listdir  指定目录下的目录结构
# 默认为当前的工作目录，若工作目录进行切换，查找的位置也会变化
# 也可以使用listdir(‘指定路径’)，查询指定的目录结构
os.chdir('练习')
print(os.listdir())  # ['练习1']
print(os.listdir('练习'))  # ['练习1']
```

# 四.文件操作综合案例

![1646642218015](/1646642218015.png)

```python
# 1
flag = True # True 对多个文件批量添加指定字符 FAlse 对多个文件批量删除指定字符
single = input('请输入您想添加的指定字符串：')
path = input('请输入您想添加的指定目录：')
# 2
import os


# 构造多个文件
# os.rename('练习/training5', '练习/[自制]training5')


# 定义函数
def modify_files_name(flag, single, path):
    # 切换工作目录
    os.chdir(path)
    # 循环遍历目录下的所有文件
    for file_name in os.listdir():
        if flag:
            os.rename(file_name, single + file_name)
        else:
            os.rename(file_name, file_name.replace(single, ''))


modify_files_name(flag, single, path)
```