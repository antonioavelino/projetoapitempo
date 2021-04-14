import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorrentWeatherComponent } from './corrent-weather.component';

describe('CorrentWeatherComponent', () => {
  let component: CorrentWeatherComponent;
  let fixture: ComponentFixture<CorrentWeatherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorrentWeatherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CorrentWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
