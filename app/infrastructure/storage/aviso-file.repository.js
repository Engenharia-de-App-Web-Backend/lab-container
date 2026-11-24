const fs = require('fs');
const path = require('path');

class AvisoFileRepository {
  constructor(relativePath = 'dados/aviso.txt') {
    // Resolve para /usr/src/app/dados/aviso.txt dentro do container
    this.filePath = path.resolve(process.cwd(), relativePath);
  }

  read() {
    try {
      if (fs.existsSync(this.filePath)) {
        return fs.readFileSync(this.filePath, 'utf8');
      }
      return 'O arquivo aviso.txt não foi montado no container.';
    } catch (error) {
      return 'Erro ao tentar ler o arquivo.';
    }
  }
}

module.exports = AvisoFileRepository;
