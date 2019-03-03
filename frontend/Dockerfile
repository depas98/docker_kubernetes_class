# This is the build phrase
FROM node:alpine as builder

WORKDIR '/app'

COPY package.json .
RUN npm install

COPY . . 

RUN npm run build

# This is the run phrase
FROM nginx 
# copy the /app/build dir from the build phase to the default direcotyr that nginx runs from
COPY --from=builder /app/build /usr/share/nginx/html
# don't need a run or command because the default command for nginx is start