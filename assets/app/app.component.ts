import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.template.html',
    styles: [ `
      .author {
        display: inline-block;
        font-style: italic;
        font-size: 12px;
        width: 80%;
      }
      .config {
        display: inline-block;
        text-align: right;
        font-size: 12px;
        width: 19%;
      }
    `]
    // template: `
    //     <h1>Hello World</h1>
    // `
})
export class AppComponent {
  message = {
    content: 'Hello!',
    author: 'Jonathan'
  }
}
