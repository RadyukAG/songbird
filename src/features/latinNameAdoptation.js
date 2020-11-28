export default function latinNameAdaptation(name) {
  if (!name) {
    return name;
  }
  const latinName = name.replace('-', ' ');
  const firstLetter = latinName.slice(0, 1).toUpperCase();
  return `${firstLetter}${latinName.slice(1)}`;
}
