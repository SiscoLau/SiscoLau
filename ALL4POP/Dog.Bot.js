if (window.location.href !== "https://popdog.click/play") alert("click play or goto https://popdog.click/play");
setInterval(() => {
    fetch("/clicked/v2", {
        method: "POST",
        headers: {
            "Content-Type": "application/json;charset=utf-8"
        },
        body: JSON.stringify({
            clicks: 2000,
            uuid: window.localStorage.uuid,
            username: "SaVe_HK"
        })
    })
}, 5000)
