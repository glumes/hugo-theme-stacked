
const TOGGLE_CLOSE_ID = "toggle-sidebar-close";
const TOGGLE_OPEN_ID = "toggle-sidebar-open";

function closeRightSidebar() {
    const sidebar = document.querySelector(".right-sidebar");
    const toc = document.getElementById("TableOfContents");
    const toc_section = toc.parentElement.parentElement;

    toc.style.display = "none";
    toc_section.style.opacity = "50%";

    sidebar.classList.remove("right-sidebar");
    sidebar.classList.add("right-sidebar--compact");
}

function openRightSidebar() {
    const sidebar = document.querySelector(".right-sidebar--compact");
    const toc = document.getElementById("TableOfContents");
    const toc_section = toc.parentElement.parentElement;

    toc.style.removeProperty("display");
    toc_section.style.removeProperty("opacity");

    sidebar.classList.remove("right-sidebar--compact");
    sidebar.classList.add("right-sidebar");
}

function setupRightbarToggle() {
    document.getElementById(TOGGLE_CLOSE_ID).addEventListener("click", e => closeRightSidebar());
    document.getElementById(TOGGLE_OPEN_ID).addEventListener("click", e => openRightSidebar());
}

export { setupRightbarToggle };
