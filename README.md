⛩️ Anime Catalog - Full-Stack Application
Este projeto é uma plataforma robusta desenvolvida para consulta e gerenciamento de títulos de animes, consumindo dados em tempo real da Jikan API (REST). A aplicação foi desenhada com foco em escalabilidade e performance, utilizando o ecossistema Java no backend e Angular no frontend.
+4

🚀 Resumo do Projeto
A plataforma permite aos usuários explorar um vasto catálogo de animes, visualizar detalhes técnicos e gerenciar preferências, tudo isso através de uma interface moderna e responsiva. O backend atua como um facilitador, processando dados da API externa e gerenciando a persistência em nuvem.
+4

🛠️ Tecnologias Utilizadas
Backend

Java 25 & Spring Boot: Núcleo da aplicação para criação de APIs RESTful.
+3


Spring Cloud OpenFeign: Utilizado para o consumo simplificado e eficiente da Jikan API.
+2


PostgreSQL: Banco de dados relacional para persistência de dados.
+2


Spring Data JPA: Abstração da camada de persistência.
+3

Frontend

Angular: Framework para construção de uma SPA (Single Page Application) dinâmica.
+1


TailwindCSS: Framework CSS utilitário para estilização rápida e responsiva.
+1


Mobile First: Design focado na experiência em dispositivos móveis.
+1

Infraestrutura & Cloud

Docker: Conteinerização de toda a aplicação para consistência entre ambientes.
+3


AWS RDS: Banco de dados gerenciado na nuvem.
+1

AWS App Runner & ECR: Orquestração e deploy automatizado dos containers.

⚙️ Como rodar o projeto localmente
Pré-requisitos
Docker e Docker Compose instalados.

Java 25 (ou versão compatível) e Node.js/Angular CLI (caso queira rodar sem Docker).

Passo a Passo
Clone o repositório:

Bash
git clone https://github.com/NandoJunioDev/nome-do-repositorio.git
cd nome-do-repositorio
Suba os serviços via Docker (Recomendado):
Na raiz do projeto, execute:

Bash
docker-compose up --build

Isso iniciará o banco de dados PostgreSQL, o Backend e o Frontend simultaneamente.
+3

Acesse a aplicação:


Frontend: http://localhost:4200 
+1


Backend (API Docs): http://localhost:8080/swagger-ui.html
