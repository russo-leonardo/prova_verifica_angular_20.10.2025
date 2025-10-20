import { Component } from '@angular/core';
import { Macchina } from '../macchina/macchina';

@Component({
  selector: 'app-container',
  imports: [Macchina],
  templateUrl: './container.html',
  styleUrl: './container.css'
})
export class Container {
  names: string[];
  constructor() { 
     this.names = [
    'Escavatore',
    'Bulldozer',
    'Gru',
    'Betoniera',
    'Rullo compressore',
    'Pala meccanica',
    'Autogru',
    'Miniescavatore',
    'Livellatrice',
    'Fresa strada']
  }
  ngOnInit() {
  }
}
