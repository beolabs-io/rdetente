import { Component } from '@angular/core';

@Component({
  selector: 'pricings',
  templateUrl: './pricings.component.html',
  styleUrls: ['./pricings.component.css']
})

export class PricingsComponent {
  
  pricingCategories = [

    { 
      title: "Femme",
      items: [

        { 
          description: 'Entretien coupe et brushing court ou fin',
          duration: '45min',
          price: '40€',
        },
        { 
          description: 'Création coupe et brushing longs ou épais',
          duration: '1h',
          price: '45€',
        },
        { 
          description: 'Création brushing court', 
          duration: '30min',
          price: '22€',
        },
        { 
          description: 'Création brushing long', 
          duration: '40min',
          price: '26€',
        },
        { 
          description: 'Création coiffure éphémère', 
          duration: '30min',
          price: '34€',
        },
        { 
          description: 'Création chignon', 
          duration: '45min',
          price: '45€',
        },
        { 
          description: 'Séchage express', 
          duration: '10min',
          price: '12€',
        },

      ],
    },
    {
      title: "Techniques de colorations",
      items: [],
    },
    {
      title: "Techniques de mèches",
      items: [],
    },
    {
      title: "Homme",
      items: [],
    },
    {
      title: "Service Barbier",
      items: [],
    },
    {
      title: "Enfant",
      items: [],
    },
    {
      title: "Soins du Cheveux",
      items: [],
    },
    {
      title: "Soins Experts Cheveux",
      items: [],
    },

  ];
}