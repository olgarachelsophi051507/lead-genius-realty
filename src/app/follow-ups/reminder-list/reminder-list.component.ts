import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reminder-list',
  templateUrl: './reminder-list.component.html',
  styleUrls: ['./reminder-list.component.css']
})
export class ReminderListComponent implements OnInit {
  reminders = [
    { description: 'Recordatorio 1', date: '2024-10-15' },
    { description: 'Recordatorio 2', date: '2024-10-18' }
  ];

  constructor() {}

  ngOnInit(): void {}

  createReminder(): void {
    // Lógica para crear recordatorio
  }
}
