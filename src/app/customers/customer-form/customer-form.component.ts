import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IResult } from 'src/app/interfaces/Int';
import { HttpService } from 'src/app/services/http.service';
import { SharedService } from 'src/app/services/shared.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css'],
})
export class CustomerFormComponent {
  form = new FormGroup({
    title: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    region: new FormControl('', Validators.required),
    country: new FormControl('', Validators.required),
  });
  
  apiResult: IResult;
  regions: any[] = [];
  countries: any[] = [];
  selectedCountry: string;

  constructor(private readonly _httpService: HttpService,
    private readonly _storageService : StorageService,
    private readonly _sharedService: SharedService
  ) {
    this._httpService.getRegions().subscribe((res: any) => {
      this.apiResult = res;

      // Removing the duplicates by using Set and Spread Operator
      this.regions = [
        ...new Set(Object.values(res.data).map((data: any) => data.region)),
      ];
    });
  }

  get f() {
    return this.form.controls;
  }

  createCustomer() {
    let existingData = this._storageService.getAllExistingCustomers();

    const allCustomers =
    existingData && existingData?.length
      ? [...existingData, this.form.value]
      : [this.form.value];

    this._storageService.updateCustomersData(allCustomers);

    this._sharedService.showPopup(false);
  }

  getCountriesList(event) {
    const selectedCountry = (event.target as HTMLSelectElement).value;

    this.countries = Object.values(this.apiResult.data).filter(
      (name: any) => name.region === selectedCountry
    );
  }
}
