# language: pt

Funcionalidade: Visualizar detalhes do plano
             Como usuário
             Quero poder acessar os detalhes do plano que desejo comprar
             Para que possa ver o que o plano me oferece e comparar os planos entre si

Cenário: Visualizar os detalhes de um plano
    Dado que estou na tela inicial de pesquisa de planos
    Quando eu clico no botão 'saiba mais' de um dos planos disponíveis
    Então sou direcionado para uma tela contendo os detalhes do plano que escolhi
    E as opções de assinar o plano ou ver os demais planos disponíveis
    E os benefícios disponíveis para o plano selecionado