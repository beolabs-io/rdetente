import { Component } from '@angular/core';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

export class ContactComponent {
  
  title = "Horaires d'ouverture";

  openingDays = [

    {
      day: 'Lundi',
      open: '9AM',
      close: '8PM',
    },
    {
      day: 'Mardi',
      open: '9AM',
      close: '8PM',
    },
    {
      day: 'Mercredi',
      open: '9AM',
      close: '8PM',
    },
    {
      day: 'Jeudi',
      open: '9AM',
      close: '8PM',
    },
    {
      day: 'Vendredi',
      open: '9AM',
      close: '8PM',
    },
    {
      day: 'Samedi',
      open: '9AM',
      close: '8PM',
    },

  ]

}