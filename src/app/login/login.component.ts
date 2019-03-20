import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
username="";
password="";
  constructor(public alertController: AlertController, private router:Router) {}



  ngOnInit() {}
  onLogin(){
    if(this.username ==="" && this.password ===""){
       this.emptyAlert();
    }
    else if(this.username!=this.password){
      this.loginAlert();
    }
    else{
      this.router.navigate(['./dashboard']);
    }
  }
   
  
  async loginAlert() {
    const alert = await this.alertController.create({
      header: 'Login failed',
      message: 'username password not match.',
      buttons: ['OK']
    });

    await alert.present();
  }

  async emptyAlert() {
    const alert = await this.alertController.create({
      header: 'Login failed',
      message: 'user name or password not entered',
      buttons: ['OK']
    });

    await alert.present();
  }
}
