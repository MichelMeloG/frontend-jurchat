# JurChat - Análise Jurídica Automatizada

## 📋 Sobre o Projeto

JurChat é uma aplicação web desenvolvida em React que permite aos usuários fazer upload de documentos jurídicos em PDF e receber análises automatizadas em linguagem simples. A aplicação oferece um chat inteligente para esclarecer dúvidas sobre os documentos analisados.

## 🚀 Funcionalidades

- **Upload de Documentos**: Upload de arquivos PDF de até 50MB
- **Análise Automatizada**: Tradução de documentos jurídicos para linguagem simples
- **Resumo de Cláusulas**: Resumo estruturado das principais seções do documento
- **Chat Inteligente**: Assistente AI para responder perguntas sobre o documento
- **Interface Responsiva**: Design adaptado para desktop e mobile
- **Histórico de Documentos**: Armazenamento local dos documentos analisados

## 🛠️ Tecnologias Utilizadas

### Frontend
- **React** 18.3.1 - Biblioteca JavaScript para criação de interfaces
- **TypeScript** 5.6.2 - Superset do JavaScript com tipagem estática
- **React Router DOM** 6.x - Roteamento para aplicações React
- **Vite** 6.0.3 - Build tool e servidor de desenvolvimento

### Ferramentas de Desenvolvimento
- **ESLint** - Linting e análise de código
- **@vitejs/plugin-react-swc** - Plugin React com SWC para Vite

## 📦 Dependências

### Dependências de Produção
```json
{
  "react": "^18.3.1",
  "react-dom": "^18.3.1",
  "react-router-dom": "^6.28.0"
}
```

### Dependências de Desenvolvimento
```json
{
  "@eslint/js": "^9.15.0",
  "@types/react": "^18.3.12",
  "@types/react-dom": "^18.3.1",
  "@vitejs/plugin-react-swc": "^3.5.0",
  "eslint": "^9.15.0",
  "eslint-plugin-react-hooks": "^5.0.0",
  "eslint-plugin-react-refresh": "^0.4.14",
  "globals": "^15.12.0",
  "typescript": "~5.6.2",
  "typescript-eslint": "^8.15.0",
  "vite": "^6.0.3"
}
```

## 🔧 Instalação e Configuração

### Pré-requisitos
- Node.js (versão 18 ou superior)
- npm ou yarn

### Passos para instalação

1. **Clone o repositório**
```bash
git clone [url-do-repositorio]
cd frontend-jurchat
```

2. **Instale as dependências**
```bash
npm install
```

3. **Execute o projeto em modo de desenvolvimento**
```bash
npm run dev
```

4. **Acesse a aplicação**
Abra seu navegador e acesse: `http://localhost:5173`

## 📝 Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Gera build de produção
- `npm run preview` - Preview do build de produção
- `npm run lint` - Executa o linter

## 🏗️ Estrutura do Projeto

```
src/
├── components/          # Componentes reutilizáveis
│   ├── Navbar.tsx      # Barra de navegação
│   └── Footer.tsx      # Rodapé
├── pages/              # Páginas da aplicação
│   ├── Home.tsx        # Página inicial
│   ├── Upload.tsx      # Página de upload
│   └── Analysis.tsx    # Página de análise
├── styles/             # Arquivos de estilo CSS
│   ├── global.css      # Estilos globais
│   ├── upload.css      # Estilos da página de upload
│   └── analysis.css    # Estilos da página de análise
└── App.tsx            # Componente principal
```

## 🎨 Design System

### Paleta de Cores
- **Primária**: #7c83e7 (Azul violeta)
- **Secundária**: #00c853 (Verde)
- **Background**: #181A1B (Escuro)
- **Texto**: #e0e0e0 (Cinza claro)

### Componentes de UI
- Design dark mode
- Interface moderna e minimalista
- Animações suaves
- Feedback visual para interações

## 🔒 Funcionalidades de Segurança

- Upload apenas de arquivos PDF
- Validação de tamanho de arquivo (máx. 50MB)
- Sanitização de inputs
- Processamento seguro de arquivos

## 📱 Responsividade

A aplicação foi desenvolvida seguindo o conceito "mobile-first" e é totalmente responsiva, adaptando-se a:
- Smartphones (320px+)
- Tablets (768px+)
- Desktops (1024px+)
- Telas grandes (1200px+)

## 🚀 Deploy

### Build de Produção
```bash
npm run build
```

### Estrutura de Deploy
O build gera uma pasta `dist/` que pode ser servida por qualquer servidor web estático.

## 🔄 Próximas Funcionalidades

- [ ] Integração com API real de análise de documentos
- [ ] Sistema de autenticação de usuários
- [ ] Dashboard administrativo
- [ ] Suporte a múltiplos idiomas
- [ ] Análise de documentos em outros formatos
- [ ] Sistema de notificações

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 📞 Contato

Para dúvidas ou sugestões, entre em contato através do email: contato@jurchat.com

---

**Desenvolvido com ❤️ para simplificar a análise de documentos jurídicos**
