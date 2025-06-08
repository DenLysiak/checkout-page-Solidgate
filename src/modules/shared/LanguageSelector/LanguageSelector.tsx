import { useState } from 'react';
import { LanguageKeys, LanguageView } from '../types';
import classNames from 'classnames';

interface LanguageSelectorProps {
  view: LanguageView;
}

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({ view }) => {
  const [lang, setLang] = useState(LanguageKeys.English);

  return (
    <div
      className={classNames('lang-selector', {
        'lang-selector--mobile': view === LanguageView.Mobile,
        'lang-selector--desktop': view === LanguageView.Desktop,
      })}
    >
      <span
        className={classNames('lang-selector__item', {
          'lang-selector__item--active': lang === LanguageKeys.English,
        })}
        onClick={() => setLang(LanguageKeys.English)}
      >
        EN
      </span>

      <span
        onClick={() => setLang(LanguageKeys.Ukrainian)}
        className={classNames('lang-selector__item', {
          'lang-selector__item--active': lang === LanguageKeys.Ukrainian,
        })}
      >
        Укр
      </span>
    </div>
  );
};
