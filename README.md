# Static-Homepage

Thanks to [benphelps](https://github.com/benphelps) for the original idea, thanks to [gh0stzk](https://github.com/gh0stzk) for the color scheme.

This is a static homepage to start the browser with. It is a simple HTML page with:

* a search bar,
* a clock / date,
* a list of bookmarks.

## Why?

I use Firefox as my main browser. I like to have a clean start page, but I also like to have a list of bookmarks that don't change over time.

I have a server running at home so I first used the work of [benphelps](https://github.com/benphelps/homepage) to get it. Though when you have a laptop you ought to move it around and then the page crashes because it can't reach the server.

So I decided to make a static version of the homepage. I heavily modified the original look and feel to my liking so the homepage merges perfectly with my [theme](https://github.com/gh0stzk/dotfiles/tree/master/misc/firefox).

## Installation

1. Clone this repository (somewhere it won't bother you. I use `~/mozilla/homepage/`)
2. Open `index.html` in your browser
3. Copy the URL of the page
4. Set the URL as your homepage in your browser.
5. (Optional) Set the URL as your new tab page in your browser.

## Configuration

The bookmarks are defined in `./shared/bookmarks.json`. You can add, remove or edit them.

Here is the format:

```json
{
    {
        "category": "The category name - e.g. 'Development'",
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
}
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
