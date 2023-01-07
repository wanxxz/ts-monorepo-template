import { i18nConfig } from 'es2015-i18n-tag'
import locales from './locales'
import styles from './index.module.css'

export interface IndexProps {}

export const Index = (props: IndexProps) => {
  i18nConfig({
    locales: 'zh-CN',
    translations: locales['zh-CN'],
  })

  return <div className={styles.index}></div>
}
