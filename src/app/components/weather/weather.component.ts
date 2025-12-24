import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { WeatherService } from '../../weather.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-weather',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.css',
})
export class WeatherComponent {
    weatherForm!: FormGroup
    weather: any = {};
  constructor(private formBuilder: FormBuilder,
    private weatherService: WeatherService 
  ) { }
  ngOnInit() {
    this.weatherForm = this.formBuilder.group({
      city:["", [Validators.required]]
    })
  }
  search() {
  console.log("Here is object", this.weatherForm.value);
  this.weatherService.searchWeather(this.weatherForm.value).subscribe(
    (response) => {
      console.log("Here is response from API", response);
      this.weather = response;  
    }
  );
}
}
