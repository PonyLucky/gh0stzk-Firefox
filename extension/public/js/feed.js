async function feed() {
    // Don't fetch if disabled
    if (document.getElementById("feed").dataset.status === "false") return;
    // Fetch feeds
    const feeds = await Promise.all(FEEDS.map(url => fetch(url)));
    // Parse feeds as text
    const parsedFeeds = await Promise.all(feeds.map(feed => feed.text()));
    // Parse feeds as XML
    let parsedXML = await Promise.all(parsedFeeds.map(feed => parseXML(feed)));
    // Clear null values
    parsedXML = parsedXML.filter(xml => {
        if (xml !== null) return xml;
        else console.error("Invalid Feed - " + FEEDS[parsedXML.indexOf(xml)]);
    });
    // Get items from XML
    const items = parsedXML.map(xml => xml.querySelectorAll("item"));
    // Get items array
    const itemsArray = items.map(item => Array.from(item));
    // Flatten items
    const flattenedItems = itemsArray.reduce((acc, val) => acc.concat(val), []);
    // Sort items
    const sortedItems = flattenedItems.sort(
        (a, b) => new Date(
            b.querySelector("pubDate").textContent
        ) - new Date(a.querySelector("pubDate").textContent)
    );
    // Parse items to HTML
    const itemsHTML = sortedItems.map(item => parseRSS(item));
    // Remove duplicate items
    const uniqueItems = checkDuplicates(itemsHTML);

    // Get rule feed
    const ruleFeed = document.getElementById("rule-feed");
    // If no items
    if (uniqueItems.length === 0) {
        // Add hide class
        ruleFeed.classList.add("hide");
        // Clear feed
        document.getElementById("feed").innerHTML = "";
        return;
    }
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
    // Prevent unvalid XML
    if (xml.toLowerCase().startsWith("<!doctype html>")
        || xml.toLowerCase().startsWith("<html")) {
        return null;
    }
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
    // Get image
    let image = `<div
        class="feed-image"
        style="background-image: url('${searchImage(item)}');"
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

// Search image
function searchImage(item) {
    let image = null;

    // Try to get image from description
    image = parseHTML(item.querySelector("description").textContent)
        .querySelector("img");
    if (image) return image.src;

    // Try to get image from enclosure
    image = item.querySelector("enclosure");
    if (image) return image.getAttribute("url");

    // Try to get image from media:content
    image = item.querySelector("media\\:content");
    if (image) return image.getAttribute("url");

    // Try to get image from media:thumbnail
    image = item.querySelector("media\\:thumbnail");
    if (image) return image.getAttribute("url");

    // No image found, random image
    return "https://picsum.photos/100?random=" + Math.random();
}