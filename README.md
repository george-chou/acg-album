# 二次元主题相册使用教程

## 本地调试

### 安装 Git
下载： <https://git-scm.com/downloads>

### 安装 XAMPP
教程： <https://www.bilibili.com/video/BV1e7411u7qY>

下载： <https://www.apachefriends.org/download.html>

### 本地部署
首先注册一个 GitHub 账号并 fork 一份本仓库到你自己的账号
<br>
在 cmd 中切换到 XAMPP 的 htdocs 目录下，克隆仓库：
```
git clone https://github.com/你的github用户名/acg-album.git
```

在 ./acg-album 目录下可以看到有两个相同结构的配置文件 config-37.json 和 config-rem.json，

分别对应_三月七主题_和_雷姆主题_，这里以 config-37.json 为例

```
{
    "idol": "爱豆名称",
    "date": "关注时间，格式为 yyyy/mm/dd",
    "bgm": "BGM名称",
    "bgmurl": "BGM来源链接",
    "bgmsrc": "BGM音频直链(最好不用 API 获取 mp3，可能会被跨域封锁)",
    "wallpaper": "壁纸URL",
    "content": "爱豆经典语录",
    "pics": [
        "相册图片1链接",
        "相册图片2链接",
        ...
        "相册图片15链接"
    ]
}
```

可按上述的说明个性化修改。

### 本地展示
在 XAMPP 上打开 Apache，进入 <http://localhost/acg-album>
<br>
建议使用本地展示调试完毕后再进行下一步

## 部署到 Vercel 及广域网展示
首先将修改过的本地代码同步到你的 GitHub 账号上：

命令行进入 ./acg-album 后
```
git add .
git commit -a
输入 :wq! 回车
git push
```

再进入 vercel 官网： <https://vercel.com/login>

使用你自己的 GitHub 账号授权登录，点击 `+ New Project`，

在 Import Git Repository 的搜索框中键入关键字 acg-album 找到之前 fork 的那个仓库，

点击 `Import`，修改 Configure Project 下的 PROJECT NAME 

保证 PROJECT NAME 不与别人冲突后点击 `Deploy`

部署完成后，可在广域网中访问 `https://%PROJECT NAME%.vercel.app` 查看网页。(其中 %PROJECT NAME% 就是刚刚 Configure Project 下修改的 PROJECT NAME)

## 未来工作
此相册暂未对移动端进行样式调试，因此在移动端显示不正常，未来将修复这一问题。