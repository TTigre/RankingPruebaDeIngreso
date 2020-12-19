var dictConcurso = new Object();
var dictNormal = new Object();
var dictConcursoUCLV = new Object();
var dictNormalUCLV = new Object();

$(document).ready(function(){
    $.getJSON("jsons/concurso.json", function(result) {
        dictConcurso=result
    })
    $.getJSON("jsons/pre.json", function(result) {
        dictNormal=result
    })
    $.getJSON("jsons/concursoUCLV.json", function(result) {
        dictConcursoUCLV=result
    })
    $.getJSON("jsons/preUCLV.json", function(result) {
        dictNormalUCLV=result
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
        $("#lugar").html("UH")
        $("#Tipo").html("Concurso")
        dictFinal=dictConcurso
    }
    else if(CI in dictNormal)
    {
        $("#lugar").html("UH")
        $("#Tipo").html("PreUniversitario")
        dictFinal=dictNormal
    }
    else if(CI in dictConcursoUCLV)
    {
        $("#lugar").html("UCLV")
        $("#Tipo").html("Concurso")
        dictFinal=dictConcursoUCLV
    }
    else if(CI in dictNormalUCLV)
    {
        $("#lugar").html("UCLV")
        $("#Tipo").html("PreUniversitario")
        dictFinal=dictNormalUCLV
    }
    else
    {
        console.log("No encontrado")
        $(".modal").modal()
    }

    var persona=dictFinal[CI]
    $("#pos").html(persona[0])
    $("#total").html(persona[1])
    $("#mat").html(persona[2])
    $("#esp").html(persona[3])
    $("#hist").html(persona[4])
    $("#nombre").html(persona[5])
    $("#Results").removeAttr("hidden")
}