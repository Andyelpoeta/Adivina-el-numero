
/** Esto nos permite crear un numero alo zar */
let numeroAlAzar =  Math.floor(Math.random() * 100 )+ 1 ,
    numeroEntrante = document.getElementById('numeroEntrada'), 
    comprobando = document.getElementById('comporobar'),
    mensaje = document.getElementById('mensaje'),
    cantidadIntentos = document.getElementById('cantidadIntentos'),
    intentos=0
comprobando.addEventListener('click', (e) => {
      e.preventDefault();
      intentos ++;
      cantidadIntentos.textContent=intentos;
      let numeroIngresado = parseInt(numeroEntrante.value)
      if (numeroIngresado < 1 || numeroIngresado > 100 || isNaN(numeroIngresado)) {
         mensaje.textContent='Introduce un numero valido entre 1 y 100'
         mensaje.style.color='black'
         return
      }
      if(numeroIngresado === numeroAlAzar){
            Swal.fire({
                  icon: 'success',
                  title: 'Felicitaciones haz adivinado el numero',
                  showConfirmButton: false,
                  timer: 4500
                })
                setTimeout(() => {
                  location.reload();
                }, 3000);   
                mensaje.textContent='!Haz ganado'
                mensaje.style.color='green'    
                
      } 
      else if(numeroIngresado < numeroAlAzar){
      mensaje.textContent='!Muy alto¡ el numero es mayor al que elejistes'
      mensaje.style.color='red'
      }
      else{
            mensaje.textContent='!Muy bajo¡ el numero es mas pequeño al que elegiste'
            mensaje.style.color='blue'
            
      }
      if (numeroIngresado === numeroIngresado) {
            document.getElementById('numeroEntrada').value=''   
        }
      
}) 
      
      
      


