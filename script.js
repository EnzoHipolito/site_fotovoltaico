function navegar(pagina) {
    document.querySelectorAll("section").forEach(sec => sec.classList.remove("active"));
    document.getElementById(pagina).classList.add("active");
    history.pushState({ pagina }, "", `#${pagina}`);
}