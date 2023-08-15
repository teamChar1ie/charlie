'use client';

import LoginModal from "../components/modals/LoginModal";
import RegisterModal from "../components/modals/RegisterModal";
import RentModal from "../components/modals/RentModal";
import RequestExpertModal from "../components/modals/RequestExpertModal";
import ReviewModal from "../components/modals/ReviewModal";
import SearchModal from "../components/modals/SearchModal";

const ModalsProvider = () => {
  return ( 
    <>
      <LoginModal />
      <RegisterModal />
      <SearchModal />
      <RentModal />
      <RequestExpertModal />
      <ReviewModal />
    </>
   );
}
 
export default ModalsProvider;