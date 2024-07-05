import { Injectable } from '@angular/core';
import Contato from '../entities/Contato';

@Injectable({
  providedIn: 'root'
})
export class ContatoService {
  contatos: Contato[]= [];

  constructor() { 
    let c1: Contato = new Contato("Carlos","4240028922");
    let c2: Contato = new Contato("Xii", "32324833");
    let c3: Contato = new Contato("XiiX", "012938219031");
    this.contatos.push(c1);
    this.contatos.push(c2);
    this.contatos.push(c3);
  }

  obterTodos(): Contato[]{
    return this.contatos;
  }
  
  obterPorIndice(indice: number) : Contato{
    return this.contatos[indice];
  }
  cadastrar(contato: Contato){
    this.contatos.push(contato);
  }

}
