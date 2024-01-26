# official Node.js runtime
FROM node:lts-alpine
# working directory in the container
WORKDIR /app
# for now we do not have any dependencies or files to copy so skipped
# exposed the port where app runs in nodejs
EXPOSE 3000
# command to run your Node.js application
CMD [ "node", "detect.js" ]