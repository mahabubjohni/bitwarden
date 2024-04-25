import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidatorFn, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  formgroup: FormGroup;

  constructor() { }

  ngOnInit() {
    this.formgroup = new FormGroup({
      Email: new FormControl('', [Validators.required, Validators.email]),
      Name: new FormControl('', Validators.required),
      Masterpassword: new FormControl('', Validators.required),
      ReMasterpassword: new FormControl('', Validators.required),
      MasterpasswordHint: new FormControl('')
    }, { validators: this.passwordMatchValidator });
  }

  passwordMatchValidator: ValidatorFn = (formGroup: FormGroup): ValidationErrors | null => {
    const masterPassword = formGroup.get('Masterpassword').value;
    const reMasterPassword = formGroup.get('ReMasterpassword').value;
    return masterPassword === reMasterPassword ? null : { passwordMismatch: true };
  };
  forminvalid(){
    if(this.formgroup.invalid){
      return true;
    }
    else{
      return false;
    }
  }
 submitdata() {
    if (this.formgroup.valid) {
      var formdata = this.formgroup.value;
      console.log(formdata);
      //console.log(formdata.Email);
      // Handle form submission here
      this.formgroup.reset();
    } else {
      console.log('Form is invalid');
    }
  }
}
