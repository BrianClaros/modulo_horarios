var valor=1;
 $( document ).ready(function() {
        obtener();
             $("body").on("swipeleft",function(){
                    $("#siguiente").click();
                });

                 $("body").on("swiperight",function(){
					$("#anterior").click();                       
                });
	
             $("#siguiente").on("click",function(){
                    if (valor == 5) {
                        valor=5;
                    }else{
                        valor=valor+1; 
                        obtener();
                    }  
                });

                 $("#anterior").on("click",function(){
                    if (valor == 1) {
                        valor=1;
                    }else{
                        valor=valor-1;
                        obtener();  
                    }
                        
                });

        
$(document).on('change','#cursoslist',function(){
    valor=1;
    obtener();
});
});
