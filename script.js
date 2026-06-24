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