import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ICustomerInfo } from 'src/app/interfaces/Int';
import { HttpService } from 'src/app/services/http.service';
import { SharedService } from 'src/app/services/shared.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-pin-form',
  templateUrl: './pin-form.component.html',
  styleUrls: ['./pin-form.component.css'],
})
export class PinFormComponent implements OnInit {
  pinForm = new FormGroup({
    title: new FormControl('', Validators.required),
    collaborators: new FormControl('', Validators.required),
    privacy: new FormControl('', Validators.required),
    file: new FormControl('', Validators.required),
  });
  allCustomers: ICustomerInfo[];

  file: File;
  files: File[] = [];

  imageData : string;

  constructor(private readonly _storageService : StorageService,
    private readonly _sharedService: SharedService
   ) {
   this.allCustomers = this._storageService.getAllExistingCustomers();
  }

  ngOnInit(): void {
  }

  get f() {
    return this.pinForm.controls;
  }

  createPin(){
    let existingData = this._storageService.getAllPinsData();

    const allPinsData =
    existingData && existingData?.length
      ? [...existingData, this.pinForm.value]
      : [this.pinForm.value];

    this._storageService.updatePinsData(allPinsData);

    this._sharedService.showPopup(false);
    this._sharedService.triggerDataUpdate();
  }

  onFileChange(event: Event) {
    const target = event.target as HTMLInputElement;
    const files = target.files as FileList;
    this.file = files[0];
  }

  onDrop(event: DragEvent) {
    // Converting to base64 and can be stored in local storage
    const img = event.dataTransfer.files[0];
    if (img) {
      this.getBase64(img).then((url: string) => {
        this.imageData = url;
        this.pinForm.patchValue({
          file: this.imageData
        })
      });
    }

    event.preventDefault();
  }

  getBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  }
  
  onDragover(event: DragEvent) {
    event.preventDefault();
  }

  onDragenter(event: DragEvent) {
    event.preventDefault();
  }

}
