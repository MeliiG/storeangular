import { Component } from '@angular/core';

@Component({
  selector: 'app-products-header',
  templateUrl:'products-header.component.html' ,
  
})
export class ProductsHeaderComponent {

  sort='desc';

  onSortUpdated(newSort: string): void{
    this.sort= newSort;
  }
}
