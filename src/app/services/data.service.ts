
import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(public firestore: Firestore) { }

   public getWebsiteData() { 
     const colRef = collection(this.firestore, 'website')
  
     return collectionData(colRef, { idField: 'id' }); 
     }


//to get product on database
 public getWebsite() { 
   const colRefs = collection(this.firestore, 'Product')

   return collectionData(colRefs, { idField:'id' });
 }

 public getNavigation() { 
  const colRefss = collection(this.firestore, 'navigation')

  return collectionData(colRefss, { idField: 'id' }); 
    }


}
