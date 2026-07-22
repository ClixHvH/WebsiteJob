# Jorge Peixoto - Remodelações & Construção

## Website Moderno e Responsivo

Este é o website profissional para Jorge Peixoto - Remodelações & Construção, melhorado com novas funcionalidades de galeria e um formulário de contacto funcional.

---

## 📋 Novas Funcionalidades

✅ **Galeria Avançada**
- Novas imagens de "Antes e Depois" para Cozinhas, Casas de Banho, Salas, Escadarias e Exteriores.
- Secção de vídeos de demonstração integrada na galeria.
- Todas as imagens e vídeos são armazenados localmente.

✅ **Formulário de Contacto Funcional**
- Implementado em **Português de Portugal**.
- Campos obrigatórios: Nome, Telemóvel, Localização do Trabalho e Descrição.
- Validação completa: o formulário só é enviado se todos os campos estiverem preenchidos.
- **Filtragem de Spam**: Inclui proteção "honeypot" invisível.
- **Entrega por Email**: Configurado via Formspree para entrega direta na caixa de entrada.

---

## 📧 Como Alterar o Email de Contacto

O formulário de contacto utiliza o **Formspree** para o envio de emails. Para alterar o email para onde os pedidos são enviados:

1. Abra o ficheiro `contacto.html`.
2. Procure a linha que contém o formulário:
   ```html
   <form action="https://formspree.io/f/jorgepeixotojobs@gmail.com" method="POST" class="contact-form">
   ```
3. Substitua `jorgepeixotojobs@gmail.com` pelo seu novo endereço de email.
4. Ao submeter o formulário pela primeira vez com o novo email, o Formspree enviará um email de confirmação para esse endereço. **Deve clicar no link de confirmação para ativar o formulário.**

---

## 📁 Estrutura de Ficheiros Atualizada

```
WebsiteJob-main/
├── index.html              # Página principal
├── galeria.html            # Galeria com fotos e vídeos
├── servicos.html           # Descrição dos serviços
├── contacto.html           # Formulário de contacto funcional
├── css/
│   └── style.css          # Estilos (inclui novos estilos de form e galeria)
├── js/
│   └── script.js          # Funcionalidades JavaScript
├── images/                 # Imagens locais (Antes/Depois, Logo)
├── videos/                 # Vídeos locais da galeria
└── README.md              # Este ficheiro
```

---

## 🚀 Como Usar

Simplesmente abra o ficheiro `index.html` num navegador web. Para que o formulário de contacto funcione corretamente após a publicação no GitHub Pages, certifique-se de que o email está confirmado no Formspree.

---

## 📄 Licença

Este website é propriedade de Jorge Peixoto - Remodelações & Construção.

**Desenvolvido com Foco em Qualidade e Profissionalismo.**
