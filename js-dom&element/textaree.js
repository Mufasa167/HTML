const textArea = document.getElementById("applicationText");
const submitButton = document.getElementById("submitButton");
const errorMessage=document.getElementById("errorMessage")

        textArea.addEventListener("input", function() {
            const textLength = textArea.value.length;

            if (textLength >= 100) {
                submitButton.removeAttribute("disabled");
            } else {
                submitButton.setAttribute("disabled", "true");
                errorMessage.textContent= "Please write at least a paragraph of 100 words you lazyass"
            }
        });