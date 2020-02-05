import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VisorPage } from './visor.page';

describe('VisorPage', () => {
  let component: VisorPage;
  let fixture: ComponentFixture<VisorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisorPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VisorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
