(function () {
    var body = document.body;

    function shouldHandle(link) {
        if (!link || !link.href) return false;
        if (link.target && link.target !== "_self") return false;
        if (link.hasAttribute("download")) return false;
        var url = new URL(link.href, window.location.href);
        if (url.origin !== window.location.origin) return false;
        if (url.pathname === window.location.pathname && url.hash) return false;
        return true;
    }

    document.addEventListener("click", function (event) {
        var link = event.target.closest("a");
        if (!shouldHandle(link)) return;
        event.preventDefault();
        body.classList.add("page-fade-out");
        window.setTimeout(function () {
            window.location.href = link.href;
        }, 220);
    });
})();
