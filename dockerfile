# official Node.js runtime
FROM node:lts-alpine
# working directory in the container
WORKDIR /app
COPY app/detect.js .
# exposed the port where app runs in nodejs
EXPOSE 3000
# command to run your Node.js application
CMD [ "node", "detect.js" ]