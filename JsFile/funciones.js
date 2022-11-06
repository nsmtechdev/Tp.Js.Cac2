
/* Funcion Calcular */

      function calcularTotal() {
        canti = document.getElementById('cant1').value;
        canti = parseInt(canti);
        total = 0;
        total = canti * 1000;
        categoria = document.getElementById('catego').value;
        
        if(categoria == 1) {
          total = total * 0.2
        }
        else if(categoria == 2) {
          total = total * 0.5
        }
        else if(categoria == 3) {
          total = total * 0.80
        }
        document.getElementById('cantidadTotal').innerHTML = " Total a Pagar: " + " $" + total
      };

// funcion borrar 

     function clearForm() {
        document.getElementById('form1').reset();
        document.getElementById('cantidadTotal').innerHTML = "Total a Pagar: $";
      }
    
