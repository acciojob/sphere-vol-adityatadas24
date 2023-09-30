function volume_sphere() {
  
    const radiusInput = document.getElementById("radius");
    const radius = parseFloat(radiusInput.value);


    if (!isNaN(radius) && radius >= 0) {
       
        const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

       
        const volumeField = document.getElementById("volume");
        volumeField.value = volume.toFixed(2); 
    } else {
     
      document.getElementById("volumn").value = "NaN";
    }
	e.preventDefault
}


window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
