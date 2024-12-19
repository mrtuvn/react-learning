import { useMemo } from "react";
//Funcition định dạng số dưới dạng tiền tệ với các đơn vị tiền tệ khác nhau
export function formatPrice({ amount, currencyCode, locale }) {
  const formatCurrency = new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currencyCode,
  });

  return formatCurrency.format(amount);
}

export function formatVariantPrice({
  amount,
  baseAmount,
  currencyCode,
  locale,
}) {
  const hasDiscount = baseAmount > amount;

  const formatDiscount = new Intl.NumberFormat(locale, { style: "percent" });
  const discount = hasDiscount
    ? formatDiscount.format((baseAmount - amount) / baseAmount)
    : null;

  const price = formatPrice({ amount, currencyCode, locale });
  const basePrice = hasDiscount
    ? formatPrice({ amount: baseAmount, currencyCode, locale })
    : null;

  return { price, basePrice, discount };
}

// function chuyển đổi current
export default function usePrice(data) {
  const { amount, baseAmount, currencyCode } = data ?? {};
  const locale = "en";
  const value = useMemo(() => {
    if (typeof amount !== "number" || !currencyCode) return "";

    return baseAmount
      ? formatVariantPrice({ amount, baseAmount, currencyCode, locale })
      : formatPrice({ amount, currencyCode, locale });
  }, [amount, baseAmount, currencyCode]);

  return typeof value === "string"
    ? { price: value, basePrice: null, discount: null }
    : value;
}
