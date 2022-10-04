import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyComponent } from './MyComponent';
import { ForEachComponent } from './for-each/for-each.component';
import { ImageGalleryComponent } from './image-gallery/image-gallery.component';
import { ProductComponent } from './product/product.component';
import { IfExampleComponent } from './if-example/if-example.component';
import { CustomDirective } from './CustomDirectives';
import { PipeExampleComponent } from './pipe-example/pipe-example.component';
import { SortPipe } from './sort.pipe';
import { MyServiceComponent } from './my-service/my-service.component';
import { ReversePipe } from './reverse.pipe';
import { CustomColorDirective } from './CustomColorDirective';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { MyApiComponent } from './my-api/my-api.component';
import { PostExampleComponent } from './post-example/post-example.component';
import { MyFormComponent } from './my-form/my-form.component';
import { MyReactiveFormComponent } from './my-reactive-form/my-reactive-form.component';
import { MyModule } from './MyModule';
import { ProductsDetailsComponent } from './products-details/products-details.component';

@NgModule({
  declarations: [
    AppComponent,
    MyComponent,
    ForEachComponent,
    ImageGalleryComponent,
    ProductComponent,
    IfExampleComponent,
    CustomDirective,
    PipeExampleComponent,
    SortPipe,
    MyServiceComponent,
    ReversePipe,
    CustomColorDirective,
    EmployeeDetailsComponent,
    MyApiComponent,
    PostExampleComponent,
    MyFormComponent,
    MyReactiveFormComponent,
    ProductsDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MyModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
