# react-native 相关知识
后面简称 RN。

### 实现Toast或Dialog
在css里面，实现方式：
+ 各种postion定位
+ z-index设置成最大
+ top，left各50%
+ margin-left, margin-top设置成宽高的一半（如果元素宽高不定，可以使用transform: translate(-50%, -50%)）

`RN本身没有z-index的这种层的概念，如果元素出现在相同的位置，后面的元素会覆盖前面的元素。`

居中对于flex来说就是小case了,只需要在父元素上面加上：
```
flex: 1,
justifyContent: 'center',
alignItems: 'center'
```

 参考[这里](https://github.com/haledeng/react-native-knowledge/tree/master/src/Toast)

### background-image repeat效果
css 里面的实现方式没啥好说的。

RN 不支持 background-image 这货，repeat 更不用想了，可以用 Image 元素实现 background-image, 具体方式：
+ 父元素 position: relative
+ 父元素插入一个子元素 <Image /> 然后设置 position: abosulte; top: 0, left: 0

`上面的实现方式需要注意层级（z-index）的问题，<Image />可能会覆盖其他子元素。`

不幸的是，上面的方式，只是简单实现了background-image，并没有处理 repeat 的问题。这里有两种做法：
+ 用大图，不需要repeat
+ 多个 Image 元素模拟 repeat 效果。

实现方式参考[这里](https://github.com/haledeng/react-native-knowledge/tree/master/src/Background-image-repeat)

### Text-indent支持
RN 不支持 text-indent 属性，段落前面的空格需要额外的处理方式，目前可以用 Text 标签包2个汉字，然后将
color: 'transparent'，不显示汉字。

### 几种引入图片的方式
+ http 方式引入线上图片
+ 添加本地图片资源[here](https://github.com/haledeng/react-native-knowledge/blob/master/docs/addLocalImages.md)
+ base64 引入图片
```
<Image source={{isStatic: true, uri: 'data:image/jpeg;base64,' + base64}} />

```
+ 绝对路径引入图片
```
var imagePath = '/Users/helondeng/Documents/edu_proj/App/images/feedback-bg@2x_33e9d22.jpg';
<Image source={{isStatic: true, uri: 'data:image/jpeg;base64,' + imagePath}} />
```
+ 相对路径引入图片，需要在 Building Phases -> copy bundle resources 中引入 images 目录，那么在 js 中就可以直接引用image目录下的图片
```
var imagePath = 'images/feedback-bg@2x_33e9d22.jpg';
<Image source={{isStatic: true, uri: imagePath}} />
```
RCTConvert.m中的路径查找那里没有解析相对路径。


### Js 调用 Native 接口
使用 RCTBridgeModule 模块连接 native 和 RN 。
Native 部分定义接口
```
#import "RCTBridgeModule.h"
 
@interface MyObjcClass : NSObject <RCTBridgeModule>
 RCT_EXPORT_MODULE();
 
 
RCT_EXPORT_METHOD(squareMe:(int)number callback:(RCTResponseSenderBlock)callback) {
    callback(@[[NSNull null], [NSNumber numberWithInt:(number * number)]]);
}
@end
```

JS 部分
```
var {
 MyObjcClass
} = require('NativeModules');

MyObjcClass.squareMe(3, function(err, number){
    console.log(number);
});
```

### 其他
+ [RN 中添加图片（本地图片）](https://github.com/haledeng/react-native-knowledge/blob/master/docs/addLocalImages.md)

### android 调试
+ [调试](https://github.com/haledeng/react-native-knowledge/blob/master/docs/android%20debug.md)

### android 版问题
+ 默认是走http方式加载线上bundle，但是没有找到代码里面有配置http地址，如何像iOS一样走offline模式
 
node_modules/react-native/local-cli/bundle.js 处理了bundle的生成方式，生成路径 `android/app/src/main/assets/index.android.bundle`，由于assets文件夹不存在，这里居然报错。
 react-native 默认的bundle命令居然不生成android的bundle文件，需要额外的命令去生成
 `react-native bundle --platform android`
运行 `react-native run-android` 会把bundle文件写入到apk中，这样居然走通了offline的模式，
应该时`默认先到本地查找bundle，如果找不到，就走http请求`。

+ 如何与现有的app集成，目前的方式是将整个项目生成apk
