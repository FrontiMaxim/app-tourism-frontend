import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalWindowService } from 'src/app/components/modal-window/modal-window.service';
import { PermitService } from 'src/app/permit/service/permit.service';
import { ContractService } from '../../services/contract.service';
import { ContractModel } from '../../models/contarct.model';

@Component({
  selector: 'app-form-contract',
  templateUrl: './form-contract.component.html',
  styleUrls: ['./form-contract.component.scss']
})
export class FormContractComponent {
  constructor(
    private formBuilder: FormBuilder,
    public modalWindowService: ModalWindowService,
    public permitService: PermitService,
    public contractService: ContractService
  ) {}

  form : FormGroup;
  isSubmit = false;

  ngOnInit(): void {
    this.permitService.getAll();

    this.form = this.formBuilder.group({
      permit: new FormControl(
        '', 
        [Validators.required]
      )
    })
  }

  get permit() { return this.form.get('permit'); }

  submit() {
    this.isSubmit = true;
    
    if(!this.form.invalid) {

      const country = this.contractService.currentPermit.hotel.country;
      const city = this.contractService.currentPermit.hotel.city;
      const street = this.contractService.currentPermit.hotel.street;
      const home = this.contractService.currentPermit.hotel.home;

      const date = new Date();

      const contarct: ContractModel = {
        nameHotel: this.contractService.currentPermit.hotel.name,
        addressHotel: 
        `${country}, ${city}, ${street}, ${home}`,
        pricePermit: this.contractService.currentPermit.price,
        timeStart: this.contractService.currentPermit.timeStart,
        timeFinish: this.contractService.currentPermit.timeFinish,
        sizeDiscount: this.contractService.currentPermit.discount?.size!,
        dateConclusion: `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}` ,
        client: this.contractService.currentClient
      }

      console.log(contarct)
      this.contractService.save(contarct);
    }
  }
}
