<h1 align="center">
    <img alt="watch-me" title="watch-me" src="/assets/watch-me.svg" width="300px" />
</h1>

<!-- TABLE OF CONTENTS -->
<h5 align="center"> 
<a href="#sobre">Sobre</a>
&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;<a href="#tecnologias">Tecnologias</a> 
&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;<a href="#roadmap">Roadmap</a> 
&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;<a href="#instalação">Instalação</a> 
&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;<a href="#visão-do-projeto">Visão do projeto</a>
&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;<a href="#agradecimento">Agradecimento</a> 
&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;<a href="#licença">Licença</a> 	
&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;<a href="#autor">Autor</a> 
</h5>

## Sobre
<h4>WatchMe é uma aplicação web que lista filmes por gênero</h4>

Essa aplicação foi desenvolvida com o propósito de fixar o conhecimento sobre componentização do ReactJS obtido no primeiro módulo do treinamento do Ignite da Rocketseat. O arquivo `App.tsx` continha a maior parte do código, ele lidava com a lógica do cabeçalho que mostrava o gênero selecionado, do conteúdo que mostrava os filmes e da barra lateral que mostrava os gêneros dos filmes. Para isolar as responsabilidades e facilitar a manutenção do código a aplicação foi refatorada e três componentes foram criados: Header que lida com o cabeçalho, SideBar que lida com a barra lateral e Content que lida com os filmes.

## Tecnologias
- [TypeScript](https://www.typescriptlang.org/)
- [ReactJS](https://reactjs.org/)
- [JSON Server](https://github.com/typicode/json-server)
- [Axios](https://github.com/axios/axios)
- [Babel](https://babeljs.io/)
- [webpack](https://webpack.js.org/)
- [Sass](https://sass-lang.com/)

## Roadmap
- [x] Criar componente SideBar
- [x] Criar componente Content
- [x] Criar componente Header

## Instalação
- ### **Pré-requisitos**
  - É **necessário** possuir o **[Git](https://git-scm.com/)** instalado e configurado no computador.
  - É **necessário** ter um gerenciador de pacotes seja o **[NPM](https://www.npmjs.com/)** ou **[Yarn](https://yarnpkg.com/)**.
- ### **Próximo passo**
1. Faça um clone deste repositório:
```sh
  $ git clone https://github.com/die-goncalves/ignite-reactjs-capituloI-desafioII-componentizando-a-aplicacao
```
2. Instalar as depêndencias:
```sh
  # Entre no diretório do repositório clonado
  $ cd ignite-reactjs-capituloI-desafioII-componentizando-a-aplicacao
  # Instale as dependências do projeto.
  $ yarn #ou $ npm install
```
3. Executar a API simulada pelo JSON Server 
```sh
  # Execute o seguinte comando em uma instância do terminal
  $ yarn server #ou $ npm run server
  # O servidor inciará na porta:3333 - acesse <http://localhost:3333>
```
Os dados da fake API podem ser encontrados em [server.json](server.json) na raiz do projeto.

Algumas rotas que podem ser acessadas:
```sh
http://localhost:3333/genres
http://localhost:3333/genres/1 ou http://localhost:3333/genres/?id=1
http://localhost:3333/movies
http://localhost:3333/movies/?Genre_id=1
```
Para mais informações acesse [JSON Server](https://github.com/typicode/json-server).

4. Executar a aplicação
```sh
  # Com o JSON Server rodando, execute o seguinte comando em outra instância do terminal
  $ yarn dev #ou $ npm run dev
  # A aplicação inciará na porta:8080 - acesse <http://localhost:8080>
```

## Visão do projeto
<img src="/assets/componentizando-aplicacao.gif" alt="Cadastro" width="100%" height="80%">

## Agradecimento
<table width="100%" align="center">
    <tr>
        <th>
            <a href="https://rocketseat.com.br/">
                <img width="150" height="150" src="https://avatars.githubusercontent.com/u/28929274?s=200&v=4">
                <br /><sub><b>Rocketseat</b></sub>
            </a>
        </th>
        <th>
            <img width="150" height="150" src="/assets/ignite-logo.svg">
            <br /><sub><b>Ignite</b></sub>
        </th>
        <th>
            <a href="https://github.com/diego3g">
                <img width="150" height="150" src="https://avatars.githubusercontent.com/u/2254731?s=400&u=4fcc8ca9672eeb41ea800271831b7c687bc17054&v=4">
                <br /><sub><b>diego3g (Diego Fernandes)</b></sub>
            </a>
        </th>
    </tr>
</table>

## Licença
Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## Autor

Feito por Diego Gonçalves, contato:

[![Badge](https://img.shields.io/static/v1?label=Linkedin&message=Diego%20Gonçalves&color=208BEE&style=flat-square&logo=linkedin&link=https://www.linkedin.com/in/diego-goncalves1990)](https://www.linkedin.com/in/diego-goncalves1990)
[![Badge](https://img.shields.io/static/v1?label=Gmail&message=die.goncalves1990@gmail.com&color=EA5134&style=flat-square&logo=gmail&link=mailto:die.goncalves1990@gmail.com)](mailto:die.goncalves1990@gmail.com)
