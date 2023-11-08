import { Component } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  esc:string = ""
  alunos = new Array<Aluno>()

  constructor(private storage: Storage) {
    this.init()
    this.carregar()
  }
  async init(){
    this.storage = await this.storage.create();
  }
  carregar(){
    this.storage.get('alunos-salvos').then((value) => {
      if (value !== null) {
        this.alunos = value
      }
    })
    .catch(() =>{
      console.log('Deu erro')
    })
  }

  persistir(){
    this.storage.set('alunos-salvos', this.alunos)
  }

  escolha(opcao:string){
    this.esc = opcao
  }
//ngFor]
  nome:string = ""
  nota:number = 0
  cadastrarAlunos(){
    this.alunos.push(new Aluno(this.nome, this.nota))
    this.persistir()
  }
  apagar(posicao: number){
    this.alunos.splice(posicao, 1);
    this.persistir()
  }
  apagarTudo(){
    this.alunos.length = 0
    this.persistir()
  }
  }
  export class Aluno {
    private nome: string;
    private nota: number;

    constructor(nome: string, nota: number){
      this.nome = nome;
      this.nota = nota;
    }

    public getNome() {
      return this.nome;
    }

    public getNota() {
      return this.nota;
    }

  }
