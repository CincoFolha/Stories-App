# 📸 Stories Project Clone — React + Vite

Clone moderno da funcionalidade de **Stories**, inspirado em plataformas como Instagram e WhatsApp.  
Desenvolvido com **React + Vite**, totalmente no **cliente**, permitindo que o usuário publique imagens temporárias que desaparecem após 24 horas.

---

## ✨ Funcionalidades

- 🖼️ Upload de imagem com conversão automática para **base64**
- 💾 Armazenamento no **localStorage**
- ⏱️ Expiração automática dos stories após **24 horas**
- 👆 Navegação opcional por **swipe** entre stories
- 📱 Interface responsiva e inspirada em redes sociais reais
- 📏 Restrições de tamanho da imagem: **máximo 1080 x 1920px**
- 🔄 Atualização dinâmica da lista de stories

---

## 🧩 Arquitetura e Fluxo

1. O usuário clica no botão **+**  
2. Seleciona uma imagem  
3. A imagem é convertida para **base64**  
4. O story é salvo no `localStorage` com um timestamp  
5. O sistema remove stories expirados ao iniciar a aplicação  
6. A interface exibe apenas stories válidos

---

## 🛠️ Tecnologias Utilizadas

- ⚛ **React**
- ⚡ **Vite**
- 🎨 CSS Responsivo
- 🧰 Hooks e Context API

---

## 📁Estrutura do Projeto
📁 src
├── App.css                 # Estilos globais do componente raiz
├── App.jsx                 # Componente raiz da aplicação
├── index.css               # Estilos globais base
├── main.jsx                # Ponto de entrada principal (ReactDOM, Providers, etc.)

├── components              # Componentes reutilizáveis da interface
│   ├── AddStoryButton
│   │   ├── index.css       # Estilos do botão de adicionar story
│   │   └── index.jsx       # Componente AddStoryButton
│   ├── Header
│   │   ├── index.css       # Estilos do cabeçalho
│   │   └── index.jsx       # Componente Header
│   ├── ProgressBar
│   │   ├── index.css       # Estilos da barra de progresso
│   │   └── index.jsx       # Componente ProgressBar
│   ├── StoryItem
│   │   ├── index.css       # Estilos de cada item da lista de stories
│   │   └── index.jsx       # Componente StoryItem
│   ├── StoryList
│   │   ├── index.css       # Estilos da lista de stories
│   │   └── index.jsx       # Componente StoryList
│   └── StoryViewer         # Visualizador de Stories
│       ├── index.css       # Layout geral do Viewer
│       ├── index.jsx       # Componente StoryViewer
│       ├── StoryContent
│       │   ├── index.css   # Estilos do conteúdo do story
│       │   └── index.jsx   # Componente StoryContent
│       └── StoryNavigation
│           ├── index.css   # Estilos da navegação
│           └── index.jsx   # Componente StoryNavigation

├── context                 # Context API para gerenciamento global de estado
│   └── StoryContext
│       ├── StoryContext.jsx     # Provedor e contexto principal
│       └── useStoryContext.js   # Hook personalizado para acesso ao contexto

├── hooks                   # Hooks personalizados
│   ├── useImageUpload.js        # Lógica de upload e tratamento de imagens
│   ├── useStories.js            # Hook principal para manipulação de stories
│   └── useSwipeGesture.js       # Hook para detecção de gestos (swipe)

├── services                # Comunicação com serviços externos ou APIs locais
│   └── storyService.js         # Serviço de persistência/manipulação de stories

└── utils                   # Funções utilitárias
    ├── constants.js            # Constantes globais do projeto
    ├── imageProcessor.js       # Tratamento e processamento de imagens
    ├── storageManager.js       # Abstração de armazenamento
    └── timeFormatter.js        # Formatação de tempo

---

## ▶️ Como Rodar o Projeto

```bash
# Instalar dependências
npm install

# Rodar ambiente de desenvolvimento
npm run dev

# Build para produção
npm run build

