import {Component} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { MatFormField } from '@angular/material/form-field';

@Component({
  selector: 'app-body',
  imports: [FormsModule, MatButtonModule, MatFormField, MatIconModule, MatInputModule],
  templateUrl: './body.html',
  styleUrl: './body.scss'
})
export class Body {
  value = '';
}
