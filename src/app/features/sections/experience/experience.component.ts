import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ExperienceService,
  Experience,
} from '../../../core/services/experience.service';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css',
})
export class ExperienceComponent implements OnInit {
  experiences: Experience[] = [];

  constructor(private experienceService: ExperienceService) {}

  ngOnInit(): void {
    this.experiences = this.experienceService.getExperiences();
  }
}
