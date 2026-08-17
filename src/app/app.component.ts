import { Component } from '@angular/core';
import { HeroComponent } from './features/sections/hero/hero.component';
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { ExperienceComponent } from './features/sections/experience/experience.component';
import { ProjectsComponent } from './features/sections/projects/projects.component';
import { FooterComponent } from './core/components/footer/footer.component';
import { AboutmeComponent } from './features/sections/aboutme/aboutme.component';
import { SkillsComponent } from './features/sections/skills/skills.component';
import { EducationComponent } from './features/sections/education/education.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent,
    FooterComponent,
    HeroComponent,
    ExperienceComponent,
    ProjectsComponent,
    AboutmeComponent,
    SkillsComponent,
    EducationComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'portfolio';
}
