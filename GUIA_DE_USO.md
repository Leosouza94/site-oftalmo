# Guia de Uso e Edição - Site da Clínica Oftalmológica

Este documento contém instruções detalhadas sobre como usar, editar e personalizar o site da clínica oftalmológica desenvolvido com React.

## Estrutura do Projeto

O site foi desenvolvido utilizando React com TypeScript e as seguintes tecnologias:

- **React**: Biblioteca JavaScript para construção de interfaces
- **TypeScript**: Superset tipado de JavaScript
- **Tailwind CSS**: Framework CSS para estilização
- **React Router**: Biblioteca para navegação entre páginas
- **React Slick**: Biblioteca para criação de sliders e carrosséis
- **React Icons**: Biblioteca de ícones

## Como Iniciar o Projeto

Para iniciar o projeto em ambiente de desenvolvimento:

1. Navegue até a pasta do projeto:
   ```
   cd site-oftalmologico
   ```

2. Instale as dependências (caso ainda não tenha feito):
   ```
   npm install
   ```
   ou
   ```
   pnpm install
   ```

3. Inicie o servidor de desenvolvimento:
   ```
   npm run dev
   ```
   ou
   ```
   pnpm run dev
   ```

4. Acesse o site em seu navegador através do endereço:
   ```
   http://localhost:5173
   ```

## Estrutura de Arquivos

```
site-oftalmologico/
├── public/              # Arquivos públicos
├── src/                 # Código-fonte
│   ├── assets/          # Imagens e recursos
│   │   └── images/      # Imagens do site
│   ├── components/      # Componentes React
│   │   ├── BlogSection.tsx      # Seção de blog
│   │   ├── ContactForm.tsx      # Formulário de contato
│   │   ├── Footer.tsx           # Rodapé
│   │   ├── Header.tsx           # Cabeçalho/Menu
│   │   ├── MainBanner.tsx       # Slider do banner principal
│   │   ├── PartnersSection.tsx  # Seção de convênios
│   │   ├── ServicesCarousel.tsx # Carrossel de serviços
│   │   └── Testimonials.tsx     # Seção de depoimentos
│   ├── pages/           # Páginas do site
│   │   ├── ProjetosSociais.tsx  # Página de projetos sociais
│   │   ├── Unidades.tsx         # Página de unidades da clínica
│   │   └── NossosProjetos.tsx   # Página de projetos da clínica
│   ├── App.tsx          # Componente principal (página inicial)
│   ├── index.css        # Estilos globais
│   └── main.tsx         # Ponto de entrada com rotas
└── tailwind.config.js   # Configuração do Tailwind CSS
```

## Como Editar o Conteúdo

### 1. Editar o Banner Principal

Para editar o slider do banner principal, abra o arquivo `src/components/MainBanner.tsx`:

- Substitua as imagens em `src/assets/images/banner1.jpg`, `banner2.jpg` e `banner3.jpg`
- Edite o array `banners` para alterar títulos, descrições e textos dos botões

### 2. Editar a Seção Sobre

Para editar a seção "Sobre", abra o arquivo `src/App.tsx` e localize a seção com o ID "sobre":

- Modifique o texto dentro das tags `<p>` para alterar o conteúdo
- Substitua a URL da imagem para alterar a foto da equipe

### 3. Editar o Carrossel de Serviços

Para editar o carrossel de serviços, abra o arquivo `src/components/ServicesCarousel.tsx`:

- Substitua as imagens em `src/assets/images/service1.jpg`, `service2.jpg` e `service3.jpg`
- Edite o array `services` para alterar títulos, descrições e links

### 4. Editar a Seção de Convênios

Para editar a seção de convênios, abra o arquivo `src/components/PartnersSection.tsx`:

- Edite o array `partners` para alterar os nomes e logos dos convênios
- Substitua as URLs das imagens dos logos por imagens reais dos convênios
- Modifique o texto informativo sobre os convênios conforme necessário

### 5. Editar os Depoimentos

Para editar os depoimentos, abra o arquivo `src/components/Testimonials.tsx`:

- Edite o array `testimonials` para alterar nomes, textos e avaliações
- Substitua as URLs das imagens para alterar as fotos dos clientes

### 6. Editar a Seção de Blog

Para editar a seção de blog, abra o arquivo `src/components/BlogSection.tsx`:

- Edite o array `blogPosts` para alterar títulos, resumos, autores e datas
- Substitua as URLs das imagens para alterar as fotos dos posts

### 7. Editar o Formulário de Contato

Para editar o formulário de contato, abra o arquivo `src/components/ContactForm.tsx`:

- Modifique as opções do select `service` para alterar os serviços disponíveis
- Altere o número do WhatsApp na variável `whatsappNumber`
- Edite as informações de contato (endereço, telefone, e-mail, horário)

### 8. Editar o Rodapé

Para editar o rodapé, abra o arquivo `src/components/Footer.tsx`:

- Modifique os links das redes sociais
- Altere as informações de contato e links rápidos
- Edite a lista de serviços

### 9. Editar o Cabeçalho/Menu

Para editar o menu de navegação, abra o arquivo `src/components/Header.tsx`:

- Modifique os links de navegação
- Altere o nome da clínica no logo
- Atualize o número de WhatsApp para agendamento

## Como Editar as Páginas Adicionais

### 1. Editar a Página de Projetos Sociais

Para editar a página de projetos sociais, abra o arquivo `src/pages/ProjetosSociais.tsx`:

- Edite o array `projetos` para alterar títulos, descrições e imagens dos projetos sociais
- Modifique os textos introdutórios e de chamada para ação
- Substitua as URLs das imagens por fotos reais dos projetos

### 2. Editar a Página de Unidades

Para editar a página de unidades da clínica, abra o arquivo `src/pages/Unidades.tsx`:

- Edite o array `unidades` para alterar informações de cada unidade (nome, endereço, telefone, etc.)
- Atualize as facilidades disponíveis em cada unidade
- Substitua as URLs das imagens por fotos reais das unidades
- Atualize os links dos mapas do Google para mostrar a localização correta de cada unidade

### 3. Editar a Página de Nossos Projetos

Para editar a página de projetos da clínica, abra o arquivo `src/pages/NossosProjetos.tsx`:

- Edite o array `projetos` para alterar títulos, descrições e status dos projetos
- Modifique os textos introdutórios e de parcerias
- Substitua as URLs das imagens por fotos reais dos projetos e parceiros
- Atualize as informações de parcerias conforme necessário

## Como Personalizar o Design

### 1. Cores

As cores principais do site estão definidas no arquivo `tailwind.config.js` e `src/index.css`:

- Para alterar as cores principais, edite as variáveis de cor no arquivo `tailwind.config.js`
- Para ajustes mais específicos, modifique as variáveis CSS em `src/index.css`

### 2. Fontes

Para alterar as fontes:

1. Edite a família de fontes no arquivo `src/index.css`
2. Importe novas fontes conforme necessário

### 3. Estilos Específicos

Cada componente possui seus próprios estilos usando classes do Tailwind CSS:

- Para modificar o estilo de um componente específico, edite as classes Tailwind no arquivo correspondente
- Para estilos globais ou personalizados, adicione-os ao arquivo `src/index.css`

## Como Publicar o Site

### Publicação no Vercel (Recomendado)

1. Crie uma conta no [Vercel](https://vercel.com) (gratuito)
2. Clique em "Add New" → "Project"
3. Faça upload do projeto (após substituir as imagens)
4. Configure o Framework Preset como "Vite"
5. Clique em "Deploy"

### Outras Opções de Hospedagem

O site também pode ser hospedado em:
- Netlify
- GitHub Pages
- Qualquer hospedagem que suporte sites estáticos

## Dicas para Edição

1. **Imagens**: Mantenha as proporções das imagens consistentes para garantir um layout harmonioso
2. **Textos**: Mantenha os textos concisos e diretos para melhor experiência do usuário
3. **Responsividade**: O site já é responsivo, mas teste em diferentes dispositivos após fazer alterações
4. **Botões de WhatsApp**: Atualize o número de telefone em todos os botões de WhatsApp
5. **SEO**: Adicione meta tags relevantes no arquivo `index.html` para melhorar o SEO

## Suporte

Para dúvidas ou suporte adicional, entre em contato com nossa equipe de desenvolvimento.

---

Desenvolvido com ❤️ para sua Clínica Oftalmológica
