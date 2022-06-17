const _ = require('lodash');
const fs = require('fs');
const glob = require('glob');
const markdownIt = require('markdown-it');
const meta = require('markdown-it-meta');

// Load all MD files in a specified directory and order by metadata 'order' value
const getChildren = function (parent_path, dir) {
    files = glob
        .sync(parent_path + (dir ? `/${dir}` : '') + '/**/*.md')
        .map(path => {
            // Instantiate MarkdownIt
            md = new markdownIt();
            // Add markdown-it-meta
            md.use(meta);
            // Get the order value
            file = fs.readFileSync(path, 'utf8');
            md.render(file);
            order = md.meta.order;
            // Remove "parent_path" and ".md"
            path = path.slice(parent_path.length + 1, -3);
            // Remove "README", making it the de facto index page
            if (path.endsWith('README')) {
                path = path.slice(0, -6);
            }
            console.log("path", path)

            return {
                path,
                order
            };
        });

    // Return the ordered list of files, sort by 'order' then 'path'
    return _.sortBy(files, ['order', 'path'])
        .map(file => file.path);
}

const { defaultTheme } = require('vuepress')

module.exports = {
    theme: defaultTheme({
        navbar: [
            {
                text: 'Home',
                link: '/'
            },
            {
                text: 'Github',
                link: 'https://github.com/cardinalkit'
            }
        ],
        sidebar: [
            {
                text: 'CardinalKit iOS App',
                link: '/1-cardinalkit-app/1-start.md',
                children: [
                    '/1-cardinalkit-app/1-start.md',
                    '/1-cardinalkit-app/2-setup.md',
                    '/1-cardinalkit-app/3-app-customization.md',
                    '/1-cardinalkit-app/4-alternative-auth.md',
                    '/2-web-dashboard/1-deploy.md',
                    '/2-web-dashboard/2-surveys.md',
                    '/3-contributing/README.md'
                ]
            },
            {
                text: 'CardinalKit Web Dashboard',
                link: '/2-web-dashboard/1-deploy.md',
                children: [
                    '/2-web-dashboard/1-deploy.md',
                    '/2-web-dashboard/2-surveys.md',
                    '/3-contributing/README.md'
                ]
            },
            {
                text: 'Contributing',
                link: '/3-contributing',
                children: [
                    '/3-contributing/README.md'
                ]
            }
        ]
    }),
    title: 'CardinalKit Documentation',
    base: '/cardinalkit-docs/'
}
