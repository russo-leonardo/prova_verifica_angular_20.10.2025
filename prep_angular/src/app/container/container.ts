import { Component } from '@angular/core';

@Component({
  selector: 'app-container',
  imports: [],
  templateUrl: './container.html',
  styleUrl: './container.css'
})
export class Container {
 macchineDaCantiere: string[] = [
    'Escavatore',
    'Bulldozer',
    'Gru',
    'Betoniera',
    'Rullo compressore',
    'Pala meccanica',
    'Autogru',
    'Miniescavatore',
    'Livellatrice',
    'Fresa stradale'
  ];
}
