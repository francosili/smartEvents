import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { AuthProvider } from '../../providers/auth/auth';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  public credenciales = { usuario: '', password: '' };
  public respuesta: Observable<any>;
  public loading: Boolean = false;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public auth: AuthProvider, 
    public alertCtrl: AlertController
    ) {}

  ionViewDidLoad() {
  }

  login() {
    this.respuesta = this.auth.login(this.credenciales.usuario, this.credenciales.password);
    this.respuesta.subscribe(data => {
      this.loading = true;
      console.log(data);
      this.navCtrl.setRoot('HomePage');
    }, error => {
      this.loading = false;
      this.showAlert("Error " + error.status, "Error de conexion\n" + error.statusText);
    });
  }

  public showAlert(titulo: string, texto: string) {
    let alert = this.alertCtrl.create({
      title: titulo,
      subTitle: texto,
      buttons: ['OK']
    });
    alert.present();
  }
}

