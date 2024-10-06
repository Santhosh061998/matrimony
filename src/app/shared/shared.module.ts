import { NgModule } from "@angular/core";
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { ReactiveFormsModule,FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { MatCardModule } from '@angular/material/card';
import { MatSnackBarModule } from '@angular/material/snack-bar';
@NgModule({
    declarations:[],
    imports:[MatIconModule,MatButtonModule,MatToolbarModule,ReactiveFormsModule,FormsModule,
        HttpClientModule,MatCardModule,MatSnackBarModule
    ],
    exports:[MatIconModule,MatButtonModule,MatToolbarModule,ReactiveFormsModule,FormsModule,
        HttpClientModule,MatCardModule,MatSnackBarModule
    ],
    providers:[]
})

export class SharedModule{

}