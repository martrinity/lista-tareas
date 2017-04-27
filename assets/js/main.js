function listaTareas(){
var primerasTareas = document.getElementById("lista");

res.forEach(function(el){
    primerasTareas.innerHTML += '<li>' + el.title + '</li>';

}); 
}
primerasTareas();
function ingresarTarea(){
    var tareas = document.getElementById("lista"); 
    var ingresar= document.getElementById("tareaInput").value;
        tareas.innerHTML += '<li>' + ingresar + '</li>';