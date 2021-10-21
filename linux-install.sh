apt-get update
apt-get upgrade
apt-get install wget

printf "\x1b[38;5;214m[${time1}]\e[0m \x1b[38;5;127m[QUESTION]:\e[0m \x1b[38;5;87m Specify name of project (only for dirname): "
read projectname

git clone https://github.com/Afilidia/framework.git "$projectname"
cd "$projectname"
npm i
npm start