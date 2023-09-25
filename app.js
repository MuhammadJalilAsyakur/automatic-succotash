document.addEventListener("DOMContentLoaded", function () {
    const calculateButton = document.getElementById("card-button");
    const weightInput = document.getElementById("weight");
    const heightInput = document.getElementById("height");
    const resultDiv = document.getElementById("results");

    calculateButton.addEventListener("click", function () {
        const weight = parseFloat(weightInput.value);
        const height = parseFloat(heightInput.value) / 100; // Konversi tinggi dari cm ke m
        const bmi = weight / (height * height);
        const roundedBMI = bmi.toFixed(2);
        let catergory = '';

        if (!isNaN(roundedBMI)) {
            if (roundedBMI < 18.5) {
                catergory = "Underweight"
            } else if (roundedBMI <= 24.9) {
                catergory = "Normal"
            } else if (roundedBMI <= 25) {
                catergory = "Overweight"
            } else if (roundedBMI <= 30) {
                catergory = "OLAHRAGA TOLOL"
            }

            resultDiv.innerText = `BMI Anda adalah: ${roundedBMI} berarti anda  ${catergory}`;
        } else {
            resultDiv.innerText = "Mohon masukkan berat badan dan tinggi badan yang valid.";
        }
    });
});


