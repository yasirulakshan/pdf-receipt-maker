export type ReceiptItemType = {
  id: string;
  ticketNumber: string;
  regnr: string;
  validFrom: string;
  validTo: string;
  length: string;
  parking: string;
  providor: string;
  ticketType: string;
  cost: number;
  vat: number;
};

export type FeeTypes = {
  total: number;
  excludingVat: number;
  vat: number;
};

export type ReceiptDataType = {
  id: string;
  date: string;
  items: ReceiptItemType[];
  parkingFee: FeeTypes;
  serviceCharge: FeeTypes;
  subjectAmount: number;
  totalVat: number;
  totalAmount: number;
};
