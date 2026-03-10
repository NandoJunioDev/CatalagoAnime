import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhesDosCards } from './detalhes-dos-cards';

describe('DetalhesDosCards', () => {
  let component: DetalhesDosCards;
  let fixture: ComponentFixture<DetalhesDosCards>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalhesDosCards]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalhesDosCards);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
