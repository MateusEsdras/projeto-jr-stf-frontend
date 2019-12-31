import { Component, OnInit } from '@angular/core';
import { CredenciaisDTO } from 'src/model/credenciais.dto';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NavController, MenuController } from '@ionic/angular';
import { LoginService } from 'src/services/login.service';

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
    private menu: MenuController,
    private access: LoginService,
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
    this.access.logon(this.credenciais).subscribe(
      response => {
        response = JSON.parse(response.body);
        this.access.successfulLogin(response);
        this.nav.navigateForward("/tabs/tab1");
      },
      error => {}
    )
  }

  ionViewWillEnter(){
    this.menu.enable(false);
  }
  ionViewDidLeave(){
    this.menu.enable(true);
  }
}
