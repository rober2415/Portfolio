import { Injectable } from '@angular/core';

export interface Skill {
  id: string;
  name: string;
  imageUrl: string;
  category: string;
}

@Injectable({
  providedIn: 'root',
})
export class SkillsService {
  private skills: Skill[] = [
    {
      id: 'angular',
      name: 'Angular',
      imageUrl: './assets/img/angular.svg',
      category: 'frontend',
    },
    {
      id: 'typescript',
      name: 'TypeScript',
      imageUrl: './assets/img/typescript.svg',
      category: 'frontend',
    },
    {
      id: 'javascript',
      name: 'JavaScript',
      imageUrl: './assets/img/javascript.svg',
      category: 'frontend',
    },
    {
      id: 'bootstrap',
      name: 'Bootstrap',
      imageUrl: './assets/img/bootstrap.svg',
      category: 'frontend',
    },
    {
      id: 'html',
      name: 'HTML',
      imageUrl: './assets/img/html5.svg',
      category: 'frontend',
    },
    {
      id: 'css',
      name: 'CSS3',
      imageUrl: './assets/img/css_old.svg',
      category: 'frontend',
    },
    {
      id: 'laravel',
      name: 'Laravel',
      imageUrl: './assets/img/laravel.svg',
      category: 'backend',
    },
    {
      id: 'php',
      name: 'PHP',
      imageUrl: './assets/img/Php_dark.svg',
      category: 'backend',
    },
    {
      id: 'java',
      name: 'Java',
      imageUrl: './assets/img/java.svg',
      category: 'backend',
    },
    {
      id: 'mysql',
      name: 'MySQL',
      imageUrl: './assets/img/MySQL_dark.svg',
      category: 'database',
    },
    {
      id: 'mongodb',
      name: 'MongoDB',
      imageUrl: './assets/img/MongoDB_dark.svg',
      category: 'database',
    },
    {
      id: 'git',
      name: 'Git',
      imageUrl: './assets/img/git.svg',
      category: 'version-control',
    },
    {
      id: 'github',
      name: 'GitHub',
      imageUrl: './assets/img/GitHub_dark.svg',
      category: 'version-control',
    },
    {
      id: 'docker',
      name: 'Docker',
      imageUrl: './assets/img/docker.svg',
      category: 'devops',
    },
    {
      id: 'postman',
      name: 'Postman',
      imageUrl: './assets/img/postman.svg',
      category: 'devops',
    },
    {
      id: 'jira',
      name: 'Jira',
      imageUrl: './assets/img/jira.svg',
      category: 'project-management',
    },
    {
      id: 'confluence',
      name: 'Confluence',
      imageUrl: './assets/img/confluence.webp',
      category: 'project-management',
    },
    {
      id: 'asana',
      name: 'Asana',
      imageUrl: './assets/img/asana-logo.svg',
      category: 'project-management',
    },
  ];

  constructor() {}

  getSkills() {
    return this.skills;
  }
}
