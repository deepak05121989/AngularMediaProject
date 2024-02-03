import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaListItemComponent } from './media-list-item.component';

describe('MediaListItemComponent', () => {
  let component: MediaListItemComponent;
  let fixture: ComponentFixture<MediaListItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MediaListItemComponent]
    });
    fixture = TestBed.createComponent(MediaListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
