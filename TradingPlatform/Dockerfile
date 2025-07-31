# Use a JDK image
FROM eclipse-temurin:17-jdk

# Set working directory
WORKDIR /app

# Copy all files into container
COPY . .

# Install Maven
RUN apt-get update && apt-get install -y maven

# Build the project using system Maven
RUN mvn clean package -DskipTests

# Run the JAR
CMD ["java", "-jar", "target/TradingPlatform-0.0.1-SNAPSHOT.jar"]
