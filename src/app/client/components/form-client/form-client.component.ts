import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ClientService } from '../../services/client.service';
import { FormClientService } from './form-client.service';

@Component({
  selector: 'app-form-client',
  templateUrl: './form-client.component.html',
  styleUrls: ['./form-client.component.scss']
})
export class FormClientComponent implements OnInit {

  @Output() resetClick = new EventEmitter();
  
  form : FormGroup;

  constructor(
      private formBuilder: FormBuilder, 
      public clientService: ClientService,
      public formClientService: FormClientService
    ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      surname: new FormControl(
        this.formClientService.defaultData.surname, 
        [Validators.required]
      ),
      name: new FormControl(
        this.formClientService.defaultData.name, 
        [Validators.required]
      ),
      patronymic: new FormControl(
        this.formClientService.defaultData.patronymic, 
        [Validators.required]
      ),
      phone: new FormControl(
        this.formClientService.defaultData.phone, 
        [Validators.pattern('^(\\+7)|(8)[0-9]{10}'), Validators.required]
      ),
      birthday: new FormControl(
        this.formClientService.defaultData.birthday, 
        [Validators.required]
      ),
      passportSeries: new FormControl(
        this.formClientService.defaultData.passportSeries, 
        [Validators.required, Validators.min(1000), Validators.max(9999)]
      ),
      passportNumber: new FormControl(
        this.formClientService.defaultData.passportNumber, 
        [Validators.required, Validators.min(100000), Validators.max(999999)]
      )
    });
  }

  get surname() { return this.form.get('surname'); }
  get name() { return this.form.get('name'); }
  get patronymic() { return this.form.get('patronymic'); }
  get phone() { return this.form.get('phone'); }
  get birthday() { return this.form.get('birthday'); }
  get passportSeries() { return this.form.get('passportSeries'); }
  get passportNumber() { return this.form.get('passportNumber'); }


  submit() {
    if(this.formClientService.titleForm === 'Добавление клиента') {
      this.clientService.saveClient(this.form.value, this.resetClick);
    } else {
      this.clientService.updateClient(this.form.value, this.formClientService.defaultData.id!, this.resetClick);
    }
  }
}
