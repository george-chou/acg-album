# ACG-Album usage

[![license](https://img.shields.io/github/license/george-chou/acg-album.svg)](https://github.com/george-chou/acg-album/blob/master/LICENSE)

## Local debug

Install Git: <a href="https://git-scm.com/downloads" target="_blank">git-scm.com/downloads</a>

Install XAMPP: <a href="https://www.apachefriends.org/download.html" target="_blank">apachefriends.org/download.html</a>

### Local deployment

1. Register a GitHub account and fork a copy of this repository to your own account

2. Switch to the htdocs directory of XAMPP in cmd and clone the repository:
```
git clone https://github.com/%Your_GitHub_Account%/acg-album.git
```

In the _./acg-album_ directory, you can see that there are two configuration files with the same structure, _config-37.json_ and _config-rem.json_ corresponding to *March 7 theme* and *Rem theme* respectively, here is an example of _config-37.json_:

```
{
    "idol": "Name of your idol",
    "date": "Following time, the format is yyyy/mm/dd",
    "bgm": "BGM name",
    "bgmurl": "BGM source URL",
    "bgmsrc": "BGM audio direct link (it is best to get mp3 without API, it may be blocked by cross-domain)",
    "wallpaper": "wallpaper URL",
    "content": "Idol Classic Quotes",
    "pics": [
        "Album picture 1 href",
        "Album picture 2 href",
        ...
        "Album picture 15 href"
    ]
}
```

It can be customized as described above.

### Switch themes
Open load.js in the ./acg-album/js directory and modify the first line of code:
```
let cfg = "./config-37.json";
```
Currently *March 7 theme*, if you want to switch to *rem theme*, change it to:
```
let cfg = "./config-rem.json";
```

### Local display
Open Apache on XAMPP, go to <a href="http://localhost/acg-album" target="_blank">localhost/acg-album</a>
<br>
It is recommended to use the local display to debug before proceeding to the next step.

## Deploy to Vercel

1. Sync the modified local code to your GitHub account:
```
cd acg-album
git add .
git commit -a
:wq!
git push
```

2. Enter <a href="https://vercel.com/login" target="_blank">Vercel official website</a>

3. Log in with your own GitHub account authorization, click *+ New Project*,

4. Type the keyword acg-album in the search box of *Import Git Repository* to find the repository that was previously forked

5. Click *Import* to modify the *PROJECT NAME* under *Configure Project*

6. Make sure that *PROJECT NAME* does not conflict with others and click *Deploy*

7. After the deployment is complete, you can visit *https://%PROJECT_NAME%.vercel.app* in the WAN to view the webpage. (where *%PROJECT_NAME%* is the PROJECT NAME just modified under *Configure Project*)

## Future work

The style of this album has not been debugged on mobile clients, so it does not display properly on the mobile terminal. This problem will be fixed in the future.