let tickets = 100;

const ticketDisplay = document.getElementById("tickets");
const bookBtn = document.getElementById("bookBtn");
const message = document.getElementById("message");

bookBtn.addEventListener("click", function () {

    if (tickets > 0) {
        tickets--;
        ticketDisplay.textContent = tickets;

        message.textContent =
            "🎉 Ticket booked successfully!";
    } else {
        message.textContent =
            "❌ Sorry, tickets are sold out.";
        message.style.color = "red";
    }
});