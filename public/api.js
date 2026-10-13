const divalunos = document.getElementById("alunos");

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
obterAlunos();