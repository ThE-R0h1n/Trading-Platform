FROM eclipse-temurin:17-jdk

WORKDIR /app

# Copy everything (including mvnw, pom.xml, src, etc.)
COPY . .

# Ensure the Maven Wrapper script is executable
RUN chmod +x mvnw

# Build the project using the Maven wrapper
RUN apt-get update && apt-get install -y maven && mvn clean package -DskipTests

# Run the generated jar
CMD ["java", "-jar", "target/TradingPlatform-0.0.1-SNAPSHOT.jar"]
