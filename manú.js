const menus = {
    desayuno: {
        principal: [
            { nombre: "Tamal", precio: 5 },
            { nombre: "Huevos revueltos", precio: 4 },
            { nombre: "Calentado paisa", precio: 6 }
        ],
        acompañamientos: [
            { nombre: "Pandebono", precio: 1.80 },
            { nombre: "Arepa", precio: 2 },
            { nombre: "Queso campesino", precio: 2.5 }
        ]
    },
    almuerzo: {
        entrantes: [
            { nombre: "Sopa de verduras", precio: 3 },
            { nombre: "Ensalada mixta", precio: 2.5 }
        ],
        principal: [
            { nombre: "Bandeja paisa", precio: 11.50 },
            { nombre: "Ajiaco", precio: 8.90 },
            { nombre: "Lechona", precio: 8.60 }
        ],
        segundos: [
            { nombre: "Chuleta de cerdo", precio: 5 },
            { nombre: "Pechuga de pollo", precio: 4.5 },
            { nombre: "Pescado frito", precio: 6 }
        ],
        postres: [
            { nombre: "Flan", precio: 3 },
            { nombre: "Fruta", precio: 2 },
            { nombre: "Helado", precio: 2.5 }
        ]
    },
    cena: {
        entrantes: [
            { nombre: "Crema de champiñones", precio: 3.5 },
            { nombre: "Ensalada César", precio: 3 }
        ],
        principal: [
            { nombre: "Hamburguesa", precio: 12 },
            { nombre: "Salchipapa", precio: 9 },
            { nombre: "Ensalada César", precio: 9.50 }
        ],
        segundos: [
            { nombre: "Pizza", precio: 7 },
            { nombre: "Pasta", precio: 6.5 },
            { nombre: "Tacos", precio: 6 }
        ],
        postres: [
            { nombre: "Cheesecake", precio: 3.5 },
            { nombre: "Brownie", precio: 3 },
            { nombre: "Yogur con frutas", precio: 2.5 }
        ]
    }
};

const comentarios = [
    "¡Excelente elección!",
    "¡Ese es uno de mis favoritos!",
    "¡No te arrepentirás!",
    "¡Perfecto para el clima de hoy!",
    "¡Delicioso y saludable!"
];

function obtenerComentarioAleatorio() {
    const indice = Math.floor(Math.random() * comentarios.length);
    return comentarios[indice];
}

function mostrarMenu(menu, tipo) {
    let menuTexto = "Menú:\n";
    if (tipo === "desayuno") {
        menuTexto += "Platos principales:\n";
        menu.principal.forEach((item) => menuTexto += `${item.nombre} - $${item.precio}\n`);
        menuTexto += "\nAcompañamientos:\n";
        menu.acompañamientos.forEach((item) => menuTexto += `${item.nombre} - $${item.precio}\n`);
        menuTexto += "No agregar acompañamiento\n";
    } else {
        menuTexto += "Entrantes:\n";
        menu.entrantes.forEach((item) => menuTexto += `${item.nombre} - $${item.precio}\n`);
        menuTexto += "\nPlatos principales:\n";
        menu.principal.forEach((item) => menuTexto += `${item.nombre} - $${item.precio}\n`);
        menuTexto += "\nSegundos platos:\n";
        menu.segundos.forEach((item) => menuTexto += `${item.nombre} - $${item.precio}\n`);
        menuTexto += "No agregar segundo plato\n";
        menuTexto += "\nPostres:\n";
        menu.postres.forEach((item) => menuTexto += `${item.nombre} - $${item.precio}\n`);
        menuTexto += "No agregar postre\n";
    }
    alert(menuTexto);
}

function seleccionarOpcion(menu, tipo) {
    mostrarMenu(menu, tipo);

    let seleccionPrincipal;
    while (true) {
        let mensaje = "Seleccione un plato principal (escriba el nombre exactamente):\n";
        menu.principal.forEach((item) => mensaje += `${item.nombre} - $${item.precio}\n`);
        seleccionPrincipal = prompt(mensaje);
        seleccionPrincipal = menu.principal.find(item => item.nombre.toLowerCase() === seleccionPrincipal.toLowerCase());
        if (seleccionPrincipal) break;
        alert("Selección no válida. Por favor, seleccione una opción válida.");
    }
    alert(`${seleccionPrincipal.nombre} seleccionado. ${obtenerComentarioAleatorio()}`);

    if (tipo === 'desayuno') {
        let seleccionAcompañamiento;
        while (true) {
            let mensaje = "Seleccione un acompañamiento (escriba el nombre exactamente o 'No agregar acompañamiento'):\n";
            menu.acompañamientos.forEach((item) => mensaje += `${item.nombre} - $${item.precio}\n`);
            mensaje += "No agregar acompañamiento\n";
            seleccionAcompañamiento = prompt(mensaje);
            if (seleccionAcompañamiento.toLowerCase() === "no agregar acompañamiento") {
                seleccionAcompañamiento = null;
                break;
            }
            seleccionAcompañamiento = menu.acompañamientos.find(item => item.nombre.toLowerCase() === seleccionAcompañamiento.toLowerCase());
            if (seleccionAcompañamiento) break;
            alert("Selección no válida. Por favor, seleccione una opción válida.");
        }
        if (seleccionAcompañamiento) {
            alert(`${seleccionAcompañamiento.nombre} seleccionado. ${obtenerComentarioAleatorio()}`);
        }

        let bebida = prompt("Seleccione una bebida (café, té, zumo natural, bebida gaseosa o agua): ").toLowerCase();
        let factura = `Factura:\n- ${seleccionPrincipal.nombre}: $${seleccionPrincipal.precio}\n`;
        if (seleccionAcompañamiento) {
            factura += `- ${seleccionAcompañamiento.nombre}: $${seleccionAcompañamiento.precio}\n`;
        }
        factura += `- Bebida: ${bebida} (incluida)\n`;
        const costoTotal = seleccionPrincipal.precio + (seleccionAcompañamiento ? seleccionAcompañamiento.precio : 0);
        factura += `Costo total: $${costoTotal}`;
        alert(factura);
    } else {
        let seleccionEntrante;
        while (true) {
            let mensaje = "Seleccione un entrante (escriba el nombre exactamente o 'No agregar entrante'):\n";
            menu.entrantes.forEach((item) => mensaje += `${item.nombre} - $${item.precio}\n`);
            mensaje += "No agregar entrante\n";
            seleccionEntrante = prompt(mensaje);
            if (seleccionEntrante.toLowerCase() === "no agregar entrante") {
                seleccionEntrante = null;
                break;
            }
            seleccionEntrante = menu.entrantes.find(item => item.nombre.toLowerCase() === seleccionEntrante.toLowerCase());
            if (seleccionEntrante) break;
            alert("Selección no válida. Por favor, seleccione una opción válida.");
        }
        if (seleccionEntrante) {
            alert(`${seleccionEntrante.nombre} seleccionado. ${obtenerComentarioAleatorio()}`);
        }

        let seleccionSegundo = null;
        let deseaSegundo = prompt("¿Desea agregar un segundo plato? (sí/no): ").toLowerCase();
        if (deseaSegundo === 'sí' || deseaSegundo === 'si') {
            while (true) {
                let mensaje = "Seleccione un segundo plato (escriba el nombre exactamente o 'No agregar segundo plato'):\n";
                menu.segundos.forEach((item) => mensaje += `${item.nombre} - $${item.precio}\n`);
                mensaje += "No agregar segundo plato\n";
                seleccionSegundo = prompt(mensaje);
                if (seleccionSegundo.toLowerCase() === "no agregar segundo plato") {
                    seleccionSegundo = null;
                    break;
                }
                seleccionSegundo = menu.segundos.find(item => item.nombre.toLowerCase() === seleccionSegundo.toLowerCase());
                if (seleccionSegundo) break;
                alert("Selección no válida. Por favor, seleccione una opción válida.");
            }
            if (seleccionSegundo) {
                alert(`${seleccionSegundo.nombre} seleccionado. ${obtenerComentarioAleatorio()}`);
            }
        }

        let seleccionPostre;
        while (true) {
            let mensaje = "Seleccione un postre (escriba el nombre exactamente o 'No agregar postre'):\n";
            menu.postres.forEach((item) => mensaje += `${item.nombre} - $${item.precio}\n`);
            mensaje += "No agregar postre\n";
            seleccionPostre = prompt(mensaje);
            if (seleccionPostre.toLowerCase() === "no agregar postre") {
                seleccionPostre = null;
                break;
            }
            seleccionPostre = menu.postres.find(item => item.nombre.toLowerCase() === seleccionPostre.toLowerCase());
            if (seleccionPostre) break;
            alert("Selección no válida. Por favor, seleccione una opción válida.");
        }
        if (seleccionPostre) {
            alert(`${seleccionPostre.nombre} seleccionado. ${obtenerComentarioAleatorio()}`);
        }

        let bebida = prompt("Seleccione una bebida (café, té, zumo natural, bebida gaseosa o agua): ").toLowerCase();

        let factura = `Factura:\n`;
        if (seleccionEntrante) {
            factura += `- Entrante: ${seleccionEntrante.nombre} - $${seleccionEntrante.precio}\n`;
        }
        factura += `- Plato principal: ${seleccionPrincipal.nombre} - $${seleccionPrincipal.precio}\n`;
        let costoTotal = (seleccionEntrante ? seleccionEntrante.precio : 0) + seleccionPrincipal.precio;
        if (seleccionSegundo) {
            factura += `- Segundo plato: ${seleccionSegundo.nombre} - $${seleccionSegundo.precio}\n`;
            costoTotal += seleccionSegundo.precio;
        }
        if (seleccionPostre) {
            factura += `- Postre: ${seleccionPostre.nombre} - $${seleccionPostre.precio}\n`;
            costoTotal += seleccionPostre.precio;
        }
        factura += `- Bebida: ${bebida} (incluida)\n`;
        factura += `Costo total: $${costoTotal}`;
        alert(factura);
    }
}

function pedircomida() {
    const hora = prompt("Ingrese la hora del día (formato 24h, por ejemplo, 14:30 para las 2:30 PM): ");
    const horaValida = /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/.test(hora);
    if (!horaValida) {
        alert("Por favor, ingrese una hora válida en formato HH:mm (por ejemplo, 14:30 para las 2:30 PM).");
        return;
    }

    const horaInt = parseInt(hora.split(':')[0], 10);

    let tipoMenu;
    if (horaInt >= 7 && horaInt < 11) {
        tipoMenu = "desayuno";
    } else if (horaInt >= 12 && horaInt < 16) {
        tipoMenu = "almuerzo";
    } else if (horaInt >= 17 && horaInt <= 22.5) {
        tipoMenu = "cena";
    } else {
        alert("El restaurante está cerrado y no tiene servicio.");
        return;
    }
alert(`El menú disponible para esta hora es: ${tipoMenu.charAt(0).toUpperCase() + tipoMenu.slice(1)}`);
    const menu = menus[tipoMenu];
    seleccionarOpcion(menu, tipoMenu);
}

pedircomida();
