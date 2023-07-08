function dateParse(stringDate) {
  const dateFormat = new Date(stringDate);

  const year = dateFormat.getFullYear();
  const month = String(dateFormat.getMonth() + 1).padStart(2, "0");
  const day = String(dateFormat.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

export default dateParse;
