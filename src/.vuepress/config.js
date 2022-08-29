const { defaultTheme } = require('vuepress')
const { docsearchPlugin } = require('@vuepress/plugin-docsearch')

module.exports = {
    theme: defaultTheme({
        repo: 'cardinalkit',
        contributors: false,
        navbar: [
            {
                text: 'Home',
                link: 'https://cardinalkit.org'
            }
        ],
        sidebar: [
            {
                text: 'CardinalKit iOS App',
                link: '/1-cardinalkit-app',
                children: [
                    '/1-cardinalkit-app/1-start.md',
                    '/1-cardinalkit-app/2-setup.md',
                    '/1-cardinalkit-app/3-app-customization.md'
                ]
            },
            {
                text: 'CardinalKit Android App',
                link: '/android-app',
                children: [
                    '/android-app/start.md',
                    '/android-app/setup.md'
                ]
            },
            {
                text: 'CardinalKit Web Dashboard',
                link: '/2-web-dashboard',
                children: [
                    '/2-web-dashboard/1-deploy.md',
                    '/2-web-dashboard/2-surveys.md'
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
    base: '/cardinalkit-docs/',
    plugins: [
        docsearchPlugin({
            apiKey: '',
            indexName: '', 
            appId: ''
        })
    ]
}
