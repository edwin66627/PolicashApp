import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AhorrarPage } from './ahorrar.page';

describe('AhorrarPage', () => {
  let component: AhorrarPage;
  let fixture: ComponentFixture<AhorrarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AhorrarPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AhorrarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
