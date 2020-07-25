import { Component, OnInit } from '@angular/core';
import { TopHeadlines } from './../../api/api';

// let text = '';

// TopHeadlines.getNews().then(data => {
//     text = data.totalResults;
// })

// alert(text);

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.css'] 
})
export class CardComponent implements OnInit{
    text = '';

    ngOnInit(): void {
        TopHeadlines.getNews().then(data => {
            this.text = data.status;
        })
    }

    title = 'My card title';

   

}
