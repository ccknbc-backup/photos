本仓库文件使用`PicGo`上传

其中图片使用`gulp imagemin`压缩

（之后考虑加入`webp`转换👍，`gulp`作者貌似不考虑适配，虽然`imagemin`测试成功了，但是还是等等再说）

由`Github Actions`压缩完成

每天早晚8点左右各执行一次压缩

当然也可以手动点击压缩一次

同时游客点击`Star`也会帮忙压缩一次（谢谢）

图片上传完毕一会儿会由`Imgbot`压缩提交`PR`

然后由`Restyled`进行代码格式重置（图片也不需要了其实）

最后由`Mergify`或`Github Actions`自动合并`PR`（比速度🚀）

(或由我打标签后由`PRValet`自动完成完成`PR`合并）

以后加入由`Github Actions`自动合并由机器人提交的`PR`
