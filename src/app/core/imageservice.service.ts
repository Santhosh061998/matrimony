import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ImageserviceService {
  private imagedetails:string='assets/imagedetails.json'
  constructor(private http:HttpClient) { }

  getimagedetails():Observable<any>{
  return this.http.get(this.imagedetails).pipe(
    catchError((err)=>{
     throw err
    })
  )
  }
  
}
