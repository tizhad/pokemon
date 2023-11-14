import {RouterModule, Routes} from "@angular/router";
import {ItemListComponent} from "./components/item-list/item-list.component";
import {PokemonDetailComponent} from "./components/about/pokemon-detail.component";
import {NgModule} from "@angular/core";
import {PokemonResolverService} from "./service/pokemon-resolver.service";

const routes: Routes = [
  {
    path: '', component: ItemListComponent, resolve: {
      pokemons: PokemonResolverService
    }
  },
  {path: 'pokemon/:id', component: PokemonDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
