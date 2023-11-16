import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ItemListComponent} from './item-list.component';
import {ApiService} from "../../service/api.service";
import {HttpClientModule} from "@angular/common/http";
import {Pokemon} from "../../models/pokemon";
import {of} from "rxjs";
import {Component, Input} from "@angular/core";
import {CardComponent} from "../card/card.component";
import {ActivatedRoute} from "@angular/router";
import {RouterTestingModule} from "@angular/router/testing";
import {ExtractorServiceService} from "../../service/extractor-service.service";
import {ErrorMessageComponent} from "../error-message/error-message.component";
import {SpinnerComponent} from "../spinner/spinner.component";
import SpyObj = jasmine.SpyObj;


@Component({
  template: '',
  selector: 'app-card',
})
export class MockCardComponent implements Partial<CardComponent> {
  @Input() pokemon: Pokemon = {} as Pokemon;
}

@Component({
  template: '',
  selector: 'app-error-message',
})
export class MockErrorMessageComponent implements Partial<ErrorMessageComponent> {
  @Input() message: string = '';
}

@Component({
  template: '',
  selector: 'app-spinner',
})
export class MockSpinnerComponent implements Partial<SpinnerComponent> {
}

describe('ItemListComponent', () => {
  let component: ItemListComponent;
  let fixture: ComponentFixture<ItemListComponent>;
  let mockApiService: SpyObj<ApiService>;
  let pokemons: Pokemon[];
  let mockExtractorService: jasmine.SpyObj<ExtractorServiceService>;
  let mockActivatedRoute: any;


  beforeEach(() => {
    mockApiService = jasmine.createSpyObj<ApiService>('ApiService', ['getPokemons', 'getPokemonImage']);
    mockExtractorService = jasmine.createSpyObj('ExtractorServiceService', ['extractItemId']);
    mockActivatedRoute = {
      data: of({
        pokemons: {
          results: [
            {name: 'bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon/1/'},
            {name: 'ivysaur', url: 'https://pokeapi.co/api/v2/pokemon/2/'}
          ]
        }
      })
    };
    pokemons = [
      {
        name: 'bulbasaur',
        id: 1,
        imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
        url: 'https://pokeapi.co/api/v2/pokemon/1/'
      },
      {
        name: 'Sheksna',
        id: 2,
        imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png',
        url: 'https://pokeapi.co/api/v2/pokemon/2/'
      },
    ];

    mockApiService.getPokemons.and.returnValue(of(pokemons));
    TestBed.configureTestingModule({
      declarations: [ItemListComponent, MockCardComponent, MockErrorMessageComponent, MockSpinnerComponent],
      imports: [HttpClientModule, RouterTestingModule.withRoutes([])],
      providers: [
        {provide: ApiService, useValue: mockApiService},
        {provide: ExtractorServiceService, useValue: mockExtractorService},
        {provide: ActivatedRoute, useValue: mockActivatedRoute}
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

  it('should handle Pokemon data correctly', () => {
    component.pokemons = pokemons;
    fixture.detectChanges();

    expect(component.pokemons.length).toBe(2);
    expect(component.pokemons[0].id).toBe(1);
    expect(component.pokemons[0].imageUrl).toBe('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png');
    expect(component.pokemons[1].id).toBe(2);
    expect(component.pokemons[1].imageUrl).toBe('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png');
  });

  it('should handle error correctly', () => {
    component.pokemons = [];
    console.log(component.pokemons.length)
    fixture.detectChanges();

    expect(MockErrorMessageComponent).toBeTruthy();
  });
});
