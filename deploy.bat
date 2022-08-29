call npm run build
cd src/.vuepress/dist
git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:CardinalKit/cardinalkit-docs.git master:gh-pages