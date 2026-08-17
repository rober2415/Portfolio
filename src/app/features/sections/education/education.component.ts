import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  Education,
  EducationService,
} from '../../../core/services/education.service';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css',
})
export class EducationComponent {
  educations: Education[] = [];

  constructor(private educationService: EducationService) {}

  ngOnInit(): void {
    this.educations = this.educationService.getEducations();
  }
}
