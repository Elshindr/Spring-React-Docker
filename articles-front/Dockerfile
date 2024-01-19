# Utiliser l'image Node.js comme base
FROM node:latest

WORKDIR /usr/src/app
COPY articles-app/package.json articles-app/package-lock.json /usr/src/app/
COPY articles-app/public /usr/src/app/public
COPY articles-app/src /usr/src/app/src

# Installer les dépendances
RUN npm install
RUN npm install --save
# URL de l'API back
#ARG REACT_APP_API_URL=http://localhost:9001/api
##ENV REACT_APP_API_URL=${REACT_APP_API_URL}


CMD ["npm", "start"]