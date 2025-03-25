function alterColor(){
    console.log("PASSEI AQUI");
    const color = event.target.value;
    document.getElementById('linkHome').style.color = color; 
    document.getElementById('linkProjects').style.color = color;    
}

function addPage(url) {
    const section = document.querySelector('.apresentacao_conteudo');
    fetch(url)
        .then(response => {
            return response.text();
        })
        .then(html => {
            section.innerHTML = html;
        });
}

window.addEventListener('load', () => {
    addPage('pages/apresentacao.html');

});