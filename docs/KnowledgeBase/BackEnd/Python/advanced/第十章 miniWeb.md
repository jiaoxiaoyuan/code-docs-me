---
typora-root-url: assets
---

# 第十章 miniWeb

# 零.回顾

## 1.服务器开发回顾

1. 创建服务器连接对象
2. 绑定服务器ip和端口(bind)
3. 指定监听客户端请求数量(listen)
   - 循环等待客户端连接
4. 等待客户端连接(accept ),获取客户端保存数据的连接对象和地址信息

> 将客户端处理数据的业务封装为方法,创建线程进行调用(5-6步骤)

​	5.从客户端连接对象中获取数据(recv)

​	6.返回数据(send)

​	7.关闭服务

**面向对象开发**

```python
import socket
import threading
import json

class Server():
    def __init__(self):
        # 初始化建设对象时,调用方法指定ip和端口以及监听数量
        # 1/2/3步骤
    
    def user(self):
        # 不同请求路径的处理数据的不同方法,user路径的处理方法
        处理数据
        
    def url_dec(self,url_prth):
        # 5.4步判断不同的请求路径,返回不同的数据给前端
        
    def client_data(self):
        # 处理客户端数据
        # 5/6 步骤
        
    def wait(self):
        # 等待客户端连接
        # 4 步骤
        # 创建线程执行客户端处理方法 client_data()
        
        # 关闭服务
        
        
s = Server() # 自动执行init方法
s.wait()
```

## 2.客户端请求数据处理回顾

> 客户端这里指浏览器

部分代码

```python
def client_data(self):
    # 处理客户端数据
    # 请求报文数据
    # 请求行\r\n请求头\r\n请求体
    # 请求行 GET /goods HTTP/1.1
    5.从客户端连接对象中获取数据(recv)
    5-1.将获取到的bytes数据转换位字符串类型str数据
    5-2.切割请求报文的字符串数据,以'\r\n'为分隔符,分别获取请求行,请求头,请求体
    5-3.切割获取的请求行数据,以' '为分隔符,切割
    5-4.获取请求路径,判断不同的请求路径,返回不同的数据给前端
    self.url_dec()
    # 响应报文数据
    # 相应行\r\n响应头\r\n响应体
    # 响应行: HTTP/1.1 200 ok
    # 响应头:key:value\r\nkey:value\r\n
    # 响应体:字符串数据,json,文件数据(前端html文件,图片文件,视频文件,需要将文件数据读取后放到响应体中返回)
    6.返回数据(send)
```
## 3.继续拆分封装

> 5-4.获取请求路径,判断不同的请求路径,返回不同的数据给前端

部分代码

```python
def url_dec(self, url_prth):
    # 处理不同的请求路径
    if url_path == '/':
        pass
    elif url_path == '/user'
        self.user()
    elif url_path == '/login':
        pass
    elif url_path == '/goods':
        pass
    else:
        pass
```

> 不同的请求路径处理数据的方法都可以拆分

```python
def user(self):
    # 处理user路径的数据
```

### ★★★注意事项:

拆封步骤:

- 将处理不同请求路径的业务封装
- 再将不同路径不同数据处理的方法封装
- 将路径封装成路由器
  - 使用路由器列表遍历循环即可实现原有if语句

封装之后:

- 检查是否有结果需要返回(return)
  - 同时在调用的方法里,用变量接受返回值进行使用
- 检查是否需要传入传输参数
  - 若有多个参数可以传入一个参数(字典类型)
  - 用哪个就取出来哪个
  - 传入的时候将多个只封装成一个字典

## 4.json数据回顾

①json本质是一个字符串,形式key:value

`'{'name':''python, 'age':18}'`

②不同的语言都可以对数据进行处理

- 前端:

  - 将json字符串转换位js数据对象

  - ```javascript
    json_data = '{'name':''python, 'age':18}'
    // 转换为js数据
    obj_data = JSON.parse(json_data)
    // 进行数据的提取
    print(obj_data.age) // 18
    ```

- Python:可以转换为字典类型, 列表类型转换json

  - ```python
    # 使用json模块
    import json
    dict_data = [{"name":"python", "age":"18"},{"name":"python", "age":"18"}]
    # 将数据转化为json数据
    json_data = json.dumps(dict_data)
    print(json_data)
    print(type(json_data))  # <class 'str'>
    print(type(dict_data))  # <class 'list'>
    # TypeError: the JSON object must be str, bytes or bytearray, not list
    # [{"name": "python", "age": "18"}, {"name": "python", "age": "18"}]
    
    ```

  - ```python
    # 使用json模块
    import json
    json_dict = '{"title":"西游记", "auth":"吴承恩"}'
    # 将json数据转化为字典
    dict_data = json.loads(json_dict)
    print(type(dict_data))  # <class 'dict'>
    print(type(json_dict))  # <class 'str'>
    ```

  - json数据在Python中的类型是str?

# 一.Web应用概述

## 1.Web开发流程

> 开发动态服务器 

> Web服务器的作用主要是接受用户的http请求 , 根据不同的用户请求返回不同的资源数据, 但是我们之前开发的是静态Web服务器,返回的都是静态资源文件
>
> 假如我们想要Web服务器返回动态资源该如何进行处理呢?

![1647831710310](/1647831710310.png)

- Web服务器接受浏览器发起的请求 , 如果是动态资源请求 , 就去动态服务器获取(Web应用程序)
- Web应用负责处理浏览器的动态资源请求 , 把处理的结果发送给Web服务器
- Web服务器再把响应结果发送给浏览器

> Web应用是专门为Web服务器处理动态资源请求的一个程序

## 2.静态资源

**不需要经常变化的资源.**

比如:

- png/jpg文件
- css文件
- js文件

## 3.动态资源

**和静态资源相反 , 这种资源会经常变化** 

比如:我们在京东浏览商品时,会根据条件进行筛选 , 选择不同条件 , 浏览的商品就不同,这种Web服务器无法提前准备好,需要Web应用来帮Web服务器进行准备

## 4.WSGI协议

- WSGI全称:Python Web Server Gateway Interface(Web服务器网关接口)
- 是Web服务器和Web应用之间进行协同工作的一个规则
- 规定了Web服务器把动态资源的请求信息传给Web应用处理 , Web应用把处理好的结果返回给Web服务器

## 5.Web改造分析

- 主要改造第五步:根据不同的请求路径, 查询不同的内容返回给浏览器
  - 静态服务器返回的是不同的静态页面
  - 动态服务器返回的是查询到的数据结果

部分代码:

```python
# 5.根据不同的请求路径读取不同的页面文件返回浏览器
        if url_path == '/user':
            # 查询user用户数据库表
            data_dict = {'name': 'python', 'age': 18, 'gender': 'boy'}
            # 返回查询到的user数据表内容
            # 但是字典不可以进行字符串拼接
            # 需要借助json模块,将字典转化为字符串
            send_data = json.dumps(data_dict)
        elif url_path == '/goods':
            # 查询goods商品数据库表
            goods_dict = {'name': 'iPhone11', 'prince': 5000, 'stock': 100}
            # 返回查询到goods数据表内容
            send_data = json.dumps(goods_dict)
        else:
            send_data = 'error'
```

# 二.mini_Web开发步骤

## 1.第一步导入数据

- 创建一个booksite的数据库

`create database booksite charset=utf8;`

- 将sql文件数据导入数据库

`DG连接数据库--Import Data from File--添加文件`

`另一种方法是直接打开文件,将里面的程序在MySQL里跑一遍,建表,添加数据`

## 2.pyMysql

### ①安装

setting--project--Python Interpreter --+--搜索pyMysql---install Package---关闭settings

### ②pyMysql基本使用

- 导入模块
- 指定配置连接MySQL数据库的信息
- 连接数据库,获取连接对象(游标)
- 编写sql语句
  - sql_str = ''
- 执行sql语句
  - 游标名.execute(sql_str)
- 获取返回结果
  - 游标名.fetchall()
  - 游标名.fetchone()
- 修改和保存表数据
  - sql_str1 = ''
  - 游标名.execute(sql_str1)
  - db.commit()

```python
# 导入模块
import pymysql

# 指定配置连接mysql数据库的信息
# user=None,  用户名
# password="", 密码
# host=None, 连接数据库的ip地址
# database=None, 连接的数据库名
db = pymysql.connect(user='root', password='1937hei', host='192.168.88.5', database='booksite')

# 连接数据库,获取连接对象(游标)
cursor = db.cursor()

# 编写sql语句进行执行
# 在这里,sql语句就是一个字符串,分号可加可不加
sql_str = 'select * from goods;'
sql_str1 = 'select * from goods where id=3;'
sql_str2 = 'update goods set price=4000 where id=1;'


# 执行sql语句
cursor.execute(sql_str)
cursor.execute(sql_str1)
cursor.execute(sql_str2)

# 获取返回结果
# 获取所有数据
# res_data = cursor.fetchall()
# print(type(res_data))  # tuple元组
# print(res_data)
# for data in res_data:
#     print(data)
# print(res_data[0])  # (1, 'r510vc 15.6英寸笔记本', '笔记本', '华硕', Decimal('3399.000'), b'\x01', b'\x00')

# 查询一条数据
# res_data = cursor.fetchone()
# print(res_data)  # (3, 'g150th 15.6英寸游戏本', '游戏本', '雷神', Decimal('8499.000'), b'\x01', b'\x00')

# 修改数据库表数据
db.commit()  # 修改成功,将id=1,price修改为4000
```

## 3.★★★★★Mini_Web

```python
import socket
import threading
import json
import pymysql
import logging
logging.basicConfig(
    level=logging.DEBUG,
    format='%(asctime)s - %(filename)s[line:%(lineno)d] - %(levelname)s: %(message)s',
    filename="log.txt",
    filemode="w"
)


class WebServer():
    def __init__(self):
        # 创建服务端对象
        self.server = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
        # 绑定ip和端口
        self.server.bind(('127.0.0.1', 8080))
        # 指定监听数量
        self.server.listen(5)
		
        # 路由列表
        self.url_list = [
            ('/', self.index),
            ('/detail', self.detail)
        ]

    def index(self, evn):
        """返回所有商品"""
        # 查询所有商品数据返回
        # 配置MySQL连接信息
        db = pymysql.connect(user='root', password='1937hei', host='192.168.88.5', database='booksite')
        # 创建连接对象(游标)
        cursor = db.cursor()
        # 编写sql语句
        sql_str = 'select * from goods;'
        # 执行sql语句
        cursor.execute(sql_str)
        res_data = cursor.fetchall()
        # 返回结果
        # 将元组类型结果遍历取出,构造成字典放入列表里,转换为json数据
        data_list = []
        for data in res_data:
            data_list.append(
                {'id': data[0],
                 'name': data[1],
                 'brand_name': data[3],
                 'price': data[4]
                 }
            )
        send_data = json.dumps(data_list)
        return send_data

    def detail(self, evn):
        """返回单个商品信息"""
        # 接受数据
        query_data = evn['query_data']
        # 查询所有商品数据返回
        # 配置MySQL连接信息
        db = pymysql.connect(user='root', password='1937hei', host='192.168.88.5', database='booksite')
        # 创建连接对象(游标)
        cursor = db.cursor()
        # 编写sql语句
        sql_str = 'select * from goods where ' + query_data
        cursor.execute(sql_str)
        data = cursor.fetchone()
        res_data = {
            'id': data[0],
            'name': data[1],
            'brand_name': data[3],
            'price': data[4]
        }
        send_data = json.dumps(res_data)
        return send_data

    def url_route(self, evn):
        """封装处理判断不同路径对应的不同数据返回"""
        # 字典取值
        # 不用写大量的if判断
        url_path = evn['url_path']
        for url, func in self.url_list:
            if url == url_path:
                send_data = func(evn)
                break
        else:
            send_data = '未匹配'
        return send_data

    def client_request(self, client_socket):
        # 接收数据
        recv_data = client_socket.recv(1024)
        # 为了避免出现客户端返回空数据
        if len(recv_data) == 0:
            client_socket.send('No data')
        # 1.将bytes类型转为字符串
        str_recv = recv_data.decode()
        # 2.字符串切割:
        # 1.按照\r\n为分隔符进行切割
        # 2.得到请求行, 请求头数据, 请求体数据
        data_list = str_recv.split('\r\n')
        # 3.从切割后的列表中提取请求行数据
        # 1.按照空格为分隔符进行切割
        data_line_list = data_list[0].split(' ')
        # 4.从切割后的请求列表中提取请求路径
        url_path = data_line_list[1]
        # 判断路径中是否携带问号
        url_data = url_path.split('?')
        if len(url_data) > 1:
            # 判断大于一就有问好,赋值
            url_path = url_data[0]
            query_data = url_data[1]
        else:
            # 等于一时没有query_data
            query_data = ''
        # 5.根据不同的请求路径读取不同的页面文件返回浏览器
        # 封装成一个方法,直接进行调用
        # 构造字典数据,将所有的请求数据放在一个字典里
        evn = {
            'url_path': url_path,
            'query_data': query_data
        }
        # 接受查询后的数据
        send_data = self.url_route(evn)

        # 构建响应报文 响应行 响应头 响应体
        response_line = 'HTTP/1.1 200 ok\r\n'
        response_header = 'Server:python\r\n\r\n'
        response_body = send_data
        # 拼接三部分数据构成响应报文
        response_data = response_line + response_header + response_body
        client_socket.send(response_data.encode())

    def start(self):
        print('服务器启动...http://127.0.0.1:8080')
        # 等待连接
        while True:
            client_socket, addr = self.server.accept()
            logging.info(f'请求的客户端是:{client_socket}')
            # 创建服务端对象
            t = threading.Thread(target=self.client_request, args=(client_socket,))
            t.start()


Web = WebServer()
Web.start()
```

## 4.前后端交互

- 可以使用python运行
- 也可以使用pycharm

前提是写好前端的代码,有ajax请求后端数据才能返回

# 三.路由列表功能开发

## 1.路由含义

- 路径的匹配我们称为路由

> 是元组和列表配合起来的操作

## 2.路由列表的原理

```python
def func1():
    print('用户表查询')

def func2():
    print('订单表查询')

def func3():
    print('商品表查询')

def url_route(url_path):
    if url_path == '/':
        func1()
    elif url_path == 'order':
        func2()
    elif url_path == 'goods':
        func3()
    else:
        print('没有该路径')

url_route('/')  # 用户表查询
```

```python
# 当这个路径不再只是几种,而是很多,会写很多个elif吗?怎么解决?
# 定义路由列表
url_list = [
    ('/', func1),
    ('order', func2),
    ('goods', func3)
]

def url_route1(url_path):
    for url,func in url_list:
        if url == url_path:
            func()
            break
    else:
        print('没有匹配')
url_route1('order')  # 订单表查询
```

# 四.logging日志

## 1.导入日志模块

`import logging`

## 2.日志的写入

```python
# 配置日志
# level 日志的默认级别
# format 输出展示的信息
# asctime出错时间 filename文件名  line 出错行数 levelname日志出错级别名称 message 出错的信息
# filename保存日志的文件名
# filemode文件写入形式
import logging
logging.basicConfig(
    level=logging.DEBUG,
    format='%(asctime)s - %(filename)s[line:%(lineno)d] - %(levelname)s: %(message)s',
    filename="log.txt",
    filemode="w"
)

# 使用日志方法写入数据
# 一般信息 参数:信息内容
logging.info('一般信息')
# 2022-03-22 17:21:44,043 - 日志.py[line:17] - INFO: 一般信息
# 警告信息
logging.warning('警告')
# 错误信息
logging.error('错误')
# 调试信息
logging.debug('调试')
# 严重错误警告
logging.critical('严重错误')
```

## 3.日志的错误级别

- info 一般信息
- warning 警告
- error 错误
- debug 调试
- critical 严重错误

# 五.拓展了解flask框架

```python
from flask import Flask

app = Flask(__name__)


@app.route("/")
def hello_world():
    return "hello world"

# Set FLASK_APP=flask_text.py
#  flask run flask_text.py
```

