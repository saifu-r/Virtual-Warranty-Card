import { Injectable } from '@angular/core';

export interface Dataset{
  products?: boolean
}

@Injectable({
  providedIn: 'root'
})
export class DatasetService {

  constructor() { }

  async get(singleDataset: Dataset) {
    let getKeys = Object.keys(singleDataset);
    let data = null;
    if (getKeys.length > 0) {
      let jsonData = await require("./../datasets/" + getKeys[0] + ".json");
      data = jsonData;
    }
    return this.responseFormat(data);
  }

  private responseFormat(data: any) {
    let responseFormat = {
      success: data != null ? true : false,
      data: data
    };
    return responseFormat;
  }


}
