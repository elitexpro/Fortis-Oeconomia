rm -rf out
yarn build
yarn export
cp .htaccess out/
rm -rf out.tar.gz
#tar -czvf out.tar.gz out/
rm -rf /var/www/html
cp -r out /var/www/html