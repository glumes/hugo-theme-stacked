
function setupPanelToggles() {
    // register closing animation of inline toc
    const toc = document.getElementById("TableOfContents-inline");
    if (toc) {
        const toc_panel = toc.parentElement.parentElement;
        toc_panel.addEventListener("click", function(e) {
            if (toc_panel.hasAttribute("open")) {
                e.preventDefault();
                toc_panel.classList.add("closing");
                setTimeout(() => {
                    toc_panel.removeAttribute("open");
                    toc_panel.classList.remove("closing");
                }, 300); // animation in css is 400ms, set smaller to make sure closing before animation finished
            }
        });
    }

    // register closing animation of notice panels
    document.querySelectorAll("details.article-notice").forEach(notice => {
        notice.addEventListener("click", function(e) {
            if (notice.hasAttribute("open")) {
                e.preventDefault();
                notice.classList.add("closing");
                setTimeout(() => {
                    notice.removeAttribute("open");
                    notice.classList.remove("closing");
                }, 300);
            }
        });
    });
}

export { setupPanelToggles };