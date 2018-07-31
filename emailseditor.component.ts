import {Component, ViewChild} from '@angular/core'
import { EmailsEditorComponent } from './emails-editor/emails-editor.component';

  @Component({
    selector: 'emailseditor',    
    templateUrl: './emailseditor.component.html',
    styleUrls: ['./emailseditor.component.css'],
    
  })
  export class EmailsEditorContainerComponent  {   

    @ViewChild(EmailsEditorComponent) emailsEditor: EmailsEditorComponent;   

    onSetRandomEmail(){
      this.emailsEditor.addEmail(this._makeEmail());
    }

    onGetCount(){
      alert(`Count of emails ${this.emailsEditor.emails.size}`);
    }

    _makeEmail(){
      let user = "";
      let domain = "gmail.com";
      let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

      for(let i=0; i < 7; i++ ){
        user += chars.charAt(Math.floor(Math.random() * chars.length));
      }

      return `${user}@${domain}`;
    }   

  }