
let usuarios = []
let p = document.getElementsByTagName('p')

if(localStorage.getItem('cadastrados')){
    usuarios = JSON.parse(localStorage.getItem('cadastrados'))
}

function Cadastrar(){
    
    let nome = document.getElementById('Nome').value
    let senha = document.getElementById('Senha').value
    if(nome.length > 2 && senha.length > 2 && nome.trim().length != 0 && senha.trim().length != 0){
        let usuario = {
            nome : nome,
            senha : senha,
     }
    usuarios.push(usuario)
    localStorage.setItem('cadastrados', JSON.stringify(usuarios))
    location.assign('login.html')
    }
    if(nome.length > 2 || nome.trim().length != 0 ){
        p[0].innerHTML = 'O nome precisa ter ao menos 3 caracters'
        setTimeout(()=>{
            p[0].innerHTML = ''
        }, 3000)
    }
    if(senha.length > 2 || senha.trim().length != 0 ){
        p[1].innerHTML = 'O nome precisa ter ao menos 3 caracters'
        setTimeout(()=>{
            p[1].innerHTML = ''
        }, 3000)
    }
}

function Login(){
    let string = localStorage.getItem('cadastrados')
    console.log(JSON.parse(string))
}


/*
let arr = ['asda', 'adfasda', 'sdfsdf']

arr.forEach(item=>{
    document.write(item + "<br>")
})

let posicao = arr.findIndex((item) =>{
    return item 
})

document.write(posicao)

*/