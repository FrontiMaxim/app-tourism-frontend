import { Component, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-client',
  templateUrl: './form-client.component.html',
  styleUrls: ['./form-client.component.scss']
})
export class FormClientComponent {

  form : FormGroup;
  @Input() nameForm: string;

  constructor(private formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      surname: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required]),
      patronymic: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.pattern('^(\\+7)|(8)[0-9]{10}'), Validators.required]),
      birthday: new FormControl('', [Validators.required]),
      passportSeries: new FormControl('', 
        [Validators.required, Validators.min(1000), Validators.max(9999)]
      ),
      passportNumber: new FormControl('', 
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
    console.log(this.form.value);
  }
}
