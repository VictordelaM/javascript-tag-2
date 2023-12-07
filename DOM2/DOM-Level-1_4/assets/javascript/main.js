document.getElementById("container").innerHTML = "<p>start of the element</p>";

document.getElementById("info").innerHTML = "<h1>Hello World!</h1><h2>How are you?</h2>";

document.write("end of the element");

console.log(new Date().toString());
document.querySelector('#info').innerHTML += (new Date().toString());



function display(){
    let eingabe = document.querySelector(`input`).value;
    let text = document.querySelector("#text")
    text.innerHTML += `<p>${eingabe}</p>`
}