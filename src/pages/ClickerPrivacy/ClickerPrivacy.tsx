import { useEffect, useState, type ComponentType } from 'react'
import { PrivacyEn, PrivacyEs, PrivacyPt } from './content'
import './privacy.css'

type Lang = 'pt' | 'en' | 'es'

const STORAGE_KEY = 'privacy-policy-lang'

const LANGS: {
  code: Lang
  label: string
  htmlLang: string
  title: string
  subtitle: string
  Content: ComponentType
}[] = [
  { code: 'pt', label: 'Português', htmlLang: 'pt-BR', title: 'Política de Privacidade', subtitle: 'Política de Privacidade', Content: PrivacyPt },
  { code: 'en', label: 'English', htmlLang: 'en', title: 'Privacy Policy', subtitle: 'Privacy Policy', Content: PrivacyEn },
  { code: 'es', label: 'Español', htmlLang: 'es', title: 'Política de Privacidad', subtitle: 'Política de Privacidad', Content: PrivacyEs },
]

function initialLang(): Lang {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (LANGS.some(l => l.code === stored)) return stored as Lang
  } catch {
    // storage unavailable (private mode, blocked cookies): fall back to browser language
  }
  const browser = (navigator.language || 'en').toLowerCase()
  if (browser.startsWith('pt')) return 'pt'
  if (browser.startsWith('es')) return 'es'
  return 'en'
}

export default function ClickerPrivacy() {
  const [lang, setLang] = useState<Lang>(initialLang)
  const current = LANGS.find(l => l.code === lang)!

  useEffect(() => {
    const prevLang = document.documentElement.lang
    const prevTitle = document.title
    return () => {
      document.documentElement.lang = prevLang
      document.title = prevTitle
    }
  }, [])

  useEffect(() => {
    document.documentElement.lang = current.htmlLang
    document.title = `${current.title} — Cachorro Caramelo Clicker`
    try {
      localStorage.setItem(STORAGE_KEY, lang)
    } catch {
      // ignore
    }
    // Anchors like #exclusao only exist once the matching language is rendered.
    if (window.location.hash) {
      document.getElementById(window.location.hash.slice(1))?.scrollIntoView()
    }
  }, [lang, current])

  return (
    <div className="pp">
      <div className="pp__wrap">
        <header className="pp__header">
          <div className="pp__brand">
            <div className="pp__brand-emoji" aria-hidden="true">🐶</div>
            <div>
              <div className="pp__brand-name">Cachorro Caramelo Clicker</div>
              <span className="pp__brand-sub">{current.subtitle}</span>
            </div>
          </div>
          <div className="pp__lang">
            {LANGS.map(l => (
              <button
                key={l.code}
                type="button"
                className={l.code === lang ? 'active' : undefined}
                aria-pressed={l.code === lang}
                onClick={() => setLang(l.code)}
              >
                {l.label}
              </button>
            ))}
          </div>
        </header>

        <main className="pp__card">
          <current.Content />
        </main>

        <footer className="pp__footer">
          Cachorro Caramelo Clicker &mdash; {current.title}
        </footer>
      </div>
    </div>
  )
}
