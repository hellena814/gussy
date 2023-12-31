import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
})
export class SortPipe implements PipeTransform {

  transform(items: any, searchText: string): any {
    if(!items) return [];
    if(!searchText) return items;
    searchText = searchText.toLowerCase();
    return items.filter(item => (item.title.toLowerCase().includes(searchText)) || 
      (item.category.toLowerCase().includes(searchText))
    );
  }
}
