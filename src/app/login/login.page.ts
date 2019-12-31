import { Component, OnInit } from '@angular/core';
import { CredenciaisDTO } from 'src/model/credenciais.dto';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formGroup: FormGroup;
  credenciais: CredenciaisDTO = {
    email: "",
    senha: ""
  }

  constructor(
    private formBuilder: FormBuilder,
    private nav: NavController) {

    this.formGroup = this.formBuilder.group({
      email: ["", [Validators.required, Validators.email]],
      senha: ["", [Validators.required]]
    })
  }

  ngOnInit() {
  }

  login(){
    this.credenciais = this.formGroup.value;
    this.nav.navigateForward("/tabs/tab1");
  }

}
