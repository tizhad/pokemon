import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExtractorServiceService {

  constructor() { }

  extractItemId(url: string): number {
    const urlParts = url.split('/');
    return parseInt(urlParts[urlParts.length - 2]);
  }

}
