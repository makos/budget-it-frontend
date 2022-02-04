import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Record } from '../record';
import { RecordService } from '../record.service';

@Component({
  selector: 'app-records',
  templateUrl: './records.component.html',
  styleUrls: ['./records.component.scss']
})
export class RecordsComponent implements OnInit {
  records: Record[];
  record: Record;
  recordForm = new FormGroup({
    type: new FormControl(''),
    amount: new FormControl(''),
    comment: new FormControl(''),
  });
  showError: boolean = false;

  constructor(
    private recordService: RecordService,
  ) {}

  getRecords() {
    this.recordService.getRecords()
      .subscribe(
        (records) => this.records = records,
        (error) => this.showError = true 
      );
  }

  getRecord(id: number) {
    this.recordService.getRecord(id)
    .subscribe(
      (record) => this.record = record,
      (error) => this.showError = true
    );
  }

  sendForm() {
    console.log({
      "type": this.recordForm.value.type,
      "amount": this.recordForm.value.amount,
      "comment": this.recordForm.value.comment,
    });
  }

  ngOnInit() {
    this.getRecords();
  }
}
