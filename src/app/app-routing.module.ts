import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChemistryComponent } from './chemistry/chemistry.component';
import { FlagsComponent } from './flags/flags.component';
import { StarwarsComponent } from './starwars/starwars.component';

const routes: Routes = [
  { path: "chemistry", component: ChemistryComponent},
  { path: "flags", component: FlagsComponent },
  { path: "starwars", component: StarwarsComponent }
  // { path: "", redirectTo: "home", pathMatch: "full" },
  // { path: "**", redirectTo: "home", pathMatch: "full" }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
