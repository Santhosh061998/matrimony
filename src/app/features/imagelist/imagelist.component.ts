import { Component,OnInit } from '@angular/core';
import { ImageserviceService } from 'src/app/core/imageservice.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router,ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-imagelist',
  templateUrl: './imagelist.component.html',
  styleUrls: ['./imagelist.component.css'],
})
export class ImagelistComponent implements OnInit {
  profiles:Array<any>=[]
  imagelist:any;
constructor(private imageservice:ImageserviceService,
  private snackBar: MatSnackBar,
  private router:Router,private routes:ActivatedRoute 
){
 
}

ngOnInit(): void {
 this.imagelist= this.imageservice.getimagedetails().subscribe({
    next:(res)=>{
      console.log(res);
      
     this.profiles=res
    },
    error:(err)=>{
     console.log(err);
    },
    complete:()=>{
      // this.snackBar.open("API Completed", 'Close', {
      //   duration: 3000,
      // });
    }
  })
}

getdetails(profile:any){
console.log(profile);
this.router.navigate(["/imagedetail/fulldetails/"+profile?.id])
}

reject(profile:any){
  console.log(profile);

}


}
