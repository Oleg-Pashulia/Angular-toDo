import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }   from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { TodosComponent } from './pages/todos/todos.component';
import { TodosItemComponent } from './pages/todos/todos-item/todos-item.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NewTodoComponent } from './pages/todos/new-todo/new-todo.component';
import { FilterTodoPipe } from './shared/pipes/filterTodo/filter-todo.pipe';
import { HighlightDirective } from './shared/directives/highlight/highlight.directive';
import { FilterBySearchPipe } from './shared/pipes/filterBySearch/filter-by-search.pipe';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { AboutComponent } from './pages/about/about.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AboutProjectComponent } from './pages/about/about-project/about-project.component';
import { AboutUsComponent } from './pages/about/about-us/about-us.component';
import { UserComponent } from './pages/about/user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    TodosComponent,
    TodosItemComponent,
    NewTodoComponent,
    FilterTodoPipe,
    HighlightDirective,
    FilterBySearchPipe,
    PageNotFoundComponent,
    AboutComponent,
    NavbarComponent,
    AboutProjectComponent,
    AboutUsComponent,
    UserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
