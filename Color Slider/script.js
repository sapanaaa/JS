function updateColor() {
            let red = document.getElementById("red").value;
            let green = document.getElementById("green").value;
            let blue = document.getElementById("blue").value;

            let colorString = `rgb(${red}, ${green}, ${blue})`;
            document.getElementById("colorBox").style.backgroundColor = colorString;
            document.getElementById("colorBox").innerText = colorString;

            document.getElementById("redValue").innerText = red;
            document.getElementById("greenValue").innerText = green;
            document.getElementById("blueValue").innerText = blue;
        }

        document.getElementById("red").addEventListener("input", updateColor);
        document.getElementById("green").addEventListener("input", updateColor);
        document.getElementById("blue").addEventListener("input", updateColor);