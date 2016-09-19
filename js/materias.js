$(document).ready(function () {
	var pagina=1, nulo=0, val=0;
while(nulo==0){
        $.ajax({
            type: "GET",
            async:false,
            dataType: "json",
            url: "http://colegio.paparelli.com.ar/materias/?page="+pagina,
            success: function(data){
    		$.each(data.results, function(i, field){
        		localStorage.setItem(field.id,field.nombre);
      		});
		
		
                if(data.next==null){nulo=1;}else{pagina++;}
                
            }
        });
}

});
