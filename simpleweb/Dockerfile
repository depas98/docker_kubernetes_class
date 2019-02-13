# Specify a base image
FROM node:alpine

# specify a working directory so files don't get copy into the root dir
WORKDIR /usr/app

# Install some dependencies
# npm only needs pakage,json file to do the npm install
COPY ./package.json ./  
RUN npm install

# this copy the index.js and package.json files to the image
COPY ./ ./

# Default command
CMD ["npm", "start"]