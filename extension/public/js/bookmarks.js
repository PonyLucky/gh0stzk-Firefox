function bookmarks() {
    // Get bookmarks
    const bookmarks = document.getElementById("bookmarks");
    // Set base img dir
    const imgDir = "./public/img/website/";
    // Clear bookmarks
    bookmarks.innerHTML = "";
    // Loop through BOOKMARKS
    for (let i = 0; i < BOOKMARKS.length; i++) {
        let category = BOOKMARKS[i].category;
        let isFullWidth = BOOKMARKS[i].hasOwnProperty("fullWidth") ? BOOKMARKS[i].fullWidth : false;
        let links = BOOKMARKS[i].links;
        let cat = document.createElement("div");
        let h2 = document.createElement("h2");
        let ul = document.createElement("ul");
        cat.classList.add("category");
        if (isFullWidth) {
            cat.classList.add("full-width");
        }
        cat.appendChild(h2);
        cat.appendChild(ul);

        // Set category name
        h2.textContent = category;

        // Loop through links
        for (let j = 0; j < links.length; j++) {
            let link = links[j];
            let name = link.name;
            let url = link.url;
            let desc = link.description;
            let icon = link.icon;
            // Create link
            let lnk = document.createElement("li");
            let a = document.createElement("a");
            let divIcon = document.createElement("div");
            let img = document.createElement("img");
            let divContent = document.createElement("div");
            let title = document.createElement("p");
            let description = document.createElement("p");
            lnk.appendChild(a);
            a.appendChild(divIcon);
            divIcon.appendChild(img);
            a.appendChild(divContent);
            divContent.appendChild(title);
            divContent.appendChild(description);
            // Set link classes
            divIcon.className = "icon";
            divContent.className = "content";
            title.className = "title";
            description.className = "desc";

            // Detect if icon is an url or a file or datauri
            if (
                !icon.includes("http")
                && !icon.includes("data:image")
                && !icon.includes("data:application")
            ) {
                icon = imgDir + icon;
            }

            // Set link attributes
            a.href = url;
            img.src = icon;
            img.alt = name.split(" ").map((word) => word[0]).join("");
            title.textContent = name;
            description.textContent = desc;
            // Append link to category
            ul.appendChild(lnk);
        }
        // Append category to bookmarks
        bookmarks.appendChild(cat);
    }
}