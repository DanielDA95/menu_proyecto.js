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
        principal: [
            { nombre: "Bandeja paisa", precio: 11.50 },
            { nombre: "Ajiaco", precio: 8.90 },
            { nombre: "Lechona", precio: 8.60 }
        ],
        acompañamientos: [
            { nombre: "Papas fritas", precio: 3 },
            { nombre: "Arepa", precio: 2 },
            { nombre: "Mazamorra", precio: 3.5 }
        ]
    },
    cena: {
        principal: [
            { nombre: "Hamburguesa", precio: 12 },
            { nombre: "Salchipapa", precio: 9 },
            { nombre: "Ensalada César", precio: 9.50 }
        ],
        acompañamientos: [
            { nombre: "Papas fritas", precio: 4 },
            { nombre: "Ensalada", precio: 3.5 },
            { nombre: "Salsa de ébano", precio: 3.5 }
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

function mostrarMenu(menu) {
    let menuTexto = "Menú principal:\n";
    menu.principal.forEach((item, index) => menuTexto += `${index + 1}. ${item.nombre} - $${item.precio}\n`);
    menuTexto += "Acompañamientos:\n";
    menu.acompañamientos.forEach((item, index) => menuTexto += `${index + 1}. ${item.nombre} - $${item.precio}\n`);
    alert(menuTexto);
}

function seleccionarOpcion(menu, tipo) {
    mostrarMenu(menu);
    
    let seleccionPrincipal;
    while (true) {
        seleccionPrincipal = prompt("Seleccione un plato principal (1, 2, 3): ");
        if (seleccionPrincipal >= 1 && seleccionPrincipal <= 3) break;
        alert("Selección no válida. Por favor, seleccione una opción válida.");
    }
    const itemPrincipal = menu.principal[seleccionPrincipal - 1];
    alert(`${itemPrincipal.nombre} seleccionado. ${obtenerComentarioAleatorio()}`);
    
    let seleccionAcompañamiento1;
    while (true) {
        seleccionAcompañamiento1 = prompt("Seleccione el primer acompañamiento (1, 2, 3): ");
        if (seleccionAcompañamiento1 >= 1 && seleccionAcompañamiento1 <= 3) break;
        alert("Selección no válida. Por favor, seleccione una opción válida.");
    }
    const itemAcompañamiento1 = menu.acompañamientos[seleccionAcompañamiento1 - 1];
    alert(`${itemAcompañamiento1.nombre} seleccionado. ${obtenerComentarioAleatorio()}`);
    
    let seleccionAcompañamiento2;
    while (true) {
        seleccionAcompañamiento2 = prompt("Seleccione el segundo acompañamiento (1, 2, 3): ");
        if (seleccionAcompañamiento2 >= 1 && seleccionAcompañamiento2 <= 3) break;
        alert("Selección no válida. Por favor, seleccione una opción válida.");
    }
    const itemAcompañamiento2 = menu.acompañamientos[seleccionAcompañamiento2 - 1];
    alert(`${itemAcompañamiento2.nombre} seleccionado. ${obtenerComentarioAleatorio()}`);
    
    personalizarOpcion(itemPrincipal);
    personalizarOpcion(itemAcompañamiento1);
    personalizarOpcion(itemAcompañamiento2);

    const costoTotal = itemPrincipal.precio + itemAcompañamiento1.precio + itemAcompañamiento2.precio;
    alert(`El costo total es: $${costoTotal}`);
}

function personalizarOpcion(item) {
    const personalizaciones = [
        { nombre: "Jugo de maracuyá", costo: 1 },
        { nombre: "Sin gluten", costo: 1.50 },
        { nombre: "Salsa especial de la casa", costo: 1.75 }
    ];
    let personalizacionTexto = "Opciones de personalización:\n";
    personalizaciones.forEach((personalizacion, index) => personalizacionTexto += `${index + 1}. ${personalizacion.nombre} - $${personalizacion.costo}\n`);
    personalizacionTexto += "0. Ninguna";
    alert(personalizacionTexto);
    
    let seleccionPersonalizacion;
    while (true) {
        seleccionPersonalizacion = prompt("Seleccione una personalización (1, 2, 3) o 0 para ninguna: ");
        if (seleccionPersonalizacion >= 0 && seleccionPersonalizacion <= 3) break;
        alert("Selección no válida. Por favor, seleccione una opción válida.");
    }
    if (seleccionPersonalizacion > 0) {
        const itemPersonalizacion = personalizaciones[seleccionPersonalizacion - 1];
        item.precio += itemPersonalizacion.costo;
        alert(`Personalización ${itemPersonalizacion.nombre} agregada por $${itemPersonalizacion.costo}`);
    }
}

function pedircomida() {
    const tipoMenu = prompt("Seleccione el tipo de menú (desayuno, almuerzo, cena): ").toLowerCase();
    const menu = menus[tipoMenu];
    if (!menu) {
        alert("Tipo de menú no válido.");
        return;
    }
    seleccionarOpcion(menu, tipoMenu);
}

pedircomida();
