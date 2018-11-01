import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { UiModule } from './ui/ui.module';
import { CVComponent } from './cv/cv.component';

@NgModule({
  declarations: [
    AppComponent,
    CVComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    UiModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
