document.querySelector("button#pesquisar").addEventListener("click", pesquisar)

function pesquisar() {
  // Seleciona a seção onde os resultados serão exibidos
  let section = document.querySelector("section#resultados-pesquisa");


  // Obtém o campo HTML onde o dado de procura vai ser inserido
  let campoPesquisa = document.querySelector("input#campo-pesquisa").value
  console.log(campoPesquisa)

  // Se campoPesquisa for uma string sem nada
  if (!(campoPesquisa)) {
    section.innerHTML = `<p>Nada foi encontrado. Você precisa digitar o nome de um atleta ou esporte!</p>`
    return
  }

  campoPesquisa = campoPesquisa.toLowerCase()

  // Inicializa uma string vazia para armazenar os resultados da pesquisa
  let resultados = ""
  let titulo = ""
  let descricao = ""
  let tags = ""


  // Itera sobre cada dado na lista de dados
  for (let dado of dados) {
    titulo = dado.titulo.toLowerCase()
    descricao = dado.descricao.toLowerCase()
    tags = dado.tags.toLocaleLowerCase()

    // Se titulo includes campoPesquisa faça{}
    if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
      // Constrói o HTML para cada resultado, formatando os dados
      resultados += `
            <div class="item-resultado">
              <h2>
                <a href="#" target="_blank">${dado.titulo}</a>
              </h2>
              <p class="descricao-meta">${dado.descricao}</p>
              <a href="${dado.link}" target="_blank">Mais informações</a>
            </div>
          `;
    }
  }

  if(!(resultados)){
    resultados = "<p>Nada foi encontrado</p>"
  }


  // Atribui o HTML gerado para a seção de resultados
  section.innerHTML = resultados;
}



