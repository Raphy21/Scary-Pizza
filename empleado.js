const boot = document.getElementById("boot");
const message = document.getElementById("message");
const typedText = document.getElementById("typed-text");
const continueBtn = document.getElementById("continueBtn");
const terminal = document.getElementById("terminal");

const bootLines = [
    "Conectando...",
    "Analizando visitante...",
    "Nivel de acceso: Empleado",
    "Inicializando interfaz..."
];

const julietaMessage = `
Bienvenido.

Credenciales verificadas.

Cargando documentación de capacitación...

Programa de capacitación cargado.

Módulos de entrenamiento disponibles.

Asesor asignado: Julieta.

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
Personaje principal
</p>

<h2>Arte Conceptual</h2>

<a href="images/chef.png" target="_blank">

    <img
        src="images/chef.png"
        width="250">

</a>

<p>
Chef es el protagonista de Scary Pizza.

Dirige un restaurante ambulante
mientras investiga fenómenos
extraños y ayuda a personas
afectadas por anomalías.

Durante la aventura podrá explorar,
combatir, administrar recursos
y mejorar su equipamiento.
</p>
`;
break;

        case "julieta":

            staffViewer.innerHTML = `
<h3>Julieta</h3>

<p>
Cargo:
Investigación y soporte operativo
</p>

<h2>Arte Conceptual</h2>

<a href="images/julieta.png" target="_blank">


<img
    src="images/julieta.png"
    width="250">


</a>

<p>
Especialista en investigación,
tecnología y análisis de anomalías.

Proporciona apoyo remoto al equipo,
coordina información de campo y
desarrolla herramientas para las
operaciones.

Su curiosidad suele llevarla a
experimentar con cosas que
probablemente no debería tocar.

</p>

`;
        break;

                case "jimmy":

            staffViewer.innerHTML = `
<h3>Jimmy</h3>

<p>
Cargo:
Explorador de campo
</p>

<h2>Arte Conceptual</h2>

<a href="images/jimmy.png" target="_blank">
    <img
        src="images/jimmy.png"
        width="250">
</a>

<p>
Curioso, enérgico y siempre dispuesto
a investigar algo nuevo, incluso cuando
no es la mejor idea.

Destaca por su iniciativa,
capacidad de adaptación y
disposición para asumir riesgos.

</p>

`;
        break;

                case "sayuri":

            staffViewer.innerHTML = `
<h3>Sayuri</h3>

<p>
Cargo:
Registro incompleto
</p>

<h2>Arte Conceptual</h2>

<a href="images/sayuri.png" target="_blank">

<img
    src="images/sayuri.png"
    width="250">

</a>

<p>
Se dispone de información limitada
sobre este personaje.

Los registros actuales permanecen
incompletos.

Documentación pendiente.

</p>

`;
        break;

                case "antichef":

            staffViewer.innerHTML = `
<h3>Antichef</h3>

<p>
Cargo:
Antagonista principal
</p>

<h2>Arte Conceptual</h2>

<a href="images/antichef.png" target="_blank">

<img
    src="images/antichef.png"
    width="250">

</a>

<p>
Personaje diseñado como contraste
directo del protagonista.

Su apariencia transmite
corrupción, hostilidad y una sensación
de familiaridad incómoda.

Es una figura importante dentro de la
historia y uno de los principales
conflictos del juego.

</p>

`;
        break;

                case "calabaza":

            staffViewer.innerHTML = `
<h3>Pumpkin-Man</h3>

<p>
Cargo:
Personaje secundario
</p>

<h2>Arte Conceptual</h2>

<a href="images/pumpkin_man.png" target="_blank">

<img
    src="images/pumpkin_man.png"
    width="250">

</a>

<p>
Individuo identificado únicamente
como "Pumpkin-Man".

Su origen permanece desconocido.

Suele aparecer en situaciones poco
habituales y rara vez ofrece
explicaciones útiles.

Actualmente continúa bajo observación.

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
<h3>BIENVENIDO AL MÓDULO DE EXPLORACIÓN</h3>

<p>
Durante tus operaciones visitarás
localidades afectadas por fenómenos
inusuales y situaciones que requerirán
investigación adicional.
</p>

<p>
Tus principales responsabilidades serán:
</p>

<ul>
    <li>Buscar pistas relevantes</li>
    <li>Localizar personas de interés</li>
    <li>Documentar eventos inusuales</li>
    <li>Reportar hallazgos al equipo</li>
</ul>

<p>
Recuerda:
una buena observación puede ser tan
importante como cualquier herramienta.
</p>

            `;
        break;

        case "restaurante":

            viewer.innerHTML = `
            <h3>FUNCIONAMIENTO DEL RESTAURANTE</h3>

<p>
El restaurante funciona como centro
de operaciones durante las misiones.
</p>

<p>
Aquí podrás preparar suministros,
organizar recursos y planificar las
siguientes actividades del equipo.
</p>

<p>
Responsabilidades principales:
</p>

<ul>
    <li>Gestionar inventario</li>
    <li>Preparar pizzas y suministros</li>
    <li>Atender clientes</li>
    <li>Coordinar recursos para futuras operaciones</li>
</ul>

<p>
Recuerda:
un restaurante bien administrado
permite que todo el equipo siga
funcionando correctamente.
</p>

            `;
        break;

        case "recursos":

            viewer.innerHTML = `
            <h3>RECURSOS</h3>

<p> Mientras explores nuevas localidades encontrarás ingredientes y materiales que podrían resultar útiles. </p>

<p> No los ignores. </p>

<p> Muchos de los suministros utilizados por el equipo provienen directamente de recursos recuperados durante las operaciones. </p>

<p> Si encuentras algo interesante, guárdalo en el inventario y llévalo de regreso al restaurante. </p>

<p> Créeme, tarde o temprano alguien terminará necesitándolo. </p>

            `;
        break;

        case "equipamiento":

            viewer.innerHTML = `
            <h3>EQUIPAMIENTO</h3>

<p>
El equipamiento adecuado puede marcar
la diferencia durante una operación.
</p>

<p>
Los recursos recuperados podrán
invertirse tanto en el restaurante
como en la mejora del equipo personal.
</p>

<p>
Algunas opciones disponibles incluyen:
</p>

<ul>
    <li>Mejorar herramientas</li>
    <li>Actualizar armamento</li>
    <li>Preparar suministros</li>
    <li>Fortalecer las operaciones del restaurante</li>
</ul>

<p>
Recuerda:
los recursos son limitados.

Invertir en tu equipo puede facilitar
las exploraciones.

Invertir en el restaurante puede
beneficiar a toda la operación.

<p> No existe una respuesta correcta.

Solo intenta no gastar todo en un
solo lugar.

</p>

            `;
        break;

        case "investigacion":

            viewer.innerHTML = `
            <h3>INVESTIGACIÓN DE ANOMALÍAS</h3>

<p>
Las anomalías asociadas a la Dimensión W
representan una de las principales
responsabilidades del equipo.
</p>

<p>
Durante una investigación, los empleados
deberán localizar personas atrapadas y
determinar el origen del incidente.
</p>

<p>
El acceso a la Dimensión W se realiza
mediante puntos de entrada específicos,
incluyendo superficies reflectantes
como espejos.
</p>

<p>
Una vez dentro, será posible encontrar
variantes positivas y negativas de una
misma ubicación.
</p>

<p>
Aunque comparten la misma distribución
general, cada variante presenta
condiciones, peligros y características
propias.
</p>

<p>
Objetivos principales:
</p>

<ul>
    <li>Explorar las distintas variantes</li>
    <li>Localizar personas desaparecidas</li>
    <li>Investigar el origen de la anomalía</li>
    <li>Cerrar la grieta dimensional</li>
</ul>

<p>
La operación se considerará completada
una vez neutralizada la causa del
incidente y restaurada la estabilidad
de la zona afectada.
</p>

            `;
        break;

        case "supervivencia":

            viewer.innerHTML = `
            <h3>PROTOCOLOS DE SUPERVIVENCIA</h3>

<p>
Las operaciones pueden desarrollarse
en entornos desconocidos e inestables.
</p>

<p>
Antes de iniciar una exploración,
asegúrate de contar con los recursos
necesarios para completar la misión.
</p>

<p>
Recomendaciones generales:
</p>

<ul>
    <li>Mantener provisiones disponibles</li>
    <li>Observar el entorno con atención</li>
    <li>Evitar riesgos innecesarios</li>
    <li>Seguir las indicaciones del equipo</li>
</ul>

<p>
Si una situación parece extraña,
probablemente lo sea.
</p>

<p>
En caso de duda, regresa al restaurante
y solicita apoyo adicional.
</p>

            `;
        break;

        case "comunicaciones":

            viewer.innerHTML = `
            <h3>COMUNICACIONES</h3>

<p> No importa dónde te encuentres, mantener el contacto con el equipo siempre será importante. </p>

<p> Por esa razón, todos los empleados recibirán acceso a una interfaz móvil de asistencia. </p>

<p> Entre sus funciones se incluyen: </p>

<ul> <li>Mensajería</li> <li>Notas de investigación</li> <li>Mapas y navegación</li> <li>Registro de información</li> </ul>

<p> Y sí, deberías revisarla de vez en cuando. </p>

<p> No instalé todas esas funciones para que ignores las notificaciones. </p>
            `;
        break;

        case "emergencia":

            viewer.innerHTML = `
            <h3>PROCEDIMIENTOS DE EMERGENCIA</h3>

<p> Si estás leyendo este módulo, probablemente algo salió mal. </p>

<p> En caso de emergencia: </p>

<ul> <li>Mantén la calma</li> <li>Verifica tu ubicación</li> <li>Contacta al equipo</li> <li>Busca una salida segura</li> <li>No ignores las advertencias</li> </ul>

<p> Si una situación supera tus capacidades, retírate y solicita apoyo. </p>

<p> Sobrevivir sigue siendo una estrategia válida. </p>
            `;
        break;
        case "combate":

            viewer.innerHTML = `
            <h3>PROCEDIMIENTO: COMBATE</h3>

<p>
Aunque la mayoría de las operaciones
pueden resolverse mediante exploración
e investigación, algunas situaciones
requieren medidas adicionales.
</p>

<p>
Cuando una entidad hostil represente
un peligro para el equipo o la población
local, se autoriza el uso de armamento
operativo.
</p>

<p>
El equipamiento disponible incluye:
</p>

<ul>
    <li>Espátulas tácticas</li>
    <li>Proyectiles de salsa caliente</li>
    <li>Sistemas de apoyo automatizados</li>
    <li>Munición basada en ingredientes</li>
    <li>Dispositivos experimentales</li>
</ul>

<p>
No todos los problemas pueden resolverse
con una pizza.
</p>

<p>
Sin embargo, sorprendentemente muchos sí.
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