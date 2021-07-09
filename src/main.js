// This file is mandatory.
// Actual Xeon js will find this file and execute.
// This is an module script directly executes in the browser.

// import view components.
import App from "./view/app.js";

// export constant named "routes" . add all routes with view components here.
export const routes = [
      { path: "/", view: App }
];
// export the id of the div you chosen in the "/public/index.html" file.
export const root = document.getElementById("root");