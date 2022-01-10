
import React from 'react';
import { RiHomeHeartFill, RiCustomerService2Line, RiContactsFill, 
  RiMailSendFill, RiGitRepositoryPrivateFill 
} from "react-icons/ri";
export const SidebarData = [
  
  {
    title: 'Profile',
    path: 'mypage',
    icon: <RiHomeHeartFill color="#16537e" />,
    cName: 'nav-text',
    
  },
  {
    title: '회원정보관리',
    path: '/account',
    icon: <RiContactsFill color="#16537e" />,
    cName: 'nav-text'
  },
  {
    title: 'Invoice',
    path: '/invoice',
    icon: <RiMailSendFill color="#16537e"/>,
    cName: 'nav-text'
  },
  {
    title: '결제관리',
    path: '/payment',
    icon: <RiGitRepositoryPrivateFill color="#16537e"/>,
    cName: 'nav-text'
  },
  
  {
    title: 'FAQ',
    path: '/faq',
    icon: <RiCustomerService2Line color="#16537e"/>,
    cName: 'nav-text'
  }
];