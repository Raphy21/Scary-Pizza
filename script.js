const boot = document.getElementById("boot");
const message = document.getElementById("message");
const typedText = document.getElementById("typed-text");
const continueBtn = document.getElementById("continueBtn");
const terminal = document.getElementById("terminal");

const bootLines = [
    "Conectando...",
    "Analizando visitante...",
    "Nivel de acceso: INVITADO",
    "Inicializando interfaz..."
];

const julietaMessage = `
Bienvenido.

Se ha detectado un nivel de acceso limitado.

Recopilando información pública...

Algunos registros no están disponibles para esta sesión.

No se requiere autenticación adicional.

Listo para continuar.

`;

async function sleep(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function startBoot(){

    for(const line of bootLines){

        boot.innerHTML += line + "<br>";
        await sleep(900);
    }

    await sleep(1000);

    boot.style.display = "none";

    message.classList.remove("hidden");

    typeMessage();
}

async function typeMessage(){

    let displayedText = "";

    for(let i = 0; i < julietaMessage.length; i++){

        displayedText += julietaMessage[i];

        typedText.innerHTML =
            displayedText +
            '<span class="cursor">█</span>';

        await sleep(35);
    }

    typedText.innerHTML = displayedText;

    continueBtn.classList.remove("hidden");

    typedText.innerHTML = displayedText;

    await sleep(1500);

    continueBtn.classList.add("show");
}

function triggerGlitch(){

    terminal.classList.add("glitch");

    setTimeout(() => {
        terminal.classList.remove("glitch");
    },120);

    const next =
        4000 + Math.random() * 12000;

    setTimeout(triggerGlitch,next);
}

triggerGlitch();

startBoot();

continueBtn.addEventListener("click", () => {

    message.classList.add("hidden");

    document
        .getElementById("mainMenu")
        .classList.remove("hidden");

});
function showSection(id){

    document
        .querySelectorAll(".section")
        .forEach(section => {

            section.classList.add("hidden");

        });

    document
        .getElementById(id)
        .classList.remove("hidden");
}

function openFile(file){

    const viewer =
        document.getElementById("staffViewer");

    switch(file){

                case "chef":

            staffViewer.innerHTML = `
<h3>Chef</h3>

<p>
Cargo:
Chef
</p>

<h2>Arte Conceptual</h2>

<a href="images/chef.png" target="_blank">

    <img
        src="images/chef.png"
        width="250">

</a>

<p>
Responsable de asistir
a nuevos empleados.
</p>
`;
        break;

        case "julieta":

            staffViewer.innerHTML = `
<h3>Julieta</h3>

<p>
Cargo:
Asesora de Capacitación
</p>

<h2>Arte Conceptual</h2>

<a href="images/julieta.png" target="_blank">

    <img
        src="images/julieta.png"
        width="250">

</a>

<p>
Responsable de asistir
a nuevos empleados.
</p>
`;
        break;

                case "jimmy":

            staffViewer.innerHTML = `
<h3>Jimmy</h3>

<p>
Cargo:
Asesora de Capacitación
</p>

<h2>Arte Conceptual</h2>

<a href="images/jimmy.png" target="_blank">
    <img
        src="images/jimmy.png"
        width="250">
</a>

<p>
Responsable de asistir
a nuevos empleados.
</p>
`;
        break;

                case "sayuri":

            staffViewer.innerHTML = `
<h3>Sayuri</h3>

<p>
Cargo:
Asesora de Capacitación
</p>

<h2>Arte Conceptual</h2>

<a href="images/sayuri.png" target="_blank">

    <img
        src="images/sayuri.png"
        width="250">

</a>

<p>
Responsable de asistir
a nuevos empleados.
</p>
`;
        break;

                case "antichef":

            staffViewer.innerHTML = `
<h3>Antichef</h3>

<p>
Cargo:
Asesora de Capacitación
</p>

<h2>Arte Conceptual</h2>

<a href="images/antichef.png" target="_blank">

    <img
        src="images/antichef.png"
        width="250">

</a>

<p>
Responsable de asistir
a nuevos empleados.
</p>
`;
        break;

                case "calabaza":

            staffViewer.innerHTML = `
<h3>Calabaza</h3>

<p>
Cargo:
Asesora de Capacitación
</p>

<h2>Arte Conceptual</h2>

<a href="images/pumpkin_man.png" target="_blank">

    <img
        src="images/pumpkin_man.png"
        width="250">

</a>

<p>
Responsable de asistir
a nuevos empleados.
</p>
`;
        break;

    }
}

function openRecoveredFile(file){

    const fileViewer =
        document.getElementById("fileViewer");

    switch(file){

        case "mobile":

    fileViewer.innerHTML = `
    <h3>Archivo: Interfaz_Movil.log</h3>

<p>
<strong>Estado:</strong> Recuperado<br>
<strong>Asunto:</strong> Companion Interface
</p>

<br>

<p>
INTERFAZ MÓVIL

Dispositivo detectado.

4 módulos disponibles.

Detalles de configuración restringidos.

Estado general: Estable.
</p>

<br>

<p>
ADVERTENCIA:

Se detectaron sectores ilegibles.

███████

Parte del contenido no pudo recuperarse.
</p>

    `;
break;

        case "incident":

    fileViewer.innerHTML = `
    <h3>Archivo: Incidente_001.log</h3>

<p>
<strong>Estado:</strong> Recuperado parcialmente<br>
<strong>Asunto:</strong> Registro de actividad inusual
</p>

<br>

<p>
Evento registrado.

Ubicación: █████████

Fecha: █████████

Se detectaron múltiples registros
durante el mismo periodo.

La información disponible es insuficiente
para determinar una causa.

Verificación incompleta.

Clasificación pendiente.

Se recomienda mantener el registro archivado.

</p>

<br>

<p>
ERROR:

Datos no disponibles.

</p>

    `;
break;

        case "projectlog":

    fileViewer.innerHTML = `
    <h3>Archivo: Proyecto.log</h3>

<p>
<strong>Estado:</strong> Clasificado<br>
<strong>Asunto:</strong> Resumen General
</p>

<br>

<p>
Proyecto identificado.

Estado actual: Activo

Archivos asociados: 27

Archivos disponibles: 1

Archivos restringidos: 26

Nivel de acceso insuficiente.
</p>

<br>

<p>
[ FIN DEL ARCHIVO ]
</p>
    `;
        break;
    }
}

function openFileOperative(file){

    const viewer =
        document.getElementById("operationsViewer");

    switch(file){

        case "exploracion":

            viewer.innerHTML = `
            <h3>PROCEDIMIENTO: EXPLORACIÓN</h3>

            <p>
            Los empleados autorizados podrán
            investigar localidades afectadas
            por anomalías.
            </p>

            <p>
            Objetivos:
            </p>

            <ul>
                <li>Buscar pistas</li>
                <li>Localizar personas</li>
                <li>Investigar eventos extraños</li>
            </ul>
            `;
        break;

        case "restaurante":

            viewer.innerHTML = `
            <h3>PROCEDIMIENTO: RESTAURANTE</h3>

            <p>
            El restaurante es el centro de
            operaciones principal.
            </p>

            <p>
            Responsabilidades:
            </p>

            <ul>
                <li>Gestionar inventario</li>
                <li>Preparar pizzas</li>
                <li>Alimentar personas</li>
            </ul>
            `;
        break;

        case "recursos":

            viewer.innerHTML = `
            <h3>PROCEDIMIENTO: RECURSOS</h3>

            <p>
            Los recursos obtenidos durante
            las investigaciones podrán ser
            utilizados para mejorar las
            operaciones.
            </p>
            `;
        break;

        case "equipamiento":

            viewer.innerHTML = `
            <h3>PROCEDIMIENTO: EQUIPAMIENTO</h3>

            <p>
            Todo empleado deberá mantener
            sus herramientas en condiciones
            óptimas.
            </p>

            <ul>
                <li>Mejorar herramientas</li>
                <li>Actualizar equipo</li>
                <li>Preparar suministros</li>
            </ul>
            `;
        break;

        case "investigacion":

            viewer.innerHTML = `
            <h3>INVESTIGACIÓN DE ANOMALÍAS</h3>

            <p>
            Actividad relacionada con
            fenómenos asociados a la dimensión W.
            </p>

            <p>
            Se recomienda documentar
            cualquier hallazgo.
            </p>
            `;
        break;

        case "supervivencia":

            viewer.innerHTML = `
            <h3>PROTOCOLOS DE SUPERVIVENCIA</h3>

            <p>
            Durante operaciones se recomienda:
            </p>

            <ul>
                <li>Mantener provisiones</li>
                <li>Evitar zonas inestables</li>
                <li>Seguir instrucciones</li>
            </ul>
            `;
        break;

        case "comunicaciones":

            viewer.innerHTML = `
            <h3>COMUNICACIONES</h3>

            <p>
            Todos los empleados recibirán
            acceso a sistemas de comunicación
            durante operaciones.
            </p>
            `;
        break;

        case "emergencia":

            viewer.innerHTML = `
            <h3>PROCEDIMIENTOS DE EMERGENCIA</h3>

            <p>
            En caso de actividad hostil,
            pérdida de contacto o anomalías
            dimensionales:
            </p>

            <ul>
                <li>Mantener la calma</li>
                <li>Atacar con todo</li>
                <li>Esperar instrucciones</li>
            </ul>
            `;
        break;
        case "combate":

            viewer.innerHTML = `
            <h3>PROCEDIMIENTO: COMBATE</h3>

            <p>
            En determinadas operaciones,
            algunos empleados podrían
            encontrarse con entidades
            hostiles.
            </p>

            <p>
            El uso de equipamiento defensivo
            y ofensivo está autorizado
            cuando la situación lo requiera.
            </p>

            <p>
            Recomendaciones:
            </p>

            <ul>
                <li>Mantener la calma</li>
                <li>Evaluar amenazas</li>
                <li>Utilizar herramientas disponibles</li>
                <li>Proteger a civiles</li>
            </ul>

            <p>
            Recuerde:
            la seguridad del personal es
            importante para la compañía.
            </p>
            `;
        break;
    }
}

const galleryImages = [

    {
        title: "Logo Concept Art",
        src: "images/logo.png"
    },

    {
        title: "Mapa Concept Art",
        src: "images/mapa.jpg"
    },


    {
        title: "Restaurante Concept Art 1",
        src: "images/Restaurante1.png"
    },

    {
        title: "Restaurante Concept Art 2",
        src: "images/Restaurante2.png"
    },

    {
        title: "Chef Concept Art",
        src: "images/chef.png"
    },

    {
        title: "Julieta Concept Art",
        src: "images/julieta.png"
    },

    {
        title: "Jimmy Concept Art",
        src: "images/jimmy.png"
    },

    {
        title: "Sayuri Concept Art",
        src: "images/sayuri.png"
    },

    {
        title: "AntiChef Concept Art",
        src: "images/antichef.png"
    },

    {
        title: "Pumpkin Man Concept Art",
        src: "images/pumpkin_man.png"
    },

    {
        title: "Body Concept Art",
        src: "images/body.png"
    },

    {
        title: "Staff Concept Art",
        src: "images/staff.png"
    }

];

let currentImage = 0;

function updateGallery(){

    document
        .getElementById("galleryImage")
        .src =
        galleryImages[currentImage].src;

    document
        .getElementById("galleryTitle")
        .textContent =
        galleryImages[currentImage].title;
}

function nextImage(){

    currentImage++;

    if(currentImage >= galleryImages.length){

        currentImage = 0;
    }

    updateGallery();
}

function previousImage(){

    currentImage--;

    if(currentImage < 0){

        currentImage =
            galleryImages.length - 1;
    }

    updateGallery();
}

function openCurrentImage(){

    window.open(
        galleryImages[currentImage].src,
        "_blank"
    );
}