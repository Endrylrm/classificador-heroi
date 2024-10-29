let heroi = {
  nome: "Endryl",
  xp: 8500,
  nivel: "",
};

function classificarNivelHeroi(xp) {
  let nivel = "";

  if (xp <= 1000) {
    nivel = "Ferro";
  } else if (xp <= 2000) {
    nivel = "Bronze";
  } else if (xp <= 5000) {
    nivel = "Prata";
  } else if (xp <= 7000) {
    nivel = "Ouro";
  } else if (xp <= 8000) {
    nivel = "Platina";
  } else if (xp <= 9000) {
    nivel = "Ascendente";
  } else if (xp <= 10000) {
    nivel = "Imortal";
  } else if (xp > 10000) {
    nivel = "Radiante";
  } else {
    console.error("Não é um valor válido!!!");
  }

  return nivel;
}

heroi.nivel = classificarNivelHeroi(heroi.xp);

if (heroi.nome === "") {
  console.error("Não possuí o nome do herói.");
} else if (heroi.nivel === "") {
  console.error("Não possuí o nível de herói.");
} else {
  console.log(`O Herói de nome ${heroi.nome} está no nível de ${heroi.nivel}`);
}
