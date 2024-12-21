import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { CommonModule } from '@angular/common';
import { TabContentComponent } from '../tab-content/tab-content.component'; // Import TabContentComponent

@Component({
  selector: 'app-tabs',
  standalone: true,
  imports: [CommonModule, MatTabsModule, TabContentComponent], // Import MatTabsModule, CommonModule y TabContentComponent
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent {
  locations = [
    { name: 'Location 1', games: [
      { player1: 'Player A', player2: 'Player B' },
      { player1: 'Player C', player2: 'Player D' },
      { player1: 'Player E', player2: 'Player F' }
    ] },
    { name: 'Location 2', games: [
      { player1: 'Player G', player2: 'Player H' },
      { player1: 'Player I', player2: 'Player J' },
      { player1: 'Player K', player2: 'Player L' }
    ] }
  ];
}
