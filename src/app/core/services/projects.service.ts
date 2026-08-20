import { Injectable } from '@angular/core';

export interface Project {
  id: string;
  title: string;
  desciption: string;
  tags: Tag[];
  code: string;
  preview: string;
  image: string;
}

export interface Tag {
  name: string;
  icon: string;
}

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  private projects: Project[] = [
    {
      id: 'surl',
      title: 'SURL - URL Shortener',
      desciption: 'Desarrollé',
      tags: [
        { name: 'Angular', icon: 'assets/img/angular.svg' },
        { name: 'Laravel', icon: 'assets/img/laravel.svg' },
        { name: 'PostgreSQL', icon: 'assets/img/postgresql.svg' },
      ],
      code: 'https://github.com/rober2415/short-url',
      preview: 'https://surlrca.vercel.app',
      image: 'assets/img/surl-preview.png',
    },
  ];
  constructor() {}

  getProjects() {
    return this.projects;
  }
}
