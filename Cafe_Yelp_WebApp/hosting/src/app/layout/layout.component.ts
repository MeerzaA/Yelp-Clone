import { Component } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA, Output, EventEmitter  } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule} from '@angular/common';


@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LayoutComponent {

}
