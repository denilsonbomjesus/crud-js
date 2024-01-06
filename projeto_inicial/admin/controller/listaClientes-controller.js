import { clienteService } from '../service/cliente-service.js'

// adiona nova linha na tabela com os dados do cliente
// ==> recebendo dado e gerando template
const criaNovaLinha = (nome, email, id) => {
    const linhaNovoCliente = document.createElement('tr')
    const conteudo = `
        <td class="td" data-td>${nome}</td>
                        <td>${email}</td>
                        <td>
                            <ul class="tabela__botoes-controle">
                                <li><a href="../telas/edita_cliente.html?id=${id}" class="botao-simples botao-simples--editar">Editar</a></li>
                                <li><button class="botao-simples botao-simples--excluir" type="button">Excluir</button></li>
                            </ul>
                        </td>
                        `
    linhaNovoCliente.innerHTML = conteudo
    linhaNovoCliente.dataset.id = id

    return linhaNovoCliente
}

// ==> percorrendo a arvore do DOM para buscar a data-tabela
const tabela = document.querySelector('[data-tabela]')

// excluir cliente
// usando Async/Await
tabela.addEventListener('click', async (evento) => {
    let ehBotaoDeletar = evento.target.className === 'botao-simples botao-simples--excluir'
    if(ehBotaoDeletar){
        try {
        // encontrar o elemento mais proximo da minha td que tem o botao que é a linha criada, a tl
        const linhaCliente = evento.target.closest('[data-id]')
        let id = linhaCliente.dataset.id
        await clienteService.removeCliente(id)
        linhaCliente.remove()
        }
        catch(erro){
            window.location.href = '../telas/erro.html'
        }
    }
})

// ==> recebendo o resultado e exibindo dados na tela
clienteService.listaClientes()
.then( data => {
        data.forEach(elemento => {
            tabela.appendChild(criaNovaLinha(elemento.nome,elemento.email, elemento.id))
    }
)})