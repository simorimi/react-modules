import { useState } from "react";

import useCardNumberFormat from "./useCardNumberFormat";
import useCardNumberValidation from "./useCardNumberValidation";

import { INPUT_RULES } from "../constants/cardCustomHook";

type CardBrandType =
  | ""
  | "Diners"
  | "AMEX"
  | "UnionPay"
  | "MasterCard"
  | "Visa";

const useCardNumber = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [cardBrand, setCardBrand] = useState<CardBrandType>("");

  const { cardNumberFormat, updateCardNumberFormat } = useCardNumberFormat();

  const { errorState, errorText, validateCardNumber } =
    useCardNumberValidation();

  const handleCardNumberChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { value } = event.target;

    const canUpdate = validateCardNumber(value);

    if (!canUpdate) return;

    setCardNumber(value);
    setCardBrand(INPUT_RULES.validCardBrand(value));

    updateCardNumberFormat(value);
  };

  return {
    cardNumber,
    cardNumberFormat,
    cardBrand,
    errorState,
    errorText,
    handleCardNumberChange,
  };
};

export default useCardNumber;
