function pesquisar() {
    // Seleciona a seção onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");
    console.log(section); // Loga o elemento no console para verificação

    let campoPesquisa = document.getElementById("campo-pesquisa").value

    // se campoPesquisa for uma string sem nada
    if (campoPesquisa == "") {
        section.innerHTML = "Seu jogo não foi encontrado!"
        return

    }

    campoPesquisa = campoPesquisa.toLowerCase()
  
    let resultados = ""; // Inicializa uma string vazia para armazenar os resultados
    let titulo = "";
    let descricao = "";
    let tags = "";

  
    // Itera sobre cada dado na lista de dados
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.titulo.toLowerCase()
        tags = dado.tags.toLowerCase()
        // se no dado titulo incluides  campoPesquisa 
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)){
            // cria um novo elemento
            resultados += `
            <div class="item-resultado">
              <h2>
                <a href="#" target="_blank">${dado.titulo}</a> </h2>
              <p class="descricao-meta">${dado.descricao}</p> <a href="${dado.linkloja}" target="_blank">Compre O Jogo Aqui!</a> </div>
          `;

        }
    }

    if (!resultados) {
        resultados  = "Nada Foi Encontrado!"
    }
  
    // Atribui os resultados gerados ao conteúdo da seção
    section.innerHTML = resultados;
  }