import { Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { EnregistreQuartierComponent } from './Components/enregistre-quartier/enregistre-quartier.component';
import { EnregistreMaisonComponent } from './Components/enregistre-maison/enregistre-maison.component';
import { ListeMaisonComponent } from './Components/liste-maison/liste-maison.component';
import { ListeQuartierComponent } from './Components/liste-quartier/liste-quartier.component';
import { SaveComponent } from './Components/save/save.component';
import { ModifQuartierComponent } from './Components/modif-quartier/modif-quartier.component';
import { ModifMaisonComponent } from './Components/modif-maison/modif-maison.component';
import { TabComponent } from './Components/tab/tab.component';
import { CategoriesComponent } from './Components/categories/categories.component';


export const routes: Routes = [
    {path:'', component: LoginComponent},
    {path:'Dashboard', component: DashboardComponent},
    {path:'quartier', component: EnregistreQuartierComponent},
    {path:'Maison', component: EnregistreMaisonComponent},
    {path:'listeMaison', component: ListeMaisonComponent},
    {path:'listeQuartier', component: ListeQuartierComponent},
    {path:'save', component: SaveComponent},
    {path:'modifQuartier', component: ModifQuartierComponent},
    {path:'modifMaison', component: ModifMaisonComponent},
    {path:'login', component: LoginComponent},  
    {path:'Tab', component : TabComponent},
    {path:'categories', component: CategoriesComponent},  

];
