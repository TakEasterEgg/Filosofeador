// Movemos toda la logica del html aca para que no quede una cosa horrorosa

sujeto = ["mami", "gata", "perra", "zorra", "nena", "chica", "mujel"]
deseo = ["yo quiero", "vamos a", "voy a", "yo quiero", "yo vengo a"]
verbo = ["castigalte", "cogelte", "encendelte","dalte","azotalte","prendelte","perrealte", "bellaquealte"]
adj = ["duro","rapido","lento","suave","fuelte","rudo","como te gusta", "sin disimulo"]
tiempo = ["hasta que salga el sol", "toa la noche", "hasta el amanecel", "hasta mañana", "toO el dia"]
final = ["sin miedo","sin anestesia","en el piso","contra la pared","sin compromiso","en mi cama","hasta que tu marido se entere","en lo oscuro"]


function retextear(verso){
verso.toString()
randsujeto = sujeto[Math.floor(Math.random() * sujeto.length)]
randdeseo = deseo[Math.floor(Math.random() * deseo.length)]
randverbo = verbo[Math.floor(Math.random() * verbo.length)]
randadj = adj[Math.floor(Math.random() * adj.length)]
randtiempo = tiempo[Math.floor(Math.random() * tiempo.length)]
randfinal = final[Math.floor(Math.random() * final.length)]
console.log(verso)
if (verso%2 == 0) {
    return document.getElementById(verso).innerHTML = randverbo + " " + randadj + " " + randtiempo + " " + randfinal
} else {
    return document.getElementById(verso).innerHTML = randsujeto + " " + randdeseo + " " + randverbo + " " + randadj + " " + randtiempo + " " + randfinal
} 
}

function estrofa(){
    n = 0
    document.getElementById("ea").innerHTML = "Ea Ea Ea"
    for (var i = 0; i < 4; i++) {
        n +=1 
        retextear(n)
        
    }
}
