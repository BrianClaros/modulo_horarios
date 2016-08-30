function MostrarTablas() {
        var cod1 = document.getElementById("curso1").value;
 		var cod2 = document.getElementById("division1").value;
        $("#capa").load('cursos/'+cod1+'_'+cod2+'.php');
}
