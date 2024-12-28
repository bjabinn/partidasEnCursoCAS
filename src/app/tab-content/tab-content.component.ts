import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Partida } from '../models/partida.model'; // Importa el modelo Partida

@Component({
  selector: 'app-tab-content',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './tab-content.component.html',
  styleUrls: ['./tab-content.component.css']
})
export class TabContentComponent {
  @Input()
  partidas!: Partida[]; 
}
