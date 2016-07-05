# electron-react-password-manager

![](https://www.cs.cmu.edu/~cangiuli/img/angry.gif)

*Are you tired of trying to remember or write down all your passwords?*

## > Installation

### Downloads

#### [Binaries](https://github.com/michaeldegroot/electron-react-password-manager/releases)

**After download:**
 *Unzip contents somewhere and run the executable, easy as that.*

### Development

-   `cd src`
-   `gulp`

*Every time you change files in the src folder;*
*gulp will transpile, minify, concat or restart the process for you*

### Deployment

-   `gulp`

*Gulp will now compile to all target OS's. Check the console output*
*and the folder 'Build'*

## > Features

-   Node.js, ES6, Built with [Electron](http://electron.atom.io/)
-   Frontend built with [React](https://facebook.github.io/react/) And [React Bootstrap](https://react-bootstrap.github.io)
-   Random salt for PBKD2F that is generated on first run
-   Unique computer fingerprint used as a pepper for PBKD2F
-   Can encrypt and decrypt folders with your passphrase [(demo)](http://i.imgur.com/K0MBG8V.gifv)
-   up to 2.5 **million** PBKD2F iterations
-   up to 2048bit AES passphrase encryption (aes-256-cbc)
-   HMAC Authentication (Encrypt-then-MAC)
-   CSPRNG initialization vectors (randomized for each encryption!)
-   Stores passwords, email and service name encrypted to a local database
-   No accounts just a password you come up with to rule them all
-   Your password is your passphrase to unlock all your other passwords
-   All of your data is stored **CLIENT** sided, **NO** server storage!

## > Known Issues
https://github.com/michaeldegroot/electron-react-password-manager/issues

## > Security Flowchart

*Because obscurity is no security*
![](https://raw.githubusercontent.com/michaeldegroot/electron-react-password-manager/master/project%20related/flowchart7.jpg)

## > Showcase

![](http://i.imgur.com/2mVoPyr.png)
![](http://i.imgur.com/9IR9LLG.png)
![](http://i.imgur.com/2TJMRMx.png)
![](http://i.imgur.com/m0BNBv4.png)
![](http://i.imgur.com/5cHCXIO.png)
![](http://i.imgur.com/81aZUIA.gif)
