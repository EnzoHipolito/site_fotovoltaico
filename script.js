let resultado = document.getElementById("resultado")

function navegar(pagina) {
    document.querySelectorAll("section").forEach(sec => sec.classList.remove("active"))
    document.getElementById(pagina).classList.add("active")
    history.pushState({ pagina }, "", `#${pagina}`)
}

function calculo() {
    let consumo = parseFloat(document.getElementById("consumo").value)
    let gerPP = parseFloat(document.getElementById("gerPP").value)

    resultado.innerHTML = ''

    if (consumo > 0 && gerPP > 0) {
        const placas = Math.ceil(consumo / gerPP)
        resultado.innerHTML += `Você precisaria de aproximadamente ${placas} placas.`
    } else {
        resultado.innerHTML += 'Você deve digitar valores validos'
    }
}