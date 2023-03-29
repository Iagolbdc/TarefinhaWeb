// let usuarios = []
// let p = document.getElementsByTagName('p')

// if(localStorage.getItem('cadastrados')){
//     usuarios = JSON.parse(localStorage.getItem('cadastrados'))
// }

// function Cadastrar(){
    
//     let nome = document.getElementById('Nome').value
//     let senha = document.getElementById('Senha').value
//     if(nome.length > 2 && senha.length > 2 && nome.trim().length != 0 && senha.trim().length != 0){
//         let usuario = {
//             nome : nome,
//             senha : senha,
//      }
//     usuarios.push(usuario)
//     localStorage.setItem('cadastrados', JSON.stringify(usuarios))
//     location.assign('login.html')
//     }
//     console.log(nome.trim().length)
//     if(nome.length <= 2 || nome.trim().length === 0 ){
//         p[0].innerHTML = 'O nome precisa ter ao menos 3 caracteres'
//         setTimeout(()=>{
//             p[0].innerHTML = ''
//         }, 3000)
//     }
//     if(senha.length < 8 || senha.trim().length == 0 ){
//         p[1].innerHTML = 'A senha precisa ter ao menos 8 caracteres'
//         setTimeout(()=>{
//             p[1].innerHTML = ''
//         }, 3000)
//     }
    
// }

// function Login(){
//     let nome = document.getElementById('Nome').value
//     let senha = document.getElementById('Senha').value

//     let string = localStorage.getItem('cadastrados')
//     console.log(JSON.parse(string))

//     if(nome.length <= 2 || nome.trim().length === 0 || senha.length < 8 || senha.trim().length == 0 ){
//         p[0].innerHTML = 'Usuário ou senha incorretos!'
//         setTimeout(()=>{
//             p[0].innerHTML = ''
//         }, 3000)
//     }
// }

// function busca_usuario(){
    
// }


let usuarios = []
let p = document.getElementsByTagName('p')
let data = new Date()

if(localStorage.getItem('cadastrados')){
    usuarios = JSON.parse(localStorage.getItem('cadastrados'))
}

function Cadastrar(){
    let guardaNome = document.getElementById("Nome").value
    let guardaSenha = document.getElementById("Senha").value

    let usuario = {
        nome: guardaNome.toLowerCase().trim(),
        senha: guardaSenha.trim(),
        dataDeCriacao: `${data.getDate()}/${data.getMonth()}/${data.getFullYear()}`
    }
    
    if(guardaNome.length > 2 && guardaSenha.length >= 8 && guardaNome.trim().length != 0 && guardaSenha.trim().length != 0
    ){
        if(procura_usuario(guardaNome) == -1){
            usuarios.push(usuario)
            localStorage.setItem('cadastrados', JSON.stringify(usuarios))
            alert("Usuario cadastrado")
            location.assign('login.html')
         }else{
            alert("Usuario ja está cadastrado")
         }
    }

    if(guardaNome.length <= 2 || guardaNome.trim().length === 0 ){
        p[0].innerHTML = 'O nome precisa ter ao menos 3 caracteres'
        setTimeout(()=>{
            p[0].innerHTML = ''
        }, 3000)
    }

    if(guardaSenha.length < 8 || guardaSenha.trim().length == 0 ){
        p[1].innerHTML = 'A senha precisa ter ao menos 8 caracteres'
        setTimeout(()=>{
            p[1].innerHTML = ''
        }, 3000)
    }

}

let nome = document.getElementById("Nome")
let senha = document.getElementById("Senha")

senha.addEventListener('keypress', (event) => {
    if(event.key == "Enter"){
        Cadastrar()
    }
})
nome.addEventListener('keypress', (event) => {
    if(event.key == "Enter"){
        Cadastrar()
    }
})

function procura_usuario (guardaNome){
    let index = usuarios.findIndex((elemento) =>{
        return elemento.nome == guardaNome
    })
    return index
}

//login

function Login(){
    let nome = document.getElementById("Nome")
    let senha = document.getElementById("Senha")

    if(procura_usuario2(nome , senha)){
        alert('usuario valido! dento')
        location.assign('index.html')
    }else{
        alert('usuario invalido')
    }
}

function procura_usuario2(nome, senha){
    let index = usuarios. findIndex((item) =>{
        return item.nome == nome && item.senha == senha
    })
    return index
}
