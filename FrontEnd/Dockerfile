# Use the base Node.js 14 image
#FROM node:14

# Set the working directory inside the container
#WORKDIR /srv/app

#RUN npm i -g npm 

#COPY package*.json ./

#RUN npm install

#EXPOSE 8000
# Copy the contents of the current directory to the working directory inside the container
#COPY . .

# Install Node.js dependencies
#RUN npm install

# Set the entrypoint command for the container
#CMD ["./start.sh"]
#CMD ["npm","run","dev"]
FROM node:16-alpine
WORKDIR /srv/app
COPY package*.json ./
RUN npm install 
COPY . .
EXPOSE 8000
CMD ["npm","run","dev"] 