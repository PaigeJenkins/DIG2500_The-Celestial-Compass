function updateItinerary() {

    var list = document.getElementById("itineraryList");
    var pins = document.getElementsByTagName("input");

    list.innerHTML = "";

    for (var i = 0; i < pins.length; i++) {

        if (pins[i].checked) {

            var item = document.createElement("li");
            item.innerHTML = pins[i].value;
            list.appendChild(item);

        }

    }

}

function moveLeft() {

    var cards = document.getElementById("cardRow");

    cards.scrollBy({
        left: -480,
        behavior: "smooth"
    });

}

function moveRight() {

    var cards = document.getElementById("cardRow");

    cards.scrollBy({
        left: 480,
        behavior: "smooth"
    });

}

function closeAd() {

    document.getElementById("adPopup").style.display = "none";

}
