"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("82447985-8bf0-4195-b2fa-84ee9c8d0cf9");
  }, []);

  return null;
};
