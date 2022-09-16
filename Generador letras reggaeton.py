def letras():
    import random
    sujeto = ["mami", "gata", "perra", "zorra", "nena", "chica", "mujeL"]
    deseo = ["yo quiero", "vamos a", "voy a", "yo quiero", "yo vengo a"]
    verbo = ["castigaLte", "cogeLte", "encendeLte","daLte","azotaLte","prendeLte","perreaLte", "bellaqueaLte"]
    adj = ["duro","rapido","lento","suave","fuerte","rudo","como te gusta"]
    tiempo = ["Hasta que salga el sol", "toa la noche", "hasta el amaneceL", "hasta mañana", "toO el dia"]
    final = ["sin miedo","sin anestesia","en el piso","contra la pared","sin compromiso","en mi cama","hasta que tu marido se entere","en lo oscuro"]

    
    return   print(f"{random.choice(sujeto)} {random.choice(deseo)} {random.choice(verbo)} {random.choice(adj)} {random.choice(tiempo)} {random.choice(final)}")

letras()
