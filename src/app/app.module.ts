import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/components/header/header.component';
import { AboutmeComponent } from './component/components/aboutme/aboutme.component';
import { ProfessionalskillsComponent } from './component/components/professionalskills/professionalskills.component';
import { WorkexperienceComponent } from './component/components/workexperience/workexperience.component';
import { EducationComponent } from './component/components/education/education.component';
import { ContactComponent } from './component/components/contact/contact.component';
import { FooterComponent } from './component/components/footer/footer.component';
import { CoursesComponent } from './component/components/courses/courses.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutmeComponent,
    ProfessionalskillsComponent,
    WorkexperienceComponent,
    EducationComponent,
    ContactComponent,
    FooterComponent,
    CoursesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
