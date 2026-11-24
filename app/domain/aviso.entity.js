class Aviso {
  constructor(conteudo) {
    this.aviso = typeof conteudo === 'string' && conteudo.trim().length > 0
      ? conteudo.trim()
      : 'Aviso vazio.';
  }
}

module.exports = Aviso;
