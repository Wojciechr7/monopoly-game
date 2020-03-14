import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {FieldsLoadedModel} from "../../../../../../../libs/api-interfaces/src/lib/models/fields-loaded.model";
import {TEMP_FIELDS} from "../../game/helpers/game-settings";

@Injectable({
  providedIn: 'root'
})
export class BoardService {

  constructor(private http: HttpClient) {
  }

  getBoardFields(): Observable<FieldsLoadedModel> {
    return of(TEMP_FIELDS);
  }
}
