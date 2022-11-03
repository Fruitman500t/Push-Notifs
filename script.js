const button = document.querySelector("button")

button.addEventListener("click", () => {
    Notification.requestPermission().then(perm => {
        if (perm === "granted") {
            const notification = new Notification("example notification", {
                body: "this is more text",
                data: { hello: "world" },
                tag: "Welcome Message",
            })

            notification.addEventListener("error", e => {
                alert("error")
            })
        }
    })
})
