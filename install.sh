echo "======================"
echo "Install Running client"
echo "======================"
cd client/ 
if [[ "$OSTYPE" == "cygwin" ]]; then
  copy env.sample .env
elif [[ "$OSTYPE" == "msys" ]]; then
  copy env.sample .env
elif [[ "$OSTYPE" == "win32" ]]; then
  copy env.sample .env
else
  cp env.sample .env
fi
yarn install
echo "======================"
echo "Install Running server"
echo "======================"
cd ..
cd server
yarn install
echo "run client with different terminal"
echo "cd client/"
echo "yarn start"
yarn dev