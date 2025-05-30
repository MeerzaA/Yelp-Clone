import { Component } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarModule } from 'primeng/sidebar';



@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule,SidebarModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SidebarComponent {

}




