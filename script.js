function volume_sphere() {
  
    const radius = parseFloat(document.getElementById("Radius").value);
    


    if (!isNaN(radius) && radius >= 0) {
       
        const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

       
        document.getElementById("Volume").value = volumn.toFixed(4);

    } else {
     
      document.getElementById("volumn").value = "NaN";
    }
	e.preventDefault();
}

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;


