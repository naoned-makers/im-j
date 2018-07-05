const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1);

const find = (text, keywords = []) =>
  keywords.find((keyword) => text.toUpperCase().includes(keyword.trim().toUpperCase()));

export { capitalize, find };