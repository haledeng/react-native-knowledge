### android 版问题
+ 默认是走http方式加载线上bundle，但是没有找到代码里面有配置http地址，如何像iOS一样走offline模式
 
node_modules/react-native/local-cli/bundle.js 处理了bundle的生成方式，生成路径 `android/app/src/main/assets/index.android.bundle`，由于assets文件夹不存在，这里居然报错。
 react-native 默认的bundle命令居然不生成android的bundle文件，需要额外的命令去生成
 `react-native bundle --platform android`
运行 `react-native run-android` 会把bundle文件写入到apk中，这样居然走通了offline的模式，
应该时`默认先到本地查找bundle，如果找不到，就走http请求`。

如果走线上，默认的http的前缀地址是在哪里配置的？

+ **`如何与现有的app集成，目前的方式是将整个项目生成apk`**


### android 执行流程
运行 `react-native run-android` 都干了哪些事情？
+ Start  JS  Server. 具体流程是：请求/status 查看server是否已经打开，如果没有，则去执行 `packager/packager.js`
开启server，监听8081端口（这里调用有些曲折 run-android.js -> run-packager.js -> packager/launchPackager.command -> packager/packager.sh -> packager/packager.js）.

在 packager.js 中只处理了一些简单的请求，核心的请求执行逻辑在 packager/react-packager目录中处理的，
比如 `http://localhost:8081/index.android.bundle?platform=android`，请求这个链接时，实际是调用 packager/react-packager/Bundle/index.js 处理的，实际的bundle文件并没有声称到项目目录下，而是动态编译的。

+ 将编译的apk，安装到手机上。
