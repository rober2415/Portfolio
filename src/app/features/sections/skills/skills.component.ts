import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SkillsService, Skill } from '../../../core/services/skills.service';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css',
})
export class SkillsComponent {
  skills: Skill[] = [];

  constructor(private skillsService: SkillsService) {}

  ngOnInit(): void {
    this.skills = this.skillsService.getSkills();
  }

  // Métodos para agrupar categoría
  get frontendSkills(): Skill[] {
    return this.skills.filter((s) => s.category === 'frontend');
  }

  get backendAndDbSkills(): Skill[] {
    return this.skills.filter(
      (s) => s.category === 'backend' || s.category === 'database',
    );
  }

  get toolsAndManagementSkills(): Skill[] {
    return this.skills.filter(
      (s) =>
        s.category === 'project-management' ||
        s.category === 'version-control' ||
        s.category === 'devops',
    );
  }
}
