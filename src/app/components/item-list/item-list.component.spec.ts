import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ItemListComponent} from './item-list.component';
import {ApiService} from "../../service/api.service";
import {HttpClientModule} from "@angular/common/http";
import {Pokemon} from "../../models/pokemon";
import {of} from "rxjs";
import {Component, Input} from "@angular/core";
import {CardComponent} from "../card/card.component";
import SpyObj = jasmine.SpyObj;


@Component({
  template: '',
  selector: 'app-card',
})
export class MockCardComponent implements Partial<CardComponent> {
  @Input() pokemon: Pokemon = {} as Pokemon;
}

describe('ItemListComponent', () => {
  let component: ItemListComponent;
  let fixture: ComponentFixture<ItemListComponent>;
  let mockApiService: SpyObj<ApiService>;
  let pokemons: Pokemon[];

  beforeEach(() => {
    pokemons = [
      {
        name: 'bulbasaur',
        id: 1,
        imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'
      },
      {
        name: 'Sheksna',
        id: 2,
        imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png'
      },
    ];
    mockApiService = jasmine.createSpyObj<ApiService>('ApiService', ['getPokemons']);
    mockApiService.getPokemons.and.returnValue(of(pokemons));
    TestBed.configureTestingModule({
      declarations: [ItemListComponent, MockCardComponent],
      imports: [HttpClientModule],
      providers: [
        {provide: ApiService, useValue: mockApiService}
      ]
    });


    fixture = TestBed.createComponent(ItemListComponent);
    component = fixture.componentInstance;
    component.pokemons = pokemons;
    fixture.detectChanges();
  });

  it('should create', () => {

    expect(component).toBeTruthy();
  });
});
