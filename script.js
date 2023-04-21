const list = [];



function capturar() {




  let nombre = document.querySelector("#name").value;
  let apellido = document.querySelector("#apellido").value;
  let emails = document.querySelector("#correo").value;
  let genero = document.querySelector("#genero").value;
  let cargo = document.querySelector("#cargo").value;

    //validación
    if (nombre.length == 0) {
      alert("el campo no puede ir vacio");
      return false;
    }
    if (apellido.length == 0) {
      alert("el campo no puede ir vacio");
      return false;
    }
    if (emails.length == 0) {
      alert("el campo no puede ir vacio");
      return false;
    }
    if (genero == null || genero == 0) {
      alert("el campo no puede ir vacio");
      return false;
    }



//objeto json
  let guardar = {
    nombre: nombre,
    apellido: apellido,
    emails: emails,
    genero: genero,
    cargo: cargo,
  };

  list.push(guardar);

  let json = JSON.stringify(list);

  //cambio de color

  console.log(json);

  if (genero === "hombre") {
    let btn = document.getElementById("btn");
    btn.style.backgroundColor = "blue";
  } else {
    let btn = document.getElementById("btn");
    btn.style.backgroundColor = "pink";
  }
  console.log(list);
}












const botonEnviar = document.getElementById("btn");

botonEnviar.addEventListener("click", function (event) {
  event.preventDefault();
  formulario.reset();
});

//localStorage.setItem('registros' JSON.stringify(data))

//const root = document.querySelector("#root")
//localStorage.getItem( ('registros'))
//const lista= JSON.parse(localStorage.getItem('registros')))
//console.log(listaRegistros)

//for (const item of listaRegistros){
  //console.log(item)
  //root.innerHTML += "<p data-id="{$item.id}">${item.nombres}</p>"


  //al objeto le adiciono un id con fecha y hora en tiempo real
//}