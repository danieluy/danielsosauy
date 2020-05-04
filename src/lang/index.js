import en from './en';
import es from './es';

export default {
  EN: en,
  ES: es,
};

export const LOCALES = {
  'en-AS': 'EN',
  'en-AU': 'EN',
  'en-BE': 'EN',
  'en-BZ': 'EN',
  'en-BW': 'EN',
  'en-CA': 'EN',
  'en-GU': 'EN',
  'en-HK': 'EN',
  'en-IN': 'EN',
  'en-IE': 'EN',
  'en-IL': 'EN',
  'en-JM': 'EN',
  'en-MT': 'EN',
  'en-MH': 'EN',
  'en-MU': 'EN',
  'en-NA': 'EN',
  'en-NZ': 'EN',
  'en-MP': 'EN',
  'en-PK': 'EN',
  'en-PH': 'EN',
  'en-SG': 'EN',
  'en-ZA': 'EN',
  'en-TT': 'EN',
  'en-UM': 'EN',
  'en-VI': 'EN',
  'en-GB': 'EN',
  'en-US': 'EN',
  'en-ZW': 'EN',
  'en': 'EN',
  'es-AR': 'ES',
  'es-BO': 'ES',
  'es-CL': 'ES',
  'es-CO': 'ES',
  'es-CR': 'ES',
  'es-DO': 'ES',
  'es-EC': 'ES',
  'es-SV': 'ES',
  'es-GQ': 'ES',
  'es-GT': 'ES',
  'es-HN': 'ES',
  'es-419': 'ES',
  'es-MX': 'ES',
  'es-NI': 'ES',
  'es-PA': 'ES',
  'es-PY': 'ES',
  'es-PE': 'ES',
  'es-PR': 'ES',
  'es-ES': 'ES',
  'es-US': 'ES',
  'es-UY': 'ES',
  'es-VE': 'ES',
  'es': 'ES',
};

export function getDefaultLang() {
  if (typeof navigator.languages !== 'undefined') {
    return LOCALES[navigator.languages[0]];
  }
  else if (typeof navigator.language !== 'undefined') {
    return LOCALES[navigator.language];
  }
  return LOCALES.en;
}
