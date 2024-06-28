---
typora-root-url: assets
---

# 第四章 HTTP协议和静态Web服务器

# 一.HTTP协议

## 1.HTTP协议介绍

- HTTP协议是1991年蒂  设计出来 , HTTP协议之前目的是传输网页数据 ,现在允许传输任意类型的数据
- HTTP是基于TCP传输协议的 , 发送数据之前要先建立连接

- HTTP(HyperText Transfer Protocol超文本传输协议)
  - 超文本是超级文本的缩写 , 指超越文本限制或者超链接 , 比如: 图片 , 音乐 , 视频 ,超链接等

> 下面是我们使用TCP协议方法写出的HTTP服务端 , 并以浏览器作为客户端进行请求 , 服务端返回的内容
>
> 说明浏览器它是有自己的一套格式 , 才能连接(也就是HTTP协议)

```python
接受的客户端数据: GET / HTTP/1.1   # 请求方式   路径   HTTP协议版本
Host: 192.168.137.1:8008   # 请求的IP地址和端口
Connection: keep-alive     # 连接方式
Cache-Control: max-age=0
Upgrade-Insecure-Requests: 1
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.99 Safari/537.36  # 设备信息
Accept:text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9
Accept-Encoding: gzip, deflate
Accept-Language: zh-CN,zh;q=0.9
```

## 2.HTTP协议的作用

它规定了浏览器和Web服务器通信数据的格式 ,也就是说浏览器和Web服务器通信需要使用HTTP协议

## 3.浏览器访问Web服务器的通信过程

![1647399778489](/1647399778489.png)

**要求:**

- 网址上的要求---就是url
- 传递数据的要求

**DNS(域名服务器)**:域名系统 , 它是将域名和IP地址相互映射的一个分布式数据库.DNS使用的是UDP端口53

# 二.URL

## 1.URL概念

- URL(Uniform Resoure Locator统一资源定位符) , 通俗理解就是网络资源地址 , 也就是网址

## 2.URL组成

- URL的样子

https://www.baidu.com/s?wd=URL&rsv_spt=1&rsv_iqid=0xb8627a7200007f96&issp=1&f=8&rsv_bp=1&rsv_idx=2&ie=utf-8&tn=baiduhome_pg&rsv_enter=1&rsv_dl=tb&rsv_sug3=6&rsv_sug1=6&rsv_sug7=101&rsv_sug2=0&rsv_btype=i&prefixsug=URL&rsp=5&inputT=2295&rsv_sug4=4211

- 1.协议部分 : https://   http://     ftp://

  - https://在http://的基础上增加了一些加密操作 , 传递数据更加安全

- 2.域名部分: www.baidu.com

  - 域名:就是IP地址的别名 , 使用点分制英文数字组成的名字
  - 作用:方便记住某台数据的IP地址
  - 最终会转化成IP地址--(通过DNS)

- 3.资源路径部分 :／xx/xxx/xxx.html

- 4.查询参数部分:

  - (s代表search查询,?后面的wd表示第一个参数(搜索的内容) , 后面的参数都使用&连接)
  - key = value

  ```html
  ?wd=URL&rsv_spt=1&rsv_iqid=0xb8627a7200007f96&issp=1&f=8&rsv_bp=1&rsv_idx=2&ie=utf-8&tn=baiduhome_pg&rsv_enter=1&rsv_dl=tb&rsv_sug3=6&rsv_sug1=6&rsv_sug7=101&rsv_sug2=0&rsv_btype=i&prefixsug=URL&rsp=5&inputT=2295&rsv_sug4=4211
  ```

# 三,查看HTTP协议的通信过程

## 1.开发者工具的使用说明

### ①打开开发者工具

windows : 

- F12
- 页面空白处右击 --检查
- 网站右上角三个点--更多工具--开发者工具

### ②介绍

- 元素(Elements): 用于查看或修改代码
- 控制台(Console): 执行js代码(调试前端代码)或者一些信息
- 源代码(Sources): 查看静态资源文件(js代码,图片) ,断点调试JS代码
- 网络(Network): 查看HTTP协议的通信过程

![1647411408715](/1647411408715.png)



## 2.查看HTTP协议的通信过程

network--Headers(请求信息)/Response(响应信息)

![1647411723615](/1647411723615.png)

![1647412070543](/1647412070543.png)

![1647412170793](/1647412170793.png)

# 四.HTTP请求报文

## 1.HTTP请求报文介绍

- HTTP最常见的请求报文方式:
  - GET方式
    - 获取Web服务器数据
  - POST方式
    - 向Web服务器提交数据

## 2.HTTP GET请求报文分析

> 不需要会写 , 了解即可
>
> 浏览器会自动发送请求报文
>
> 结构形式为字典类型 key : value

- 也就是请求数据格式 : 
  - 包括请求行(请求方式 /路径信息 协议)(通过空格区分)
    - 请求方式
      - GET
      - POST
    - 请求路径
      - /login
      - /register
    - 请求协议
      - HTTP/1.1
  - 请求头(通过/r/n区分)
    - 结构格式为:字典类型 key : value\r\nkey:value\r\n...
  - 请求体
    - json
    - 文件数据
      - 图片 音视频 普通文本
    - 表单数据(form data)

```python
                            #GET请求报文说明#
--请求行--
# 请求方式 /路径信息 协议
--请求头--
Host: # 服务器的主机地址和端口号 , 默认是80
Connection: # 连接方式
Upgrade-Insecure-Requests: # 让浏览器升级不安全请求 , 使用htttps请求
User-Agent: # 用户代理 , 也就是客户端的名称
Accept: # 可接受的数据类型
Accept-Encoding: # 可接受的压缩格式
Accept-Language: # 可接受的语言
Cookie:     # 登陆用户的身份标识
--请求体--
```

## 3.HTTP POST请求报文分析

### `京东登陆操作`

![1647413263501](/1647413263501.png)

![1647413361101](/1647413361101.png)



# 五.HTTP响应报文

## 1.HTTP响应报文分析

![1647417079875](/1647417079875.png)

```python
                                          **#响应报文#**

--响应行--
HTTP/1.1 200 ok
# 协议 状态码 状态信息
--\r\n--
--响应头--
server: # 服务名称\r\n
Content-Type: # 返回的数据类型(文本text/html/ 图片image/jpeg)\r\n
Connection: # 和客户端的连接方式\r\n
Date: # 服务端的响应时间\r\n    
--\r\n--   
--响应体--
```

## 2.HTTP状态码介绍

- 200 成功
- 307重定向
- 400 服务器出错 ,请求的地址或参数有误
- 404 页面未找到, 请求资源在服务器不存在
- 500服务器内部源代码出错

# 六.搭建Python<自带>静态Web服务器

## 1.步骤

- 在Python中创建一个前端文件--index.html
  - 或者去复制一个别的网站页面,用于测试
- 打开Terminal,启动Python自带的静态服务器
  - 要在前端文件所在的目录下进行启动
  - python3 -m http.server 8080

## 2.具体实施图片

![1647418790228](/1647418790228.png)

![1647419256606](/1647419256606.png)

![1647419454851](/1647419454851.png)

![1647420079554](/1647420079554.png)

## ![1647420060765](/1647420060765.png)

## 3.配置环境变量

> 若在Terminal中无法使用Python , 则需要配置环境变量 
>
> 搜索python.exe 配置到环境变量中
>
> 除了Python还可以添加很多,比如mysql , java等

具体步骤:

- 控制面板--系统--高级系统设置--环境变量--点击系统变量中Path--编辑--添加路径

# 七.搭建静态Web服务器

## 1.返回数据类别

- 固定的提前定义的字符串
- 返回html页面文件 , 只需要提前**读取文件交给响应体**即可

## 2.搭建服务器--返回字符串

```python
import socket
# 创建服务端对象
server = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
# 绑定ip和端口
server.bind(('192.168.137.1', 8080))
# 指定监听数量
server.listen(5)
print('服务器启动...http:192.168.137.1:8080')
# 等待连接
while True:
    client_socket, addr = server.accept()
    # 接收数据
    recv_data = client_socket.recv(1024)
    print('接受的客户端数据:', recv_data.decode())
    # 返回数据给浏览器--按照http协议格式
    send_date = 'hello client'
    # 构建响应报文 响应行 响应头 响应体
    response_line = 'HTTP/1.1 200 ok\r\n'
    response_header = 'Server:python\r\n\r\n'
    response_body = send_date
    # 拼接三部分数据构成响应报文
    response_data = response_line + response_header + response_body
    client_socket.send(response_data.encode())
# 关闭浏览器
server.close()
```

![1647422807206](/1647422807206.png)

## 3.搭建服务器--返回单页面

> 使用打开文件
>
> 返回html页面文件 , 只需要提前**读取文件交给响应体**即可

```python
import socket
# 创建服务端对象
server = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
# 绑定ip和端口
server.bind(('192.168.137.1', 8080))
# 指定监听数量
server.listen(5)
print('服务器启动...http:192.168.137.1:8080')
# 等待连接
while True:
    client_socket, addr = server.accept()
    # 接收数据
    recv_data = client_socket.recv(1024)
    print('接受的客户端数据:', recv_data.decode())
    # 返回数据给浏览器--按照http协议格式
    f = open('index.html', 'r')
    send_date = f.read()
    # 构建响应报文 响应行 响应头 响应体
    response_line = 'HTTP/1.1 200 ok\r\n'
    response_header = 'Server:python\r\n\r\n'
    response_body = send_date
    # 拼接三部分数据构成响应报文
    response_data = response_line + response_header + response_body
    client_socket.send(response_data.encode())
# 关闭浏览器
server.close()
```

![1647422551573](/1647422551573.png)

## 4.搭建服务器--多页面返回(指定页面返回)

### ①步骤

**方法:**读取请求报文中的请求路径 , 根据不同的请求路径返回不同的页面

1. 将bytes类型转为字符串
2. 字符串切割: 
   1. 按照\r\n为分隔符进行切割
   2. 得到请求行,请求头数据, 请求体数据
3. 从切割后的列表中提取请求行数据
   1. 按照空格为分隔符进行切割
4. 从切割后的请求列表中提取请求路径
5. 根据不同的请求路径读取不同的页面文件返回浏览器

### ②代码实现

> 在原代码的基础上 ,

```python
import socket
# 创建服务端对象
server = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
# 绑定ip和端口
server.bind(('127.0.0.1', 8080))
# 指定监听数量
server.listen(5)
print('服务器启动...http://127.0.0.1:8080')
# 等待连接
while True:
    client_socket, addr = server.accept()
    # 接收数据
    recv_data = client_socket.recv(1024)
    print('接受的客户端数据:', recv_data)
    # 1.将bytes类型转为字符串
    str_recv = recv_data.decode()
    # 2.字符串切割:
        # 1.按照\r\n为分隔符进行切割
        # 2.得到请求行, 请求头数据, 请求体数据
    data_list = str_recv.split('\r\n')
    print('切割后的列表为:', data_list)
    # 3.从切割后的列表中提取请求行数据
        # 1.按照空格为分隔符进行切割
    data_line_list = data_list[0].split(' ')
    print('切割后获取的请求行:', data_line_list)
    # 4.从切割后的请求列表中提取请求路径
    url_path = data_line_list[1]
    print('切割后获取的请求路径为:', url_path)
    # 5.根据不同的请求路径读取不同的页面文件返回浏览器
    if url_path == '/':
        # 返回index.html数据给浏览器--按照http协议格式
        f = open('index.html', 'r', encoding='utf-8')
        send_date = f.read()
        f.close()
    elif url_path == '/study':
        # 返回study.html数据给浏览器
        f = open('study.html', 'r', encoding='utf-8')
        send_date = f.read()
        f.close()
    else:
        send_date = '页面还没制作好!'
    # 构建响应报文 响应行 响应头 响应体
    response_line = 'HTTP/1.1 200 ok\r\n'
    response_header = 'Server:python\r\n\r\n'
    response_body = send_date
    # 拼接三部分数据构成响应报文
    response_data = response_line + response_header + response_body
    client_socket.send(response_data.encode())
# 关闭浏览器
server.close()



服务器启动...http://127.0.0.1:8080
接受的客户端数据: b'GET /login HTTP/1.1\r\nHost: 127.0.0.1:8080\r\nConnection: keep-alive\r\nCache-Control: max-age=0\r\nUpgrade-Insecure-Requests: 1\r\nUser-Agent: Mozilla/5.0 (iPhone; CPU iPhone OS 10_3_1 like Mac OS X) AppleWebKit/603.1.30 (KHTML, like Gecko) Version/10.0 Mobile/14E304 Safari/602.1\r\nAccept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9\r\nSec-Fetch-Site: none\r\nSec-Fetch-Mode: navigate\r\nSec-Fetch-User: ?1\r\nSec-Fetch-Dest: document\r\nAccept-Encoding: gzip, deflate, br\r\nAccept-Language: zh-CN,zh;q=0.9\r\n\r\n'
切割后的列表为: ['GET /study HTTP/1.1', 'Host: 127.0.0.1:8080', 'Connection: keep-alive', 'Cache-Control: max-age=0', 'Upgrade-Insecure-Requests: 1', 'User-Agent: Mozilla/5.0 (iPhone; CPU iPhone OS 10_3_1 like Mac OS X) AppleWebKit/603.1.30 (KHTML, like Gecko) Version/10.0 Mobile/14E304 Safari/602.1', 'Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9', 'Sec-Fetch-Site: none', 'Sec-Fetch-Mode: navigate', 'Sec-Fetch-User: ?1', 'Sec-Fetch-Dest: document', 'Accept-Encoding: gzip, deflate, br', 'Accept-Language: zh-CN,zh;q=0.9', '', '']
切割后获取的请求行: ['GET', '/study', 'HTTP/1.1']
切割后获取的请求路径为: /study
```

![1647433860432](/1647433860432.png)

![1647434240434](/1647434240434.png)

## 5.搭建服务器--多任务

### ①步骤

> 主线程只负责客户端发过来的对象,不进行任何操作
>
> 具体的客户端数据处理(接受和返回数据)交给子线程处理

导入模块 threading

添加函数,将accept()后面的server.close()前面的代码剪切过去 ,并传入参数(返回的客户端的信息)

在主线程之中,while True下创建服务端对象 , 接着运行t.start()即可

### ②代码实现

```python
import socket
import threading

def server_date(client_socket):
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
    # 5.根据不同的请求路径读取不同的页面文件返回浏览器
    if url_path == '/':
        # 返回index.html数据给浏览器--按照http协议格式
        f = open('index.html', 'r', encoding='utf-8')
        send_date = f.read()
        f.close()
    elif url_path == '/study':
        # 返回study.html数据给浏览器
        f = open('study.html', 'r', encoding='utf-8')
        send_date = f.read()
        f.close()
    else:
        send_date = 'Not Found'
    # 构建响应报文 响应行 响应头 响应体
    response_line = 'HTTP/1.1 200 ok\r\n'
    response_header = 'Server:python\r\n\r\n'
    response_body = send_date
    # 拼接三部分数据构成响应报文
    response_data = response_line + response_header + response_body
    client_socket.send(response_data.encode())

# 创建服务端对象
server = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
# 绑定ip和端口
server.bind(('127.0.0.1', 8080))
# 指定监听数量
server.listen(5)
print('服务器启动...http://127.0.0.1:8080')
# 等待连接
while True:
    client_socket, addr = server.accept()
    print('请求的客户端是:', client_socket)
    # 创建服务端对象
    t = threading.Thread(target=server_date, args=(client_socket,))
    t.start()

# 关闭浏览器
server.close()


服务器启动...http://127.0.0.1:8080
请求的客户端是: <socket.socket fd=480, family=AddressFamily.AF_INET, type=SocketKind.SOCK_STREAM, proto=0, laddr=('127.0.0.1', 8080), raddr=('127.0.0.1', 58887)>
请求的客户端是: <socket.socket fd=488, family=AddressFamily.AF_INET, type=SocketKind.SOCK_STREAM, proto=0, laddr=('127.0.0.1', 8080), raddr=('127.0.0.1', 58888)>
```

## 6.搭建服务器--面向对象

- 把提供服务的Web服务器抽象成一个类(WebServer)
- 提供Web服务器的初始化方法 , 在初始化方法里面创建socket对象

```python
import socket
import threading


class WebServer():
    def __init__(self):
        # 创建服务端对象
        self.server = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
        # 绑定ip和端口
        self.server.bind(('127.0.0.1', 8081))
        # 指定监听数量
        self.server.listen(5)

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
        # 5.根据不同的请求路径读取不同的页面文件返回浏览器
        if url_path == '/':
            # 返回index.html数据给浏览器--按照http协议格式
            f = open('index.html', 'r', encoding='utf-8')
            send_date = f.read()
            f.close()
        elif url_path == '/study':
            # 返回study.html数据给浏览器
            f = open('study.html', 'r', encoding='utf-8')
            send_date = f.read()
            f.close()
        else:
            send_date = 'Not Found'
        # 构建响应报文 响应行 响应头 响应体
        response_line = 'HTTP/1.1 200 ok\r\n'
        response_header = 'Server:python\r\n\r\n'
        response_body = send_date
        # 拼接三部分数据构成响应报文
        response_data = response_line + response_header + response_body
        client_socket.send(response_data.encode())

    def start(self):
        print('服务器启动...http://127.0.0.1:8080')
        # 等待连接
        while True:
            client_socket, addr = self.server.accept()
            print('请求的客户端是:', client_socket)
            # 创建服务端对象
            t = threading.Thread(target=self.client_request, args=(client_socket,))
            t.start()


Web = WebServer()
Web.start()
```

# 八.错误处理

## 1.客户端返回空数据

```python
# 错误:客户发送了空数据过来
Exception in thread Thread-2:
Traceback (most recent call last):
  File "D:\工作软件\python3.8\lib\threading.py", line 932, in _bootstrap_inner
    self.run()
  File "D:\工作软件\python3.8\lib\threading.py", line 870, in run
    self._target(*self._args, **self._kwargs)
  File "C:/Users/田咪/PycharmProjects/pythonProject_3/HTTP服务端.py", line 17, in server_date
    url_path = data_line_list[1]
IndexError: list index out of range
    

```

### ①解决方法一(判断)

```python
...
def server_date(client_socket):
    # 接收数据
    recv_data = client_socket.recv(1024)
    # 为了避免出现客户端返回空数据
    if len(recv_data) == 0:
        client_socket.send('No data')
    # 1.将bytes类型转为字符串
    str_recv = recv_data.decode()
    ...
```

### ②解决方法二(异常捕获)

```python
def server_date(client_socket):
    # 接收数据
    recv_data = client_socket.recv(1024)
    # 为了避免出现客户端返回空数据
    # 使用try except
    try:
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
    except:
        client.socket.send('no Found')
        return None  # 直接结束
        ...    
```

