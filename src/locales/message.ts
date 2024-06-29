import { translations } from 'locales/translations';
import { _t } from 'utils/messages';

export const messages = {
  zh: () => _t(translations['zh']),
  en: () => _t(translations['en']),
  home: () => _t(translations['nav.home']),
  about: () => _t(translations['nav.about']),
  contact: () => _t(translations['nav.contact']),
  viewMore: () => _t(translations['view.more']),
  news: () => _t(translations['news']),
};
