var dictConcurso = new Object();
var dictNormal = new Object();
$(document).ready(function(){
    $.getJSON("jsons/concurso.json", function(result) {
        dictConcurso=result
    })
    $.getJSON("jsons/pre.json", function(result) {
        dictNormal=result
    })
})

function CargaResultado(){
    var CI=$("#CI").val()
    console.log(CI)
    var dictFinal = new Object();
    while(CI[0]==0)
    {
        CI=CI.substring(1)
    }
    if(CI in dictConcurso)
    {
        $("#Tipo").html("Concurso")
        dictFinal=dictConcurso
    }
    else if(CI in dictNormal)
    {
        $("#Tipo").html("PreUniversitario")
        dictFinal=dictNormal
    }
    else
    {
        console.log("No encontrado")
    }

    var persona=dictFinal[CI]
    $("#pos").html(persona[0])
    $("#total").html(persona[1])
    $("#mat").html(persona[2])
    $("#esp").html(persona[3])
    $("#nombre").html(persona[4])
    $("#Results").removeAttr("hidden")
}