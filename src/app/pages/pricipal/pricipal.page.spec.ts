import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PricipalPage } from './pricipal.page';

describe('PricipalPage', () => {
  let component: PricipalPage;
  let fixture: ComponentFixture<PricipalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PricipalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PricipalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
