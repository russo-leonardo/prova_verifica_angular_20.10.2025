import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-macchina',
  imports: [],
  templateUrl: './macchina.html',
  styleUrl: './macchina.css'
})
export class Macchina {
    @Input() macchina!: string;

}
