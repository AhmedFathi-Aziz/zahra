const arabicDigits = ["٠", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"];

export function toArabicNumerals(value: number | string): string {
  return String(value).replace(/\d/g, (digit) => arabicDigits[Number(digit)] ?? digit);
}

export function formatPrice(price: number): string {
  const formatted = new Intl.NumberFormat("ar-EG").format(price);
  return `${toArabicNumerals(formatted)} ج.م`;
}
