<img src="https://github.com/CardinalKit/CardinalKit/blob/master/CardinalKit-Web-Assets/header.png?raw=true" />

# Documentation

This repository contains the documentation website for CardinalKit, of which a live version can be found at https://cardinalkit.org/cardinalkit-docs/.

## Instructions

Setting up this project requires [Node.js](https://nodejs.org/) installed on your system.

### First, open the `src` folder and install dependencies
```
cd src
npm install
```
To configure Algolia search, edit the included .env file and add in the listed keys.

### To run in development mode
```
npm run dev
```

The site should now appear at `http://localhost:8080/cardinalkit-docs`.

### To build for production
```
npm run build
```

### To deploy to GitHub pages

From the root folder of the project, run

```
./deploy.sh
```

## Built With
[VuePress](https://vuepress.vuejs.org/)

<img src="https://github.com/CardinalKit/CardinalKit/raw/master/CardinalKit-Web-Assets/footer.png?raw=true" />
