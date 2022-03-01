import { Component, OnDestroy } from '@angular/core';
import { AppMainComponent } from './app.main.component';
import { Subscription } from 'rxjs';
import { MenuItem } from 'primeng/api';
import { ConfigService } from './service/app.config.service';
import { AppConfig } from './api/appconfig';
@Component({
    selector: 'app-topbar',
    templateUrl: './app.topbar.component.html'
})
export class AppTopBarComponent {
   appitems: MenuItem[];
    profileitems: MenuItem[];
    flagitems:MenuItem[];
    responsiveitems: MenuItem[];
    side:MenuItem[];
  
    config: AppConfig;
    checked1:boolean=false;
  
   
  

    constructor(public appMain: AppMainComponent, public configService: ConfigService) { }
    
    
    changeTheme(){
      if(this.checked1 == true){
     this.theme("bootstrap4-dark-purple",true);
      }
      else{
         this.theme("bootstrap4-light-purple",false);
      }
    }
    theme(theme:string, dark:boolean){
      let themeElement = document.getElementById('theme-css');
      themeElement.setAttribute('href', 'assets/theme/' + theme + '/theme.css');
      this.configService.updateConfig({...this.config, ...{theme, dark}});
         }
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
     this.flagitems=[
         {
             
            label:'US',
            icon: 'assets/layout/images/us.jpg',
         },
         {
             
            label:'Spain',
            url: 'assets/layout/images/spain.jpg',
         }
     ],
     this.responsiveitems=[
      {
          
         label:'mode',
         items:[
            {
               label:'Dark Mode',
               icon:'pi pi-moon ',
           
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
     ],
     this.side=[
        {
      icon: 'pi pi-fw pi-id-card'
     },
     {
      icon: 'pi pi-fw pi-id-card'
     },
     {
      icon: 'pi pi-fw pi-id-card'
     },
     {
      icon: 'pi pi-fw pi-id-card'
     },
     {
      icon: 'pi pi-fw pi-id-card'
     },
     {
      icon: 'pi pi-fw pi-id-card'
     },

   ]
   
    }
    
}

