import { ReceiptDataType } from "./receiptDataType";

export const dummyReceipt: ReceiptDataType = {
  id: "rec004",
  date: "2024-06-20",
  items: [
    {
      id: "item004",
      ticketNumber: "211414228",
      regnr: "JKL456",
      validFrom: "2024-06-20 10:00",
      validTo: "2024-06-20 11:00",
      length: "1h",
      parking:
        "Töpelsgatan 7 (GLTK around the clock) - Västia Parkering AB Göteborg",
      providor: "",
      ticketType: "",
      cost: 110,
      vat: 25,
    },
    {
      id: "item005",
      ticketNumber: "211414229",
      regnr: "MNO123",
      validFrom: "2024-06-20 12:00",
      validTo: "2024-06-20 13:00",
      length: "1h",
      parking:
        "Töpelsgatan 7 (GLTK around the clock) - Västia Parkering AB Göteborg",
      providor: "",
      ticketType: "",
      cost: 130,
      vat: 25,
    },
    {
      id: "item006",
      ticketNumber: "211414230",
      regnr: "PQR789",
      validFrom: "2024-06-20 14:00",
      validTo: "2024-06-20 15:00",
      length: "1h",
      parking:
        "Töpelsgatan 7 (GLTK around the clock) - Västia Parkering AB Göteborg",
      providor: "",
      ticketType: "",
      cost: 95,
      vat: 25,
    },
  ],
  parkingFee: {
    total: 335,
    excludingVat: 335,
    vat: 75,
  },
  serviceCharge: {
    total: 0,
    excludingVat: 0,
    vat: 0,
  },
  subjectAmount: 335,
  totalVat: 75,
  totalAmount: 410,
};
