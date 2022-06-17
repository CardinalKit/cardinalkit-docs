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
