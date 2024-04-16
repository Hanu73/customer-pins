import { Component, OnInit } from '@angular/core';
import { IPinsInfo } from 'src/app/interfaces/Int';
import { SharedService } from 'src/app/services/shared.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-pin-list',
  templateUrl: './pin-list.component.html',
  styleUrls: ['./pin-list.component.css']
})
export class PinListComponent implements OnInit {

  pinsList: IPinsInfo[];
  constructor(private readonly _sharedService: SharedService,
    private readonly _storageService: StorageService
  ) {
    this.getPinsList();
   }

  ngOnInit(): void {
   this._sharedService.getPinData.subscribe((data) => {
      if(data)  this.getPinsList();
    })
  }

  getPinsList() {
    this.pinsList = this._storageService.getAllPinsData() || [];
  }

  addCustomer(){
    this._sharedService.showPopup({
      type: 'customer',
      value: true,
      title: 'Create Customer',
    });
  }

  addPin(){
    this._sharedService.showPopup({
      type: 'pin',
      value: true,
      title: 'Create Pin',
    });
  }

}
