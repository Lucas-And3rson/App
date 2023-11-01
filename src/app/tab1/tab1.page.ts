import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  esc:string = ""
  alunos = new Array<Aluno>()

  constructor() {
  }

  escolha(opcao:string){
    this.esc = opcao
  }
//ngFor]
  nome:string = ""
  nota:number = 0
  cadastrarAlunos(){
    this.alunos.push(new Aluno(this.nome, this.nota))
  }
  apagar(posicao: number){
    this.alunos.splice(posicao, 1);
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
