import _ from "lodash";
import express from "express";
import ReactServerPages from "../src";
import chalk from "chalk";


// ReactServerPages.start({ base:"./example/site" });
// ReactServerPages.clearCache();

const middleware = ReactServerPages({ base:"./example/site" });
// const app = express().use(middleware);

// Create the folder-structure and base template files.
middleware.clearCache();
middleware.templates.create();




middleware.start();


// const PORT = 8080;
// app.listen(PORT, () => {
//         const HR = _.repeat("-", 80)
//         console.log("\n");
//         console.log("React Server Pages (Example):");
//         console.log(chalk.grey(HR));
//         console.log(" - port:", chalk.cyan(PORT));
//         console.log(" - env: ", process.env.NODE_ENV || "development");
//         console.log(" - paths:");
//         _.forIn(middleware.paths, (value, key) => {
//           if (_.isString(value)) {
//             console.log(`     - ${ chalk.magenta(key) }:`, chalk.grey(value));}
//           }
//         );
//         console.log("");
// });
