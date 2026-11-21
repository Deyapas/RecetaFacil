const recetas = [
    {
        id: 1,
        nombre: "Hotcakes esponjosos",
        categoria: "Desayuno",
        tiempo: "20 minutos",
        imagen: "img/h1.jpg",
        ingredientes: ["1 taza de harina", "1 huevo", "1 taza de leche", "2 cucharadas de azúcar", "1 cucharadita de polvo para hornear"],
        pasos: ["Mezcla la harina, el azúcar y el polvo para hornear.", "Agrega el huevo y la leche.", "Bate hasta obtener una mezcla uniforme.", "Vierte porciones en un sartén caliente.", "Cocina por ambos lados y sirve."]
    },
    {
        id: 2,
        nombre: "Ensalada de pollo",
        categoria: "Comida",
        tiempo: "25 minutos",
        imagen: "img/ensalada.jpg",
        ingredientes: ["1 pechuga de pollo", "2 tazas de lechuga", "1 jitomate", "1 zanahoria", "1 limón"],
        pasos: ["Cuece el pollo y desmenúzalo.", "Lava y desinfecta las verduras.", "Corta el jitomate y la zanahoria.", "Mezcla todos los ingredientes.", "Agrega limón y sirve."]
    },
    {
        id: 3,
        nombre: "Quesadillas",
        categoria: "Cena",
        tiempo: "15 minutos",
        imagen: "img/q.jpg",
        ingredientes: ["4 tortillas", "200 gramos de queso", "1 cucharada de aceite", "Salsa al gusto"],
        pasos: ["Coloca queso sobre las tortillas.", "Dóblalas por la mitad.", "Calienta un sartén.", "Cocina por ambos lados.", "Sirve con salsa."]
    },
    {
        id: 4,
        nombre: "Gelatina de fresa",
        categoria: "Postre",
        tiempo: "4 horas",
        imagen: "img/f.jpg",
        ingredientes: ["1 sobre de gelatina de fresa", "1 litro de agua", "1 taza de fresas"],
        pasos: ["Calienta la mitad del agua.", "Disuelve la gelatina.", "Agrega el resto del agua.", "Vierte en un molde.", "Refrigera hasta que cuaje y decora."]
    },
    {
        id: 5,
        nombre: "Licuado de plátano",
        categoria: "Desayuno",
        tiempo: "5 minutos",
        imagen: "img/li.jpg",
        ingredientes: ["1 plátano", "1 vaso de leche", "2 cucharadas de avena", "Canela al gusto"],
        pasos: ["Pela y corta el plátano.", "Coloca todos los ingredientes en la licuadora.", "Licúa hasta integrar.", "Sirve frío."]
    },
    {
        id: 6,
        nombre: "Arroz con leche",
        categoria: "Postre",
        tiempo: "40 minutos",
        imagen: "img/arroz.jpg",
        ingredientes: ["1 taza de arroz", "4 tazas de leche", "1/2 taza de azúcar", "1 rama de canela"],
        pasos: ["Lava el arroz.", "Cuécelo con agua hasta que esté suave.", "Agrega leche, azúcar y canela.", "Cocina a fuego bajo mezclando.", "Deja enfriar y sirve."]
    },
    {
        id: 7,
        nombre: "Tacos de pollo",
        categoria: "Comida",
        tiempo: "25 minutos",
        imagen: "img/tp.jpg",
        ingredientes: ["300 gramos de pollo", "6 tortillas", "1/2 cebolla", "2 jitomates", "Cilantro al gusto"],
        pasos: ["Cuece el pollo y desmenúzalo.", "Pica la cebolla y el jitomate.", "Calienta las tortillas.", "Rellena con pollo.", "Agrega verduras y cilantro."]
    },
    {
        id: 8,
        nombre: "Sopa de verduras",
        categoria: "Comida",
        tiempo: "35 minutos",
        imagen: "img/sopa.jpg",
        ingredientes: ["2 zanahorias", "1 papa", "1 calabacita", "1 litro de caldo", "Sal al gusto"],
        pasos: ["Lava y corta las verduras.", "Calienta el caldo en una olla.", "Agrega las verduras.", "Cocina hasta que estén suaves.", "Sirve caliente."]
    },
    {
        id: 9,
        nombre: "Molletes",
        categoria: "Desayuno",
        tiempo: "15 minutos",
        imagen: "img/m.jpg",
        ingredientes: ["2 bolillos", "1 taza de frijoles refritos", "150 gramos de queso", "1 jitomate", "1/4 de cebolla"],
        pasos: ["Corta los bolillos por la mitad.", "Unta los frijoles.", "Agrega el queso.", "Hornea hasta que se derrita.", "Acompaña con pico de gallo."]
    },
    {
        id: 10,
        nombre: "Omelette de queso",
        categoria: "Desayuno",
        tiempo: "10 minutos",
        imagen: "img/o.jpg",
        ingredientes: ["2 huevos", "50 gramos de queso", "1 cucharada de leche", "Sal al gusto"],
        pasos: ["Bate los huevos con la leche.", "Calienta un sartén.", "Vierte la mezcla.", "Agrega el queso.", "Dobla y cocina hasta que esté listo."]
    },
    {
        id: 11,
        nombre: "Pasta cremosa",
        categoria: "Comida",
        tiempo: "30 minutos",
        imagen: "img/pasta.jpg",
        ingredientes: ["200 gramos de pasta", "1 taza de crema", "1/2 taza de queso", "1 cucharada de mantequilla", "Sal al gusto"],
        pasos: ["Cuece la pasta según el empaque.", "Derrite la mantequilla.", "Agrega la crema y el queso.", "Incorpora la pasta.", "Mezcla y sirve."]
    },
    {
        id: 12,
        nombre: "Tostadas de atún",
        categoria: "Cena",
        tiempo: "15 minutos",
        imagen: "img/tatun.jpg",
        ingredientes: ["1 lata de atún", "4 tostadas", "1 jitomate", "1/2 cebolla", "1 limón"],
        pasos: ["Escurre el atún.", "Pica el jitomate y la cebolla.", "Mezcla con el atún.", "Agrega limón.", "Sirve sobre las tostadas."]
    },
    {
        id: 13,
        nombre: "Pizza casera",
        categoria: "Cena",
        tiempo: "40 minutos",
        imagen: "img/pizza.jpg",
        ingredientes: ["1 base para pizza", "1/2 taza de salsa de tomate", "150 gramos de queso", "1 jitomate", "Orégano al gusto"],
        pasos: ["Coloca la base en una charola.", "Extiende la salsa.", "Agrega queso y jitomate.", "Espolvorea orégano.", "Hornea hasta que el queso se derrita."]
    },
    {
        id: 14,
        nombre: "Sándwich de jamón",
        categoria: "Cena",
        tiempo: "10 minutos",
        imagen: "img/s.jpg",
        ingredientes: ["2 rebanadas de pan", "2 rebanadas de jamón", "1 rebanada de queso", "2 hojas de lechuga", "Mayonesa al gusto"],
        pasos: ["Unta mayonesa en el pan.", "Agrega jamón y queso.", "Coloca la lechuga.", "Cierra el sándwich.", "Corta y sirve."]
    },
    {
        id: 15,
        nombre: "Fresas con crema",
        categoria: "Postre",
        tiempo: "10 minutos",
        imagen: "img/fresa.jpg",
        ingredientes: ["2 tazas de fresas", "1 taza de crema", "3 cucharadas de azúcar", "1 cucharadita de vainilla"],
        pasos: ["Lava y desinfecta las fresas.", "Córtalas en trozos.", "Mezcla la crema con azúcar y vainilla.", "Agrega las fresas.", "Refrigera antes de servir."]
    },
    {
        id: 16,
        nombre: "Flan casero",
        categoria: "Postre",
        tiempo: "1 hora",
        imagen: "img/flan.jpg",
        ingredientes: ["4 huevos", "1 lata de leche condensada", "1 taza de leche", "1 cucharadita de vainilla", "1/2 taza de azúcar"],
        pasos: ["Derrite el azúcar para preparar el caramelo.", "Licúa los huevos, las leches y la vainilla.", "Vierte sobre el caramelo.", "Cocina a baño María hasta cuajar.", "Deja enfriar antes de desmoldar."]
    },
    {
        id: 17,
        nombre: "Agua de jamaica",
        categoria: "Bebida",
        tiempo: "20 minutos",
        imagen: "img/ja.jpg",
        ingredientes: ["1 taza de flor de jamaica", "1 litro de agua", "Azúcar al gusto", "Hielo al gusto"],
        pasos: ["Hierve la jamaica en agua.", "Deja reposar unos minutos.", "Cuela la preparación.", "Agrega azúcar.", "Añade hielo y sirve."]
    },
    {
        id: 18,
        nombre: "Limonada natural",
        categoria: "Bebida",
        tiempo: "10 minutos",
        imagen: "img/limo.jpg",
        ingredientes: ["4 limones", "1 litro de agua", "Azúcar al gusto", "Hielo al gusto"],
        pasos: ["Exprime los limones.", "Mezcla el jugo con el agua.", "Agrega azúcar.", "Revuelve hasta disolver.", "Sirve con hielo."]
    },
    {
        id: 19,
        nombre: "Enfrijoladas",
        categoria: "Comida",
        tiempo: "25 minutos",
        imagen: "img/ensalada.jpg",
        ingredientes: ["6 tortillas", "2 tazas de frijoles cocidos", "100 gramos de queso", "1/4 de cebolla", "Crema al gusto"],
        pasos: ["Licúa los frijoles con un poco de caldo.", "Calienta la salsa.", "Pasa las tortillas por la salsa.", "Dóblalas y acomódalas en un plato.", "Agrega queso, cebolla y crema."]
    },
    {
        id: 20,
        nombre: "Hot dog casero",
        categoria: "Cena",
        tiempo: "15 minutos",
        imagen: "img/hot.jpg",
        ingredientes: ["2 panes para hot dog", "2 salchichas", "1 jitomate", "1/4 de cebolla", "Mostaza y cátsup al gusto"],
        pasos: ["Calienta las salchichas.", "Calienta ligeramente los panes.", "Coloca una salchicha en cada pan.", "Agrega jitomate y cebolla picados.", "Añade mostaza y cátsup."]
    }
];


/* CONSEJOS DE COCINA */

const consejos = [
    "Organiza todos tus ingredientes antes de comenzar.",
    "Lee la receta completa antes de cocinar.",
    "Lava tus manos antes de manipular alimentos.",
    "Utiliza utensilios limpios para cada preparación.",
    "Prueba la comida antes de agregar más sal.",
    "Mantén limpia y ordenada tu área de trabajo."
];


/* ELEMENTOS DE LA PÁGINA */

const listaRecetas = document.getElementById("listaRecetas");
const buscador = document.getElementById("buscador");
const botonesCategoria = document.querySelectorAll(".categoria");
const modal = document.getElementById("modalReceta");
const detalleReceta = document.getElementById("detalleReceta");
const cerrarModal = document.getElementById("cerrarModal");
const verFavoritas = document.getElementById("verFavoritas");
const recetaAleatoria = document.getElementById("recetaAleatoria");
const contadorRecetas = document.getElementById("contadorRecetas");
const nuevoConsejo = document.getElementById("nuevoConsejo");
const textoConsejo = document.getElementById("textoConsejo");


/* 4. VARIABLES Y ALMACENAMIENTO */

let categoriaSeleccionada = "Todas";
let mostrandoFavoritas = false;
let recetaAbierta = null;

let favoritas = JSON.parse(
    localStorage.getItem("recetasFavoritas") || "[]"
);


/* MOSTRAR RECETAS */

function mostrarRecetas() {
    const texto = buscador.value.toLowerCase().trim();

    const filtradas = recetas.filter(receta => {
        const coincideNombre =
            receta.nombre.toLowerCase().includes(texto);

        const coincideIngrediente =
            receta.ingredientes.some(ingrediente =>
                ingrediente.toLowerCase().includes(texto)
            );

        const coincideCategoria =
            categoriaSeleccionada === "Todas" ||
            receta.categoria === categoriaSeleccionada;

        const coincideFavorita =
            !mostrandoFavoritas ||
            favoritas.includes(receta.id);

        return (coincideNombre || coincideIngrediente) &&
            coincideCategoria &&
            coincideFavorita;
    });

    listaRecetas.innerHTML = "";

    contadorRecetas.textContent =
        `${filtradas.length} receta(s) encontrada(s)`;

    if (filtradas.length === 0) {
        listaRecetas.innerHTML = `
            <p class="sin-resultados">
                No encontramos recetas. Intenta con otro nombre o ingrediente.
            </p>
        `;
        return;
    }

    filtradas.forEach(receta => {
        const esFavorita = favoritas.includes(receta.id);

        const tarjeta = document.createElement("article");
        tarjeta.className = "tarjeta-receta";

        tarjeta.innerHTML = `
            <img
                class="imagen-receta"
                src="${receta.imagen}"
                alt="${receta.nombre}"
                loading="lazy"
            >

            <div class="contenido-tarjeta">
                <span class="etiqueta-receta">
                    ${receta.categoria}
                </span>

                <h3>${receta.nombre}</h3>

                <p>⏱️ ${receta.tiempo}</p>
                <p>🥘 ${receta.ingredientes.length} ingredientes</p>

                <button
                    class="boton-ver"
                    data-accion="ver"
                    data-id="${receta.id}"
                >
                    Ver y preparar
                </button>

                <button
                    class="boton-corazon"
                    data-accion="favorita"
                    data-id="${receta.id}"
                    aria-label="Cambiar favorito"
                >
                    ${esFavorita ? "❤️" : "🤍"}
                </button>
            </div>
        `;

        listaRecetas.appendChild(tarjeta);
    });
}


/* ABRIR DETALLES DE RECETA */

function abrirReceta(id) {
    const receta = recetas.find(item => item.id === id);

    if (!receta) return;

    recetaAbierta = id;

    detalleReceta.innerHTML = `
        <img
            class="detalle-imagen"
            src="${receta.imagen}"
            alt="${receta.nombre}"
        >

        <span class="etiqueta-receta">${receta.categoria}</span>

        <h2 id="tituloDetalle">${receta.nombre}</h2>

        <p>⏱️ Tiempo de preparación: ${receta.tiempo}</p>

        <div class="porciones">
            <label for="selectorPorciones">👥 Porciones:</label>

            <select id="selectorPorciones">
                <option value="1">1 persona</option>
                <option value="2" selected>2 personas</option>
                <option value="3">3 personas</option>
                <option value="4">4 personas</option>
                <option value="5">5 personas</option>
                <option value="6">6 personas</option>
            </select>
        </div>

        <h3>🛒 Ingredientes</h3>
        <p>Marca los ingredientes que ya tienes preparados.</p>

        <ul class="lista-interactiva" id="listaIngredientes">
            ${receta.ingredientes.map((ingrediente, index) => `
                <li>
                    <label>
                        <input
                            type="checkbox"
                            class="ingrediente-check"
                            data-index="${index}"
                        >
                        <span>${ingrediente}</span>
                    </label>
                </li>
            `).join("")}
        </ul>

        <h3>👩‍🍳 Preparación paso a paso</h3>
        <p>Marca cada paso cuando lo hayas terminado.</p>

        <ul class="lista-interactiva" id="listaPasos">
            ${receta.pasos.map((paso, index) => `
                <li>
                    <label>
                        <input
                            type="checkbox"
                            class="paso-check"
                            data-index="${index}"
                        >
                        <span>${index + 1}. ${paso}</span>
                    </label>
                </li>
            `).join("")}
        </ul>

        <h3>📊 Tu progreso</h3>

        <div class="progreso-contenedor">
            <div class="progreso-barra" id="progresoBarra"></div>
        </div>

        <p class="mensaje-progreso" id="mensajeProgreso">
            ¡Vamos a comenzar!
        </p>

        <button class="boton-cerrar-proceso" id="terminarReceta">
            🎉 ¡Terminé de preparar mi receta!
        </button>
    `;

    modal.classList.add("visible");
    modal.setAttribute("aria-hidden", "false");

    actualizarProgreso();
}


/* AJUSTAR PORCIONES */

function ajustarPorciones() {
    const receta = recetas.find(item => item.id === recetaAbierta);

    if (!receta) return;

    const selector = document.getElementById("selectorPorciones");
    const lista = document.getElementById("listaIngredientes");

    if (!selector || !lista) return;

    const porciones = Number(selector.value);

    receta.ingredientes.forEach((ingrediente, index) => {
        const texto = lista.querySelector(
            `input[data-index="${index}"] + span`
        );

        if (!texto) return;

        // Reconoce cantidades como 2, 1.5 y 1/2.
        const coincidencia = ingrediente.match(
            /^(\d+\/\d+|\d+(?:[.,]\d+)?)/
        );

        if (!coincidencia) {
            texto.textContent = ingrediente;
            return;
        }

        let cantidad = coincidencia[0];

        let numero = cantidad.includes("/")
            ? cantidad.split("/").reduce((a, b) => Number(a) / Number(b))
            : Number(cantidad.replace(",", "."));

        // La receta original está calculada para 2 personas.
        const resultado = numero * porciones / 2;

        const cantidadNueva = Number(resultado.toFixed(2))
            .toString()
            .replace(".", ",");

        texto.textContent =
            cantidadNueva + ingrediente.slice(cantidad.length);
    });
}



/* ACTUALIZAR PROGRESO */

function actualizarProgreso() {
    const ingredientes = document.querySelectorAll(".ingrediente-check");
    const pasos = document.querySelectorAll(".paso-check");

    const elementos = [...ingredientes, ...pasos];
    const total = elementos.length;

    const completados = elementos.filter(
        elemento => elemento.checked
    ).length;

    const porcentaje = total === 0
        ? 0
        : Math.round((completados / total) * 100);

    const barra = document.getElementById("progresoBarra");
    const mensaje = document.getElementById("mensajeProgreso");

    if (!barra || !mensaje) return;

    barra.style.width = porcentaje + "%";

    if (porcentaje === 100) {
        mensaje.textContent = "🎉 ¡Excelente! Has completado toda la receta.";
    } else if (porcentaje === 0) {
        mensaje.textContent = "¡Vamos a comenzar!";
    } else {
        mensaje.textContent = `Llevas un ${porcentaje}% de tu receta. ¡Sigue así!`;
    }
}


/*CERRAR VENTANA */

function cerrarVentana() {
    modal.classList.remove("visible");
    modal.setAttribute("aria-hidden", "true");
    recetaAbierta = null;
}

cerrarModal.addEventListener("click", cerrarVentana);

modal.addEventListener("click", evento => {
    if (evento.target === modal) {
        cerrarVentana();
    }
});

document.addEventListener("keydown", evento => {
    if (evento.key === "Escape" && modal.classList.contains("visible")) {
        cerrarVentana();
    }
});


/* FAVORITOS */

function cambiarFavorito(id) {
    if (favoritas.includes(id)) {
        favoritas = favoritas.filter(item => item !== id);
    } else {
        favoritas.push(id);
    }

    localStorage.setItem(
        "recetasFavoritas",
        JSON.stringify(favoritas)
    );

    mostrarRecetas();
}


/*  EVENTOS DE LAS TARJETAS */

listaRecetas.addEventListener("click", evento => {
    const boton = evento.target.closest("button");

    if (!boton) return;

    const id = Number(boton.dataset.id);
    const accion = boton.dataset.accion;

    if (accion === "ver") {
        abrirReceta(id);
    }

    if (accion === "favorita") {
        cambiarFavorito(id);
    }
});


/* BUSCADOR */

buscador.addEventListener("input", mostrarRecetas);


/* FILTROS DE CATEGORÍAS */

botonesCategoria.forEach(boton => {
    boton.addEventListener("click", () => {
        botonesCategoria.forEach(item => {
            item.classList.remove("activa");
        });

        boton.classList.add("activa");

        categoriaSeleccionada = boton.dataset.categoria;
        mostrandoFavoritas = false;

        verFavoritas.textContent = "❤️ Favoritas";

        mostrarRecetas();
    });
});


/*MOSTRAR FAVORITAS */

verFavoritas.addEventListener("click", () => {
    mostrandoFavoritas = !mostrandoFavoritas;

    verFavoritas.textContent = mostrandoFavoritas
        ? "📖 Ver todas"
        : "❤️ Favoritas";

    mostrarRecetas();
});


/* RECETA ALEATORIA */

recetaAleatoria.addEventListener("click", () => {
    const disponibles = recetas.filter(receta => {
        const coincideCategoria =
            categoriaSeleccionada === "Todas" ||
            receta.categoria === categoriaSeleccionada;

        return coincideCategoria;
    });

    if (disponibles.length === 0) return;

    const posicion = Math.floor(Math.random() * disponibles.length);

    abrirReceta(disponibles[posicion].id);
});


/* EVENTOS DENTRO DEL DETALLE */

detalleReceta.addEventListener("change", evento => {
    if (evento.target.id === "selectorPorciones") {
        ajustarPorciones();
    }

    if (
        evento.target.classList.contains("ingrediente-check") ||
        evento.target.classList.contains("paso-check")
    ) {
        actualizarProgreso();
    }
});


/* FINALIZAR PREPARACIÓN */

detalleReceta.addEventListener("click", evento => {
    if (evento.target.id === "terminarReceta") {
        const pasos = document.querySelectorAll(".paso-check");

        const todosTerminados = [...pasos].every(
            paso => paso.checked
        );

        if (!todosTerminados) {
            alert("Todavía tienes pasos pendientes. ¡Revisa tu preparación!");
            return;
        }

        alert("🎉 ¡Felicidades! Has terminado tu receta. ¡Buen provecho!");

        cerrarVentana();
    }
});


/* CONSEJOS ALEATORIOS */


nuevoConsejo.addEventListener("click", () => {
    const posicion = Math.floor(Math.random() * consejos.length);
    textoConsejo.textContent = consejos[posicion];
});


/* REGISTRAR SERVICE WORKER */

if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
        navigator.serviceWorker.register("./service-worker.js")
            .then(() => {
                console.log("RecetaFácil está lista para funcionar.");
            })
            .catch(error => {
                console.error("Error al registrar el Service Worker:", error);
            });
    });
}


/*INICIAR APLICACIÓN */

mostrarRecetas();

console.log(`RecetaFácil: ${recetas.length} recetas cargadas.`);
