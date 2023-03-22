import useTranslation from 'next-translate/useTranslation'

export default function SiteSettingsPage() {
  //const { t } = useTranslation()
  const { t } = useTranslation("siteSettingsTranslations")

  return <h1>{t('title')}</h1>
}