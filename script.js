function volume_sphere() {
  
    const radiusInput = document.getElementById("Radius");
    const radius = parseFloat(radiusInput.value);


    if (!isNaN(radius) && radius >= 0) {
       
        const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

       
        const volumeField = document.getElementById("Volume");
        volumeField.value = volume.toFixed(4); 
    } else {
     
      document.getElementById("volumn").value = "NaN";
    }
	e.preventDefault();
}

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;


