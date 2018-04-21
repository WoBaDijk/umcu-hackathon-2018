import {Injectable} from '@angular/core';
import organs from './mock-organs';

@Injectable()
export class OrganService {

  findAll() {
    return Promise.resolve(organs);
  }

  findById(id) {
    return Promise.resolve(organs[id - 1]);
  }

  findByName(searchKey: string) {
    let key: string = searchKey.toUpperCase();
    return Promise.resolve(organs.filter((organ: any) =>
        (organ.name).toUpperCase().indexOf(key) > -1));
  }
}
