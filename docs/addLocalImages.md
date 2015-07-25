 # 如何在RN中添加图片
RN 图片的引入方式有2中：远程http资源引入 & 本地资源require 引入
```
<Image source={require(image!icon1)} />
<Image source={{uri:'http://xxx.jpg'}} />
```

### 远程 http 引入
这种方式如上，没啥难点。

### 本地图片引入
这里涉及到本地资源的引入和编译
+ 在项目下找到 `Images.xcassets`，单击。
+ 在工程目录旁边有 `AppIcon`区域，Ctrl ＋ 单击，`New Image set`
+ 双击出现的 Image set，修改名字 icon1
+ Ctrl + 单击 icon1 图标，选择 `Show In Finder`，进入 `icon1.imageset` 文件夹
+ 将1x,2x,3x图片copy到目录。
+ 图片改名，改成 icon1@1x.png,icon1@2x.png,icon1@3x.png
+ 重现编译项目，在 js 中直接 require(image!icon1) 调用即可
