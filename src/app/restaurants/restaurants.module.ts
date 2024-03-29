import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RestaurantsRoutingModule } from './restaurants-routing.module';
import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';


@NgModule({
    imports: [
        CommonModule,
        RestaurantsRoutingModule,
        AddComponent,
        ListComponent,
    ],
    exports: [
        AddComponent
    ]
})
export class RestaurantsModule { }
