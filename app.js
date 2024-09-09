function pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value

    // Se o campo de pesquisa for um string sem nada
    if (campoPesquisa == "") {
        section.innerHTML = "<p class='sem-resultados'>Sem palavra de busca</p>"
        return 
    }

    campoPesquisa = campoPesquisa.toLowerCase()
  
    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";
  
    // Itera sobre cada item (dado) da lista de dados
    for (let dado of dados) {
    // Para que a pesquisa possa ser em letra minuscula ou maiuscula
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()


      // se o dado titulo includes campoPesquisa
      if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {

      // Constrói o HTML para cada resultado, formatando os dados do objeto 'dado'
        resultados += `
       <div class="item-resultado">
    <div class="coluna-esquerda">
      <img src="complementos/${dado.imagem}" alt="${dado.titulo}">
    </div>
    <div class="coluna-direita">
      <h2><a href="${dado.link}" target="_blank">${dado.titulo}</a></h2>
      <p class="descricao-meta">${dado.descricao}</p>
      <a href="${dado.link1}" target="_blank">Perfil</a>
    </div>
  </div>
`;
      }
          // então, faça...  
     
    }
    
    // Se o campo de pesquisa for um string diferente dos dados
    if (!resultados) {
       resultados = "<p class='nao-encontrado'>Não localizado</p>"
    }
  
    // Atribui o HTML construído à seção de resultados, atualizando a página
    section.innerHTML = resultados;
  }
  