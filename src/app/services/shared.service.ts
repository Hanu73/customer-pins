import { Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { StorageService } from './storage.service';
import { IModalPopup } from '../interfaces/Int';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  currentRoute: string;
  currentUserDetails: any;
  allUsers: any;
  allGroups: any;

  modalPopup$ = new BehaviorSubject<any>([]);
  getModalPopupStatus = this.modalPopup$.asObservable();

  triggerPinData$ = new BehaviorSubject<any>(Boolean);
  getPinData = this.triggerPinData$.asObservable();

  constructor() {}

  showPopup(modalData: IModalPopup | boolean) {
    this.modalPopup$.next(modalData);
  }

  triggerDataUpdate(){
    this.triggerPinData$.next(true)
  }
}
