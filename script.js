const url = document.querySelector("a").getAttribute("href");
            document.addEventListener("DOMContentLoaded", () => {
                window.location.href = (() => url)();
            });