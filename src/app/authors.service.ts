import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {

  getAuthors() {
    // return ["Author1","Author2","Author2"]
    return [
      { Name: 'Mirza', Id: 1 },
      { Name: 'Mirza123', Id: 1 }

    ]
  }

}
