import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Contato from 'src/app/model/entities/Contato';
import { FirebaseService } from 'src/app/model/services/firebase.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  contatos: Contato[]= [];

  constructor( private router: Router, private firebaseService: FirebaseService){
    this.firebaseService.buscarTodos().subscribe((resp)=>{
      this.contatos = resp.map((contato) => {return{
        id: contato.payload.doc.id,...contato.payload.doc.data() as Contato
      } as Contato})});
  }
  
  irParaCadastrar(){
    this.router.navigate(['/cadastrar']);
  }

  editar(indice: number){
    this.router.navigate(['/editar', indice]);
    }
   
}