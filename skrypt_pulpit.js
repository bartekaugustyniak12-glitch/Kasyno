    setInterval(() => {
        document.getElementById("zegarek").innerHTML =
            new Date().toLocaleString("pl-PL");
    }, 1000);
