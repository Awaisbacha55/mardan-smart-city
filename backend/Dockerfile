# Use lightweight Node.js 20 Alpine image
FROM node:20-alpine

# Set working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies (only production for smaller size)
RUN npm install --omit=dev

# Copy the rest of the application source code
COPY . .

# Expose the API port
EXPOSE 5000

# Set environment to production
ENV NODE_ENV=production

# Start the application
CMD ["node", "server.js"]
