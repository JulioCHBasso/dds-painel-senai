
tempo();
carregarAulas();
carregarImagens();



function tempo() {


    const horario = document.getElementById('horario');
    const hoje = document.getElementById("hoje");
    let data = new Date;
    let hora = data.getHours();
    let minuto = data.getMinutes();
    let segundos = data.getSeconds();
    let dia = data.getDay();
    const semana = ["Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira",
        "Sexta-Feira", "Sabado"]
    const bom = [" - Bom Dia", " - Boa Tarde", " - Boa Noite"]



    hora = tempoHora(hora);
    minuto = tempoHora(minuto);
    segundos = tempoHora(segundos);
    let i = boasManeira(hora);

    horario.innerHTML = hora + ":" + minuto + ":" + segundos;
    hoje.innerHTML = semana[dia] + bom[i];


    setTimeout(tempo, 1000);
}

function boasManeira(h) {
    if (h < 18) {
        return 1;

    } else if (h < 12) {
        return 0;
    } else {
        return 1;
    }

}

function tempoHora(h) {
    if (h < 10) {
        h = "0" + h;
    }
    return h;

}

function carregarAulas() {
    const aulas = [
        {
            id: 1,
            inicio: "13:30",
            fim: "17:30",
            turma: "HTC DDS-3-16",
            instrutor: "jefrey Jones",
            uc: "Desenvolvimento Sistema",
            ambiente: "LAB-5106"
        },
        {
            id: 2,
            inicio: "13:30",
            fim: "17:30",
            turma: "HTC DDS-3-16",
            instrutor: "Julio Basso",
            uc: "Desenvolvimento Sistema",
            ambiente: "LAB-5106"
        },
        {
            id: 3,
            inicio: "13:30",
            fim: "17:30",
            turma: "HTC DDS-3-16",
            instrutor: "Ramon ",
            uc: "Desenvolvimento Sistema",
            ambiente: "LAB-5106"
        }


    ]

    const tabelaAulas = document.getElementById('tabelaAula')
    let elementosTabela = ""
    for (let i = 0; i < aulas.length; i++) {
        elementosTabela += '<tr>'
        elementosTabela += '<td>' + aulas[i].inicio.toUpperCase() + '</td>'
        elementosTabela += '<td>' + aulas[i].fim.toUpperCase() + '</td>'
        elementosTabela += '<td>' + aulas[i].turma.toUpperCase() + '</td>'
        elementosTabela += '<td>' + aulas[i].instrutor.toUpperCase() + '</td>'
        elementosTabela += '<td>' + aulas[i].uc.toUpperCase() + '</td>'
        elementosTabela += '<td>' + aulas[i].ambiente.toUpperCase() + '</td>'
        elementosTabela += '</tr>'
    }
    tabelaAulas.innerHTML += elementosTabela
}

function carregarImagens() {
    const lateral = document.getElementById("lateral");

    const imagens = [
        {
            id: 1,
            endereco: "img/02.jpg",
            alt: "300 vagas de curso"
        },
        {
            id: 2,
            endereco: "img/03.png",
            alt: "Cursos Gratuitos"
        }
        
    ]
    for (let i = 0; i < imagens.length; i++) {
        let div = document.createElement('div')
        div.className = "imganum"
        let img = document.createElement('img')
        img.src = imagens[i].endereco
        img.alt = imagens[i].alt
        //img.className = "imganum"
        div.appendChild(img)
        lateral.appendChild(div)
    }

}