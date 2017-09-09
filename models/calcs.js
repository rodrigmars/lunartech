  function TotalVelocidade(valor) {
    return null;
  }

  function TotalHoras() {
    return (150)
  }

  function Acesso(profile) {

    return (profile.coordenadas == "A1521324") ? true : false;
  }

  module.exports = {
    totalVelocidade: TotalVelocidade,
    totalHoras: TotalHoras,
    acesso: Acesso
  };
