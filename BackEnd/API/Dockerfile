# Use the official Node.js LTS (Long Term Support) image as the base image
FROM node:14
# Install PowerShell dependencies
RUN apt-get update && \
    apt-get install -y wget apt-transport-https && \
    wget -q https://packages.microsoft.com/config/ubuntu/20.04/packages-microsoft-prod.deb && \
    dpkg -i packages-microsoft-prod.deb && \
    apt-get update && \
    apt-get install -y powershell
# Install Azure PowerShell module
#RUN pwsh -Command 'Install-Module -Name Az -Force -AllowClobber'


# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the backend code to the container
COPY . .
# Set the entry point to PowerShell Core
#ENTRYPOINT ["pwsh"]

# Expose the port on which the Express server will listen
EXPOSE 4000

# Set the entry point to PowerShell Core
#ENTRYPOINT ["pwsh"]

# Start your Node.js application
CMD [ "npm", "start" ]
