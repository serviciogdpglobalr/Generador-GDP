// Variables html
const tipo = document.querySelector('#tipo');
const pbi = document.querySelector('#pbi');
const pke = document.querySelector('#pke');
const crq = document.querySelector('#crq');
const titulo = document.querySelector('#titulo');
const fecha = document.querySelector('#fecha');
const horario = document.querySelector('#horario');
const respuesta = document.querySelector('.respuesta');


function generateAnswer() {
    let saludo;
    if(horario.value === "dia") {
        saludo = "Buenos días";
    } else {
        saludo = "Buenas tardes";
    }
    switch (tipo.value) {
        case "creacion":
            respuesta.textContent = `
            ${saludo}.

            La presente es para indicarle que su solicitud ha sido creada bajo el número de caso ${pbi.value} ${titulo.value}.

            Saludos.
            `
            break;
        case "escalamiento":
            respuesta.textContent = `
            ${saludo}.

            La presente es para indicarle que al caso ${pbi.value} ${titulo.value} se le creó el error conocido bajo el número ${pke.value} y fue escalado a su bandeja.

            Solicitamos el apoyo del grupo resolutor para indicar sus observaciones antes del día ${fecha.value}, después de la fecha mencionada se entenderá que el diagnóstico fue aprobado. 

            NOTA: Después de 15 días hábiles de la entrega del documento de diagnóstico, no se aceptará su devolución. 

            Saludos.
            `
            break;
        case "cierre-pbi":
            respuesta.textContent = `
            ${saludo}.

            La presente es para informar que se procedió al cierre del caso problema ${pbi.value} ${titulo.value}

            Saludos.
            `
            break;
        case "cierre-pbi-pke":
            respuesta.textContent = `
            ${saludo}.

            La presente es para informar que se procedió al cierre del caso problema ${pbi.value} - ${pke.value} ${titulo.value}

            Saludos.
            `
            break;
        case "cierre-pke":
            respuesta.textContent = `
            ${saludo}.

            La presente es para informar que se procedió al cierre del error conocido ${pke.value} asociado al caso problema ${pbi.value} ${titulo.value}

            Saludos.
            `
            break;
        case "desarrollo":
            respuesta.textContent = `
            ${saludo}.

            Por favor se requiere su apoyo para validar el resultado del control de cambio ${crq.value}, asociado al caso problema ${pbi.value} - ${pke.value} ${titulo.value}.

            Se agradece confirmar si fue exitoso y si se llegó a la solución con dicha ejecución, para poder validarlo en producción con el solicitante.

            Saludos.
            `
            break;
        case "incidencias":
            respuesta.textContent = `
            ${saludo}.

            La presente es para solicitar que, por favor, realicen las revisiones correspondientes para la certificación del caso problema ${pbi.value} - ${pke.value} ${titulo.value}, ya que se aplicó correctivo a través del ${crq.value} como se puede observar en la cadena de correos.

            Saludos.
            `
            break;
    }

}

const copiarContenido = async () => {
    try {
        await navigator.clipboard.writeText(respuesta.textContent);
    } catch (err) {
        alert('Ha ocurrido un error', err);
    }
}