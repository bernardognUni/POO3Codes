import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import Contato from 'src/app/model/entities/Contato';
import { ContatoService } from 'src/app/model/services/contato.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  contatos: Contato[]= [];

  constructor( private router: Router, private contatoService: ContatoService){
    this.contatos = this.contatoService.obterTodos();
  }
  
  irParaCadastrar(){
    this.router.navigate(['/cadastrar']);
  }

}
