function alterarCorFundoPrimeiroPost(){
    let posts = document.getElementsByClassName('post');
    console.log(posts)

    let primeiroPost = posts[0];
    console.log('primeiroPost', primeiroPost)
    primeiroPost.style.backgroundColor = 'red';
}

function aumentarFonteSegundoPost(){
    let segundoPost = document.getElementsByClassName('texto-post');

    console.log(segundoPost[1].classList)

    segundoPost[1].classList.add('fonte-grande')
}

function marcarRadio(genero){
    let radioMasculino = document.getElementById('genero-masculino');
    
    let radioFeminino = document.getElementById('genero-feminino');

    if(genero === 'M') {
        radioMasculino.checked = true;
    } else if (genero === 'F'){
        radioFeminino.checked = true;
    }
}

