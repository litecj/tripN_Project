import React from "react";
import {
  RiHomeHeartFill,
  RiCustomerService2Line,
  RiContactsFill,
  RiMailSendFill,
} from "react-icons/ri";

export const SidebarData = [
  {
    title: "다가오는여행",
    path: "/mypage",
    icon: <RiHomeHeartFill color="white" />,
    cName: "nav-text",
  },
  {
    title: "회원정보관리",
    path: "/enter-password",
    icon: <RiContactsFill color="white" />,
    cName: "nav-text",
  },
  {
    title: "예약내역관리",
    path: "/reservation",
    icon: <RiMailSendFill color="white" />,
    cName: "nav-text",
  },
  {
    title: "FAQ",
    path: "/faq",
    icon: <RiCustomerService2Line color="white" />,
    cName: "nav-text",
  },
];
