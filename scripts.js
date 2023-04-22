let job = []

   //cargar el campo otro
   let otro = document.getElementById("otro")
   cargo.addEventListener('change', function () {

    if (cargo.value === "otro") {
        otro.style.display = "block";
        cargo.style.display="none";
      } else {
        otro.style.display = "none";
        cargo.style.display="block";
      }
})



const botonEnviar = document.getElementById("btn");


botonEnviar.addEventListener("click", function () {
    //capturar variables desde el html
    let nombre = document.querySelector("#name").value;
    let apellido = document.querySelector("#apellido").value;
    let emails = document.querySelector("#correo").value;
    let genero = document.querySelector("#genero").value;
    let cargo = document.querySelector("#cargo").value;
    let otro = document.querySelector("#otro").value;


    //validación
    if (nombre.length == 0) {
        alert("los campos son obligatorios");
        return false;
      }
      if (apellido.length == 0) {
        alert("los campos son obligatorios");
        return false;
      }
      if (emails.length == 0) {
        alert("los campos son obligatorios");
        return false;
      }
      if (genero == null || genero == 0) {
        alert("los campos son obligatorios");
        return false;
      }
      if (cargo == null || cargo == 0) {
        alert("los campos son obligatorios");
        return false;
      }




    if (cargo == otro) {
         document.querySelector("#otro").value;
    }



    
    const registro = {
        nombre: nombre,
        apellido: apellido,
        emails: emails,
        genero: genero,
        cargo: cargo,
        otro:otro
    }
   

    job = [...job, registro]

    let json = JSON.stringify(job);

    

    console.log(json)

alert("usuario registrado")
 
})







 


genero.addEventListener("change", function () {
    if (genero.value === "hombre") {
        btn.style.backgroundColor = "blue";
      } else if (genero.value === "mujer") {
        btn.style.backgroundColor = "pink";
      } 
})


const botonR = document.getElementById("btn");

botonR.addEventListener("click", function (event) {
  event.preventDefault();
  formulario.reset();
});