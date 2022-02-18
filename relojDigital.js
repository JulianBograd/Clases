
var horas = 0;
var minutos = 0;
var segundos = 0;

do {
    if (horas <10){
        console.log('0',horas,':');
    }
    else {
    console.log(horas,':');
    }
    if (minutos <10){
        console.log('0',minutos,':');
    }
    else {
        console.log(minutos,':');
    }
    if (segundos<10) {
        console.log('0',segundos);
    }
    else{
        console.log(segundos)
    }

    segundos = segundos+1;

    if (segundos=60){
        minutos = minutos+1;
        segundos = 0;
        if (minutos=60){
            horas=horas+1;
            minutos=0;
            if (horas=24){
                horas=0;
            }
        }
    }
    setTimeout(() => {
    
    }, timeout);;
} while (segundos>=0);
