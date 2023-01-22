
function togglePanel(panel: HTMLDivElement) {
    const body = panel.querySelector("div.article-toc-body") as HTMLDivElement;
    const contents = body.querySelector("section");
    if (panel.classList.contains("active-class")) {
        panel.classList.remove("active-class");
        body.style.height = "0";
    } else {
        panel.classList.add("active-class");
        body.style.height = contents.clientHeight + 32 + "px";
    }
}

function setupPanelToggles() {
    const toc = document.getElementById("TableOfContents-inline");
    if (toc) {
        const toc_panel = toc.parentElement.parentElement.parentElement;
        const toc_title = toc_panel.querySelector("div.article-toc-title");

        // set an initial value so that the animation works at the first time
        const toc_contents = toc_panel.querySelector("section");
        toc_contents.parentElement.style.height = toc_contents.clientHeight  + 32 + "px"; 

        toc_title.addEventListener("click", e => togglePanel(toc_panel as HTMLDivElement));
    }
}

export { setupPanelToggles };