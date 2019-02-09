# Specify a base image
FROM node:alpine

WORKDIR /usr/app

# Install some dependencies
# this copy the index.js and package.json files to the image
COPY ./ ./  
RUN npm install

# Default command
CMD ["npm", "start"]