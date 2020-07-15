var cronometro = (function () {
   
    var contar;
    var temporizador = document.getElementById("temporizador");
    var fuiClicado = false;

    var s = 0;
    var m = 0;
    var h = 0;

    function iniciar()
    {
        if(!fuiClicado)
        {
            contar = setInterval(_conta, 1000);
            fuiClicado = true;
        }
    }

    function _conta()
    {
        s++;

        if(s == 60)
        {
            s = 0;
            m++;
        } 
        else if(m == 60)
        {
            m = 0;
            h++;
        }    
        
        _atualizarTempo();
    }

    function _atualizarTempo()
    {
        var segundos = (s < 10)? "0" + s : s;
        var minutos = (m < 10)? "0" + m : m;
        var horas = (h < 10)? "0" + h : h;

        return temporizador.textContent = `${horas}:${minutos}:${segundos}`;
    }

    function parar()
    {
        clearInterval(contar);
        fuiClicado = false;
    }

    function zerar()
    {
        s = 0;
        m = 0;
        h = 0;
        parar();
        temporizador.textContent = "00:00:00";
        fuiClicado = false;
    }

    return{
        iniciar,
        parar,
        zerar,
    };

})();