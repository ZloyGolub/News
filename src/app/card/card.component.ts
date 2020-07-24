import { Component } from '@angular/core';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.css'] 
})
export class CardComponent {
    title = 'My card title'

    text = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, dicta!'
}
