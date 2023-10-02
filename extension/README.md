# gh0stzk-s-firefox-extension

Thanks to [benphelps](https://github.com/benphelps) for the original idea, thanks to [gh0stzk](https://github.com/gh0stzk) for the color scheme.

This is a static homepage to start the browser with. It is a simple HTML page with:

* a search bar,
* a clock,
* a list of bookmarks.

## Preview

### Dark

[![Dark](../img/dark.png)](../img/dark.png)

### Light

[![Light](../img/light.png)](../img/light.png)

### Responsive

[![Responsive](../img/responsive.png)](../img/responsive.png)

### Responsive settings

[![Responsive-settings](../img/responsive-settings.png)](../img/responsive-settings.png)

### (new) RSS feed

[![RSS](../img/rss.png)](../img/rss.png)

## Why?

I use Firefox as my main browser. I like to have a clean start page, but I also like to have a list of bookmarks that don't change over time.

I have a server running at home so I first used the work of [benphelps](https://github.com/benphelps/homepage) to get it. Though when you have a laptop you ought to move it around and then the page crashes because it can't reach the server.

So I decided to make a static version of the homepage. I heavily modified the original look and feel to my liking so the homepage merges perfectly with my [config](https://github.com/gh0stzk/dotfiles/tree/master/misc/firefox).

## Installation

Install the Firefox extension from [addons.mozilla.org](https://addons.mozilla.org/fr/firefox/addon/gh0stzk-s-homepage/). The extension is prefered because it allows to use the `newtab` page as the homepage and will be updated automatically.

### OR

1. Clone this repository (somewhere it won't bother you. I use `~/mozilla/homepage/`)
2. Open `index.html` in your browser
3. Copy the URL of the page
4. Set the URL as your homepage in your browser.

## Bookmarks

Here is the format:

```json
[
  {
    "category": "The category name - e.g. 'Development'",
    "fullWidth": true, // Optional, default: false
    "links": [
      {
        "name": "The name of the link",
        "url": "The URL of the link",
        "description": "A description of the link",
         "icon": "The URL of the icon (URL or data URI or local path to file)"
      },
      {
        "name": "GitHub",
        "url": "https://www.github.com/",
        "description": "Hosting service for version control using Git.",
        "icon": "https://github.githubassets.com/favicons/favicon.svg"
      }
    ]
  },
]
```

### Icons

Here is the list of icons included in the extension:

| Icon | Name |
| ---- | ---- |
| <img src="./public/img/website/1337X.svg" width="50"/> | `1337X.svg` |
| <img src="./public/img/website/amazon-prime-video.svg" width="50"/> | `amazon-prime-video.svg` |
| <img src="./public/img/website/archlinux.svg" width="50"/> | `archlinux.svg` |
| <img src="./public/img/website/binance.svg" width="50"/> | `binance.svg` |
| <img src="./public/img/website/canal-plus.svg" width="50"/> | `canal-plus.svg` |
| <img src="./public/img/website/canal-plus-white.svg" width="50"/> | `canal-plus-white.svg` |
| <img src="./public/img/website/debian.svg" width="50"/> | `debian.svg` |
| <img src="./public/img/website/disney-plus.svg" width="50"/> | `disney-plus.svg` |
| <img src="./public/img/website/emby.svg" width="50"/> | `emby.svg` |
| <img src="./public/img/website/facebook.svg" width="50"/> | `facebook.svg` |
| <img src="./public/img/website/font-awesome.svg" width="50"/> | `font-awesome.svg` |
| <img src="./public/img/website/gitea.svg" width="50"/> | `gitea.svg` |
| <img src="./public/img/website/github.svg" width="50"/> | `github.svg` |
| <img src="./public/img/website/gitlab.svg" width="50"/> | `gitlab.svg` |
| <img src="./public/img/website/gmail.svg" width="50"/> | `gmail.svg` |
| <img src="./public/img/website/google-drive.svg" width="50"/> | `google-drive.svg` |
| <img src="./public/img/website/ibm.svg" width="50"/> | `ibm.svg` |
| <img src="./public/img/website/jdownloader.svg" width="50"/> | `jdownloader.svg` |
| <img src="./public/img/website/js-discord.svg" width="50"/> | `js-discord.svg` |
| <img src="./public/img/website/linguee.svg" width="50"/> | `linguee.svg` |
| <img src="./public/img/website/linkedin.svg" width="50"/> | `linkedin.svg` |
| <img src="./public/img/website/lutris.svg" width="50"/> | `lutris.svg` |
| <img src="./public/img/website/markdown.svg" width="50"/> | `markdown.svg` |
| <img src="./public/img/website/markdown-white.svg" width="50"/> | `markdown-white.svg` |
| <img src="./public/img/website/materialize.svg" width="50"/> | `materialize.svg` |
| <img src="./public/img/website/mdn.png" width="50"/> | `mdn.png` |
| <img src="./public/img/website/microsoft.svg" width="50"/> | `microsoft.svg` |
| <img src="./public/img/website/microsoft-azure.svg" width="50"/> | `microsoft-azure.svg` |
| <img src="./public/img/website/microsoft-teams.svg" width="50"/> | `microsoft-teams.svg` |
| <img src="./public/img/website/microsoft-teams-white.svg" width="50"/> | `microsoft-teams-white.svg` |
| <img src="./public/img/website/microsoft-word.svg" width="50"/> | `microsoft-word.svg` |
| <img src="./public/img/website/microsoft-word-white.svg" width="50"/> | `microsoft-word-white.svg` |
| <img src="./public/img/website/moodle.svg" width="50"/> | `moodle.svg` |
| <img src="./public/img/website/netflix.svg" width="50"/> | `netflix.svg` |
| <img src="./public/img/website/openai.svg" width="50"/> | `openai.svg` |
| <img src="./public/img/website/openai-white.svg" width="50"/> | `openai-white.svg` |
| <img src="./public/img/website/overleaf.svg" width="50"/> | `overleaf.svg` |
| <img src="./public/img/website/pixabay.svg" width="50"/> | `pixabay.svg` |
| <img src="./public/img/website/pixabay-white.svg" width="50"/> | `pixabay-white.svg` |
| <img src="./public/img/website/protondb.svg" width="50"/> | `protondb.svg` |
| <img src="./public/img/website/protonmail.svg" width="50"/> | `protonmail.svg` |
| <img src="./public/img/website/redhat.svg" width="50"/> | `redhat.svg` |
| <img src="./public/img/website/slack.svg" width="50"/> | `slack.svg` |
| <img src="./public/img/website/twitch.svg" width="50"/> | `twitch.svg` |
| <img src="./public/img/website/vercel.svg" width="50"/> | `vercel.svg` |
| <img src="./public/img/website/vercel-white.svg" width="50"/> | `vercel-white.svg` |
| <img src="./public/img/website/whatsapp.svg" width="50"/> | `whatsapp.svg` |
| <img src="./public/img/website/w3schools.svg" width="50"/> | `w3schools.svg` |
| <img src="./public/img/website/wikipedia.svg" width="50"/> | `wikipedia.svg` |
| <img src="./public/img/website/wikipedia-white.svg" width="50"/> | `wikipedia-white.svg` |
| <img src="./public/img/website/wolframAlpha.svg" width="50"/> | `wolframAlpha.svg` |
| <img src="./public/img/website/wolframAlpha-2.svg" width="50"/> | `wolframAlpha-2.svg` |
| <img src="./public/img/website/yandex.svg" width="50"/> | `yandex.svg` |
| <img src="./public/img/website/youtube.svg" width="50"/> | `youtube.svg` |

## More

If you want to keep the color sheme over other pages, you can find the settings for the **Dark-Reader** extension in `./shared/Dark-Reader-Settings.json`:

* Install the [Dark-Reader](https://addons.mozilla.org/en-US/firefox/addon/darkreader/) extension if not already installed.
* Open the extension settings.
* Click on the **Manage settings** button.
* Click on the **Import** button.
* Select the `Dark-Reader-Settings.json` file.
