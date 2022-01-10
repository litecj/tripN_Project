import * as React from "react";
import { Invoice, MoveHomeBt, VoucherTab } from "..";
import { TripLayout } from "features/common";

export function TotalValue() {
  return (
    <TripLayout>
      <Invoice />
      <VoucherTab />
      <MoveHomeBt />
    </TripLayout>
  );
}
