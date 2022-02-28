import { Component, OnDestroy } from '@angular/core';
import { AppMainComponent } from './app.main.component';
import { Subscription } from 'rxjs';
import { MenuItem } from 'primeng/api';

@Component({
    selector: 'app-topbar',
    templateUrl: './app.topbar.component.html'
})
export class AppTopBarComponent {
   appitems: MenuItem[];
    profileitems: MenuItem[];
    flagitems:MenuItem[];
    responsiveitems: MenuItem[];
   
  
   


    constructor(public appMain: AppMainComponent) { }
    ngOnInit() {
        this.profileitems = [
            {
               label:'Profile',
               icon:'pi pi-fw pi-file',
           
            },
            {
               label:'Lock Screen',
               icon:'pi pi-lock',
           
            },
            {
               label:'log Out',
               icon:'pi pi-logout',
         
            },
        ],
        this.appitems = [
         {
            label:'GitHub',
            icon:'pi pi-fw pi-github',
        
         },
         {
            label:'Bitbucket',
            icon:'pi pi-lock',
        
         },
         {
            label:'Dribble',
            icon:'pi pi-logout',
      
         },
         {
            label:'Dropbox',
            icon:'pi pi-logout',
      
         },
         {
            label:'Mail Chimp',
            icon:'pi pi-logout',
      
         },
         {
            label:'Stack',
            icon:'pi pi-logout',
      
         },
     ],
  
     this.responsiveitems=[
      {
          
         label:'mode',
         items:[
            {
               label:'Dark Mode',
               icon:'pi pi-moon',
           
            },
            {
               label:'Light mode',
               icon:' pi pi-sun',
           
            },
         ]
      },
      {
             
         label:'apps',
         items:[
            {
               label:'GitHub',
               icon:'pi pi-fw pi-github',
           
            },
            {
               label:'Bitbucket',
               icon:'pi pi-lock',
           
            },
            {
               label:'Dribble',
               icon:'pi pi-logout',
         
            },
            {
               label:'Dropbox',
               icon:'pi pi-logout',
         
            },
            {
               label:'Mail Chimp',
               icon:'pi pi-logout',
         
            },
            {
               label:'Stack',
               icon:'pi pi-logout',
         
            },

         ],
      },
      {
             
         label:'Setting',
         icon: 'pi pi-cog',
      },
      {
          
         label:'More',
         icon: 'pi pi-angle-down',
         items:[
            {
               label:'Profile',
               icon:'pi pi-fw pi-file',
           
            },
            {
               label:'Lock Screen',
               icon:'pi pi-lock',
           
            },
            {
               label:'log Out',
               icon:'pi pi-logout',
         
            },

         ]
      },
     ]
    }
}

