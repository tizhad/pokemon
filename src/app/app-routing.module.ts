import {RouterModule, Routes} from "@angular/router";
import {ItemListComponent} from "./components/item-list/item-list.component";
import {PokemonDetailComponent} from "./components/about/pokemon-detail.component";
import {NgModule} from "@angular/core";

const routes: Routes = [
  {path: '', component: ItemListComponent},
  {path: 'pokemon/:id', component: PokemonDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
