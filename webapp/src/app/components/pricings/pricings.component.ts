import { Component } from '@angular/core';
import { ApplicationStateService } from '../../services/application-state/application-state.service';

declare var $: any;

@Component({
  selector: 'pricings',
  templateUrl: './pricings.component.html',
  styleUrls: ['./pricings.component.css']
})

export class PricingsComponent {

  constructor(private applicationStateService : ApplicationStateService) { }

  pricingsTitle = 'Prestations'
  showCategories = true;
  selectedCategory = null;

  pricingCategories = [

    // FEMMES
    { 
      title: 'Femmes', 
      description: 'Coupe, coiffure', 
      img: 'http://www.welearn2fly.com/beau/2/images/team1.jpg',
      prestations: [
        { 
          group: null,    
          items: [
            { 
              description: 'Entretien coupe et brushing court ou fin',
              duration: '45min',
              price: '40',
            },
            { 
              description: 'Création coupe et brushing longs ou épais',
              duration: '1h',
              price: '45',
            },
            { 
              description: 'Création brushing court', 
              duration: '30min',
              price: '22',
            },
            { 
              description: 'Création brushing long', 
              duration: '40min',
              price: '26',
            },
            { 
              description: 'Création coiffure éphémère', 
              duration: '30min',
              price: '34',
            },
            {
              description: 'Création chignon', 
              duration: '45min',
              price: '45',
            },
            { 
              description: 'Séchage express', 
              duration: '10min',
              price: '12',
            },
          ],
        },
      ],
    },

    // HOMMES
    { 
      title: 'Hommes', 
      description: 'Coupe, coiffure, service barbier', 
      img: 'https://www.dmarge.com/wp-content/uploads/2018/04/barber.jpg',
      prestations: [
        {
          group: 'Coupe, coiffure',
          items: [
            { 
              description: 'Homme Classique',
              duration: '30min',
              price: '24',
            },
            { 
              description: 'Homme Gentleman (+ 4mn massage crânien +1mn méthode relaxante)',
              duration: '45min',
              price: '29',
            },
          ],
        },
        {
          group: 'Service Barbier',
          items: [
            { 
              description: 'Barbe Classique (taille et rasage)',
              duration: '15min',
              price: '13',
            },
            { 
              description: 'Barbe Tradition (taille + rasage + huile + crème apaisante)',
              duration: '20min',
              price: '18',
            },
            { 
              description: 'Barbe Tradition (avec serviette chaude)',
              duration: '30min',
              price: '25',
            },
          ],
        },
      ],
    },

    // DETENTE
    { 
      title: 'Détente', 
      description: 'Beauté, spa, massage', 
      img: 'https://static.lexpress.fr/medias_11548/w_2048,h_1146,c_crop,x_0,y_113/w_480,h_270,c_fill,g_north/v1499605991/massage-2_5912954.jpg',
      prestations: [
        {
          group: 'Beauté',
          items: [
            { 
              description: 'Pose de vernis french',
              duration: '30min',
              price: '15',
            },
          ],
        },
        {
          group: 'Spa',
          items: [
            { 
              description: 'Spa 15min',
              duration: '15min',
              price: '5',
            },
          ],
        },
        {
          group: 'Massages',
          items: [
            { 
              description: 'Detente profonde',
              duration: '1h',
              price: '65',
            },
            { 
              description: 'Royale detente',
              duration: '1h 30min',
              price: '89',
            },
            { 
              description: 'Cocoon pour elle',
              duration: '2h',
              price: '89',
            },
            
            { 
              description: 'Hawaïen Lomi Lomi',
              duration: '1h',
              price: '68',
            },
            { 
              description: 'Suédois',
              duration: '1h',
              price: '68',
            },
            { 
              description: 'Moheli au graines chaudes',
              duration: '1h',
              price: '70',
            },
            { 
              description: 'Orient express',
              duration: '30min',
              price: '40',
            },
            { 
              description: 'Orient express',
              duration: '45min',
              price: '49',
            },
            { 
              description: 'Le soin éclat',
              duration: '45min',
              price: '45',
            },
            { 
              description: 'En Duo',
              duration: '1h 30min',
              price: '130',
            },
            { 
              description: 'Rituel express',
              duration: '30min',
              price: '20',
            },
            { 
              description: 'Rituel bien être',
              duration: '1h',
              price: '45',
            },
          ],
        },
      ],
    },

    // TECHNIQUE & EXPERTISE
    { 
      title: 'Technique & Expertise', 
      description: 'Coloration, mèches, soins des cheveux', 
      img: 'http://www.couleur-cheveux.com/wp-content/uploads/2014/08/photo-coloration-cheveux-idee-6.jpg',
      prestations: [
        {
          group: 'Techniques de colorations',
          items: [
            { 
              description: 'Coloration + Sh + Coupe + Brushing longs ou épais',
              duration: '2h 10min',
              price: 'à partir de 78',
            },
            { 
              description: 'Coloration + Sh + Brushing long ou épais',
              duration: '1h 45min',
              price: '59',
            },
            { 
              description: 'Coloration + Sh + Brushing court ou fin',
              duration: '1h 30min',
              price: '55',
            },
            { 
              description: 'Coloration + Sh + Séchage express',
              duration: '1h 20min',
              price: '45',
            },
            { 
              description: 'Coloration avec et sans ammoniaque',
              duration: '1h',
              price: '',
            },
            { 
              description: 'Coloration végétale',
              duration: '45min',
              price: '33',
            },
            { 
              description: 'Couleur ton sur ton',
              duration: '20min',
              price: 'de 33 à 38',
            },
          ],
        },
        {
          group: 'Techniques de mèches',
          items: [
            { 
              description: 'Mèches Cheveux Courts',
              duration: '1h 20min',
              price: '55',
            },
            { 
              description: 'Mèches Cheveux Medium',
              duration: '1h 30 min',
              price: '69',
            },
            { 
              description: 'Mèches Cheveux Longs',
              duration: '1h 40min',
              price: '85',
            },
            { 
              description: 'Balayage Cheveux Court',
              duration: '1h',
              price: '35',
            },
            { 
              description: 'Balayage Cheveux Médium',
              duration: '1h 20min',
              price: '49',
            },
            { 
              description: 'Balayage Cheveux Longs',
              duration: '1h 25min',
              price: '75',
            },
            { 
              description: 'Patine',
              duration: '30min',
              price: 'de 12 à 20',
            },
          ],
        },
        {
          group: 'Soins des Cheveux',
          items: [
            { 
              description: 'Soin Express',
              duration: '5min',
              price: '5',
            },
            { 
              description: 'Soin intense ou repigmentant',
              duration: '10min',
              price: '8',
            },
            { 
              description: 'Soin ampoule cheveux longs',
              duration: '10min',
              price: '12',
            },
            { 
              description: 'Gommage argile',
              duration: '30min',
              price: '20',
            },
            { 
              description: 'Anti-pelliculaire Peeling Apaisant',
              duration: '30min',
              price: '25',
            },
          ],
        },
        {
          group: 'Soins Experts Cheveux',
          items: [
            { 
              description: 'Soin Expert PCC Courts',
              duration: '30min',
              price: '25',
            },
            { 
              description: 'Soin Expert PCC Mi-longs',
              duration: '30min',
              price: '30',
            },
            { 
              description: 'Soin Expert PCC Longs',
              duration: '30min',
              price: '35',
            },
            { 
              description: 'Soin Expert Oil Therapy Courts',
              duration: '30min',
              price: '35',
            },
            { 
              description: 'Soin Expert Oil Therapy Mi-longs',
              duration: '30min',
              price: '40',
            },
            { 
              description: 'Soin Expert Oil Therapy Longs',
              duration: '30min',
              price: '45',
            },
          ],
        },
      ],
    },

    // ENFANTS
    { 
      title: 'Enfants', 
      description: 'Coupe, coiffure', 
      img: 'https://www.cepeda-coiffure.com/wp-content/uploads/2016/05/coiffeur-enfant.jpg',
      prestations: [
        {
          group: null,
          items: [
            { 
              description: 'Bambino -3 ans',
              duration: '30min',
              price: '12',
            },
            { 
              description: 'Garçon -16 ans',
              duration: '30min',
              price: '19',
            },
            { 
              description: 'Fille -15 ans',
              duration: '30min',
              price: 'de 30 à 40',
            },
            { 
              description: 'Garçons sans shampoing',
              duration: '20min',
              price: '15',
            },
          ],
        },
      ],
    },

    // EVENEMENTS
    { 
      title: 'Evènements', 
      description: 'Mariage, diagnostics, retouches', 
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVb9NiBB_HAmYVS1LKsxLmYOAlzqXnreQXxbloHl7hnILL-TIX',
      prestations: [
        {
          group: null,
          items: [
            { 
              description: 'Forfait Mariage',
              duration: '1h 30min',
              price: '145',
            },
            { 
              description: 'Diagnostic ou retouche make-up (service offert suite à une prestation)',
              duration: '15min',
              price: '-',
            },
          ],
        },
      ],
    },

  ];

  onPricingCategoryClick(category): void {

    this.showCategories = false;
    this.selectedCategory = category;

    $('#map-container').scrollIntoView({behavior: 'smooth'});

  }

  showPricingCategories() : void {

    this.showCategories = true;
    this.selectedCategory = null;

    $('#map-container').scrollIntoView({behavior: 'smooth'});

  }

}