const Aviso = require('../domain/aviso.entity');

class ApiService {
  constructor(avisoRepository) {
    this.avisoRepository = avisoRepository;
    this.requestCount = 0;
  }

  getStatus() {
    this.requestCount++;
    return {
      status: 'Online',
      message: 'API executando com sucesso',
      requests: this.requestCount,
    };
  }

  getEnvironmentInfo() {
    return {
      environment_message: process.env.APP_MESSAGE || 'Mensagem padrão (APP_MESSAGE não definida)',
      port: process.env.PORT || 4000,
    };
  }

  getAviso() {
    const conteudo = this.avisoRepository.read();
    return new Aviso(conteudo);
  }
}

module.exports = ApiService;
