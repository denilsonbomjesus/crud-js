import { clienteService } from '../service/cliente-service.js';

// varre o formulario
const formulario = document.querySelector('[data-form]')

// quando clicar no botao
formulario.addEventListener('submit', (evento) => {
    // previne o comportamento do formulario, que é enviar sem checar
    evento.preventDefault()

    // pega os valores de nome e email
    const nome = evento.target.querySelector('[data-nome]').value
    const email = evento.target.querySelector('[data-email]').value

    // envia para a funcao cliente service
    clienteService.criaCliente(nome, email)
    .then(() => {
        window.location.href = '../telas/cadastro_concluido.html'
    })
})