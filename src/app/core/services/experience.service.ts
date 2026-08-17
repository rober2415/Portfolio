import { Injectable } from '@angular/core';

export interface Experience {
  id: number;
  role: string;
  company: string;
  startDate: Date;
  endDate?: Date;
  tasks: string[];
}

@Injectable({
  providedIn: 'root',
})
export class ExperienceService {
  private experiences: Experience[] = [
    {
      id: 1,
      role: 'IT Project Manager',
      company: 'Acrelec Informática Group',
      startDate: new Date('2024-01-01'),
      tasks: [
        'Gestión integral de proyectos IT desde la planificación hasta la entrega final.',
        'Coordinación y ejecución de despliegues de aplicaciones y software en producción.',
        'Gestión del flujo de trabajo y documentación técnica.',
      ],
    },
    {
      id: 2,
      role: 'Técnico de Sistemas',
      company: 'Acrelec Informática Group',
      startDate: new Date('2023-01-02'),
      endDate: new Date('2024-12-31'),
      tasks: [
        'Administración y configuración de equipos.',
        'Soporte remoto.',
        'Gestión y resolución de incidencias.',
      ],
    },
  ];
  constructor() {}

  getExperiences() {
    return [...this.experiences].sort(
      (a, b) => b.startDate.getTime() - a.startDate.getTime(),
    );
  }
}
