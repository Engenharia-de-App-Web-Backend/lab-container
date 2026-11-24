class ApiController {
  constructor(apiService) {
    this.apiService = apiService;
  }

  status(req, res) {
    res.json(this.apiService.getStatus());
  }

  info(req, res) {
    res.json(this.apiService.getEnvironmentInfo());
  }

  aviso(req, res) {
    res.json(this.apiService.getAviso());
  }
}

module.exports = ApiController;
