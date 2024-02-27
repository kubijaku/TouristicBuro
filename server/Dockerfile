FROM node:alpine
ARG VERSION
ENV FIREBASE_TOOLS_VERSION=${VERSION}
COPY . /app
WORKDIR /app
#RUN npm install
RUN npm install -g firebase-tools@${VERSION}
EXPOSE 3000
CMD [ "npm", "start" ]
