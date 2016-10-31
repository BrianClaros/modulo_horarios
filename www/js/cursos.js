$(document).ready(function () {
	
var valor=1;
item="<label><h3>Curso:</h3></label><select class='form-control' id='cursoslist' name='cursoslist'>";
var pagina=1, nulo=0, val=0;
var cursos=$('#cursos');
while(nulo==0){	
    $.ajax({
        type: "GET",
        dataType: "json",
        async: false,
        cache:false,
        url: "http://colegio.paparelli.com.ar/cursos/?page="+pagina,
        success: function(data){
            
            $.each(data.results, function(i, field){
                item+='<option value='+field.id+'>'+field.nombre+'</option>';
            });
		if(data.next==null){nulo=1;            item+='</select>';
            cursos.html(item);}else{pagina++;}
        }
    });
}
});
