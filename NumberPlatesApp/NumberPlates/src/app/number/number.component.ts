import { Number } from './../shared/number.model';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { NumberService } from './../shared/number.service';

declare var M: any;

@Component({
  selector: 'app-number',
  templateUrl: './number.component.html',
  styleUrls: ['./number.component.css'],
  providers: [NumberService]
})

export class NumberComponent implements OnInit {

  constructor(private numberService: NumberService) { }

  ngOnInit() {
    this.resetForm();
    this.refreshNumberList();
  }

  resetForm(form?: NgForm) {
    if (form)
      form.reset();
    this.numberService.selectedNumber = {
        _id: "",
        number: "",
        user: ""
      }
  }

  onSubmit(form: NgForm){
    if (form.value._id == '') {
      this.numberService.postNumber(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshNumberList();
        M.toast({ html: 'Įrašas sėkmingai išsaugotas', classes: 'rounded'});
      });
    } else {
      this.numberService.putNumber(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshNumberList();
        M.toast({ html: 'Įrašas sėkmingai atnaujintas', classes: 'rounded'});
      });
    }
  }

  refreshNumberList() {
    this.numberService.getNumberList().subscribe((res) => {
      this.numberService.numbers = res as Number[];
    });
  }

  onEdit(num : Number){
    this.numberService.selectedNumber = num;
  }

  onDelete(_id: string, form: NgForm) {
    if (confirm('Ar tikrai norite ištrinti šio vartotojo informaciją?') == true){
      this.numberService.deleteNumber(_id).subscribe((res) => {
        this.refreshNumberList();
        this.resetForm(form);
        M.toast({ html: 'Vartotojas ištrintas sėkmingai', classes: 'rounded' });
      });
    }
  }

}
