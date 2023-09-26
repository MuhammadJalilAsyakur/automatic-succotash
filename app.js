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
        let category = '';

        if (!isNaN(roundedBMI)) {
            if (roundedBMI < 18.5) {
                category = "Underweight"
            } else if (roundedBMI <= 24.9) {
                category = "Normal"
            } else if (roundedBMI <= 25) {
                category = "Overweight"
            } else if (roundedBMI <= 30) {
                category = "HARUS OLAHRAGA TOLOL"
            } else if (roundedBMI > 30) {
                category = "OBESITAS BANGSAT"
            }
            resultDiv.innerText = `BMI Anda adalah: ${roundedBMI} berarti anda  ${category}`;
        } else {
            resultDiv.innerText = "Mohon masukkan berat badan dan tinggi badan yang valid.";
        }
    });
});


