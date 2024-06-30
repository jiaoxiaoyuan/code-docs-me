## 前端npm常用命令总结


npm（Node Package Manager）是Node.js的包管理器，用于安装和管理Node.js的依赖库。以下是一份npm命令的总结文档，涵盖了常用的npm命令及其功能：

### 包相关的

#### 安装和卸载包

+   **npm install** ：安装指定名称的包。
+   **npm install @**：安装指定版本的包。
+   **npm install -g** ：全局安装一个包。
+   **npm uninstall** ：卸载一个已安装的包。

#### 更新包

+   **npm update** ：更新一个已安装的包到最新版本。

#### 查看包信息

+   **npm list**：列出当前项目已安装的所有包及其依赖关系。
+   **npm list -g**：查看全局已安装的所有包。
+   **npm info** ：查看指定包的详细信息。

#### 管理项目依赖

+   **npm init**：初始化一个新的npm项目，并创建一个package.json文件。
+   **npm install**：根据package.json文件中的依赖关系安装所有必要的包。
+   **npm install --save**：安装包并添加到项目的dependencies中。
+   **npm install --save-dev**：安装包并添加到项目的devDependencies中。

#### 版本控制

+   **npm version** ：修改package.json中的版本号，并创建一个新的git commit和tag。

#### 运行脚本

+   **npm run**

#### 其他常用命令

+   **npm link** ：将全局安装的包链接到当前项目。
+   **npm publish**：发布一个npm包。
+   **npm cache clean --force**：清理npm的缓存。
+   **npm search <string/regular-expression>**：在npm仓库中搜索包。
+   **npm logout**：退出npm的登录状态。
+   **npm login**：登录npm，输入用户名和密码。
+   **npm whoami**：查看当前登录的用户名。
+   **npm dist-tag** ：给包添加或修改发布标签。

### 配置相关

npm的配置命令用于设置和调整npm的行为和参数，以满足特定的项目需求或开发环境。以下是一些npm的配置命令的总结：

#### 查看配置

1.  **npm config list**: 显示当前npm的所有配置信息。
2.  **npm config get** : 查看特定配置项的值。例如，`npm config get registry` 会显示当前设置的npm仓库地址。

#### 设置配置

1.  **npm config set** : 设置特定配置项的值。例如，要设置代理，你可以使用 `npm config set proxy http://your-proxy-url:port`。
2.  **npm set** : 这是 `npm config set` 的简写形式，功能相同。

#### 删除配置

1.  **npm config delete** : 删除特定配置项。

#### 编辑配置

1.  **npm config edit**: 直接编辑npm的配置文件（通常是`~/.npmrc`）。这会打开一个文本编辑器，让你直接修改配置文件。

#### 其他常用配置

1.  **npm config set strict-ssl=false**: 禁用SSL验证，这在某些网络环境下可能有用，但请注意这样做可能会降低安全性。
2.  **npm config set registry** : 设置npm的仓库地址。这可以用于切换到私有仓库或特定的镜像仓库。
3.  **npm config set cafile** : 设置自定义的CA文件路径，用于SSL连接。
4.  **npm config set save=true**: 设置在安装包时自动将其添加到`package.json`的`dependencies`中。

#### 缓存配置

1.  **npm cache clean --force**: 清理npm的缓存。`--force`选项用于强制清理，即使缓存目录被锁定。

更多命令可以查看：[https://npm.nodejs.cn/cli/v10/commands/npm](https://npm.nodejs.cn/cli/v10/commands/npm)