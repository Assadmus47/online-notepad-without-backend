var dictionary = {};
var notes = []

document.getElementById("save").onclick = ()=> {
    // Récupérer la valeur de l'élément textarea
    var usertitle = document.getElementById("floatingTextareatitle").value;
    var usertext = document.getElementById("floatingTextarea").value;

    dictionary["title"] = usertitle;
    dictionary["text"] = usertext;
    notes.push(dictionary)
    // Afficher la valeur dans la console
    console.log(dictionary["title"]);
    console.log(dictionary["text"]);

};
document.getElementById("close").onclick = function () {
    var displayDiv = document.getElementById("textplace");

    var card = document.createElement("div");
    card.className = "card";

    var cardbody = document.createElement("div");
    cardbody.className = "card-body";

    var h5 = document.createElement("h5");
    h5.className = "card-title";
    h5.textContent = dictionary["title"];

    /*var button = document.createElement("button");
    button.className = "btn btn2 btn-primary";
    button.textContent = "Go somewhere";*/

    var button = document.createElement("button");
    button.setAttribute("type", "button");
    button.classList.add("btn", "btn-secondary");
    button.setAttribute("data-bs-toggle", "modal");
    button.setAttribute("data-bs-target", "#exampleModal2"); // Modifie le data-bs-target pour pointer vers le nouvel ID du modal
    button.textContent = "Open Note";

    //  modal
    var modalDiv2 = document.createElement("div");
    modalDiv2.classList.add("modal", "fade");
    modalDiv2.setAttribute("id", "exampleModal2"); // Modifie l'ID de la modal pour qu'il soit unique
    modalDiv2.setAttribute("tabindex", "-1");
    modalDiv2.setAttribute("aria-labelledby", "exampleModalLabel");
    modalDiv2.setAttribute("aria-hidden", "true");

    //  modal
    var modalDialog2 = document.createElement("div");
    modalDialog2.classList.add("modal-dialog");
    var modalContent2 = document.createElement("div");
    modalContent2.classList.add("modal-content");
    var modalHeader2 = document.createElement("div");
    modalHeader2.classList.add("modal-header");
    var modalTitle2 = document.createElement("h1");
    modalTitle2.classList.add("modal-title", "fs-5");
    modalTitle2.setAttribute("id", "exampleModalLabel");
    modalTitle2.textContent = dictionary["title"]; // titre 
    var closeButton2 = document.createElement("button");
    closeButton2.setAttribute("type", "button");
    closeButton2.classList.add("btn-close");
    closeButton2.setAttribute("data-bs-dismiss", "modal");
    closeButton2.setAttribute("aria-label", "Close");
    modalHeader2.appendChild(modalTitle2);
    modalHeader2.appendChild(closeButton2);

    var modalBody2 = document.createElement("div");
    modalBody2.classList.add("modal-body");
    modalBody2.textContent = dictionary["text"]; //  contenu 

    var modalFooter2 = document.createElement("div");
    modalFooter2.classList.add("modal-footer");
    var closeButtonModal2 = document.createElement("button");
    closeButtonModal2.setAttribute("type", "button");
    closeButtonModal2.classList.add("btn", "btn-secondary");
    closeButtonModal2.setAttribute("data-bs-dismiss", "modal");
    closeButtonModal2.textContent = "Close";
    modalFooter2.appendChild(closeButtonModal2);
    

    modalContent2.appendChild(modalHeader2);
    modalContent2.appendChild(modalBody2);
    modalContent2.appendChild(modalFooter2);
    modalDialog2.appendChild(modalContent2);
    modalDiv2.appendChild(modalDialog2);
    







    cardbody.appendChild(h5);
    cardbody.appendChild(button);
    cardbody.appendChild(modalDiv2);
    card.appendChild(cardbody);
    displayDiv.appendChild(card);

}
