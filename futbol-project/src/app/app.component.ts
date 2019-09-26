import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'futbol-project';

  constructor(private route: ActivatedRoute) { 
    route.params.subscribe((data) => {
      console.log(data)
    })
  }
}
