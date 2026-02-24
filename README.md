

#  ⛩️ Anime Catalog - Full-Stack Solution

## 📝 Resumo do Projeto
O Anime Catalog é uma aplicação Full-Stack desenvolvida para facilitar a busca e o gerenciamento de informações sobre animes, utilizando dados em tempo real da Jikan API (REST).<br> O projeto foi construído para demonstrar competências em integração de APIs externas, arquitetura de microsserviços e deploy automatizado em nuvem.

# 🚀 Principais Funcionalidades

Busca em Tempo Real: Integração com Jikan API via FeignClient para recuperação de dados de animes, personagens e episódios.

Arquitetura Robusta: Backend estruturado sob os princípios SOLID e padrão MVC.


Interface Adaptável: Frontend dinâmico com Angular, focado em performance e experiência do usuário Mobile First.


Persistência em Nuvem: Gerenciamento de dados utilizando PostgreSQL hospedado no AWS RDS.


# 🛠️ Stack Tecnológica
#### Backend (Java Ecosystem)
##### Java 25: Utilizando as últimas funcionalidades da linguagem.


##### Spring Boot: Framework base para a construção das APIs.


#####  Spring Cloud OpenFeign: Para consumo declarativo de APIs externas.




### Frontend

##### Angular: Framework para criação de uma SPA (Single Page Application) escalável.



#### TailwindCSS: Estilização moderna e utilitária para interfaces responsivas.

### Infraestrutura & DevOps

##### Docker: Conteinerização para garantir paridade entre ambientes.


##### AWS (ECR & App Runner): Orquestração de containers e deploy contínuo.



##### CI/CD: Fluxo de integração e entrega contínua para maior agilidade no desenvolvimento.

# ⚙️ Como Executar o Projeto Localmente
### Pré-requisitos
##### Docker e Docker Compose instalados.

##### Java 25 (opcional se usar Docker).

### Instalação
#### Clone o repositório:

##### Bash
```
git clone https://github.com/NandoJunioDev/CatalagoAnime.git
```
```
cd CatalagoAnime
```
#### Suba os serviços via Docker Compose:

##### Bash
``` 
docker-compose up --build
```
##### Este comando irá configurar automaticamente o banco de dados, o backend e o frontend.

#### Acesse a aplicação:

#### Interface Web (Angular): 
```
 http://localhost:4200 
 ```

##### Documentação da API (Swagger): 
```
 http://localhost:8080/swagger-ui.html 
```

# 👨‍💻 Desenvolvedor

<strong> Fernando Junio Teixeira Medeiros </strong> 

 <strong> Estudante de Engenharia de Software na Estácio.   </strong>    

<strong> Residente em Cabo Frio, RJ. </strong>  

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/fernando-junio-46bb892b8/) 
