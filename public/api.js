const divalunos = document.getElementById("alunos");

const botaoCriarAluno = document.getElementById("criarAluno");

botaoCriarAluno.addEventListener("click", criaAluno);

console.log("div dos alunos : "  +  divalunos);
console.log(divalunos);

async function obterAlunos() {
    const response = await fetch("http://localhost:3000/alunos");
    const alunos = await response.json();
    console.log(alunos);
    alunosjson = JSON.stringify(alunos);
    console.log(alunosjson);
    divalunos.innerHTML = "";

    alunos.forEach(aluno => {
        const novop = document.createElement("p");
        const novob = document.createElement("button");
        novob.textContent = "Apagar";
        novob.dataset.id=aluno.id;
        novob.addEventListener("click", apagarAluno)
        novop.textContent = aluno.nome + " " + aluno.cursoId;
        novop.appendChild(novob);
        divalunos.appendChild(novop)
    });
    return alunos;
}

async function apagarAluno(evento) {
    oBotao = evento.target;
    console.log(oBotao.dataset.id);
    const aUrl = `http://localhost:3000/alunos/${oBotao.dataset.id}`;
    const response = await fetch(aUrl, {"method" : "DELETE"});
    console.log(response);
    obterAlunos();
    return;
}

async function criaAluno(evento) {
    const nomeAluno = document.getElementById("nomeAluno").value;
    const cursoAluno = document.getElementById("cursoAluno").value;
    const idadeAluno = document.getElementById("idadeAluno").value;
    console.log(nomeAluno, cursoAluno, idadeAluno);

    const novoaluno = {
        nome: nomeAluno,
        cursoId: cursoAluno,
        idade: idadeAluno
    }

    const jsonAluno = JSON.stringify(novoaluno);
    console.log(jsonAluno)

    const response = await fetch("http://localhost:3000/alunos", {
        "method" : "POST",
        "body" : jsonAluno,
        "headers" : {
            "Content-Type" : "application/json"
        }
    });
    obterAlunos();

}
obterAlunos();