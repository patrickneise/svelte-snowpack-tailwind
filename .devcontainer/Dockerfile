# Update the VARIANT arg in devcontainer.json to pick a Node.js version: 14, 12, 10 
ARG VARIANT=14
# FROM node:${VARIANT}
FROM mcr.microsoft.com/vscode/devcontainers/javascript-node:${VARIANT}

# ENV SNOWPACK_PUBLIC_API_URL='http://localhost:5000/'
# [Optional] Uncomment this section to install additional OS packages.
# RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
#     && apt-get -y install --no-install-recommends \
    
# [Optional] Uncomment if you want to install an additional version of node using nvm
# ARG EXTRA_NODE_VERSION=10
# RUN su node -c "source /usr/local/share/nvm/nvm.sh && nvm install ${EXTRA_NODE_VERSION}"

# [Optional] Uncomment if you want to install more global node modules
# RUN sudo -u node npm install -g <your-package-list-here>