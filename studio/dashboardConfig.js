export default {
  widgets: [
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
                  buildHookId: '62128de3335c6a940b518ed5',
                  title: 'Sanity Studio',
                  name: 'aphshof-studio',
                  apiId: '30b9ea40-6098-483c-830f-a540869729ae'
                },
                {
                  buildHookId: '62128de3b99f44c5fbcb795f',
                  title: 'Blog Website',
                  name: 'aphshof',
                  apiId: '66a29869-7297-4d9d-a266-1bced50fe436'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/kellygrape/aphshof',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://aphshof.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
