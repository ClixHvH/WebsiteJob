# Jorge Peixoto - Remodelações & Construção

## Website Moderno e Responsivo

Um site profissional, moderno e totalmente responsivo para Jorge Peixoto - Remodelações & Construção, desenvolvido com **HTML5**, **CSS3** e **JavaScript vanilla** (sem dependências externas).

---

## 📋 Características

✅ **Design Moderno e Profissional**
- Layout contemporâneo com tipografia elegante
- Paleta de cores sofisticada (cinzento escuro + laranja accent)
- Responsivo em todos os dispositivos

✅ **Funcionalidades Interativas**
- Navegação fluida com scroll suave
- Menu mobile responsivo com hamburger
- Slider antes/depois com drag interativo
- Formulário de contacto funcional
- Animações suaves e transições

✅ **Otimizado para Performance**
- Sem dependências externas ou frameworks
- Código CSS e JavaScript minimalista
- Carregamento rápido
- Compatível com todos os navegadores modernos

✅ **SEO Friendly**
- Estrutura HTML semântica
- Meta tags otimizadas
- URLs amigáveis

---

## 📁 Estrutura de Ficheiros

```
jorge_peixoto_moderno/
├── index.html              # Página principal
├── css/
│   └── style.css          # Estilos completos
├── js/
│   └── script.js          # Funcionalidades JavaScript
├── images/
│   ├── kitchen-before.jpg
│   ├── kitchen-after.jpg
│   ├── bathroom-before.jpg
│   ├── bathroom-after.jpg
│   ├── living-before.jpg
│   └── living-after.jpg
└── README.md              # Este ficheiro
```

---

## 🚀 Como Usar

### 1. Abrir o Site
Simplesmente abra o ficheiro `index.html` num navegador web:
- Clique duplo em `index.html`
- Ou arraste o ficheiro para o navegador
- Ou use um servidor local (recomendado)

### 2. Usar um Servidor Local (Recomendado)

**Com Python 3:**
```bash
cd jorge_peixoto_moderno
python -m http.server 8000
```
Depois acesse: `http://localhost:8000`

**Com Node.js (http-server):**
```bash
npx http-server
```

**Com PHP:**
```bash
php -S localhost:8000
```

---

## 🎨 Personalização

### Alterar Cores
Edite as variáveis CSS no início do ficheiro `css/style.css`:

```css
:root {
    --primary: #1a1a1a;        /* Cor principal (cinzento escuro) */
    --accent: #ea580c;         /* Cor de destaque (laranja) */
    --text: #333333;           /* Cor do texto */
    --bg-light: #f9fafb;       /* Fundo claro */
    /* ... outras cores ... */
}
```

### Alterar Informações de Contacto
Edite o ficheiro `index.html` e procure pela secção "Contact Section":
- Telefone: `+351 XXX XXX XXX`
- Email: `info@jorgepeixoto.pt`
- Localização: `Portugal`

### Alterar Imagens
Substitua as imagens na pasta `images/`:
- `kitchen-before.jpg` / `kitchen-after.jpg`
- `bathroom-before.jpg` / `bathroom-after.jpg`
- `living-before.jpg` / `living-after.jpg`

---

## 📱 Responsividade

O site é totalmente responsivo e funciona perfeitamente em:
- ✅ Desktop (1200px+)
- ✅ Tablet (768px - 1199px)
- ✅ Mobile (até 767px)

---

## 🔧 Funcionalidades JavaScript

### Navegação
- Menu mobile com hamburger toggle
- Atualização automática do link ativo ao scroll
- Smooth scroll para âncoras

### Slider Antes/Depois
- Drag interativo para comparar imagens
- Click para mover o slider
- Touch support para mobile

### Formulário de Contacto
- Validação de campos obrigatórios
- Validação de email
- Mensagem de sucesso

### Animações
- Fade-in ao carregar
- Hover effects nos cards
- Transições suaves

---

## 🌐 Compatibilidade

- ✅ Chrome (versão recente)
- ✅ Firefox (versão recente)
- ✅ Safari (versão recente)
- ✅ Edge (versão recente)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

---

## 📝 Notas Importantes

1. **Imagens**: Certifique-se de que as imagens estão na pasta `images/` com os nomes corretos
2. **Fontes**: O site usa Google Fonts (Playfair Display e Poppins) - requer conexão com internet
3. **Formulário**: Atualmente mostra uma mensagem de sucesso. Para enviar emails, integre um serviço como Formspree ou EmailJS
4. **Servidor Local**: Recomenda-se usar um servidor local para melhor performance e compatibilidade

---

## 🔐 Segurança

- Sem dependências externas (reduz vulnerabilidades)
- Validação básica de formulário no cliente
- Recomenda-se validação no servidor para dados sensíveis

---

## 📧 Integração de Email

Para tornar o formulário funcional, pode integrar serviços como:

### Opção 1: Formspree
1. Acesse https://formspree.io/
2. Crie uma conta e um novo formulário
3. Copie o endpoint fornecido
4. Edite o `index.html` e altere o `action` do formulário

### Opção 2: EmailJS
1. Acesse https://www.emailjs.com/
2. Configure a conta e o serviço de email
3. Inclua o script do EmailJS no HTML
4. Configure no `script.js`

---

## 📄 Licença

Este website é propriedade de Jorge Peixoto - Remodelações & Construção.

---

## 📞 Suporte

Para questões sobre o site, contacte Jorge Peixoto através dos dados de contacto no site.

---

**Desenvolvido com ❤️ - Moderno, Profissional e Responsivo**
