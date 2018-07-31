import {Component} from '@angular/core'

  @Component({
    selector: 'emails-editor',    
    templateUrl: './emails-editor.component.html',
    styleUrls: ['./emails-editor.component.css'],
  })
  export class EmailsEditorComponent  {
    
    labelToAdd: string;
    emails = new Set();  

    addEmail(email: string){
      if (!email || email.trim() === '') { return; }      

      this.emails.add(email);      
      this.labelToAdd = '';
    }    

    focusOutFunction(){
      this.addEmail(this.labelToAdd);
    }

    removeEmail(email){      
      this.emails.delete(email);
    }
    
    getValidClass(email){
      var re = /\S+@\S+\.\S+/;
      if(!re.test(email)) return 'invalid';
    }

    onKeyDown(event: KeyboardEvent){      
        if (!(event.keyCode === 13 || event.key == ';'))  return;

        event.preventDefault();
        this.addEmail(this.labelToAdd);      
    }    

    onPaste(value){      
      this._parseString(value);
    }   

    _parseString(value: string){
      value = value.replace(/\s/g, ';');
      let emails = value.split(';');
      let me = this;
      emails.forEach(function(email){
        if(email != '') me.addEmail(email);
      });
    }

  }


  