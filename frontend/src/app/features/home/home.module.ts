import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

// COMPONENTS
import { HomeAddComponent } from './home-add/home-add.component';
import { HomeListComponent } from './home-list/home-list.component';

// PAGES
import { HomeOverviewComponent } from './pages/home-overview/home-overview.component';

// SERVICES
import { HomeService } from './home.service';

// MODULES
import { HomeRoutingModule } from './home-routing.module';
import { HumeModule } from '../hume/hume.module';


@NgModule({
  declarations: [
    HomeOverviewComponent,
    HomeAddComponent,
    HomeListComponent
  ],
  imports: [
    HomeRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    HumeModule
  ],
  exports: [
    HomeOverviewComponent
  ],
  providers: [HomeService]
})
export class HomeModule {}
