import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
  websiteData:any[] = []
  websiteDa:any[] = []
  websiteDoc:any[] = []
  constructor(public dataService: DataService) {

  }

  ngOnInit() {
    this.getWebsiteData(),
     this.getWebsite(),
     this.getNavigation()
  }

   getWebsiteData() {
         this.dataService.getWebsiteData().subscribe((res:any)=>{  
           this.websiteData = res;
           // this.appService.updatedWebsiteData = res;/
          console.log(this.websiteData);
       }); 
     }

     getWebsiteText(desiredUid: any) {
   
      const myObject = this.websiteData.find((obj:any) => obj.id === desiredUid)
  
          if (myObject) { 
               return myObject.text; 
           } else {
               return null
       }
       }


   getWebsite() {
   this.dataService.getWebsite().subscribe((res:any)=>{  
       this.websiteDa = res;
      // this.appService.updatedWebsiteData = res;/
       console.log(this.websiteDa);
     }); 
   }
  
  
  getWebsiteProduct(desiredU: any) {
   
    const myObjects = this.websiteDa.find((objs:any) => objs.id === desiredU)

    if (myObjects) { 
      return myObjects.text; 
    } else {
      return null
}
}

getNavigation() {
  this.dataService.getNavigation().subscribe((res:any)=>{  
      this.websiteDoc= res;
     // this.appService.updatedWebsiteData = res;/
      console.log(this.websiteDoc);
    }); 
  }
 
 
 getWebsiteNav(desired: any) {
  
   const myObjectss = this.websiteDoc.find((objss:any) => objss.id === desired)

   if (myObjectss) { 
     return myObjectss.text; 
   } else {
     return null
}
}

}
