export async function loadTranslations(lang) {
  console.log("in load")
  const response = await fetch(`./src/${lang}.json`);
  console.log("resposne", response)
  const translations = await response.json();
  console.log("HERE", translations)
  return translations;
}
