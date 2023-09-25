function volume_sphere() {
    // Get the value of the Radius field
    const radiusInput = document.getElementById("Radius");
    const radius = parseFloat(radiusInput.value);

    // Check if the input is a valid number
    if (!isNaN(radius) && radius >= 0) {
        // Calculate the volume of the sphere (assuming PI is 3.14159265359)
        const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

        // Update the Volume field with the calculated volume
        const volumeField = document.getElementById("Volume");
        volumeField.value = volume.toFixed(2); // Display the volume with 2 decimal places
    } else {
        // If the input is not a valid positive number, display an error message
        alert("Please enter a valid positive number for the radius.");
    }
}


window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
