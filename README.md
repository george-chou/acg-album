# 二次元主题相册使用教程

[![license](https://img.shields.io/github/license/george-chou/acg-album.svg)](https://github.com/george-chou/acg-album/blob/master/LICENSE)

## 重要链接准备
|    名称     | 网址                                       |
| :---------: | :----------------------------------------- |
|  Git 官网   | <https://git-scm.com/downloads>            |
| GitHub 官网 | <https://github.com/>                      |
|  仓库网址   | <https://github.com/george-chou/acg-album> |
| Vercel 官网 | <https://vercel.com/>                      |

## 安装 Git
教程：<a href="https://www.bilibili.com/video/BV1BE411g7SV" target="_blank">bilibili.com/video/BV1BE411g7SV</a>

下载：<a href="https://git-scm.com/downloads" target="_blank">git-scm.com/downloads</a>

## 自定义相册
1. 注册一个 GitHub 账号并 fork 一份本仓库到你自己的账号
2. 在 cmd 中切换到 XAMPP 的 htdocs 目录下，克隆仓库：
```
git clone https://github.com/你的github用户名/acg-album.git
```

3. 在 ./acg-album 目录下可以看到有两个相同结构的配置文件 config-37.json 和 config-rem.json，分别对应 **三月七主题** 和 **雷姆主题** ，这里以 config-37.json 为例：

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

## 切换主题
在 ./acg-album/js 目录下打开 load.js ，修改第一行代码：
```
let cfg = "./config-37.json";
```
目前是 **三月七主题** ，若要切换成 **雷姆主题** ，则将其改为：
```
let cfg = "./config-rem.json";
```

## 部署到 Vercel 及广域网展示

可参考类似视频教程 <https://www.bilibili.com/video/BV1wp4y1W7aH?p=2>

1. 将修改过的本地代码同步到你的 GitHub 账号上：
```
cd acg-album
git add .
git commit -a
输入i
键入变更描述
输入 :wq! 回车
git push
```

2. 进入 <a href="https://vercel.com/login" target="_blank">Vercel 官网</a>

3. 使用你自己的 GitHub 账号授权登录，点击 **`+ New Project`**

4. 在 **`Import Git Repository`** 的搜索框中键入关键字 acg-album 找到之前 fork 的那个仓库

5. 点击 **`Import`**，修改 **`Configure Project`** 下的 **`PROJECT NAME `**

6. 保证 **`PROJECT NAME `** 不与别人冲突后点击 **`Deploy`**

7. 部署完成后，可在广域网中访问 **`https://%PROJECT_NAME%.vercel.app`** 查看网页。(其中 **`%PROJECT_NAME%`** 就是刚刚 **`Configure Project`** 下修改的 **`PROJECT NAME `**)

## 未来工作
此相册暂未对移动端进行样式调试，因此在移动端显示不正常，未来将修复这一问题。