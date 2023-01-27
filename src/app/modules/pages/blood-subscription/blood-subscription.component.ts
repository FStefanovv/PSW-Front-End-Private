import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgToastComponent, NgToastService } from 'ng-angular-popup';
import { BloodSubscription } from '../../hospital/model/bloodSubscription.model';
import { BloodSubscriptionService } from '../../hospital/services/blood-sub.service';

@Component({
  selector: 'app-blood-subscription',
  templateUrl: './blood-subscription.component.html',
  styleUrls: ['./blood-subscription.component.css']
})
export class BloodSubscriptionComponent implements OnInit {

  public subscription: BloodSubscription = new BloodSubscription();
  Cancelbtn = document.getElementById('cncl') as HTMLButtonElement | null;
  Activatebtn = document.getElementById('act') as HTMLButtonElement | null;

  constructor(private router: Router, private subService: BloodSubscriptionService, private toast: NgToastService) { }

  ngOnInit(): void {
    this.subService.getActive().subscribe(
      res => {
        this.subscription = res;
        this.Cancelbtn.disabled = false;
        this.Activatebtn.disabled = true;
      },
      error => {
        console.log('nema aktivnog');
        this.Cancelbtn.disabled = true;
        this.Activatebtn.disabled = false;

      });

  }

  cancel(): void {
    this.subService.Cancel().subscribe(res => {
      this.toast.success({ detail: 'You have cancelled your monthly subscription!', duration: 5000 });
    });
    this.subscription = new BloodSubscription();
    this.Activatebtn.disabled = false;
    this.Cancelbtn.disabled = true;
  }

  activate(): void {
    if (!this.validity) this.toast.error({ detail: 'You have to fill up all fields with numeric values!', duration: 5000 });
    this.subService.ActivateSubscription(this.subscription).subscribe(res => {
      this.toast.success({ detail: 'You have applied for your monthly subscription!', duration: 5000 });
      this.Activatebtn.disabled = true;
      this.Cancelbtn.disabled = false;
    },
      error => {
        this.toast.error({ detail: 'There was an error...', duration: 5000 });
      }

    );
  }

  validity() {
    return !isNaN(Number(this.subscription.amountOfA)) && !isNaN(Number(this.subscription.amountOfB)) && !isNaN(Number(this.subscription.amountOfAB)) && !isNaN(Number(this.subscription.amountOfO)) && !isNaN(Number(this.subscription.deliveryDate));
  }
  
}
