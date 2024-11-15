// Function for determining the name of the html page in which the script is being run
function getPageName() {
    const path = window.location.pathname;
    const page = path.split("/").pop();
    return page;
}
// Function for loading the navigation bar
function loadNavBar() {
    // Create the list items for the navigation bar
    const pages = ["index.html", "landing.html","second.html", "site-viewer.html", "test.html", "about.html"];
    // Create the unordered list and attach it to the navbar element
    const navBar = document.getElementById("navbar");
    const ul = document.createElement("ul");
    // Attach the items to the unordered list
    for (const page of pages) {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.href = page;
        if(getPageNamewithoutExtension(page) == "index"){
            a.textContent = "Home";
        }else {
            a.textContent = capitalizeFirstLetter(getPageNamewithoutExtension(page));
        }
        // If the page is the current page, set the class to active
        if (page == getPageName()) {
            a.classList.add("active");
        }
        li.appendChild(a);
        ul.appendChild(li);
    }
    navBar.appendChild(ul);
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// get page name without extension
function getPageNamewithoutExtension(page) {
    page = page.split(".")[0];
    return page;
}
// Load the navigation bar
loadNavBar();