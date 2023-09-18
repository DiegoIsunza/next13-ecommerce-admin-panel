"use client";

import { useState, useEffect } from 'react';

import { StoreModal } from '@/components/modals/StoreModal';

// Trick to avoid hydration errors

const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if(!isMounted) return null; // if we are in server side, don't render any modals

  return (
    <>
     <StoreModal />
    </>
  );
};

export default ModalProvider