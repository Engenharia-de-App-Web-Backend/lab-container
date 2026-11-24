# Laboratório 02 — Portas, Variáveis de Ambiente e Volumes (Bind Mounts)

**Aluno(a):** [Seu Nome Completo]  
**Matrícula:** [Sua Matrícula]  
**Repositório:** `lab-nome_do_aluno/lab02`

---

## Build da Imagem

Comando executado:
```bash
docker build -t api-node-classroom:1.1 .
```

**Evidência (saída do terminal ou print):**
> *(Cole aqui a saída do `docker build` e do `docker images`)*

---

## Passo 1: Mapeamento de Portas

**Comando executado (`container-portas` mapeando `9090:4000`):**
```bash
# Cole aqui o comando docker run utilizado
```

**Evidência de acesso em `http://localhost:9090` (curl ou print do navegador):**
```json
// Cole aqui o retorno JSON ou insira a imagem do print
```

---

## Passo 2: Variáveis de Ambiente (Configuração Dinâmica)

### Instância de Produção (`container-prod` — porta `8081`)
**Comando executado:**
```bash
# Cole aqui o comando docker run com APP_MESSAGE="Ambiente de Produção"
```

**Retorno de `http://localhost:8081/info`:**
```json
// Cole aqui o retorno JSON ou print
```

### Instância de Testes (`container-test` — porta `8082`)
**Comando executado:**
```bash
# Cole aqui o comando docker run com APP_MESSAGE="Ambiente de Testes"
```

**Retorno de `http://localhost:8082/info`:**
```json
// Cole aqui o retorno JSON ou print
```

### Desafio Extra Opcional (`--env-file .env`)
*(Opcional — preencha caso tenha realizado)*
```bash
# Comando executado e retorno de /info
```

---

## Passo 3: Volumes e Bind Mounts

**Comando executado (`container-volume` — porta `8083`):**
```bash
# Cole aqui o comando docker run com a flag -v mapeando app/dados/aviso.txt para /usr/src/app/dados/aviso.txt
```

**1. Leitura inicial em `http://localhost:8083/aviso`:**
```json
// Cole aqui o retorno antes da edição do arquivo local
```

**2. Leitura após alteração local de `app/dados/aviso.txt` (sem reiniciar o container):**
```json
// Cole aqui o retorno atualizado em tempo real
```

---

## Passo 4: Análise Teórica e Boas Práticas (`.dockerignore`)

**Justificativa arquitetural (CI/CD, segurança e tamanho da imagem):**

1. **Risco de vazamento de credenciais (`.env` e arquivos sensíveis):**  
   *(Explique por que copiar arquivos `.env` ou dados sensíveis para dentro da imagem compromete a segurança em registries e pipelines de CI/CD.)*

2. **Bloat / Inchaço da imagem e conflitos de ambiente (`node_modules`, `dados/`):**  
   *(Explique o impacto no tempo de build/deploy, no tamanho das camadas e na portabilidade entre sistemas operacionais ao ignorar `node_modules` e dados locais.)*
