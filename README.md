# Paf frontend exercise

Translate the provided [designs (for small & large viewports)](#designs) into a working solution with HTML, CSS and JavaScript.

## Requirements

1. Use HTML5 to produce a semantic information structure.
1. Use JavaScript (client-side) to fetch JSON-data from the following url: ```/api/games/lists.json```.
1. Use JavaScript (client-side) to generate the HTML based on the fetched JSON-data.
1. Add a search field.  
   - Should filter the items rendered from the JSON-data.  
   - Display previous search history.  
1. Use Webcomponents where it's appropriate.
1. Use CSS to produce the layout with a mobile first approach (minimum requirement to support is screen resolutions from 320px up to 1920px).

_You are allowed to make minor adjustments to the layout if needed._

<br id="development-setup">

## Getting started

**Author your solution in the following files:**

```bash
index.html          # The place to author your HTML.
src/styles.css      # The place to author your CSS.
src/scripts.js      # The place to author your JavaScript.
```

**To be able to fetch the JSON-data from the url ```/api/games/lists.json``` you should use one of the following development setups:**

* [Localhost](#setup-localhost)
* [Codesandbox](#setup-codesandbox)

<br id="setup-localhost">

## Localhost

This setup provides a development server to be used in your machine. Prerequisites are **git** and **node.js** _(v10 or higher)_.

1. Clone repository & install setup:
    ```bash
    git clone https://github.com/AndreasLindbergPAF/paf-frontend-exercise.git && cd paf-frontend-exercise
    ```
1. Install dependencies:
    ```bash
    npm install
    ```
1. Start server:
    ```bash
    npm start
    ```
1. When done, package your solution with the following command:
    ```bash
    npm pack
    ```
1. And then send us your ```paf-frontend-exercise-1.0.0.tgz```.

<br id="setup-codesandbox">

## Codesandbox

This is the web based setup that only requires a modern browser to get you started.

1. [Open a new Codesandbox](https://codesandbox.io/s/github/AndreasLindbergPAF/paf-frontend-exercise/tree/master/?fontsize=14&hidenavigation=1&theme=dark).
1. Prefix urls with ```../dist```.
    * For example ```/api/games/lists.json``` should be ```../dist/api/games/lists.json``` in codesandbox to function properly.
1. When done, send us your Codesandbox-link.

<br id="designs">

## Designs

### Small viewports

![Small viewports](./design/small-viewports.png)

### Large viewports

![Large viewports](./design/large-viewports.png)
