// Movemos toda la logica del html aca para que no quede una cosa horrorosa
referencia = ["enrevesado", "fascinante", "sustancial", "efimero", "insolito", "espendido", "primordial",
"estetico", "onirico", "inconcebible", "imperfecto", "abrumador"]

objeto = ["la vida", "del mundo", "del tiempo", "de la realidad", "del alma",
            "del universo", "del conocimiento", "de la humanidad", "del mar",
        "de la sociedad", "de la luna", "de la tenologia", "de la tristeza",
        "del vacio", "de la verdad", "del cosmos", "del arte", "de la oscuridad",
        "de la ficcion", "del sol", "del espacio", "de la muerte", "del cielo",
        "del espiritu", "de la felicidad", "de la consciencia", "de la mente",
        "de la madurez", "del escepticismo", "de la euforia", "del amor"]

enque = ["imperfeccion", "diversidad", "contraste", "vastedad", "magia",
        "simpleza", "hipocresia", "subjetividad", "incomprension", "frivolidad"]
        

function retextear(){

randreferencia = referencia[Math.floor(Math.random() * referencia.length)]
randobjeto = objeto[Math.floor(Math.random() * objeto.length)]
randenque = enque[Math.floor(Math.random() * enque.length)]

frasefinal = "Lo "+randreferencia + " " + randobjeto + " radica en su " + randenque + "."
console.log(frasefinal)

return document.getElementById("frase").innerHTML = frasefinal
}

