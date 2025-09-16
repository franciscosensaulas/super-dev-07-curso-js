function exemploDadosPaciente(){
    // Utilzando multiplas variáveis
    let tipoSanguineo = "A+";
    let cpf = "102.123.129-20";
    let idade = 20;
    let nome = "Maria";
    console.log(`Nome: ${nome}
        Tipo Sanguíneo: ${tipoSanguineo}
        Idade: ${idade}
        CPF: ${cpf}`);
    
    // Criando um objeto para armazenar várias características
    let pacienteMaria = {
        tipoSanguineo: "A+",
        cpf: "102.123.129-20",
        idade: 20,
        nome: "Maria"
    };
    // Alterar a idade da maria
    pacienteMaria.idade = 21;
    console.log(`Nome: ${pacienteMaria.nome}
        Tipo Sanguíneo: ${pacienteMaria.tipoSanguineo}
        Idade: ${pacienteMaria.idade}
        CPF: ${pacienteMaria.cpf}`);
}

/*
 Criar uma função exercicioDadosJogo
    Criar as seguintes variáveis: nome, genero, dataLancamento (string)
    Apresentar as variáveis
    Criar um objeto chamado jogo com os atributos (nome, genero, dataLancamento)
    Apresentar o objeto por completo
    Adicionar os seguintes atributos no objeto do jogo (publisher, preco)
    Apresentar o objeto por completo

    let pokemon = {}
    pokemon.nome = "Pikachu"
    pokemon.tipo = "Elétrico"
*/

function exemploObjetoEmVetor(){
    let alunos = [];

    let aluno1 = {};
    aluno1.nome = prompt("Digite o nome do Aluno");
    aluno1.nota1 = parseFloat(prompt("Digite a nota 1"))
    aluno1.nota2 = parseFloat(prompt("Digite a nota 2"))
    aluno1.nota3 = parseFloat(prompt("Digite a nota 3"))
    // aluno1.media = (aluno1.nota1 + aluno1.nota2 + aluno1.nota3) / 3;
    aluno1.media = calcularMedia(aluno1);
    alunos.push(aluno1);
    
    let aluno2 = {};
    aluno2.nome = prompt("Digite o nome do Aluno 2");
    aluno2.nota1 = parseFloat(prompt("Digite a nota 1"))
    aluno2.nota2 = parseFloat(prompt("Digite a nota 2"))
    aluno2.nota3 = parseFloat(prompt("Digite a nota 3"))
    aluno2.media = calcularMedia(aluno2);
    alunos.push(aluno2);

    console.table(alunos);
}

function calcularMedia(aluno){
    const media = (aluno.nota1 + aluno.nota2 + aluno.nota3) / 3;
    return media
}

/*
Criar uma lista de colaboradores
    Solicitar os dados armazenando em objetos
    Atributos: nome, valor hroa, quantidade de horas
    Criar uma função para calcular o salario Bruto, armazenando no objeoto
    Apresentar os objetos com o console.table
*/
