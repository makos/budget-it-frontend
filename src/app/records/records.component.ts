import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Record } from '../record';
import { RecordService } from '../record.service';

// TODO: Add a toggle / radio checkboxes / dropdown, whatever to select which records are shown: income, expenses or all.

@Component({
  selector: 'app-records',
  templateUrl: './records.component.html',
  styleUrls: ['./records.component.scss']
})
export class RecordsComponent implements OnInit {
  records: Record[];
  record: Record;
  recordForm = this.fb.group({
    type: [''],
    comment: [''],
    amount: [''],
    recordType: ['income'],
  });
  showError: boolean = false;

  constructor(
    private recordService: RecordService,
    private fb: FormBuilder,
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

  onSubmit() {
    this.recordService.addRecord(
      this.recordForm.value.amount, 
      this.recordForm.value.type, 
      this.recordForm.value.comment, 
      this.recordForm.value.recordType
    );
  }

  ngOnInit() {
    this.getRecords();
  }
}
