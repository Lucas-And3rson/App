import { Component } from '@angular/core';
import { PhotoService } from '../services/photo.service';
import { Geolocation } from '@capacitor/geolocation';

@Component({
selector: 'app-tab1',
templateUrl: 'tab1.page.html',
styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
dataHoje:string = "Data: ";
hora:string = "Hora: ";
latitude: any;
longitude: any;
constructor(public photoService: PhotoService) {}
addPhotoToGallery() {
this.photoService.addNewToGallery()
this.getLocalizacao()
}
getLocalizacao(){
  let data = new Date();
  let dia = data.getDate();
  let mes = data.getMonth() + 1;
  let ano = data.getFullYear();
  this.dataHoje = "Data: " + dia + "/" + mes + "/" + ano;
  let hora = data.getHours();
  let minuto = data.getMinutes();
  this.hora = "Hora: " + hora + ":" + minuto;
  Geolocation.getCurrentPosition().then((coordenadas) => {
  this.latitude = coordenadas.coords.latitude;
  this.longitude = coordenadas.coords.longitude;
  })
  .catch((erro) => {
  console.log(erro)
  })

  }
}
