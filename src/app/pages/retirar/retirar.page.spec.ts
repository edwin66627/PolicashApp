import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RetirarPage } from './retirar.page';

describe('RetirarPage', () => {
  let component: RetirarPage;
  let fixture: ComponentFixture<RetirarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetirarPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RetirarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
