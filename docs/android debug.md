# React-Native Android

### 调试问题
。通过命令将apk安装到真机后，打开app，摇一摇，会弹出菜单。
![screenshot_2015-10-09-10-56-49](https://cloud.githubusercontent.com/assets/3880323/10385312/8ed5fa4a-6e79-11e5-9a61-4129c02182e6.jpeg)

进入 `Dev Settings` 里面，点击 `Debug server host for device`，IP 请填写同一个wifi下的mac的ip地址（方便从mac上下载bundle文件）。
把 `Auto reload on JS change` 勾上，这样在mac上保存代码时，手机上会同步刷新。

![screenshot_2015-10-09-10-56-35](https://cloud.githubusercontent.com/assets/3880323/10385313/90ab7d36-6e79-11e5-9829-9d3764854cf1.jpeg)
