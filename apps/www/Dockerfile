# Base image for building the application
FROM node:18-alpine AS base

# Set working directory
WORKDIR /app

# Copy dependency files first for better caching
COPY package.json ./  

# Install dependencies
RUN npm install --legacy-peer-deps 

# Copy all files and build the application
COPY . .
RUN npm run build

# Production image
FROM node:18-alpine AS runtime

# Set working directory
WORKDIR /app

# Copy only the build output and necessary files from the base stage
COPY --from=base /app/.next ./.next
COPY --from=base /app/package.json ./package.json

# Install only production dependencies
RUN npm install --production

# Expose the port Next.js runs on
EXPOSE 3000

# Command to run the application
CMD ["npm", "start"]
