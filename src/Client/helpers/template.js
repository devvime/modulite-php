export async function template(name) {
  return await fetch(`/api/${name}`)
    .then((response) => response.text());
}
