import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms'
import { EmailsEditorComponent } from './emails-editor/emails-editor.component';


@NgModule({
    imports: [CommonModule, FormsModule, EmailsEditorComponent],
    declarations: [],
    exports: []
})
export class MaterialChipsModule {}
