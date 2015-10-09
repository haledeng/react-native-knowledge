# React-Native Android

### 调试问题
`模拟器不支持 Reload JS，没有调试功能，需要用真机`。通过命令将apk安装到真机后，打开app，摇一摇，会弹出菜单。

进入 `Dev Settings` 里面，点击 `Debug server host for device`，IP 请填写同一个wifi下的mac的ip地址（方便从mac上下载bundle文件）。
把 `Auto reload on JS change` 勾上，这样在mac上保存代码时，手机上会同步刷新。
