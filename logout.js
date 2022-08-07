if(localStorage.getItem('token') == null){
    alert('Você precisa estar logado para poder acessar esta página')
    window.location.href = 'index.html'
}

if(localStorage.getItem('tokenAdmin') == null){
    alert('Você precisa estar logado para poder acessar esta página')
    window.location.href = 'index.html'
}

function sair(){
    localStorage.removeItem('token')
    window.location.href = 'index.html'
}

