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

## ▶️ Como Rodar o Projeto

```bash
# Instalar dependências
npm install

# Rodar ambiente de desenvolvimento
npm run dev

# Build para produção
npm run build

