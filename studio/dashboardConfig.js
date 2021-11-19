export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6197efbaf8a9c306d469e1cf',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-2-studio-5afjrbxh',
                  apiId: 'e44b57d8-9891-4782-81fa-ece634cb793a'
                },
                {
                  buildHookId: '6197efba26b7e2098b3a8d5d',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-2-web-2zn2mjtd',
                  apiId: '2b8f5d5f-b92b-42b0-9539-79c09fa70e15'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/kathmbeck/sanity-gatsby-portfolio-2',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-2-web-2zn2mjtd.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
