import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { TabContentComponent } from '../tab-content/tab-content.component';
import { TorneoService } from '../services/torneo.service';
import { Torneo } from '../models/torneo.model'; 
import { Partida } from '../models/partida.model';

@Component({
  selector: 'app-tabs',
  standalone: true,
  imports: [CommonModule, MatTabsModule, TabContentComponent],
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {
  locations: any[] = [];

  constructor(private torneoService: TorneoService) {}

  ngOnInit() {
    console.log('-------------------------------------TabsComponent inicializado');
    this.torneoService.getTorneos().subscribe(data => {
      this.locations = data.map((torneo: Torneo) => ({
        name: torneo.lugar,
        games: torneo.partidas.map((partida: Partida) => ({
          jugador1: partida.jugador1,
          jugador2: partida.jugador2,
          resultado1: partida.resultado1,
          resultado2: partida.resultado2
        }))
      }));
    });
  }
}
