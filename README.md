## ExtraFM Zagreb Player

A simple music player for the Croatian radio station called **ExtraFM**.

App is available on:

* MacOS - [ExtraFM Zagreb-darwin-x64](https://gabskoro.page.link/qL6j)
* Linux - [ExtraFM Zagreb-linux-x64](https://gabskoro.page.link/geWN)
* Windows - [ExtraFM Zagreb-win32-x64](https://gabskoro.page.link/3Q85)



When you download the app and unpack it just click on the the **ExtraFM Zagreb**  icon to run it (on Mac OS you can also install it by dragging it into the applications folder)

![](https://s3-eu-central-1.amazonaws.com/skoro-attachments/ExtraFM_Zagreb_2018-06-24_22-19-20.png)

![](https://s3-eu-central-1.amazonaws.com/skoro-attachments/ExtraFM_Zagreb-darwin-x64_2018-06-24_21-46-04.png)

#### Libraries used to build the app

* [Vue.js](https://vuejs.org/)
* [Webpack](https://webpack.js.org/) (babel-core, babel-preset-env, (file, html, css, sass)-loader)
* [Electron.js](https://electronjs.org/)
* [Electron packager](https://github.com/electron-userland/electron-packager)
* [Howler](https://github.com/goldfire/howler.js)
* [Axios](https://github.com/axios/axios)
* [Typed.js](https://github.com/mattboldt/typed.js)
* [Normalize.css](https://github.com/necolas/normalize.css/)



#### How to run the project

* First run `yarn install`
* After that you can either run `yarn dev` to run the project or `yarn startapp` to run the app wrapped in the electron app
* If you want to build the app run `yarn packapp` which will pack it based for your current OS, or `yarn packappall` to build it for macOS, linux and windows.
