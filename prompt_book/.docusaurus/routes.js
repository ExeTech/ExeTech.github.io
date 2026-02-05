import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/prompt_book/build/docs',
    component: ComponentCreator('/prompt_book/build/docs', 'a90'),
    routes: [
      {
        path: '/prompt_book/build/docs',
        component: ComponentCreator('/prompt_book/build/docs', '763'),
        routes: [
          {
            path: '/prompt_book/build/docs',
            component: ComponentCreator('/prompt_book/build/docs', 'a4d'),
            routes: [
              {
                path: '/prompt_book/build/docs/category/training',
                component: ComponentCreator('/prompt_book/build/docs/category/training', 'a7c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/prompt_book/build/docs/intro',
                component: ComponentCreator('/prompt_book/build/docs/intro', 'ee3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/prompt_book/build/docs/training/intro-to-lighting',
                component: ComponentCreator('/prompt_book/build/docs/training/intro-to-lighting', '6ee'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/prompt_book/build/docs/training/intro-to-production',
                component: ComponentCreator('/prompt_book/build/docs/training/intro-to-production', 'c99'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/prompt_book/build/docs/training/intro-to-sound',
                component: ComponentCreator('/prompt_book/build/docs/training/intro-to-sound', '7bb'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/prompt_book/build/',
    component: ComponentCreator('/prompt_book/build/', '044'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
