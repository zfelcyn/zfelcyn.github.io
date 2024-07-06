// Get the modal and button elements
const modal = document.getElementById("terminal-modal");
const btn = document.getElementById("terminal-button");
const closeBtn = document.querySelector(".close");

// When the user clicks the button, open the modal
btn.onclick = function () {
    modal.style.display = "block";
};

// When the user clicks the close button, close the modal
closeBtn.onclick = function () {
    modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
};

// Handle terminal input
const terminalInput = document.getElementById("terminal-input");
const terminalOutput = document.getElementById("terminal-output");

terminalInput.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
        const command = terminalInput.value;
        const response = executeCommand(command);
        terminalInput.value = "";
        terminalOutput.innerHTML += `<div>${command}</div>`;
        terminalOutput.innerHTML += `<div>${response}</div>`;
    }
});

// Function to execute terminal commands
function executeCommand(command) {
    command = command.trim().toLowerCase(); // Convert command to lowercase and trim whitespace

    if (command === "help") {
        return "Fellow UNIX fan, how's your day going?";
    } else {
        // Handle other commands here, or return an error message for unknown commands
        return "Hello, this is my Portfolio Website";
    }
}
