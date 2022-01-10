import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const TAX_RATE = 0.1;
const FEE_RATE = 0.2;

function ccyFormat(num) {
  return `${num.toFixed(2)}`;
}

function priceRow(qty, unit) {
  return qty * unit;
}

function createRow(desc, qty, unit) {
  const price = priceRow(qty, unit);
  return { desc, qty, unit, price };
}

function subtotal(items) {
  return items.map(({ price }) => price).reduce((sum, i) => sum + i, 0);
}

const rows = [
  createRow("Flight (*좌석)", 4, 75890),
  createRow("Accomodation (*박)", 2, 436090),
  createRow("Acitivity (*인원)", 4, 30000),
];

const invoiceSub = subtotal(rows);
const invoiceTaxes = TAX_RATE * invoiceSub;
const invoiceSubTotal = invoiceTaxes + invoiceSub;
const invoiceFees = FEE_RATE * invoiceSubTotal;
const invoiceTotal = invoiceFees + invoiceSubTotal;

export default function Invoice() {
  return (
    <div>
      <h1> Invoice </h1>
      <TableContainer component={Paper} sx={{ width: "100%" }}>
        <Table sx={{ minWidth: 700 }} aria-label="spanning table">
          <TableHead>
            <TableRow>
              <TableCell align="center" colSpan={3}>
                Details
              </TableCell>
              <TableCell align="right">Price</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Desc</TableCell>
              <TableCell align="right">금액</TableCell>
              <TableCell align="right">수량</TableCell>
              <TableCell align="right">총액</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.desc}>
                <TableCell>{row.desc}</TableCell>
                <TableCell align="right">{row.unit}</TableCell>
                <TableCell align="right">{row.qty}</TableCell>
                <TableCell align="right">{ccyFormat(row.price)}</TableCell>
              </TableRow>
            ))}

            <TableRow>
              <TableCell rowSpan={4} />
              <TableCell>Tax</TableCell>
              <TableCell align="right">{`${(TAX_RATE * 100).toFixed(
                0
              )} %`}</TableCell>
              <TableCell align="right">{ccyFormat(invoiceTaxes)}</TableCell>
            </TableRow>

            <TableRow>
              <TableCell colSpan={2}>Subtotal</TableCell>
              <TableCell align="right">{ccyFormat(invoiceSubTotal)}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Fee</TableCell>
              <TableCell align="right">{`${(FEE_RATE * 100).toFixed(
                0
              )} %`}</TableCell>
              <TableCell align="right">{ccyFormat(invoiceFees)}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell colSpan={2}>Total</TableCell>
              <TableCell align="right">{ccyFormat(invoiceTotal)}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
