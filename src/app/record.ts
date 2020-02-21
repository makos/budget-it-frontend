export enum RecordType { Income, Expense };

export interface Record {
  RecordID: number,
  Amount: number,
  Date: string,
  Type: string,
  Comment: string,
  RecordType: RecordType,
  UserName: string,
  createdAt: string,
  updatedAt: string
}
