# Text Editor Progressive Web Application (PWA)

## Description

This project is a text editor progressive web application that primarily runs in a browser but can operate offline. It also features data persistence techniques, allowing for getting and storing data from an `IndexedDB database`, regardless of internet connectivity. This project utilizes a package called `idb`, which is a lightweight wrapper around the IndexedDB API. `idb` is a popular wrapper, used by major companies such as Google and Mozilla, featuring a number of methods that are used to store and retrieve data.


## Table of Contents
- [Installation](#installation-for-further-development-only)
    - [Git/GitBash](#gitgitbash---strongly-recommended)
    - [Visual Studio Code](#visual-studio-code-vsc---strongly-recommended)
    - [Node (REQUIRED)](#node-version-16---required-to-download-node-based-dependencies-ie-mongoose-and-express)
    - [express (REQUIRED)](#express-version-4182---required-for-connecting-and-creating-routes-to-database)
- [Usage](#usage)
- [Credits](#credits)
- [Questions](#questions)


## Installation (for further development only)

Make sure the following are downloaded:

### `Git/GitBash` - *Strongly Recommended*
* While this application can be run using with the default **command prompt**, it is easier to clone this repository by using Git/GitBash, which can be downloaded [here](https://git-scm.com/downloads).

### `Visual Studio Code [VSC]` - *Strongly Recommended*

* If you'd like to make changes to these files, Visual Studio Code is recommended and can be downloaded for free [here](https://code.visualstudio.com/download).

### `Node version 16` - **REQUIRED** to download node-based dependencies (i.e. express)
* Go to [Node's homepage, https://nodejs.org/en/](https://nodejs.org/en/), then [Downloads](https://nodejs.org/en/download/) and scroll down to the [Previous Releases](https://nodejs.org/en/download/releases/) bullet point. 

* Toggle between the results until the desired version 16 package and click Download. This application was developed with [Node.js version 16.18.0](https://nodejs.org/dist/v16.18.0/), click on [node-v16.18.0-x64.msi](https://nodejs.org/download/release/v16.18.0/node-v16.18.0-x64.msi) to download.

* The Full-Stack Blog also has [instructions on how to download Node](https://coding-boot-camp.github.io/full-stack/nodejs/how-to-install-nodejs).

### `express version 4.17.1` - **REQUIRED** for connecting and creating routes to database

* This **MUST** be installed into this repository, start by opening the command line interface.

* If you have Visual Code Studio, add this repository to the workspace. Then, go to 'Settings' either through the cog icon in the lower left corner and clicking Settings, go to File -> Preferences -> Settings in the menu bar, or the key combo of Ctrl+,

Method 1 - Cog:
![Finding settings through the "settings cog" icon in the lower left corner](./assets/screenshots/Finding-Settings-1.png)

Method 2 - File > Preferences > Setting:
![Finding settings through File > Preferences > Settings in the navbar of Visual Studio Code](./assets/screenshots/Finding-Settings-2.png)

* Then, change the settings in "Terminal: Explorer Kind" to "external" in the drop down menu.

![Changing "Terminal: Explorer Kind" Settings](./assets/screenshots/External-Terminal-Settings-1.png)
        
* Change the filepath of the "Terminal > External: [respective operating system]" settings to the preferred command line interface program (either your system's Command Prompts's file path or Git/Git Bash's file path)

![Changing "Terminal > External" Settings](./assets/screenshots/External-Terminal-Settings-2.png)

* After that, right-click the repository and select "Open in External Terminal"

![User uses Visual Studio Code to access repository through external terminal](./assets/screenshots/External-Terminal-Method-1-1.PNG)

![Note the match from Visual Studio Code to the opened external terminal](./assets/screenshots/External-Terminal-Method-1-2.PNG)


* If you do not have VSC, open the preferred terminal.

* Use "cd Desktop" to first reach the Desktop, cd stands for change directory.

* Continue using "cd" to navigate through the file path to reach the location of this repository on your computer.

![User uses Change Directory (cd) to access repository through external terminal](./assets/screenshots/External-Terminal-Method-2.PNG)

* Once this repository has been reached, type in `npm i express@4.17.1` into the terminal and hit `Enter`.

<!-- * Once this repository has been reached, due to the large amount of dependencies, just type in `npm run install` to install all dependencies. This will include all the dependencies written in the `package.json` file-->


## Usage

* This full-stack application's online version is deployed [here](#blank) on Heroku. However, as a PWA, it is also available to be downloaded as an application that can be used offline and will sync once it obtains internet connection.

* Follow the same methods from the [Express Installation Section](#express-version-4171---required-for-connecting-and-creating-routes-to-database) to reach the root directory of this repository if you've already exited out of the command-line, then type in `npm run start` and hit `Enter`.

* 

* 

* 

## Credits

* https://stackoverflow.com/questions/37831348/how-to-disable-npms-progress-bar

* 

* 

## Questions

If you have any questions, my GitHub profile is www.github.com/leeclaire156, and my email is lee.claire156@gmail.com.