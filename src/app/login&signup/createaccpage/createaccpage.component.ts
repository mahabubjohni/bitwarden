import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { UserdetailsService } from 'src/app/services/userdetails.service';

@Component({
  selector: 'app-createaccpage',
  templateUrl: './createaccpage.component.html',
  styleUrls: ['./createaccpage.component.css']
})
export class CreateaccpageComponent implements OnInit {
formgroup:FormGroup;
progressBarClass: string = 'progress-bar';
  passwordStrength: number;
  showPassword: boolean = false;
  reshowPsw:boolean = false;
  eyeIcon: string = 'fa-eye';
  REeyeIcon:string = 'fa-eye';
  constructor() { }
  ngOnInit() {
  this.formgroup = new FormGroup({
    Email : new FormControl('',[Validators.required,Validators.email]),
    Name : new FormControl ('',Validators.required),
    Masterpassword: new FormControl('', [Validators.required,Validators.minLength(12)]),
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
    localStorage.setItem('User',JSON.stringify(formdata));
    //console.log(formdata.Email);
    // Handle form submission here
    this.formgroup.reset();
  } else {
    console.log('Form is invalid');
  }
}
updatePasswordStrength(password: string) {
  // Calculate password strength
  if (password.length < 5) {
      this.passwordStrength = 15; // Weak
      this.progressBarClass = 'progress-bar-weak';
  } else if (password.length < 8) {
      this.passwordStrength = 50; // Medium
      this.progressBarClass = 'progress-bar-medium';
  } 
  else if (password.length < 12) {
    this.passwordStrength = 80; // Medium
    this.progressBarClass = 'progress-bar-avg';
} else {
      this.passwordStrength = 100; // Strong
      this.progressBarClass = 'progress-bar-strong';
  }
}
togglePasswordVisibility() {
  this.showPassword = !this.showPassword;
  this.eyeIcon = this.showPassword ? 'fa-eye-slash' : 'fa-eye';
}
REPasswordVisibility() {
  this.reshowPsw = !this.reshowPsw;
  this.REeyeIcon = this.reshowPsw ? 'fa-eye-slash' : 'fa-eye';
}

}
