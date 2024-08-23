export async function loadTranslations(lang) {
  const response = await fetch(`./src/${lang}.json`);
  const translations = await response.json();
  return translations;
}
