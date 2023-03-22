
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
    console.log(nome.trim().length)
    if(nome.length <= 2 || nome.trim().length === 0 ){
        p[0].innerHTML = 'O nome precisa ter ao menos 3 caracteres'
        setTimeout(()=>{
            p[0].innerHTML = ''
        }, 3000)
    }
    if(senha.length < 8 || senha.trim().length == 0 ){
        p[1].innerHTML = 'A senha precisa ter ao menos 8 caracteres'
        setTimeout(()=>{
            p[1].innerHTML = ''
        }, 3000)
    }
    
}

function Login(){
    let nome = document.getElementById('Nome').value
    let senha = document.getElementById('Senha').value

    let string = localStorage.getItem('cadastrados')
    console.log(JSON.parse(string))

    if(nome.length <= 2 || nome.trim().length === 0 || senha.length < 8 || senha.trim().length == 0 ){
        p[0].innerHTML = 'Usuário ou senha incorretos!'
        setTimeout(()=>{
            p[0].innerHTML = ''
        }, 3000)
    }
}


// let arr = ['asda', 'adfasda', 'sdfsdf', 'aksugdja', 'jahsdkjashb']

// let variavel = 'jahsdkjashb'

// let count = 0
// let count2 = 0

// arr.forEach(item=>{
//     //document.write(item + "<br>")
//     if(item == variavel){
//         count2 = count
//     }
//     count++
// })

// console.log(count2)


// // let posicao = arr.findIndex((item) =>{
// //     console.log(item)
// //     return item = 'adfasda'
// // })

// // document.write(posicao)

