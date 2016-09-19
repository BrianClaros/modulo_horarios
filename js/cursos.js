$(document).ready(function () {
	
	
    $.ajax({
        type: "GET",
        dataType: "json",
        async: false,
        cache:false,
        url: "http://colegio.paparelli.com.ar/cursos/?page=1",
        success: function(data){
            item="<label><h3>Curso:</h3></label><select class='form-control' id='cursoslist' name='cursoslist'>";
            $.each(data.results, function(i, field){
                item+='<option value='+field.id+'>'+field.nombre+'</option>';
            });
        }
    });

    $.ajax({
		type: "GET",
    	dataType: "json",
        async: false,
        cache:false,
    	url: "http://colegio.paparelli.com.ar/cursos/?page=2",
    	success: function(data){
    		$.each(data.results, function(i, field){
        		item+='<option value='+field.id+'>'+field.nombre+'</option>';
      		});
		}
	});

    $.ajax({
        type: "GET",
        dataType: "json",
        async: false,
        cache:false,
        url: "http://colegio.paparelli.com.ar/cursos/?page=3",
        success: function(data){
            var cursos=$('#cursos');
            $.each(data.results, function(i, field){
                item+='<option value='+field.id+'>'+field.nombre+'</option>';
            });
            item+='</select>';
            cursos.html(item);
        }
    });


});