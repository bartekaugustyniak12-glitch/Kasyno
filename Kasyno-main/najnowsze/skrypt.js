function zaloguj() {
    const login = document.getElementById("login").value;
    const haslo = document.getElementById("haslo").value;
    const haslo1="admin"
    const login1="admin"
if(haslo===haslo1 && login===login1){
    window.location.href="pulpit.html"}
else{
    alert("Wpisz poprawny login i hasło")}
}