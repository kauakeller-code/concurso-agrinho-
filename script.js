function gerarCuriosidade(){

  const curiosidades = [

    "Drones conseguem identificar pragas antes mesmo que o agricultor veja o problema.",

    "Sensores inteligentes ajudam a economizar milhares de litros de água.",

    "A Inteligência Artificial pode prever mudanças climáticas no campo.",

    "Tratores autônomos já conseguem trabalhar sem motorista.",

    "A agricultura de precisão reduz desperdícios e aumenta a produtividade.",

    "Satélites ajudam agricultores a monitorar plantações em tempo real."

  ];

  const numero = Math.floor(Math.random() * curiosidades.length);

  document.getElementById("curiosidade").innerHTML =
  curiosidades[numero];
}
