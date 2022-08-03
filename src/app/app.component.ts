import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-transloco';
  // @ts-ignore
  selectedValue = window.urlParams.language || 'en';

  onLanguageChange() {

  }
}
