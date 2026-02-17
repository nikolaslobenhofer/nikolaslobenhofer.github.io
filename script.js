function exit_alert(){
    alert("Gedrückt")
    console.log("test")
}
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("123").addEventListener("click", exit_alert);
});



