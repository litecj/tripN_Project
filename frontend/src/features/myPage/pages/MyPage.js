import React from "react";
import ComTrip from "../components/ComTrip";
import { MyLayout } from "features/common";

export default function MyPage() {
  return (
    <>
      <MyLayout>
        <ComTrip />
      </MyLayout>
    </>
  );
}
