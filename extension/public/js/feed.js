async function feed() {
    // Fetch feeds
    const feeds = await Promise.all(FEEDS.map(url => fetch(url)));
    // Parse feeds
    const parsedFeeds = await Promise.all(feeds.map(feed => feed.text()));
    // Parse feeds
    const parsedXML = await Promise.all(parsedFeeds.map(feed => parseXML(feed)));
    // Get items
    const items = parsedXML.map(xml => xml.querySelectorAll("item"));
    // Get items
    const itemsArray = items.map(item => Array.from(item));
    // Flatten items
    const flattenedItems = itemsArray.reduce((acc, val) => acc.concat(val), []);
    // Sort items
    const sortedItems = flattenedItems.sort(
        (a, b) => new Date(
            b.querySelector("pubDate").textContent
        ) - new Date(a.querySelector("pubDate").textContent)
    );
    // Get items
    const itemsHTML = sortedItems.map(item => parseRSS(item));
    // Remove duplicate items
    const uniqueItems = checkDuplicates(itemsHTML);
    // Get rule feed
    const ruleFeed = document.getElementById("rule-feed");
    // Remove hide class
    ruleFeed.classList.remove("hide");
    // Get feed element
    const feedElement = document.getElementById("feed");

    // Remove all children
    feedElement.innerHTML = "";

    // Create title
    const title = document.createElement("h2");
    title.textContent = "News";
    // Append title
    feedElement.appendChild(title);

    // Create items
    const itemsElement = document.createElement("div");
    itemsElement.id = "feed-items";
    itemsElement.innerHTML = uniqueItems.join("");
    // Append items
    feedElement.appendChild(itemsElement);
}

// Parse XML
function parseXML(xml) {
    // Create parser
    const parser = new DOMParser();
    // Parse XML
    const parsedXML = parser.parseFromString(xml, "text/xml");
    // Return parsed XML
    return parsedXML;
}

// Parse HTML
function parseHTML(html) {
    // Create parser
    const parser = new DOMParser();
    // Parse HTML
    const parsedHTML = parser.parseFromString(html, "text/html");
    // Return parsed HTML
    return parsedHTML;
}

// Parse RSS
function parseRSS(item) {
    // Get link
    const link = item.querySelector("link").textContent;
    // Get description
    const description = item.querySelector("description").textContent;
    // Parse description as HTML
    const parsedDescription = parseHTML(description);
    // Get image
    let image = parsedDescription.querySelector("img");
    image = `<div
        class="feed-image"
        style="background-image: ${
            image ? `url('${image.src}'),` : ""
        } url('./public/img/icons/wallpaper.svg')"
    ></div>`;
    // Get title
    let title = item.querySelector("title").textContent;
    // Format title
    // - If more than 80 characters, add ellipsis
    title = title.length > 80 ? `${title.slice(0, 80)}...` : title;
    // - If all caps, capitalize
    title = title === title.toUpperCase() ? title.toLowerCase() : title;
    // - First letter uppercase
    title = title.charAt(0).toUpperCase() + title.slice(1);
    // Get item
    const itemHTML = `
        <article>
            <a href="${link}" target="_blank" rel="noopener noreferrer">
                ${image}<h3>${title}</h3>
            </a>
        </article>
    `;
    // Return item
    return itemHTML;
}

// Check duplicates
function checkDuplicates(items) {
    let uniqueItems = [], titles = [];
    items.forEach(item => {
        // Get title
        const title = parseHTML(item).querySelector("h3").textContent;
        // If title is in not titles
        if (!titles.includes(title)) {
            titles.push(title);
            uniqueItems.push(item);
        }
    });
    // Return items
    return uniqueItems;
}