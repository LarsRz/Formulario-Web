var aficiones = [];
function validar() {
    const retValidarNombre = validarNombre();
    const retValidarContrasena = validarContrasena();
    const retValidarAddress = validarAddress();
     const retValidarComuna = validarComuna();
    const retValidarTelefono = validarTelefono();
    const retValidarWeb = validarWeb();
    const retValidarAficiones = validarAficiones();
    

    return retValidarNombre && retValidarContrasena && retValidarAddress && retValidarComuna && retValidarTelefono && retValidarWeb && retValidarAficiones;
}

function validarNombre() {
    var inputNombre = document.getElementById("nombre");
    var divErroNombre = document.getElementById("err-nombre");
    var nombre = inputNombre.value;
    var primer_caracter = nombre.charAt(0);
    var caracteres_especiales = "!@#$%^&*()_+[]{}|;:,.<>?`~";
    var numero = false;

    for (var i = 0; i< nombre.length;i++) {
        if(caracteres_especiales.includes(nombre.charAt(i))) {
            divErroNombre.innerText = "El nombre no puede contener caracteres especiales";
            divErroNombre.className = "text-danger small";  
            return false;  
        }       
    }
    if (nombre == "") {
        divErroNombre.innerText = "El nombre de usuario es obligatorio";
        divErroNombre.className = "text-danger small"
        return false;
    } else if (nombre.length < 5 || nombre.length > 10 ) {
        divErroNombre.innerText = "El nombre debe tener 5 o 10 caracteres";
        divErroNombre.className = "text-danger small";
        return false;
    } else if (!((primer_caracter >= 'a' && primer_caracter <= 'z') || (primer_caracter >= 'A' && primer_caracter <= 'Z'))) {
        divErroNombre.innerText = "Nombre de usuario debe empezar con con una letra";
        divErroNombre.className = "text-danger small";
        return false;
    } 
    for (var i = 0; i < nombre.length; i++){
        if(!isNaN(parseInt(nombre[i]))){
            numero = true;
        } else {
            if (numero){
                divErroNombre.innerText = "Los digitos van al final";
                divErroNombre.className = "text-danger small";
                return false; 
            }
        }
    }
    divErroNombre.innerText = "";
    return true;
}

function validarContrasena() {
    const inputContrasena = document.getElementById("contrasena");
    const divErrContrasena = document.getElementById("err-contrasena");
    const inputConfContra = document.getElementById("conf_contra");
    const divErrConfContra = document.getElementById("err-confcontra");
    const inputNombre = document.getElementById("nombre");

    let nombre = inputNombre.value;
    let contrasena = inputContrasena.value;
    let confcontra = inputConfContra.value;

    var numero = false;
    var letra = false;

    for (var i = 0; i<contrasena.length+1; i++){
        if (!isNaN(parseInt(contrasena[i]))){
            var numero = true;
        }
    }

    for (var i = 0; i<contrasena.length+1; i++){
        const c = contrasena.charAt(i);
        if ((c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z')) {
            letra = true;
        }
    }

    if (contrasena == "") {
        divErrContrasena.innerText = "La contraseña es obligatoria";
        divErrContrasena.className = "text-danger small";
        return false;
    } else if (contrasena.length > 6 || contrasena.length < 3) {
        divErrContrasena.innerText = "La contraseña debe tener entre 3 y 6 carácteres";
        divErrContrasena.className = "text-danger small";
        return false;
    } else if (contrasena != confcontra) {
        divErrConfContra.innerText = "Contraseñas no coinciden";
        divErrConfContra.className = "text-danger small";
        return false;
    } else if (contrasena.includes(nombre)){
        divErrContrasena.innerText = "La contraseña no puede contener el nombre de usuario";
        divErrContrasena.className = "text-danger small";
        return false;
    } else if (!numero || !letra) {
        divErrContrasena.innerText = "La contraseña debe contener al menos una letra y un número";
        divErrContrasena.className = "text-danger small";
        return false;
    }
    else {
        divErrContrasena.innerText = "";
        divErrContrasena.className = "text-success small";
        return true;
    }
}

function validarAddress() {
    var inputAddress = document.getElementById("address");
    var divErrAddress = document.getElementById("err-address");
    var address = inputAddress.value;
    if (address == "") {
        divErrAddress.innerText = "La direccion es obligatoria.";
        divErrAddress.className = "text-danger small";
        return false;
    } else {
        divErrAddress.innerText = "";
        return true
    }
}

function validarComuna() {
    const comuna = document.getElementById("comuna");
    const divErrComuna = document.getElementById("err-comuna");

    if (!comuna.value || comuna.selectedIndex === 0) {
        divErrComuna.innerText = "Debe seleccionar una comuna.";
        divErrComuna.className = "text-danger small";
        return false;
    }
    return true;
}

function validarTelefono(){
    var inputTelefono = document.getElementById("telefono");
    var divErrTelefono = document.getElementById("err-telefono");
    var telefono = inputTelefono.value;

    if (telefono == "") {
        divErrTelefono.innerText = "El número telefónico es obligatorio";
        divErrTelefono.className = "text-danger small";
        return false;
    } else if (isNaN(telefono.slice(1))) {
        divErrTelefono.innerText = "Debe ingresar un número telefónico valido";
        divErrTelefono.className = "text-danger small";
        return false;
    } else if (!telefono.startsWith("+569")) {
        divErrTelefono.innerText = "El número debe empezar con +569";
        divErrTelefono.className = "text-danger small";
        return false;
    } else if (telefono.length > 16 || telefono.length < 12) { 
        divErrTelefono.innerText = "La cantidad de digitos no es valido";
        divErrTelefono.className = "text-danger small";
        return false;
    } else {
        divErrTelefono.textContent = "";
        return true;
    }
}
function validarWeb() {
    const InputWeb = document.getElementById("web");
    const divErrWeb = document.getElementById("err-web");
    const valor = InputWeb.value.trim();
    const regex = /^(https?:\/\/)?([\w\-]+\.)+[\w\-]{2,}(\/[\w\-._~:/?#[\]@!$&'()*+,;=]*)?$/;
    

    if (valor && !regex.test(valor)) {
        divErrWeb.innerText = "Debe ingresar una url que empiece en hhtps://";
        divErrWeb.className = "text-danger small";
        return false;
    }
    return true;
}

function agregarAficion() {
    var inputAficion = document.getElementById("aficion");
    var aficion = inputAficion.value;
    if (aficion != ""){
        aficiones.push(aficion);
        inputAficion.value = "";
        actualizar();
    } 
}

function actualizar() {
    var div_lista = document.getElementById("lista");
    div_lista.innerText = "";
    var ul = document.createElement("ul");
    ul.className = "list-group";
    for (var i in aficiones) {
        var li = document.createElement("li");
        li.innerText = aficiones[i];
        li.className = "list-group-item";
        ul.appendChild(li);
    }
    div_lista.appendChild(ul);
}

function validarAficiones() {
    var divErrAficion = document.getElementById("err-aficion");
    
    if (aficiones.length >= 2 ) {
        divErrAficion.innerText = "";
        return true;
    } else {
        divErrAficion.innerText = "Debe ingresar al menos 2 aficiones.";
        divErrAficion.className = "text-danger small mt-1";
        return false;
    }
}