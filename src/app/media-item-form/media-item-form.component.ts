import { ThisReceiver } from '@angular/compiler';
import { Component,OnInit,Inject } from '@angular/core';
import { FormGroup,FormControl,Validators,FormBuilder } from '@angular/forms';
import { MediaItemService } from '../services/media-item.service';
import { lookupListToken } from '../provider';


@Component({
  selector: 'app-media-item-form',
  templateUrl: './media-item-form.component.html',
  styleUrls: ['./media-item-form.component.css']
})
export class MediaItemFormComponent implements OnInit {
  form:any=FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private mediaItemService: MediaItemService,
    @Inject(lookupListToken) public lookupLists:any) {}

  ngOnInit(): void {
    this.form=this.formBuilder.group({
      name:this.formBuilder.control('',Validators.compose([
        Validators.required,
        Validators.pattern('[\\w\\-\\s\\/]+')
      ])),
      medium:this.formBuilder.control('Movies',Validators.compose([
        Validators.required
      ])),
      category:this.formBuilder.control('',Validators.compose([
        Validators.required
      ])),
      year:this.formBuilder.control('',this.IsValidYear)
    });
  }

  IsValidYear(control:any=FormControl)
  {
    if (control.value.trim().length === 0) {
      return null;
    }
    const year = parseInt(control.value, 10);
    const minYear = 1900;
    const maxYear = 2100;
    if (year >= minYear && year <= maxYear) {
      return null;
    } else {
      return {   year: {
        min: minYear,
        max: maxYear
      }
      }};
  }

  onSubmit(mediaItem:any) {
    console.log(mediaItem);
    this.mediaItemService.add(mediaItem).subscribe();
  }

}
