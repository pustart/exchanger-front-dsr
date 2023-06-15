FROM node:18-alpine
WORKDIR /opt/app
ADD package.json package.json
RUN npm pkg delete scripts.prepare && npm install --force
ADD . .
ENV NODE_ENV production
RUN npm run build
RUN npm pkg delete scripts.prepare && npm prune --omit=dev --force
EXPOSE 3000
CMD ["npm", "run", "start"]
