import { Component, OnInit } from '@angular/core';
import { Record } from '../record';
import { RecordService } from '../record.service';

@Component({
  selector: 'app-records',
  templateUrl: './records.component.html',
  styleUrls: ['./records.component.css']
})
export class RecordsComponent implements OnInit {
  records: Record[];
  record: Record;
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

  ngOnInit() {}
}
