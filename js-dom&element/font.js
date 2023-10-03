let fontSize = 16; 
let textElement = document.getElementById("text");

        function increaseFontSize() {
            if (fontSize < 100) { 
                fontSize += 2;
                textElement.style.fontSize = fontSize + "px";
            }
        }

        function decreaseFontSize() {
            if (fontSize > 6) {
                fontSize -= 2; 
                textElement.style.fontSize = fontSize + "px";
            }
        }