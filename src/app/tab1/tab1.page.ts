import { Component } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  alunos: Aluno[] = [];
  nome: string;
  media: number;
  constructor(private storage: Storage) {
    this.nome = ''
    this.media = 0
    this.init()
    this.carregarAlunos()
  }
  async init(){
    this.storage = await this.storage.create();
  }
  carregarAlunos(){
    this.storage.get('alunos-salvos').then((value) => {
      if (value !== null) {
        this.alunos = value
      }
    })
    .catch(() =>{
      console.log('Deu erro')
    })
  }

  cadastrarAlunos(){
    const aluno = new Aluno(this.nome,this.media);
    aluno.nome = this.nome;
    aluno.media = this.media;
    this.alunos.push(aluno);
    this.persistirAlunos();
  }

  persistirAlunos(){
    this.storage.set('alunos-salvos', this.alunos)
  }

  apagarAluno(posicao: number){
    this.alunos.splice(posicao, 1);
    this.persistirAlunos();
  }
  apagarTodos(){
    this.alunos.length = 0;
    this.persistirAlunos();
  }
  }

  export class Aluno {
    public nome: string;
    public media: number;

    constructor(nome: string, media: number){
      this.nome = nome;
      this.media = media
    }
    // public getNome() {
    //   return this.nome;
    // }
    // public getMedia() {
    //   return this.media;
    // }
  }
