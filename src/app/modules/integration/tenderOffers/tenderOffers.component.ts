import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { filter } from 'rxjs';
import { TenderOffer } from 'src/app/modules/integration/models/tenderOffer.model';
import { TenderOfferService } from 'src/app/modules/integration/services/tenderOffer.service';
import { Tender } from 'src/app/modules/integration/models/tender.model';
import { TenderService } from 'src/app/modules/integration/services/tender.service';
@Component({
  selector: 'app-tender',
  templateUrl: './tenderOffers.component.html',
  styleUrls: ['./tenderOffers.component.css']
})
export class TenderOffersComponent implements OnInit {

  public tenderOffers: TenderOffer[] = [];

  constructor(private tenderOfferService: TenderOfferService, private router: Router) { }

  ngOnInit(): void {
    this.tenderOfferService.getAll().subscribe( res => {
      this.tenderOffers = res;     
    })
  }
  pick(tndrOf:TenderOffer):void{
    this.tenderOfferService.notifyWin(tndrOf).subscribe();
  }
  }

