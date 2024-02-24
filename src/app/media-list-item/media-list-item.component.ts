import { Component,OnInit } from '@angular/core';
import { MediaItemService ,MediaItem} from '../services/media-item.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-media-list-item',
  templateUrl: './media-list-item.component.html',
  styleUrls: ['./media-list-item.component.css']
})
export class MediaListItemComponent implements OnInit {
  mediaItemsList:any;
  medium = '';
  constructor(
    private mediaItemService: MediaItemService,
    private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activatedRoute.paramMap
      .subscribe(paramMap => {
        let medium :any= paramMap.get('medium');
        if (medium.toLowerCase() === 'all') {
          medium = '';
        }
        this.getMediaItems(medium);
      });
  }


  onMediaItemDelete(mediaItem: MediaItem) {
    this.mediaItemService.delete(mediaItem)
      .subscribe(() => {
        this.getMediaItems(this.medium);
      });
  }
   getMediaItems(medium: string) {
    this.medium = medium;
    this.mediaItemService.get(medium)
      .subscribe(mediaItems => {
        this.mediaItemsList = mediaItems;
      });
  }

}
