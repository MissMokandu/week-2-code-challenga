let buttons = document.querySelectorAll("button");

function handleRSVP(event) {
    let row = event.target.parentElement.parentElement;

    let nameInput = row.querySelector("td:nth-child(1) input");
    let phoneInput = row.querySelector("td:nth-child(2) input");

    let name = nameInput.value.trim();
    let phone = phoneInput.value.trim();

    if (name === "" || phone === "") {
        alert("Please fill in both name and phone number.");
        return;
    }
    alert("RSVP received for " + name + " (" + phone + ")");

    nameInput.disabled = true;
    phoneInput.disabled = true;
    event.target.disabled = true;
    event.target.textContent = "Confirmed";
}

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", handleRSVP);
}
