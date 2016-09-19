var horarios=[];
var valor=1;
var pagina=1, nulo=0, val=0;
while(nulo==0){
        $.ajax({
            type: "GET",
            async:false,
            dataType: "json",
            url: "http://colegio.paparelli.com.ar/horarios/?page="+pagina,
            success: function(data){
                $.each(data.results, function(i, field){
	      if(val==0){val=i;} else{val++;}         
    horarios[val]={id:field.id,materia:field.materia,curso:field.curso,hora_inicial:field.hora_inicial,hora_final:field.hora_final,dia:field.dia};
                });
		
                if(data.next==null){nulo=1;}else{pagina++;}
                
            }
        });
}

function obtener(){

    var curso=$('#cursoslist').val();
    var divhorarios=$('#horarios');
            if(valor == 1){dia="Lunes";}
            if(valor == 2){dia="Martes";}
            if(valor == 3){dia="Miercoles";}
            if(valor == 4){dia="Jueves";}
            if(valor == 5){dia="Viernes";}
    item="<table class='table table-default'>";
    item+="<thead><tr><td>Horarios</td><td class='cambio'>"+dia+"</td></tr></thead></tbody>";

    $.each(horarios, function(i, field){
                if (horarios[i]["curso"] == curso) {
                    if (horarios[i]["dia"]==valor) {
                      item+="<tr><td>"+horarios[i]["hora_inicial"]+"  a  "+horarios[i]["hora_final"]+"</td><td class='cambio'>"+localStorage.getItem(horarios[i]["materia"])+'</td></tr>';
                    }
                }
    });
            item+='</tbody></table>';
            divhorarios.html(item);
            

}
