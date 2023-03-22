import useTranslation from 'next-translate/useTranslation'

export default function SiteSettingsPage() {
  //const { t } = useTranslation("common")
  const { t } = useTranslation()

  return <h1>{t('title')}</h1>
}