FROM amazoncorretto:25 AS build

# Instala o Maven manualmente (o Corretto 25 usa Amazon Linux)
RUN yum install -y maven

WORKDIR /app
COPY . .

# Compila o projeto Spring 4 gerando o .jar
RUN mvn clean package -DskipTests

# Estágio 2: Execução com imagem leve (JRE) do Java 25
FROM amazoncorretto:25-alpine
WORKDIR /app

# Copia o arquivo .jar do estágio de build
COPY --from=build /app/target/*.jar app.jar

EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]