import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Storage } from '@ionic/storage-angular';
@Injectable({
providedIn: 'root'
})
export class PhotoService {
public photos: UserPhoto[] = [];
constructor() { }
public async addNewToGallery() {
const capturedPhoto = await Camera.getPhoto({
resultType: CameraResultType.Uri,
source: CameraSource.Camera,
quality: 100
});
this.photos.unshift({
filepath: 'soon...',
webviewPath: capturedPhoto.webPath
});
}
}
export interface UserPhoto {
filepath: string;
webviewPath: string | undefined;
}
