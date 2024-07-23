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
  companyAddress: () => _t(translations['contact.compant.address']),
  indexBannerText1: () => _t(translations['index.banner.text1']),
  indexServiceTitle1: () => _t(translations['index.service.title1']),
  indexServiceTitle2: () => _t(translations['index.service.title2']),
  indexServiceTitle3: () => _t(translations['index.service.title3']),
  indexServiceTitle4: () => _t(translations['index.service.title4']),
  indexServiceText1: () => _t(translations['index.service.text1']),
  indexServiceText2: () => _t(translations['index.service.text2']),
  indexServiceText3: () => _t(translations['index.service.text3']),
  indexServiceText4: () => _t(translations['index.service.text4']),
  indexAboutUsText: () => _t(translations['index.aboutus.text']),
};
