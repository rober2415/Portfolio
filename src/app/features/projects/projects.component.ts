import { Component, OnInit } from '@angular/core';
import { Project, ProjectsService } from '../../core/services/projects.service';


@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [];

  constructor(private projectService: ProjectsService) {}

  ngOnInit(): void {
    this.projects = this.projectService.getProjects();
  }
}
