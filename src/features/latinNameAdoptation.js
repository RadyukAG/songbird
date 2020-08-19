export default function latinNameAdaptation(name) {
  if (!name) {
    return name;
  }
  const latinName = name.replace('-', ' ');
  const firstLetter = latinName.slice(1, 2).toUpperCase();
  return `${firstLetter}${latinName.slice(2)}`;
}
