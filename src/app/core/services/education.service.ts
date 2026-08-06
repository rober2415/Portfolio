import { Injectable } from '@angular/core';

export interface Education {
  id: string;
  name: string;
  school: string;
  startDate: Date;
  endDate?: Date;
}

@Injectable({
  providedIn: 'root',
})
export class EducationService {
  private educations: Education[] = [
    {
      id: 'DAW',
      name: 'Ciclo Formativo de Grado Superior en Desarrollo de Aplicaciones Web',
      school: 'I.E.S. Maestre de Calatrava',
      startDate: new Date('2023-09-01'),
      endDate: new Date('2026-12-31'),
    },
    {
      id: 'SMR',
      name: 'Ciclo Formativo de Grado Medio en Sistemas Microinformáticos y Redes',
      school: 'I.E.S. Estados del Duque',
      startDate: new Date('2011-09-01'),
      endDate: new Date('2014-12-31'),
    },
  ];
  constructor() {}

  getEducations() {
    return [...this.educations].sort(
      (a, b) => b.startDate.getTime() - a.startDate.getTime(),
    );
  }
}
