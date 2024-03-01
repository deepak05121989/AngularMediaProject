import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MediaItemService {
    url:string="https://localhost:7178/api/MediaItem/"
  	constructor(private http: HttpClient) {} 


    // getDataFromServer() {
    //   return this.http.get<any>(this.url);
    // }

    get(medium:string) {
      return this.http.get<MediaItemsResponse>(this.url+medium)
        .pipe(
          map((response: MediaItemsResponse) => {
            //console.log(response);
            response.mediaItems=JSON.parse(JSON.stringify(response));
            return response.mediaItems;
          }),
        catchError(this.handleError)
        );
    }

  
    add(mediaItem: MediaItem) {
      return this.http.post(this.url, mediaItem)
      .pipe(
        catchError(this.handleError)
      );
    }
  
    delete(mediaItem: MediaItem) {
      return this.http.delete(`${this.url}/${mediaItem.id}`)
      .pipe(
        catchError(this.handleError)
      );
    }

    private handleError(error: HttpErrorResponse) {
      console.error(error.message);
      return throwError(()=>error);
    }
  
    
  }
  
  interface MediaItemsResponse {
	  mediaItems: MediaItem[];
	}
	
	export interface MediaItem {
	  id: number;
	  name: string;
	  medium: string;
	  category: string;
	  year: number;
	  watchedOn: number;
	  isFavorite: boolean;
	}
