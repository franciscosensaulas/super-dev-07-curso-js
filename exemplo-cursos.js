let cursos = [
    {
        "id": 1,
        "nome": "Fundamentos de HTML5",
        "sigla": "HT5",
        "cargaHoraria": 20,
        "meet": null,
        "tecnologia": "html",
        "link": "https://www.proway.com.br/curso/fundamentos-de-html5"
    },
    {
        "id": 2,
        "nome": "HTML Módulo Avançado",
        "sigla": "HT1",
        "cargaHoraria": 20,
        "meet": null,
        "tecnologia": "html",
        "link": "https://www.proway.com.br/curso/html-modulo-avancado"
    },
    {
        "id": 3,
        "nome": "Fundamentos em CSS",
        "sigla": "CSS",
        "cargaHoraria": 20,
        "meet": null,
        "tecnologia": "css",
        "link": "https://www.proway.com.br/curso/fundamentos-em-css"
    },
    {
        "id": 4,
        "nome": "CSS Módulo Avançado",
        "sigla": "CS1",
        "cargaHoraria": 20,
        "meet": null,
        "tecnologia": "css",
        "link": "https://www.proway.com.br/curso/css-modulo-avancado"
    },
    {
        "id": 5,
        "nome": "JavaScript, jQuery e Ajax.",
        "sigla": "WJJ",
        "cargaHoraria": 20,
        "meet": null,
        "tecnologia": "js",
        "link": "https://www.proway.com.br/curso/javascript-jquery-e-ajax"
    },
    {
        "id": 6,
        "nome": "JavaScript Avançado",
        "sigla": "JSA",
        "cargaHoraria": 20,
        "meet": "https://meet.google.com/efj-fhbd-dam",
        "tecnologia": "js",
        "link": "https://www.proway.com.br/curso/javascript-avancado"
    },
    {
        "id": 7,
        "nome": "TypeScript",
        "sigla": "TYS",
        "cargaHoraria": 20,
        "meet": null,
        "tecnologia": "ts",
        "link": "https://www.proway.com.br/curso/typescript"
    },
    {
        "id": 8,
        "nome": "Introdução à Lógica de Programação",
        "sigla": "LA1",
        "cargaHoraria": 32,
        "meet": null,
        "tecnologia": "lógica",
        "link": "https://www.proway.com.br/curso/introducao-a-logica-de-programacao"
    },
    {
        "id": 9,
        "nome": "Lógica de Programação e Algoritmos II",
        "sigla": "LAA",
        "cargaHoraria": 28,
        "meet": null,
        "tecnologia": "lógica",
        "link": "https://www.proway.com.br/curso/logica-de-programacao-e-algoritmos-ii"
    },
    {
        "id": 10,
        "nome": "Angular",
        "sigla": "AJS",
        "cargaHoraria": 20,
        "meet": null,
        "tecnologia": "angular",
        "link": "https://www.proway.com.br/curso/angular"
    },
    {
        "id": 11,
        "nome": "Python - Fundamentos",
        "sigla": "PY1",
        "cargaHoraria": 20,
        "meet": null,
        "tecnologia": "python",
        "link": "https://www.proway.com.br/curso/python-fundamentos"
    },
    {
        "id": 12,
        "nome": "Python Trabalhando com Banco de Dados",
        "sigla": "PY2",
        "cargaHoraria": 28,
        "meet": null,
        "tecnologia": "python",
        "link": "https://www.proway.com.br/curso/python-trabalhando-com-banco-de-dados"
    },
    {
        "id": 13,
        "nome": "Aplicações Web com Python",
        "sigla": "PY3",
        "cargaHoraria": 49,
        "meet": null,
        "tecnologia": "python",
        "link": "https://www.proway.com.br/curso/aplicacoes-web-com-python"
    },
    {
        "id": 14,
        "nome": "Fundamentos C# 9.0",
        "sigla": "LC1",
        "cargaHoraria": 28,
        "meet": null,
        "tecnologia": "c#",
        "link": "https://www.proway.com.br/curso/fundamentos-c-9-0"
    },
    {
        "id": 15,
        "nome": "Programação em C# (9.0) .Net 6.0",
        "sigla": "N51",
        "cargaHoraria": 40,
        "meet": null,
        "tecnologia": "c#",
        "link": "https://www.proway.com.br/curso/programacao-em-c-9-0-net-6-0"
    },
    {
        "id": 16,
        "nome": "Programando em ASP.Net Core 6.0 C#",
        "sigla": "N52",
        "cargaHoraria": 40,
        "meet": null,
        "tecnologia": "c#",
        "link": "https://www.proway.com.br/curso/programando-em-asp-net-core-6-0"
    },
    {
        "id": 17,
        "nome": "MySQL",
        "sigla": "MSQ",
        "cargaHoraria": 28,
        "meet": null,
        "tecnologia": "bd",
        "link": "https://www.proway.com.br/curso/mysql"
    },
    {
        "id": 18,
        "nome": "SuperDev 5ª Edição",
        "sigla": "SUD5",
        "cargaHoraria": 20,
        "meet": null,
        "tecnologia": "python",
        "link": null
    },
    {
        "id": 19,
        "nome": "Java Fundamentos",
        "sigla": "JVA",
        "cargaHoraria": 28,
        "meet": null,
        "tecnologia": "java",
        "link": "https://www.proway.com.br/curso/java-fundamentos"
    },
    {
        "id": 20,
        "nome": "Linguagem de Programação em JAVA",
        "sigla": "LPJ",
        "cargaHoraria": 49,
        "meet": null,
        "tecnologia": "java",
        "link": "https://www.proway.com.br/curso/linguagem-de-programacao-em-java"
    },
    {
        "id": 21,
        "nome": "SuperDev 7ª Edição",
        "sigla": "SUD7",
        "cargaHoraria": 20,
        "meet": "https://meet.google.com/exc-xhhe-oec",
        "tecnologia": "python",
        "link": null
    },
    {
        "id": 22,
        "nome": "CP Márcio",
        "sigla": "CPM",
        "cargaHoraria": 20,
        "meet": "https://meet.google.com/baz-wnuy-ktq",
        "tecnologia": "python",
        "link": null
    }
];

let nomes = cursos.map(curso => curso.sigla + " => " +curso.nome);
console.log(nomes);
