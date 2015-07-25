# react-native 相关知识

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
