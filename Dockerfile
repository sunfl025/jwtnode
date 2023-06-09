FROM node:16
# Define from what image we want to build from

# Create app directory
WORKDIR /usr/src/app 

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./ 

# If you are building your code for production
# RUN npm ci --only=production
RUN npm install

# Bundle app source
COPY . . 

# Bind to port 8080
EXPOSE 3030

# Start the server
CMD [ "node", "index.js" ]