document.getElementById("notifyForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const datetime = document.getElementById("datetime").value;

    // Basic validation
    if (!name || !datetime) {
        alert("Please fill in all fields.");
        return;
    }

    // Send data to server
    fetch("/notify", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ name, datetime })
    })
    .then(response => {
        if (response.ok) {
            alert("Notification sent!");
        } else {
            alert("Failed to send notification.");
        }
    })
    .catch(error => {
        console.error("Error:", error);
        alert("An error occurred. Please try again later.");
    });