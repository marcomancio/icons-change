import { Component, VERSION } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular " + VERSION.major;

  iconsList = [
    { text: 'info toaster', old: 'rfgui-info-toaster', new: ['fas fa-info-circle']},
    { text: 'cambio password', old: 'rfgui-changePwd', new: ['fas fa-key']},
    { text: 'copia', old: 'rfgui-copy', new: ['far fa-copy', 'fas fa-copy']},
    { text: 'associa', old: 'rfgui-associate', new: ['fas fa-object-ungroup', 'far fa-object-ungroup']},
    { text: 'sonde elenco: configura base', old: 'rfgui-cfg-base', new: ['-']},
    { text: 'sonde elenco: configura PA', old: 'fas fa-tools', new: ['-']},
    { text: 'sonde elenco: configura link TDM', old: 'rfgui-cfg-tfm-flow fas fa-exchange-alt', new: ['fas fa-link']},
    { text: 'sonde elenco: configura PA - sospeso', old: 'rfgui-cfg-PA-suspend', new: ['fas fa-pause',]},
    { text: 'sonde elenco: configura PA - ripristina', old: 'rfgui-cfg-PA-resume', new: ['fas fa-undo-alt', 'fas fa-undo']},
    { text: 'sonde elenco: invia', old: 'rfgui-cfg-probe-send', new: ['fas fa-share-square', 'far fa-share-square']},
    { text: '', old: 'rfgui-ok', new: ['-']},
    { text: 'reset', old: 'rfgui-delete', new: ['fas fa-eraser', 'fas fa-backspace']},
    { text: 'elimina', old: 'rfgui-delete', new: ['far fa-trash-alt', 'fas fa-trash-alt', 'fas fa-trash']},
    { text: 'modifica', old: 'rfgui-edit', new: ['far fa-edit', 'fas fa-edit']},
    { text: 'dettaglio', old: 'rfgui-detail', new: ['far fa-folder-open', 'fas fa-folder-open']},
    { text: 'disattiva', old: 'far fa-times-circle rfgui-disable', new: ['fas fa-power-off color-red']},
    { text: 'attiva', old: 'far fa-check-circle rfgui-enable', new: ['-']},
    { text: 'status CFG: OK', old: 'rfgui-cfg-status-ok fas fa-check-circle',  new: ['-']},
    { text: 'status CFG: Da aggiornare', old: 'rfgui-cfg-status-updating fas fa-exclamation-triangle',  new: ['-']},
    { text: 'status CFG: non configurato', old: 'rfgui-cfg-status-not-configured fas fa-times',  new: ['-']}
  ]
}
/*



*/