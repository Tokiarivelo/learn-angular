import { Component, input } from '@angular/core';
import { HousingLocationInfo } from '../housinglocation';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-housing-location',
  imports: [RouterLink, MatIconModule],
  templateUrl: './housing-location.html',
  styleUrl: './housing-location.css',
})
export class HousingLocation {
  housingLocation = input.required<HousingLocationInfo>();
}
