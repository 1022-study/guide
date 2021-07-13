var path = document.getElementById("path"),
    select = document.getElementById("select");

function init() {
    var b1 = document.createElement("button"),
        a1 = document.createElement("a");

    b1.innerHTML = "Primer periodo";
    select.appendChild(b1);

    b1.addEventListener("click", () => {
        title.setAttribute("style", "font-size: 43px;");
        title.innerHTML = "Primer periodo";
        document.title = "Guías Primer periodo";
        a1.innerHTML = "/Guías 1/";
        a1.href = "#";
        path.appendChild(a1);
    });

    // seekend

    a1.addEventListener("click", function () {
        title.innerHTML = "Guías 1 - Primer periodo";
        document.title = "Guías 1 Primer periodo";
       appDiv("guias1");
    });

}

init();