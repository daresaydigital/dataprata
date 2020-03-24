FROM node AS builder
COPY ["package.json","yarn.lock","./"]
RUN yarn
COPY . .
RUN yarn run build

# Create a minimal server
FROM nginx
LABEL maintainer="Martin Kurtsson <martin.kurtsson@daresay.co>"
COPY --from=builder public /usr/share/nginx/html
