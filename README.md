# weibo-supervisor-jsCrawler
用于采集 “[微博监督员](http://weibo.com/p/1006066264005608/follow)” 的采集器，js版。

# 使用方式
1. 打开 Chrome 浏览器。
2. 打开网址：http://weibo.com/p/1006066264005608/follow
3. 在 粉丝列表页 打开 Chrome 开发人员工具（Windows：F12 / Mac：忘记了），并切换到 Console 面板。
4. 复制 `main.js`中的全部内容，粘贴到 Console，回车。
5. 等待数秒，采集完成。

# 起源
看到个自动拉黑工具：
https://github.com/overtrue/weibo-dogs-killer

然后发现它的数据源是：
https://github.com/yu961549745/WeiboBlackList
用 Python 写的，我觉得这个事情没必要这么复杂，所以写了个 js 版。

# 前言
大家现在收集监督员数据的方式除了查看 [微博监督员](http://weibo.com/p/1006066264005608/follow) 的粉丝列表之外，并没有特别好的办法。

本脚本也使用的是这个方式，由于微博限制只能查看粉丝列表的前五页，所以只能采集到前 5 页的粉丝。

但是前 5 页是最新粉丝，所以如果采集频率够快，且持续的话，就能拿到从今天开始的全部数据。

本插件初衷是技术交流，不是为了解决 “收集微博监督员账号” 的问题。

> **我爱我的祖国，坚决拥护党的政策。**

# Features

- 考虑到 “微博监督员” 的粉丝不一定都有那个 “蓝色勋章”，避免误采，插件会在粉丝列表中先找到 “蓝色勋章”，然后再找 uid。
- 采集耗时很短，打开在 5 秒左右。
- 据说可以配合这个东西使用：https://github.com/overtrue/weibo-dogs-killer
