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
                  buildHookId: '6006e192b23cab098308196d',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-ndmkappo',
                  apiId: '2e1fe215-2c09-4f6e-8e23-125fa49db4ea'
                },
                {
                  buildHookId: '6006e1920e55ee0a5f3d7c80',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-8ao2xbc2',
                  apiId: '7c5a6e34-d143-4fe3-92c4-3de8915d32f7'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/designontap/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-8ao2xbc2.netlify.app', category: 'apps'}
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
