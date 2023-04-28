import React from "react";
import { Routes, Route } from "react-router-dom";
import Payments from "../pages/payments/Payments"
import Payment from "../pages/payments/Payment"
import NewPayment from "../pages/payments/NewPayment"

export function PaymentsRoutes() {
  return (
    <>
      <Routes>
        <Route index element={<Payments/>} />
        <Route path="/:id" element={<Payment/>} />
        <Route path="/new" element={<NewPayment/>} />
      </Routes>
    </>
  );
}

