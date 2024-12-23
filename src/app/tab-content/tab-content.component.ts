import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tab-content',
  standalone: true,
  imports: [CommonModule], // Import CommonModule
  templateUrl: './tab-content.component.html',
  styleUrls: ['./tab-content.component.css']
})
export class TabContentComponent {
  @Input() games!: { player1: string, player2: string, result1: number, result2: number }[];
}
