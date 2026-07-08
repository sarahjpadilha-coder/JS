const alunos = [
    { nome: "Ana", nota: 8.5 },
    { nome: "Bruno", nota: 4.0 },
    { nome: "Carla", nota: 7.0 },
    { nome: "Diego", nota: 5.5 },
    { nome: "Elena", nota: 9.5 },
    { nome: "Felipe", nota: 6.0 }
  ];
  
  let soma = 0;
  let aprovados = 0;
  let maiorNota = alunos[0].nota;
  let melhorAluno = alunos[0].nome;
  
  for (let i = 0; i < alunos.length; i++) {
  
      if (alunos[i].nota >= 7) {
          console.log(alunos[i].nome + " - Aprovado");
          aprovados++;
      } else if (alunos[i].nota >= 5) {
          console.log(alunos[i].nome + " - Recuperação");
      } else {
          console.log(alunos[i].nome + " - Reprovado");
      }
  
      soma += alunos[i].nota;
  
      if (alunos[i].nota > maiorNota) {
          maiorNota = alunos[i].nota;
          melhorAluno = alunos[i].nome;
      }
  }
  
  let media = soma / alunos.length;
  
  console.log("Média da turma:", media.toFixed(2));
  console.log("Quantidade de aprovados:", aprovados);
  console.log("Aluno com a maior nota:", melhorAluno);
  console.log("Maior nota:", maiorNota);