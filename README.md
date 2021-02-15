# Svelte, Snowpack, and Tailwind CSS

This repository contains starter Svelte app with Tailwind CSS built using Snowpack within a VSCode devcontainer.

__Features__

- Svelte with Tailwind CSS starter app
- Tailwind CSS Debug Screens to show screen size during development
- Snowpack configured to optimize production build
- Dockerfile and nginx configuration for production build
- nginx config with caching and compression enabled
- Several VSCode extensions to support Svelte/Tailwind development

## Major Frameworks and Dependencies

- [Svelte](https://svelte.dev/) - Front end development framework
- [Tailwind CSS](https://tailwindcss.com) - Utility-first CSS framework
- [Snowpack](https://www.snowpack.dev/) - Frontend build tool
- [Tailwind CSS Debug Screens](https://github.com/jorenvanhee/tailwindcss-debug-screens) - Shows the currently active screen

## Setup Your Project

Clone this repo into a folder for your project

```bash
git clone https://github.com/patrickneise/svelte-snowpack-tailwind.git <your-project-name>
```

Change the origin to your project git repo

```bash
git remote set-url origin <path-to-your-project git repo>
```

## Development Setup

The `.devcontainer` folder contains a [devcontainer.json](./.devcontainer/devcontainer.json) to support the building and configuriation of  a development container from the [Dockerfile](./Dockerfile) local development of the site.  Using VSCode with remote container support removes the need to install/manage dependencies for development on the local development machine, as they are maintained within the container.

Prerequisites:

- [Visual Studio Code](https://code.visualstudio.com/)
- [Docker](https://docs.docker.com/get-docker/)
- [VSCode: Remote Containers Extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers)

With VSCode, Docker, and the  extension installed:

- Click bottom left corner in VSCode
- Select `Remote-Containers: Reopen in Container`
- The container will build and launch, and then provide a terminal shell from within the running container.

### Included VSCode Extensions

The [devcontainer.json](./.devcontainer/devcontainer.json) includes several useful VSCode Extensions to support development.

- [Svelte](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode) - Syntax highlighting, code formatting, and rich intellisense for Svelte components.
- [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss) - Intelligent Tailwind CSS tooling
- [Refactor CSS](https://marketplace.visualstudio.com/items?itemName=urbantrout.refactor-css) - Helps identify reoccuring CSS class name combinations in markup
- [Headwind](https://marketplace.visualstudio.com/items?itemName=heybourn.headwind) - Opinionated Tailwind CSS class sorter

## Available Development Scripts

`yarn start`

Runs the app in development mode with live reload.

On first run, default browser will open to [http://localhost:8080](http://localhost:8080).

`yarn build`

Builds the app for production to the `build` folder.

App will be built and optimized for performance with Snowpack.

## Production Container 

Build production container image:

```bash
docker build . -t <your/tag>
```

Run container locally:

```bash
docker run -p 8000:80 <your/tag>
```

App will be available at [http://localhost:8000](http://localhost:8000).