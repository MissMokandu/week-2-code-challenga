document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("guestForm");
  const input = document.getElementById("guestInput");
  const guestList = document.getElementById("guestList");
  const emptyMessage = document.getElementById("emptyMessage");

  const MAX_ITEMS = 10;

  function updateEmptyMessageVisibility() {
    if (guestList.children.length === 0) {
      emptyMessage.style.display = "block";
    } else {
      emptyMessage.style.display = "none";
    }
  }

  updateEmptyMessageVisibility();

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const guestName = input.value.trim();
    if (guestName === "") return;

    if (guestList.children.length >= MAX_ITEMS) {
      alert("Guest limit reached! Only 10 people can RSVP.");
      return;
    }

    addGuestToList(guestName);
    input.value = "";
  });

  function addGuestToList(name) {
    const li = document.createElement("li");
    li.textContent = name;

    const actionContainer = document.createElement("div");
    actionContainer.classList.add("guest-actions");

    const rsvpBtn = document.createElement("button");
    rsvpBtn.textContent = "RSVP";
    rsvpBtn.classList.add("rsvp-btn");
    rsvpBtn.addEventListener("click", () => {
      rsvpBtn.classList.toggle("attending");
      rsvpBtn.textContent = rsvpBtn.classList.contains("attending")
        ? "Attending"
        : "Not Attending";
    });

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.classList.add("remove-btn");
    removeBtn.addEventListener("click", () => {
      guestList.removeChild(li);
      updateEmptyMessageVisibility();
    });

    actionContainer.appendChild(rsvpBtn);
    actionContainer.appendChild(removeBtn);
    li.appendChild(actionContainer);

    // You can choose insertBefore if you want newest at top
    guestList.appendChild(li);

    updateEmptyMessageVisibility();
  }
});