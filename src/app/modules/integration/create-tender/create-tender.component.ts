import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { filter } from 'rxjs';
import { Tender } from 'src/app/modules/integration/models/tender.model';
import { TenderService } from 'src/app/modules/integration/services/tender.service';
@Component({
  selector: 'app-create-tender',
  templateUrl: './create-tender.component.html',
  styleUrls: ['./create-tender.component.css']
})
export class CreateTenderComponent implements OnInit {

  public tenders: Tender[] = [];
  public tndr: Tender= new Tender();

  constructor(private tenderService: TenderService, private router: Router) { }

  ngOnInit(): void {
    }
  
  post() {
    this.tndr.hospitalName='Example hospital 1';
    this.tenderService.create(this.tndr).subscribe();
    this.router.navigate(['/tenders']);
  }

  }

