$(document).ready(function () {
	
	$.ajax({
		type: "GET",
    	dataType: "json",
    	url: "http://colegio.paparelli.com.ar/materias",
    	success: function(data){
    		$.each(data.results, function(i, field){
        		localStorage.setItem(field.id,field.nombre);
      		});
		}
	});

	$.ajax({
		type: "GET",
    	dataType: "json",
    	url: "http://colegio.paparelli.com.ar/materias/?page=2",
    	success: function(data){
    		$.each(data.results, function(i, field){
        		localStorage.setItem(field.id,field.nombre);
      		});
		}
	});
    $.ajax({
        type: "GET",
        dataType: "json",
        url: "http://colegio.paparelli.com.ar/materias/?page=3",
        success: function(data){
            $.each(data.results, function(i, field){
                localStorage.setItem(field.id,field.nombre);
            });
        }
    });
    $.ajax({
        type: "GET",
        dataType: "json",
        url: "http://colegio.paparelli.com.ar/materias/?page=4",
        success: function(data){
            $.each(data.results, function(i, field){
                localStorage.setItem(field.id,field.nombre);
            });
        }
    });
    $.ajax({
        type: "GET",
        dataType: "json",
        url: "http://colegio.paparelli.com.ar/materias/?page=5",
        success: function(data){
            $.each(data.results, function(i, field){
                localStorage.setItem(field.id,field.nombre);
            });
        }
    });
    $.ajax({
        type: "GET",
        dataType: "json",
        url: "http://colegio.paparelli.com.ar/materias/?page=6",
        success: function(data){
            $.each(data.results, function(i, field){
                localStorage.setItem(field.id,field.nombre);
            });
        }
    });
	


});