import {ComponentFixture, TestBed} from '@angular/core/testing';

import {PokemonDetailComponent} from './pokemon-detail.component';
import {ActivatedRoute} from "@angular/router";
import {BehaviorSubject} from "rxjs";
import {HttpClientModule} from "@angular/common/http";

describe('PokemonDetailComponent', () => {
  let component: PokemonDetailComponent;
  let fixture: ComponentFixture<PokemonDetailComponent>;
  let route: ActivatedRoute;
  const paramsSubject = new BehaviorSubject({
    id1: 1,
    id2: 0,
  });

  beforeEach(() => {


    TestBed.configureTestingModule({
      declarations: [PokemonDetailComponent],
      imports: [HttpClientModule],
      providers: [
        {provide: ActivatedRoute, useValue: {params: paramsSubject}},
      ],
    });
    fixture = TestBed.createComponent(PokemonDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
