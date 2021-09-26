function switchTab(id) {
    let btn = document.querySelector(
        `button.nav-link[data-activity-to="${id}"]`
    );
    if (btn === null) {
        switchTab(1);
        return;
    }

    btn.classList.add("active");
    document
        .querySelectorAll(`button.nav-link:not([data-activity-to="${id}"])`)
        .forEach((btn) => btn.classList.remove("active"));

    document
        .querySelector(`div[data-activity="${id}"]`)
        .classList.remove("d-none");
    document
        .querySelectorAll(`div[data-activity]:not([data-activity="${id}"])`)
        .forEach((div) => div.classList.add("d-none"));

    window.history.pushState({}, `Actividad ${id}`, `#act${id}`);
}

document
    .querySelectorAll("button.nav-link[data-activity-to]")
    .forEach((btn) =>
        btn.addEventListener("click", () =>
            switchTab(btn.getAttribute("data-activity-to"))
        )
    );

window.addEventListener("load", () => {
    let urlHash = window.location.hash.replace("#act", "");
    switchTab(urlHash === "" ? "1" : urlHash);
    hljs.highlightAll();
});
