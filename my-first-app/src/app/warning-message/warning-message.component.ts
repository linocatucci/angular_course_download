import { Component } from '@angular/core';

@Component({
    selector: 'app-warning-message',
    template: `<h4>Dit is een warning message</h4>`,
    styles: [
        `
        h4 {
            font-size:20px;
            color: orange;
            background:mistyrose;
            border: 1px solid red;
        }
        `
    ]
})
export class WarningMessageComponent {

}
