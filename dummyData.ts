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
  netAmount: 88 + 104 + 76,
  vatAmount: 22 + 26 + 19,
  grossAmount: 110 + 130 + 95,
};
