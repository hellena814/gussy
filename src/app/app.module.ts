import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticleComponent } from './article/article.component';


import { ArticleService } from './article.service';
import { Article } from './article';
import { HttpClientModule } from '@angular/common/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TestData } from './test-data';
import { SortPipe } from './sort.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    SortPipe
  ],
  imports: [
    BrowserModule,
            HttpClientModule,
            FormsModule,
            ReactiveFormsModule,
            InMemoryWebApiModule.forRoot(TestData)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
