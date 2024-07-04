import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import Contato from 'src/app/model/Contato';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  contatos: Contato[]= [];
  nome: string = "";
  telefone: string= "";

  constructor(private alertController: AlertController) {
    let c1: Contato = new Contato("Carlos","4240028922");
    let c2: Contato = new Contato("Xii", "32324833");
    let c3: Contato = new Contato("XiiX", "012938219031");
    this.contatos.push(c1);
    this.contatos.push(c2);
    this.contatos.push(c3);
  }

  cadastrar(){
    if(this.nome && this.telefone){
      let c : Contato = new Contato(this.nome, this.telefone);
      this.contatos.push(c);
    }else{
    this.presentAlert('Alert','Your computer has vairus');
    this.nome ="";
    this.telefone ="";
    }
  }
  
  async presentAlert(subHeader: string, message:string) {
    const alert = await this.alertController.create({
      header: 'Caution',
      subHeader: subHeader,
      message: message,
      buttons: ['ACIONNNNNNNNN'],
    });

    await alert.present();
  }
 /* excluir(){
    this.contatos.pop({this.contatos});
  }*/
}
