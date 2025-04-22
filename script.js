let div = document.getElementById("mascara");
let resultado = document.getElementById("resultado");
resultado.className = "uppercase mb-[300px]";
let tipo = document.getElementById("tipo");

//encerrar
let encerrarHeader = `
    * ENCERRAMENTO DO REPARO * <br>
    &&& MAMINFO <br>
    MSG DE ENCERRAMENTO <br>`;
let encerrarList = [
  "NUMERO DO RAT: ",
  "NOME DO TECNICO: ",
  "NOME E CONTATO DO RECLAMANTE QUE CONFIRMA NORMALIZACAO: ",
  "PROBLEMA ENCONTRADO: ",
  "CAUSA RAIZ: ",
  "ACAO CORRETIVA EXECUTADA: ",
];

//repassar
let repassarHeader = `MASCARA DE REPASSE <br>
FAVOR PREECHER A MASCARA ANTES DE PASSAR PARA O POSTO PARC2 <br>

**********<br>`;

let repassarList = [
  "CIRCUITO ACESSO: ",
  "CIRCUITO PLUS: ",
  "CLIENTE: ",
  "ENDERECO: ",
  "EQUIPAMENTO: ",
  "MOTIVO DE REPASSE: ",
];

//agendar
let agendarHeader = "MIGRAÇÃO DA TELEMONT, FAVOR SEGUIR COM AGENDAMENTO <br>";
let agendarList = [
  "BA: ",
  "CIRCUITO ACESSO: ",
  "CIRCUITO PLUS: ",
  "CLIENTE: ",
  "ENDERECO: ",
  "MUNICIPIO/ESTADO: ",
  "CEP: ",
  "EQUIPAMENTO: ",
  "ESCOPO: ",
  "VALIDACAO: ",
];

function valor() {
  if (tipo.value == "encerrar") {
    let encerrar = document.createElement("form");
    encerrar.className = "flex flex-col";
    encerrarList.forEach((e, i) => {
      encerrar.innerHTML += `<p class='text-black'>${e}</p> <input class='bg-slate-300 border-1 border-slate-400 p-1 w-[300px]' type='text' id='encerrar${i}'>`;
    });
    encerrar.innerHTML +=
      "<input class='bg-slate-500 border-1 border-slate-400 p-1 w-[300px] mt-5 mb-5' onclick='formatar()' type='button' value='formatar'/>";
    div.appendChild(encerrar);
  }

  if (tipo.value == "repassar") {
    let repassar = document.createElement("form");
    repassar.className = "flex flex-col";
    repassarList.forEach((e, i) => {
      repassar.innerHTML += `<p class='text-black'>${e}</p> <input class='bg-slate-300 border-1 border-slate-400 p-1 w-[300px]' type='text' id='repassar${i}'>`;
    });
    repassar.innerHTML +=
      "<input class='bg-slate-500 border-1 border-slate-400 p-1 w-[300px] mt-5 mb-5' onclick='formatar()' type='button' value='formatar'/>";
    div.appendChild(repassar);
  }

  if (tipo.value == "agendamento") {
    let agendar = document.createElement("form");
    agendar.className = "flex flex-col";
    agendarList.forEach((e, i) => {
      agendar.innerHTML += `<p class='text-black'>${e}</p> <input class='bg-slate-300 border-1 border-slate-400 p-1 w-[300px]' type='text' id='agendar${i}'>`;
    });
    agendar.innerHTML +=
      "<input class='bg-slate-500 border-1 border-slate-400 p-1 w-[300px] mt-5 mb-5' onclick='formatar()' type='button' value='formatar'/>";
    div.appendChild(agendar);
  }
}

function formatar() {
  if (tipo.value == "encerrar") {
    resultado.innerHTML = encerrarHeader;
    encerrarList.forEach((e, i) => {
      let itemValue = document.getElementById(`encerrar${i}`).value;
      resultado.innerHTML += `${e} ${removerAcentos(itemValue)}<br>`;
    });
  }
  if (tipo.value == "repassar") {
    resultado.innerHTML = repassarHeader;
    repassarList.forEach((e, i) => {
      let itemValue = document.getElementById(`repassar${i}`).value;
      resultado.innerHTML += `${e} ${removerAcentos(itemValue)}<br>`;
    });
    resultado.innerHTML += "**********<br>";
  }
  if (tipo.value == "agendamento") {
    resultado.innerHTML = agendarHeader;
    agendarList.forEach((e, i) => {
      let itemValue = document.getElementById(`agendar${i}`).value;
      resultado.innerHTML += `${e} ${removerAcentos(itemValue)}<br>`;
    });
  }
}

function removerAcentos(texto) {
  return texto
    .normalize("NFD") // separa os acentos das letras
    .replace(/[\u0300-\u036f]/g, "") // remove os acentos
    .replace(/ç/g, "c") // trata o ç minúsculo
    .replace(/Ç/g, "C"); // trata o Ç maiúsculo
}

function copy(e) {
  const tempInput = document.createElement("textarea");
  tempInput.value = e.innerText || e.textContent;
  document.body.appendChild(tempInput);

  tempInput.select();
  document.execCommand("copy");
  document.body.removeChild(tempInput);

  alert("Copiado");
}
