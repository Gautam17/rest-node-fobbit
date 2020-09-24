FROM gomzy/node-aws:1.0.0

# Create app directory
WORKDIR /app

# Install app dependencies
COPY package.json tsconfig*.json ./
COPY ./src ./src
RUN yarn install
RUN yarn build
# COPY ./build /app/src

EXPOSE 8080

CMD [ "npm", "start" ]