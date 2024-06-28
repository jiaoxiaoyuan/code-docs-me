---
typora-root-url: assets
---

# 第一章 Python基础语法(六)--函数(中)

# 一.学员管理系统功能概述

![1646395106097](/1646395106097.png)



![1646395129267](/1646395129267.png)

# 二.学员管理系统步骤分析

## ①学生管理系统框架

```python
# 功能页面
print('-' * 20)
print('欢迎登陆学生管理系统')
print('1.添加学生的信息')
print('2.删除学生的信息')
print('3.修改学生的信息')
print('4.查询学生的信息')
print('5.遍历所有学生的信息')
print('6.退出系统')
print('-' * 20)
# 获取用户的需求
user_need = input('输入您想执行的内容序号:')

# 分析执行哪一项功能
if user_need == '1':
    print('添加学生信息')
elif user_need == '2':
    print('删除学生信息')
elif user_need == '3':
    print('修改学生信息')
elif user_need == '4':
    print('查询学生信息')
elif user_need == '5':
    print('展示所有学生信息')
elif user_need == '6':
    print('欢迎下次使用!')
else:
    print('没有此选项,重新输入!')
```

## ②学生管理系统函数封装

```python
# 功能页面
def print_all():
    """用户功能展示"""
    print('-' * 20)
    print('欢迎登陆学生管理系统')
    print('1.添加学生的信息')
    print('2.删除学生的信息')
    print('3.修改学生的信息')
    print('4.查询学生的信息')
    print('5.遍历所有学生的信息')
    print('6.退出系统')
    print('-' * 20)
    
def chose_need(user_need):
    # 分析执行哪一项功能
    if user_need == '1':
        print('添加学生信息')
    elif user_need == '2':
        print('删除学生信息')
    elif user_need == '3':
        print('修改学生信息')
    elif user_need == '4':
        print('查询学生信息')
    elif user_need == '5':
        print('展示所有学生信息')
    elif user_need == '6':
        print('欢迎下次使用!')
    else:
        print('没有此选项,重新输入!')


while True:
    # 展示功能界面
    print_all()
    # 引导用户输入功能序号,获取
    user_need = input('输入您想执行的内容序号:')
    # 根据获取的序号分析执行那些功能
    chose_need(user_need)
    input()
    
   
# 框 架 完 成 ! 后 续 填 充 功 能 即 可 !
```

## ③学员管理系统功能实现(功能添加)

```python
def print_all():
    """用户功能展示"""
    print('-' * 20)
    print('欢迎登陆学生管理系统')
    print('1.添加学生的信息')
    print('2.删除学生的信息')
    print('3.修改学生的信息')
    print('4.查询学生的信息')
    print('5.遍历所有学生的信息')
    print('6.退出系统')
    print('-' * 20)


def chose_need(user_need):
    """分析执行哪一项功能"""
    if user_need == '1':
        # 添加学员函数
        add_student_info()
    elif user_need == '2':
        # 删除学员函数
        delete_student_info()
    elif user_need == '3':
        # 修改学员函数
        modify_student_info()
    elif user_need == '4':
        # 查询学生信息
        search_student_info()
    elif user_need == '5':
        # 遍历所有学生信息
        show_student_info()
    elif user_need == '6':
        # 退出程序!
        exit_program()
    else:
        print('没有此选项,重新输入!')


def add_student_info():
    """添加学员信息"""
    # 1.用户输入学员信息
    # 1.1当id已经存在是,禁止继续输入,该id已经存在
    stu_id = input('请输入要添加学员id:')
    # 1.2获取所有id值,判断,存在不能继续添加,不存在继续添加
    student_id = [i['id'] for i in student_list]
    if stu_id in student_id:
        print('该id值存在,无法添加!')
    else:
        stu_name = input('请输入要添加学员name:')
        stu_age = input('请输入要添加学员年龄:')
        # 2.将信息添加到student_list中
        student_list.append({'id': stu_id, 'name': stu_name, 'age': int(stu_age)})
        print('学生信息添加完成')


def delete_student_info():
    """删除学员信息"""
    # 1.获取要删除的学员id
    stu_id = input('请输入要删除学生的id:')
    # 2.判断id是否存在,存在删除,不存在提示不存在
    for stu_info in student_list:
        if stu_info['id'] == stu_id:
            student_list.remove(stu_info)
            print('该学员已删除')
            return
    else:
        print('该学员不存在,无法删除')


def modify_student_info():
    """修改学员信息"""
    # 1.获取想要修改的学员id值
    stu_id = input('请输入要修改学生的id:')
    # 2.判断,学生存在,就修改,不存在,提示不能修改
    for stu_info in student_list:
        if stu_info['id'] == stu_id:
            # 2.1修改学员信息
            stu_name = input('请输入修改后的学员name:')
            stu_age = input('请输入修改后的学员年龄:')
            stu_info['name'] = stu_name
            stu_info['age'] = stu_age
            print('信息修改完成!')
            return
    else:
        print('id不存在,无法修改')


def search_student_info():
    """查询学员信息"""
    # 1.获取要查询的学员id
    stu_id = input('请输入要查询学生的id:')
    # 2.判断id,存在输出信息,不存在提示无法查询
    for stu_info in student_list:
        if stu_info['id'] == stu_id:
            print(f"学员id为{stu_info['id']},学员姓名为{stu_info['name']},学员年龄为{stu_info['age']}")
            return
    else:
        print('学员不存在!')


def show_student_info():
    """遍历所有的学员信息"""
    for stu_info in student_list:
        print(f"学员id为{stu_info['id']},学员姓名为{stu_info['name']},学员年龄为{stu_info['age']}")


def exit_program():
    """退出程序"""
    # 1.break
    # 2.return
    # 3.exit()
    # import sys
    # sys.exit()
    # 4.控制变量
    global is_stop
    is_stop = True


is_stop = False
student_list = [{'id': '001', 'name': 'Tom', 'age': '18'}]
while not is_stop:
    # 展示功能界面
    print_all()
    # 引导用户输入功能序号,获取
    user_need = input('输入您想执行的内容序号:')
    # 根据获取的序号分析执行那些功能
    chose_need(user_need)
    # 方便显示学员信息
    print(student_list)
    input()
```

# 三.反思总结