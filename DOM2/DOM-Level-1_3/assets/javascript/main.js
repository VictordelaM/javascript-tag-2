function display(num){
    let area = document.querySelector("#gallery");
    area.innerHTML += '<img src="./assets/img/premium_photo-1677101221533-52b45823a2dc.avif"></img>'
    area.innerHTML += `<p>Fig.${num}</p>`
}

display(1)

display(2)

display(3)

document.write("hallo")