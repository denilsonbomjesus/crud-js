// adiona nova linha na tabela com os dados do cliente
const criaNovaLinha = (nome, email) => {
    const linhaNovoCliente = document.createElement('tr')
    const conteudo = `
        <td class="td" data-td>${nome}</td>
                        <td>${email}</td>
                        <td>
                            <ul class="tabela__botoes-controle">
                                <li><a href="../telas/edita_cliente.html" class="botao-simples botao-simples--editar">Editar</a></li>
                                <li><button class="botao-simples botao-simples--excluir" type="button">Excluir</button></li>
                            </ul>
                        </td>
                        `
    linhaNovoCliente.innerHTML = conteudo
    return linhaNovoCliente
}

const tabela = document.querySelector('[data-tabela]');
// colocar a tabela dentro do elemento pai -> tr dentro do tbody
//tabela.appendChild(criaNovaLinha(this.nome, this.email));

const listaClientes = () => {
    const promise = new Promise((resolve,reject) => {
        // iniciar o objeto da comunicacao
        const http = new XMLHttpRequest();

        // abrir a comunicação entre a aplicação e a api
        http.open('GET', ' http://localhost:3000/profile');
        //    1.o que eu peço as servidor     2.para onde eu envio a requisição

        // a resposta que o servidor vai dar ao carregar a pagina
        http.onload = () => {
            if(http.status >= 400){
                reject(JSON.parse(http.response))
            }else {
                resolve(JSON.parse(http.response))
            }
        }
        // enviar requisicao
        http.send();
    })
    console.log(promise)
    return promise
}

listaClientes()
.then( data => {
        data.forEach(elemento => {
            tabela.appendChild(criaNovaLinha(elemento.nome,elemento.email))
    }
)})