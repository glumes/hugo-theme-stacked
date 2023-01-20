
function switchTab(btn: HTMLLIElement) {
    const tabGroup = btn.getAttribute("data-tab-group");
    const tabId = btn.getAttribute("data-tab-item");
    const allTabItems = document.querySelectorAll("[data-tab-group='"+tabGroup+"']");
    const targetTabItems = document.querySelectorAll("[data-tab-group='"+tabGroup+"'][data-tab-item='"+tabId+"']");

    // save button position relative to viewport
    var yposButton = btn.scrollTop;

    allTabItems.forEach(item => item.classList.remove("active-class"));
    targetTabItems.forEach(item => item.classList.add("active-class"));

    // reset screen to the same position relative to clicked button to prevent page jump
    var yposButtonDiff = btn.scrollTop - yposButton;
    window.scrollTo(window.scrollX, window.scrollY + yposButtonDiff);
}

const navButtonsQuery = "li.tab-nav-item";

function setupTabSwitchers() {
    document.querySelectorAll(navButtonsQuery).forEach(btn => {
        btn.addEventListener("click", e => switchTab(btn as HTMLLIElement));
    });
}

export { setupTabSwitchers };
