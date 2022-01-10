import React from "react";
import { Route, Routes } from "react-router-dom";
import { AdminLogin } from "features/admin";
import { DashBoard, UserList } from "features/adminCommon";
import { FinancialReports, SalesManagement } from "features/financial";
import { Home } from "features/home";
import { Recommand } from "features/recommand";
import { TotalValue } from "features/totalValue";
import {
  EnterPassword,
  FAQ,
  MyPage,
  Reservation,
  UserModify,
} from "features/myPage";
import { JoinDetail, Join, Login, ForgotPassword } from "features/user";
import TestA from "features/a--test/TestA";
import { Consultant } from "features/chatbot/pages/Consultant";
import MBTIHome from "features/mbti/components/home/MBTIHome";
import MBTITest from "features/mbti/components/options/MBTITest";
import MBTIResult from "features/mbti/components/countries/MBTIResult";
import { RecommandReservation } from "features/recReservation";
import TestB from "features/a--test/components/TestB";

function App() {
  return (
    <>
      <div className="App">
        <Routes>
          {/* mainpage */}
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/consultant" element={<Consultant />} />
          <Route path="/recommand" element={<Recommand />} />
          <Route path="/rec/reservation" element={<RecommandReservation />} />
          <Route path="/invoice" element={<TotalValue />} />

          {/* adminpage */}
          <Route path="/an/admin-login" element={<AdminLogin />} />
          <Route path="/an/dash-board" element={<DashBoard />} />
          <Route path="/an/user-list" element={<UserList />} />
          <Route path="/an/sales-management" element={<SalesManagement />} />
          <Route path="/an/financial-reports" element={<FinancialReports />} />

          {/* user */}
          <Route path="/login" element={<Login />} />
          <Route path="/forgotPassword" element={<ForgotPassword />} />
          <Route path="/join" element={<Join />} />
          <Route path="/joinDetail" element={<JoinDetail />} />

          {/* mypage */}
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/enter-password" element={<EnterPassword />} />
          <Route path="/userModify" element={<UserModify />} />
          <Route path="/reservation" element={<Reservation />} />
          <Route path="/faq" element={<FAQ />} />

          {/* mbti */}
          <Route path="/mbti/home" element={<MBTIHome />} />
          <Route path="/mbti/test" element={<MBTITest />} />
          <Route path="/result/:countryName" element={<MBTIResult />} />

          {/* test */}
          <Route path="/test" element={<TestA />} />
          <Route path="/testbbb" element={<TestB />} />
        </Routes>
      </div>
    </>
  );
}

export default App;