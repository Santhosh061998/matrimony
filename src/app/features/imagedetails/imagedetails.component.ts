import { Component ,OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router,ActivatedRoute } from '@angular/router';
import { ImageserviceService } from 'src/app/core/imageservice.service';

@Component({
  selector: 'app-imagedetails',
  templateUrl: './imagedetails.component.html',
  styleUrls: ['./imagedetails.component.css']
})
export class ImagedetailsComponent implements OnInit {
  profiles:Array<any>=[];
  nextprofile:Array<any>=[];
  id:any;
  startIndex: number = 0;
  star:boolean=true;
constructor(private router:Router,private routes:ActivatedRoute,
  private imageservice:ImageserviceService,
  private snackBar: MatSnackBar,
 ){

}

ngOnInit(): void {
  this.routes.params.subscribe({
    next:(res)=>{
     console.log(res);
     this.id=res['id'];
    }
  });

  this.imageservice.getimagedetails().subscribe({
    next:(res)=>{
      console.log(res);
      
     this.profiles=res;
      console.log(this.profiles);
      
     this.startIndex = this.profiles.findIndex(profile => profile.id == this.id);
     console.log(this.id);

     for (let index = 0; index < this.profiles.length; index++) {
      console.log(this.id,this.profiles[index].id);
      
       if(this.id<=this.profiles[index].id){
        this.nextprofile.push(this.profiles[index])
       }
     }

     console.log(this.nextprofile);
     
     
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

selected(profile:any,index:any){
  this.snackBar.open('Profile Selected', 'Close', {
    duration: 3000,
  });

  console.log(this.nextprofile);
  setTimeout(()=>{
    if(this.nextprofile.length!=1){
      this.nextprofile.splice(index,1);

    }
  },1000)
  
}
shortlisted(profile:any,index:any){
  this.star=false;
  setTimeout(()=>{
    if(this.nextprofile.length!=1){
    this.star=true;

      this.nextprofile.splice(index,1);

    }
  },1000)
   this.snackBar.open("Profile Shortlisted", 'Close', {
        duration: 3000,
      });
     
}
notintrested(profile:any,index:any){
  console.log(profile);
   this.snackBar.open("Profile Rejected", 'Close', {
        duration: 3000,
      });
      setTimeout(()=>{
        if(this.nextprofile.length!=1){
          this.nextprofile.splice(index,1);
    
        }
      },1000)
}



}
