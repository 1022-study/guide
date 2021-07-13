var c = 0;
var e;

function appDiv(x) {
    var appendDiv = document.getElementById("divs");

    if (x == "guias1") {
        e = links;
        e.forEach(function (a) {
            var div = document.createElement("div"),
                p = document.createElement("p");

            div.id = c;
            div.className = "divG";

            p.className = "pG";
            p.innerHTML = materias[c];


            div.appendChild(p);
            appendDiv.appendChild(div);
            c++;

            console.log("Se agregaron los divs");

            div.addEventListener("click", function () {
                seeIframe(div.id);
            });
        });
    }
}


function seeIframe (x) {
    divIframe = document.getElementById("iframe");

    var divControls = document.createElement("div");
    divControls.id = "divControls";

    var frame = document.createElement("iframe");
    frame.src = links[x];

    var buttonClose = document.createElement("button");
    buttonClose.innerHTML = "X";
    buttonClose.id = "closeF"

    divIframe.appendChild(frame);
    divControls.appendChild(buttonClose);
    divIframe.appendChild(divControls);

    buttonClose.addEventListener("click", function () {
        divIframe.removeChild(frame);
        divIframe.removeChild(divControls);
    });
}