# React-Native 接入 Native 方案

### 安装
+ gem install cocoapods
+ brew install iojs
+ brew link iojs --force，这里有各种重写文件的错误，需要把npm干掉

### Pod
+ 在项目目录下新建 `Podfile` 文件
+ Podfie 文件里面添加下面的代码
```
pod 'React'
pod 'React/RCTText'
```
+ pod install
关闭 Xcode 相关的项目
Build Settings -> Other linker flags -> double click . Add $(inherited) to a new line .


### 本地编译bundle
+ react-native bundle --minify
+ curl 'http://localhost:8081/xxx/index.ios.bundle' -o main.jsbundle，依赖运行的打包服务


### 缓存和打包

