
function togglePanel(panel: HTMLDivElement, body_selector: string, offset) {
    const body = panel.querySelector(body_selector) as HTMLDivElement;
    if (panel.classList.contains("active-class")) {
        panel.classList.remove("active-class");
        body.style.height = "0";
    } else {
        panel.classList.add("active-class");

        const contents = body.querySelector("section");
        body.style.height = contents.clientHeight + offset + "px";
    }
}

function setupPanelToggles() {
    // register inline toc
    const toc = document.getElementById("TableOfContents-inline");
    if (toc) {
        const toc_panel = toc.parentElement.parentElement.parentElement;
        const toc_title = toc_panel.querySelector("div.article-toc-title");

        // set an initial value so that the animation works at the first time
        const toc_contents = toc_panel.querySelector("section");
        const height = toc_contents.clientHeight + 32 + "px";
        toc_contents.parentElement.style.height = height; 

        toc_title.addEventListener("click", e => togglePanel(
            toc_panel as HTMLDivElement, "div.article-toc-body", 32
        ));
    }

    // register notice panels
    document.querySelectorAll("div.article-notice-title").forEach(title => {        
        // set an initial value so that the animation works at the first time
        const panel = title.parentElement as HTMLDivElement;
        const contents = panel.querySelector("section");

        if (panel.classList.contains("active-class")) {
            const height = contents.clientHeight + "px";
            contents.parentElement.style.height = height;
        }

        title.addEventListener("click", e => togglePanel(panel, "div.article-notice-body", 0));
    })
}

export { setupPanelToggles };