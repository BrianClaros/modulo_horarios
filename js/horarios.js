var valor=1;
 $( document ).ready(function() {
        $("#horarios").on("swipeleft",function(){
            if (valor == 5) {
                valor=5;
            }else{
                valor=valor+1;
                $('.cambio').css({
                color : "white"

                });  
            }
            obtener();      
        });

         $("#horarios").on("swiperight",function(){
            if (valor == 1) {
                valor=1;
            }else{
                valor=valor-1;
                $('.cambio').css({
                color : "white"

                });
            }
            obtener();      
        });
        obtener();  
});

function obtener() {
    
	var data = "";
	$.ajax({
		type: "GET",
    	dataType: "json",
        data:data,
    	url: "http://colegio.paparelli.com.ar/horarios/",
    	success: function(data){
            var horarios=$('#horarios');
            var curso=$('#cursoslist').val();
            item="<table class='table table-inverse'>";
           
            //materias[i]={id:field.id,nombre:field.nombre};
            var dia="";
            if(valor == 1){dia="Lunes";}
            if(valor == 2){dia="Martes";}
            if(valor == 3){dia="Miercoles";}
            if(valor == 4){dia="Jueves";}
            if(valor == 5){dia="Viernes";}
            item+="<thead><tr><td>Horarios</td><td class='cambio'>"+dia+"</td></tr></thead></tbody>";
    		$.each(data.results, function(i, field){


                if (field.curso == curso) {
                    if (field.dia==valor) {
        		      item+="<tr><td>"+field.hora_inicial+"  a  "+field.hora_final+"</td><td class='cambio'>"+localStorage.getItem(field.materia)+'</td></tr>';
                    }
                }
      		});
            item+='</tbody></table>';
        
            horarios.html(item);
		}
	});


}