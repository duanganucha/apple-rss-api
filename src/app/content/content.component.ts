import { Component, OnInit } from '@angular/core';
import { MusicService } from '../music.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  items ;
  itemSelect ; 
  constructor(private musicService : MusicService) { 
  }


  ngOnInit() {

    this.musicService.getMusic().subscribe(data => {
      this.items = data;
      this.items = this.items.feed.results
      console.log(this.items)
    })

  }

  onSelect(item){
    this.itemSelect = item
  }

}
