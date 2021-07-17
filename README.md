# **Raptor** :dragon_face: *Or smth, I don't know, this is early alpha of our product*  
  
### Hello there! :wave:  
This project is under development. Therefore, every user of our framework is bound by **the principle of confidentiality**.  
    
## Branches  
Branch | Description  
--- | ---  
`main` | Main branch is branch with our stable version data.  
`beta` | Beta branch is for users, who love getting features before others.  
`dev` | Development branch is for development purposes. It is a risky idea to use it as the main source of the framework as there is a high probability of an error  
  
## Instalation  
### Windows and Linux:  
#### You need to log in to github account while repo is private!    
```sh  
git clone https://github.com/Afilidia/framework.git template
cd template
npm i  
npm start  
```  
### Automated Linux install script:  
#### WARNING! This installation script doesn't works until repo is private!  
```sh
wget https://raw.githubusercontent.com/Afilidia/framework/dev/index.js | sh
```  
  
## Logger binds  
### Usage: `$(bind)` ex. `$(fg-green)Success!$(gb-reset)`  
**Type** | Global Style | Foreground Color | Background Color | Debug Helpers  
--- | --- | --- | --- | ---  
**Binds** | <ul><li><code>gb-reset</code></li><li><code>gb-bright</code></li><li><code>gb-bold</code></li><li><code>gb-dim</code></li><li><code>gb-underscore</code></li><li><code>gb-blink</code></li><li><code>gb-reverse</code></li><li><code>gb-hidden</code></li></ul> | <ul><li><code>fg-black</code></li><li><code>fg-red</code></li><li><code>fg-green</code></li><li><code>fg-yellow</code></li><li><code>fg-blue</code></li><li><code>fg-magenta</code></li><li><code>fg-cyan</code></li><li><code>fg-white</code></li></ul> | <ul><li><code>bg-black</code></li><li><code>bg-red</code></li><li><code>bg-green</code></li><li><code>bg-yellow</code></li><li><code>bg-blue</code></li><li><code>bg-magenta</code></li><li><code>bg-cyan</code></li><li><code>bg-white</code></li></ul> | <ul><li><code>stack</code></li><li><code>uptime</code></li><li><code>platform</code></li><li><code>ram</code></li></ul>  