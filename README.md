# react-native 相关知识

### 实现Toast或Dialog
在css里面，实现方式：
+ 各种postion定位
+ z-index设置成最大
+ top，left各50%
+ margin-left, margin-top设置成宽高的一半（如果元素宽高不定，可以使用transform: translate(-50%, -50%)）

`RN本身没有z-index的这种层的概念，如果元素出现在相同的位置，后面的元素会覆盖前面的元素。`居中对于flex来说就是小case了,只需要在父元素上面加上：
```
flex: 1,
justifyContent: 'center',
alignItems: 'center'
```
