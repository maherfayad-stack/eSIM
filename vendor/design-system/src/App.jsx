import { Button } from './components/Button'
import { IconButton } from './components/IconButton'
import { GlassButton } from './components/GlassButton'
import { BottomActionBar } from './components/BottomActionBar'
import { Tag } from './components/Tag'
import { Chip } from './components/Chip'
import { Cell } from './components/Cell'
import { ListItem } from './components/List'
import { Checkbox } from './components/Checkbox'
import { Radio } from './components/Radio'
import placeholderIconRaw from './icons/line-icons/placeholder.svg?raw'
import { Banner } from './components/Banner'
import { SystemBanner } from './components/SystemBanner'
import { AdBanner } from './components/AdBanner'
import { VisualCard } from './components/VisualCard'
import { Navbar } from './components/Navbar'
import { SegmentedControl } from './components/SegmentedControl'
import { Stepper } from './components/Stepper'
import { ProgressStepper } from './components/ProgressStepper'
import { CircularProgressIndicator } from './components/CircularProgressIndicator'
import { LinearProgressIndicator } from './components/LinearProgressIndicator'
import { Slider } from './components/Slider'
import { Toggle } from './components/Toggle'
import { TextInput } from './components/TextInput'
import { Search } from './components/Search'
import { Callout } from './components/Callout'
import { Accolade } from './components/Accolade'
import { Badge } from './components/Badge'
import { Tooltip } from './components/Tooltip'
import { Snackbar } from './components/Snackbar'
import { TabBar } from './components/TabBar'
import { MarketingCard } from './components/MarketingCard'
import { Expander } from './components/Expander'
import { Accordion } from './components/Accordion'
import { AlmosaferLogo } from './components/AlmosaferLogo'
import { BottomSheet } from './components/BottomSheet'
import { Dialog } from './components/Dialog'
import { ActionSheet } from './components/ActionSheet'
import { DesignSystemProvider } from './context/DesignSystemContext'
import { useState } from 'react'
import './App.css'

const SIZES = [
  { key: 'default', label: 'Default' },
  { key: 'medium',  label: 'Medium'  },
  { key: 'small',   label: 'Small'   },
]

const PlaceholderIcon = () => (
  <span
    style={{ display: 'flex', width: '100%', height: '100%' }}
    dangerouslySetInnerHTML={{ __html: placeholderIconRaw }}
  />
)

const adImage = `data:image/svg+xml,${encodeURIComponent(
  "<svg xmlns='http://www.w3.org/2000/svg' width='400' height='200'><defs><linearGradient id='g' x1='0' y1='0' x2='1' y2='1'><stop offset='0' stop-color='#008296'/><stop offset='0.6' stop-color='#91D2DC'/><stop offset='1' stop-color='#bde4ea'/></linearGradient></defs><rect width='400' height='200' fill='url(#g)'/></svg>"
)}`

const adLogoSrc = `data:image/svg+xml,${encodeURIComponent(
  "<svg xmlns='http://www.w3.org/2000/svg' width='64' height='64'><rect width='64' height='64' fill='#0f2d52'/><text x='32' y='42' font-family='Open Sans, sans-serif' font-size='30' font-weight='700' fill='#ffffff' text-anchor='middle'>H</text></svg>"
)}`

function Row({ label, bold, children }) {
  return (
    <tr>
      <td className="spec__row-label" data-bold={bold}>{label}</td>
      {children}
    </tr>
  )
}

function Cells({ variant, en, ar, sizes = SIZES }) {
  return sizes.flatMap((s) => [
    <td key={s.key + '-en'}>
      <Button variant={variant} size={s.key} label={en} />
    </td>,
    <td key={s.key + '-ar'}>
      <Button variant={variant} size={s.key} dir="rtl" label={ar} />
    </td>,
  ])
}

function IconCells({ variant, sizes = SIZES }) {
  return sizes.map((s) => (
    <td key={s.key}>
      <IconButton variant={variant} size={s.key} aria-label="action" icon={<PlaceholderIcon />} />
    </td>
  ))
}

export default function App() {
  return (
    <main className="spec">
      <header className="spec__header">
        <h1>Button</h1>
      </header>

      <div className="spec__scroll">
        <table className="spec__table">
          <thead>
            <tr>
              <th />
              {SIZES.flatMap((s) => [
                <th key={s.key + '-en'}>{s.label}-EN</th>,
                <th key={s.key + '-ar'}>{s.label}-AR</th>,
              ])}
            </tr>
          </thead>
          <tbody>
            <Row label="Primary" bold>
              <Cells variant="primary" en="Label" ar="المحتوى" />
            </Row>

            <Row label="Primary / Inverted" bold>
              <Cells variant="primary-inverted" en="Label" ar="المحتوى" />
            </Row>

            <Row label="Hovered / Desktop">
              <Cells variant="primary" en="Label" ar="المحتوى" />
            </Row>

            <Row label="Pressed">
              <Cells variant="primary" en="Label" ar="المحتوى" />
            </Row>

            <Row label="Secondary" bold>
              <Cells variant="secondary" en="Label" ar="المحتوى" />
            </Row>

            <Row label="Secondary / Inverted" bold>
              <Cells variant="secondary-inverted" en="Label" ar="المحتوى" />
            </Row>

            <Row label="Hovered / Desktop">
              <Cells variant="secondary" en="Label" ar="المحتوى" />
            </Row>

            <Row label="Pressed">
              <Cells variant="secondary" en="Label" ar="المحتوى" />
            </Row>

            <Row label="Destructive" bold>
              <Cells variant="destructive" en="Label" ar="المحتوى" />
            </Row>

            <Row label="Hovered / Desktop">
              <Cells variant="destructive" en="Label" ar="المحتوى" />
            </Row>

            <Row label="Pressed">
              <Cells variant="destructive" en="Label" ar="المحتوى" />
            </Row>

            <Row label="Payment" bold>
              <Cells
                variant="payment"
                en="Pay now"
                ar="ادفع الآن"
                sizes={SIZES.slice(0, 2)}
              />
              <td colSpan={2} />
            </Row>

            <Row label="Hovered / Desktop">
              <Cells
                variant="payment"
                en="Pay now"
                ar="ادفع الآن"
                sizes={SIZES.slice(0, 2)}
              />
              <td colSpan={2} />
            </Row>

            <Row label="Pressed">
              <Cells
                variant="payment"
                en="Pay now"
                ar="ادفع الآن"
                sizes={SIZES.slice(0, 2)}
              />
              <td colSpan={2} />
            </Row>

            <Row label="Skeleton" bold>
              <Cells variant="skeleton" en="" ar="" />
            </Row>

            <Row label="Apple Pay" bold>
              <td><Button variant="apple-pay" size="default" /></td>
              <td><Button variant="apple-pay" size="default" dir="rtl" /></td>
              <td colSpan={4} />
            </Row>
          </tbody>
        </table>
      </div>

      <header className="spec__header">
        <h1>Bottom Action Bar</h1>
      </header>

      <div className="spec__scroll">
        <table className="spec__table">
          <thead>
            <tr>
              <th />
              <th>Starting price</th>
              <th>Funnel</th>
              <th>Payment</th>
            </tr>
          </thead>
          <tbody>
            <Row label="Default" bold>
              <td>
                <BottomActionBar
                  type="starting-price"
                  price="$1,215"
                  originalPrice="1,500"
                  actionLabel="Book now"
                />
              </td>
              <td>
                <BottomActionBar
                  type="funnel"
                  price="$1,215"
                  actionLabel="Continue"
                />
              </td>
              <td>
                <BottomActionBar
                  type="payment"
                  actionLabel="Pay $1,215"
                />
              </td>
            </Row>
          </tbody>
        </table>
      </div>

      <header className="spec__header">
        <h1>Accolade</h1>
      </header>

      <div className="spec__scroll">
        <table className="spec__table">
          <thead>
            <tr>
              <th />
              <th>EN</th>
              <th>AR</th>
            </tr>
          </thead>
          <tbody>
            <Row label="Regular" bold>
              <td><Accolade label="Top pick" /></td>
              <td><Accolade label="الأفضل" dir="rtl" /></td>
            </Row>
            <Row label="Regular + Background" bold>
              <td><Accolade background label="Top pick" /></td>
              <td><Accolade background label="الأفضل" dir="rtl" /></td>
            </Row>
            <Row label="Small" bold>
              <td><Accolade size="small" label="Top pick" /></td>
              <td><Accolade size="small" label="الأفضل" dir="rtl" /></td>
            </Row>
            <Row label="Small + Background" bold>
              <td><Accolade size="small" background label="Top pick" /></td>
              <td><Accolade size="small" background label="الأفضل" dir="rtl" /></td>
            </Row>
            <Row label="No icon" bold>
              <td><Accolade icon={null} label="Top pick" /></td>
              <td><Accolade icon={null} label="الأفضل" dir="rtl" /></td>
            </Row>
          </tbody>
        </table>
      </div>

      <header className="spec__header">
        <h1>Callout</h1>
      </header>

      <div className="spec__scroll">
        <table className="spec__table">
          <thead>
            <tr>
              <th />
              <th>EN</th>
              <th>AR</th>
            </tr>
          </thead>
          <tbody>
            <Row label="Regular" bold>
              <td><Callout label="Label" /></td>
              <td><Callout label="ملصق" dir="rtl" /></td>
            </Row>
            <Row label="Small" bold>
              <td><Callout size="small" label="Label" /></td>
              <td><Callout size="small" label="ملصق" dir="rtl" /></td>
            </Row>
            <Row label="No icon" bold>
              <td><Callout icon={null} label="Label" /></td>
              <td><Callout icon={null} label="ملصق" dir="rtl" /></td>
            </Row>
          </tbody>
        </table>
      </div>

      <header className="spec__header">
        <h1>Tag</h1>
      </header>

      <div className="spec__scroll">
        <table className="spec__table">
          <thead>
            <tr>
              <th />
              <th>EN</th>
              <th>AR</th>
            </tr>
          </thead>
          <tbody>
            <Row label="Default tinted" bold>
              <td><Tag label="Label" /></td>
              <td><Tag label="ملصق" dir="rtl" /></td>
            </Row>
            <Row label="Default filled">
              <td><Tag label="Label" style="filled" /></td>
              <td><Tag label="ملصق" style="filled" dir="rtl" /></td>
            </Row>
            <Row label="Warning tinted" bold>
              <td><Tag label="Label" variant="warning" /></td>
              <td><Tag label="ملصق" variant="warning" dir="rtl" /></td>
            </Row>
            <Row label="Warning filled">
              <td><Tag label="Label" variant="warning" style="filled" /></td>
              <td><Tag label="ملصق" variant="warning" style="filled" dir="rtl" /></td>
            </Row>
            <Row label="Caution tinted" bold>
              <td><Tag label="Label" variant="caution" /></td>
              <td><Tag label="ملصق" variant="caution" dir="rtl" /></td>
            </Row>
            <Row label="Caution filled">
              <td><Tag label="Label" variant="caution" style="filled" /></td>
              <td><Tag label="ملصق" variant="caution" style="filled" dir="rtl" /></td>
            </Row>
            <Row label="Success tinted" bold>
              <td><Tag label="Label" variant="success" /></td>
              <td><Tag label="ملصق" variant="success" dir="rtl" /></td>
            </Row>
            <Row label="Success filled">
              <td><Tag label="Label" variant="success" style="filled" /></td>
              <td><Tag label="ملصق" variant="success" style="filled" dir="rtl" /></td>
            </Row>
            <Row label="Neutral tinted" bold>
              <td><Tag label="Label" variant="neutral" /></td>
              <td><Tag label="ملصق" variant="neutral" dir="rtl" /></td>
            </Row>
            <Row label="Neutral filled">
              <td><Tag label="Label" variant="neutral" style="filled" /></td>
              <td><Tag label="ملصق" variant="neutral" style="filled" dir="rtl" /></td>
            </Row>
          </tbody>
        </table>
      </div>

      <header className="spec__header">
        <h1>Chip</h1>
      </header>

      <div className="spec__scroll">
        <table className="spec__table">
          <thead>
            <tr>
              <th />
              <th>EN</th>
              <th>AR</th>
            </tr>
          </thead>
          <tbody>
            <Row label="Default" bold>
              <td><Chip label="Economy" /></td>
              <td><Chip label="اقتصادي" dir="rtl" /></td>
            </Row>
            <Row label="Selected">
              <td><Chip label="Economy" selected /></td>
              <td><Chip label="اقتصادي" selected dir="rtl" /></td>
            </Row>
            <Row label="With icon" bold>
              <td><Chip label="Economy" icon={<PlaceholderIcon />} /></td>
              <td><Chip label="اقتصادي" icon={<PlaceholderIcon />} dir="rtl" /></td>
            </Row>
            <Row label="Selected with icon">
              <td><Chip label="Economy" selected icon={<PlaceholderIcon />} /></td>
              <td><Chip label="اقتصادي" selected icon={<PlaceholderIcon />} dir="rtl" /></td>
            </Row>
            <Row label="With dropdown" bold>
              <td><Chip label="Sort by" dropdown /></td>
              <td><Chip label="ترتيب حسب" dropdown dir="rtl" /></td>
            </Row>
            <Row label="Selected with dropdown">
              <td><Chip label="Sort by" selected dropdown /></td>
              <td><Chip label="ترتيب حسب" selected dropdown dir="rtl" /></td>
            </Row>
            <Row label="Disabled" bold>
              <td><Chip label="Economy" disabled /></td>
              <td><Chip label="اقتصادي" disabled dir="rtl" /></td>
            </Row>
            <Row label="Disabled selected">
              <td><Chip label="Economy" selected disabled /></td>
              <td><Chip label="اقتصادي" selected disabled dir="rtl" /></td>
            </Row>
            <Row label="Skeleton" bold>
              <td><Chip state="skeleton" /></td>
              <td><Chip state="skeleton" dir="rtl" /></td>
            </Row>
          </tbody>
        </table>
      </div>

      <header className="spec__header">
        <h1>Badge</h1>
      </header>

      <div className="spec__scroll">
        <table className="spec__table">
          <thead>
            <tr>
              <th />
              <th>EN</th>
              <th>AR</th>
            </tr>
          </thead>
          <tbody>
            <Row label="Alert" bold>
              <td><Badge variant="alert" count={3} /></td>
              <td><Badge variant="alert" count={3} /></td>
            </Row>
            <Row label="Alert / max">
              <td><Badge variant="alert" count={120} /></td>
              <td><Badge variant="alert" count={120} /></td>
            </Row>
            <Row label="Neutral">
              <td><Badge type="neutral" count={1} /></td>
              <td><Badge type="neutral" count={1} /></td>
            </Row>
            <Row label="New">
              <td><Badge variant="new" /></td>
              <td><Badge variant="new" /></td>
            </Row>
            <Row label="Overlay on icon" bold>
              <td>
                <Badge variant="alert" count={3}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </Badge>
              </td>
              <td>
                <Badge variant="alert" count={3} dir="rtl">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </Badge>
              </td>
            </Row>
            <Row label="Overlay / New">
              <td>
                <Badge variant="new">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="2" y="5" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="1.5"/>
                    <path d="M2 10h20" stroke="currentColor" strokeWidth="1.5"/>
                  </svg>
                </Badge>
              </td>
              <td>
                <Badge variant="new" dir="rtl">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="2" y="5" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="1.5"/>
                    <path d="M2 10h20" stroke="currentColor" strokeWidth="1.5"/>
                  </svg>
                </Badge>
              </td>
            </Row>
            <Row label="Overlay / large count">
              <td>
                <Badge type="neutral" count={92}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5"/>
                    <path d="M12 8v4l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </Badge>
              </td>
              <td>
                <Badge type="neutral" count={92} dir="rtl">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5"/>
                    <path d="M12 8v4l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </Badge>
              </td>
            </Row>
          </tbody>
        </table>
      </div>

      <header className="spec__header">
        <h1>Banner</h1>
      </header>

      <div className="spec__scroll">
        <table className="spec__table">
          <thead>
            <tr>
              <th />
              <th>EN</th>
              <th>AR</th>
            </tr>
          </thead>
          <tbody>
            <Row label="Small" bold>
              <td>
                <Banner
                  size="small"
                  title="Title"
                  subtitle="Short description"
                  codeLabel="Text"
                  codeText="CODE"
                />
              </td>
              <td>
                <Banner
                  size="small"
                  dir="rtl"
                  title="عنوان"
                  subtitle="وصف قصير"
                  codeLabel="نص"
                  codeText="رمز"
                />
              </td>
            </Row>
            {['neutral', 'info', 'promo', 'featured'].map((color) => (
              <Row key={color} label={color[0].toUpperCase() + color.slice(1)}>
                <td>
                  <Banner
                    size="small"
                    color={color}
                    title="Title"
                    subtitle="Short description"
                    codeLabel="Text"
                    codeText="CODE"
                  />
                </td>
                <td>
                  <Banner
                    size="small"
                    color={color}
                    dir="rtl"
                    title="عنوان"
                    subtitle="وصف قصير"
                    codeLabel="نص"
                    codeText="رمز"
                  />
                </td>
              </Row>
            ))}
          </tbody>
        </table>
      </div>

      <header className="spec__header">
        <h1>SystemBanner</h1>
      </header>

      <div className="spec__scroll">
        <table className="spec__table">
          <thead>
            <tr>
              <th />
              <th>EN</th>
              <th>AR</th>
            </tr>
          </thead>
          <tbody>
            {['visual', 'neutral', 'success', 'caution', 'error'].map((type) => (
              <Row key={type} label={type[0].toUpperCase() + type.slice(1)} bold={type === 'visual'}>
                <td>
                  <SystemBanner
                    type={type}
                    title="Title"
                    description="Book with free cancellation and get full refund in case your plans change."
                    actionLabel="Label"
                  />
                </td>
                <td>
                  <SystemBanner
                    type={type}
                    dir="rtl"
                    title="العنوان"
                    description="احجز الآن و يمكنك استرداد المبلغ في حالة الإلغاء."
                    actionLabel="المحتوي"
                  />
                </td>
              </Row>
            ))}
            <Row label="No title">
              <td>
                <SystemBanner
                  type="neutral"
                  description="Book with free cancellation and get full refund in case your plans change."
                  actionLabel="Label"
                />
              </td>
              <td>
                <SystemBanner
                  type="neutral"
                  dir="rtl"
                  description="احجز الآن و يمكنك استرداد المبلغ في حالة الإلغاء."
                  actionLabel="المحتوي"
                />
              </td>
            </Row>
            <Row label="No action">
              <td>
                <SystemBanner
                  type="success"
                  title="Title"
                  description="Book with free cancellation and get full refund in case your plans change."
                />
              </td>
              <td>
                <SystemBanner
                  type="success"
                  dir="rtl"
                  title="العنوان"
                  description="احجز الآن و يمكنك استرداد المبلغ في حالة الإلغاء."
                />
              </td>
            </Row>
            <Row label="Skeleton">
              <td>
                <SystemBanner skeleton />
              </td>
              <td>
                <SystemBanner skeleton dir="rtl" />
              </td>
            </Row>
            {['visual', 'neutral', 'success', 'caution', 'error'].map((type) => (
              <Row key={`desktop-${type}`} label={`Desktop · ${type[0].toUpperCase() + type.slice(1)}`}>
                <td>
                  <SystemBanner
                    platform="desktop"
                    type={type}
                    title="Title"
                    description="Book with free cancellation and get full refund in case your plans change."
                    tag="Ends in 2 days"
                    actionLabel="Label"
                  />
                </td>
                <td>
                  <SystemBanner
                    platform="desktop"
                    type={type}
                    dir="rtl"
                    title="العنوان"
                    description="احجز الآن و يمكنك استرداد المبلغ في حالة الإلغاء."
                    tag="ينتهي خلال يومين"
                    actionLabel="المحتوي"
                  />
                </td>
              </Row>
            ))}
            <Row label="Desktop · No icon">
              <td>
                <SystemBanner
                  platform="desktop"
                  type="visual"
                  icon={false}
                  title="Title"
                  description="Book with free cancellation and get full refund in case your plans change."
                  tag="Ends in 2 days"
                  actionLabel="Label"
                />
              </td>
              <td>
                <SystemBanner
                  platform="desktop"
                  type="visual"
                  icon={false}
                  dir="rtl"
                  title="العنوان"
                  description="احجز الآن و يمكنك استرداد المبلغ في حالة الإلغاء."
                  tag="ينتهي خلال يومين"
                  actionLabel="المحتوي"
                />
              </td>
            </Row>
          </tbody>
        </table>
      </div>

      <header className="spec__header">
        <h1>VisualCard</h1>
      </header>

      <div className="spec__scroll">
        <table className="spec__table">
          <thead>
            <tr>
              <th />
              <th>EN</th>
              <th>AR</th>
            </tr>
          </thead>
          <tbody>
            <Row label="Medium" bold>
              <td>
                <VisualCard
                  size="medium"
                  title="Title"
                  subtitle="Short description"
                  priceLabel="LABEL"
                  priceValue="PRICE/CODE"
                  actionLabel="Label"
                />
              </td>
              <td>
                <VisualCard
                  size="medium"
                  dir="rtl"
                  title="عنوان"
                  subtitle="وصف قصير"
                  priceLabel="ملصق"
                  priceValue="السعر/الرمز"
                  actionLabel="المحتوي"
                />
              </td>
            </Row>
            <Row label="Large" bold>
              <td>
                <VisualCard
                  size="large"
                  title="Title"
                  subtitle="Short description"
                  priceLabel="LABEL"
                  priceValue="PRICE/CODE"
                  actionLabel="Label"
                />
              </td>
              <td>
                <VisualCard
                  size="large"
                  dir="rtl"
                  title="عنوان"
                  subtitle="وصف قصير"
                  priceLabel="ملصق"
                  priceValue="السعر/الرمز"
                  actionLabel="المحتوي"
                />
              </td>
            </Row>
          </tbody>
        </table>
      </div>

      <header className="spec__header">
        <h1>AdBanner</h1>
      </header>

      <div className="spec__scroll">
        <table className="spec__table">
          <thead>
            <tr>
              <th />
              <th>EN</th>
              <th>AR</th>
            </tr>
          </thead>
          <tbody>
            <Row label="Mobile / Small" bold>
              <td>
                <AdBanner layout="mobile" size="small" imageSrc={adImage} logoSrc={adLogoSrc} title="Ad title" subtitle="Sub-copy" />
              </td>
              <td>
                <AdBanner layout="mobile" size="small" dir="rtl" imageSrc={adImage} logoSrc={adLogoSrc} title="عنوان الإعلان" subtitle="نص فرعي" />
              </td>
            </Row>
            <Row label="Mobile / Small (no image)">
              <td>
                <AdBanner layout="mobile" size="small" logoSrc={adLogoSrc} title="Ad title" subtitle="Sub-copy" />
              </td>
              <td>
                <AdBanner layout="mobile" size="small" dir="rtl" logoSrc={adLogoSrc} title="عنوان الإعلان" subtitle="نص فرعي" />
              </td>
            </Row>
            <Row label="Mobile / Small (no chevron)">
              <td>
                <AdBanner layout="mobile" size="small" imageSrc={adImage} logoSrc={adLogoSrc} title="Ad title" subtitle="Sub-copy" chevron={false} />
              </td>
              <td>
                <AdBanner layout="mobile" size="small" dir="rtl" imageSrc={adImage} logoSrc={adLogoSrc} title="عنوان الإعلان" subtitle="نص فرعي" chevron={false} />
              </td>
            </Row>
            <Row label="Mobile / Small + CTA">
              <td>
                <AdBanner layout="mobile" size="small" imageSrc={adImage} logoSrc={adLogoSrc} title="Ad title" subtitle="Sub-copy" showAction actionLabel="Label" />
              </td>
              <td>
                <AdBanner layout="mobile" size="small" dir="rtl" imageSrc={adImage} logoSrc={adLogoSrc} title="عنوان الإعلان" subtitle="نص فرعي" showAction actionLabel="المحتوى" />
              </td>
            </Row>
            <Row label="Mobile / Medium" bold>
              <td>
                <AdBanner layout="mobile" size="medium" imageSrc={adImage} logoSrc={adLogoSrc} title="Ad title" subtitle="Sub-copy" />
              </td>
              <td>
                <AdBanner layout="mobile" size="medium" dir="rtl" imageSrc={adImage} logoSrc={adLogoSrc} title="عنوان الإعلان" subtitle="نص فرعي" />
              </td>
            </Row>
            <Row label="Mobile / Large" bold>
              <td>
                <AdBanner layout="mobile" size="large" imageSrc={adImage} logoSrc={adLogoSrc} title="Ad title" subtitle="Sub-copy" />
              </td>
              <td>
                <AdBanner layout="mobile" size="large" dir="rtl" imageSrc={adImage} logoSrc={adLogoSrc} title="عنوان الإعلان" subtitle="نص فرعي" />
              </td>
            </Row>
            <Row label="Desktop / Small" bold>
              <td colSpan={2}>
                <AdBanner layout="desktop" imageSrc={adImage} logoSrc={adLogoSrc} title="Ad title" subtitle="Sub-copy" />
              </td>
            </Row>
            <Row label="Desktop / CTA">
              <td colSpan={2}>
                <AdBanner
                  layout="desktop"
                  imageSrc={adImage}
                  logoSrc={adLogoSrc}
                  title="Ad title"
                  subtitle="Sub-copy"
                  showAction
                  actionLabel="Label"
                  showImageAction
                  imageActionLabel="Book now"
                />
              </td>
            </Row>
            <Row label="Skeleton">
              <td>
                <AdBanner layout="mobile" size="small" skeleton />
              </td>
              <td>
                <AdBanner layout="mobile" size="medium" skeleton />
              </td>
            </Row>
            <Row label="Skeleton + CTA">
              <td>
                <AdBanner layout="mobile" size="small" skeleton showAction />
              </td>
              <td colSpan={1}>
                <AdBanner layout="desktop" skeleton showAction showImageAction />
              </td>
            </Row>
          </tbody>
        </table>
      </div>

      <header className="spec__header">
        <h1>Cell</h1>
      </header>

      <div className="spec__scroll">
        <table className="spec__table">
          <thead>
            <tr>
              <th />
              <th>EN</th>
              <th>AR</th>
            </tr>
          </thead>
          <tbody>
            <Row label="Icon + Chevron" bold>
              <td>
                <Cell
                  label="Baggage details"
                  value="2 pieces, SAR 234.10"
                  icon={<PlaceholderIcon />}
                />
              </td>
              <td>
                <Cell
                  label="تفاصيل الأمتعة"
                  value="قطعتان، ٢٣٤٫١٠ ريال"
                  icon={<PlaceholderIcon />}
                  dir="rtl"
                />
              </td>
            </Row>
            <Row label="3D icon + Chevron" bold>
              <td>
                <Cell
                  visual="3d-icon"
                  label="Airline"
                  value="Saudia"
                />
              </td>
              <td>
                <Cell
                  visual="3d-icon"
                  label="الخطوط الجوية"
                  value="السعودية"
                  dir="rtl"
                />
              </td>
            </Row>
            <Row label="Image + Chevron" bold>
              <td>
                <Cell
                  visual="image"
                  label="Hotel"
                  value="Grand Hyatt Riyadh"
                />
              </td>
              <td>
                <Cell
                  visual="image"
                  label="الفندق"
                  value="جراند حياة الرياض"
                  dir="rtl"
                />
              </td>
            </Row>
            <Row label="Trailing text" bold>
              <td>
                <Cell
                  label="Seat"
                  value="Window seat"
                  icon={<PlaceholderIcon />}
                  trailing="text"
                  trailingText="Change"
                />
              </td>
              <td>
                <Cell
                  label="المقعد"
                  value="مقعد نافذة"
                  icon={<PlaceholderIcon />}
                  trailing="text"
                  trailingText="تغيير"
                  dir="rtl"
                />
              </td>
            </Row>
            <Row label="No visual" bold>
              <td>
                <Cell
                  visual={null}
                  label="Departure"
                  value="Riyadh — Dubai"
                />
              </td>
              <td>
                <Cell
                  visual={null}
                  label="المغادرة"
                  value="الرياض — دبي"
                  dir="rtl"
                />
              </td>
            </Row>
            <Row label="No separator">
              <td>
                <Cell
                  label="Last item"
                  value="No line below"
                  icon={<PlaceholderIcon />}
                  showSeparator={false}
                />
              </td>
              <td>
                <Cell
                  label="آخر عنصر"
                  value="بدون خط فاصل"
                  icon={<PlaceholderIcon />}
                  showSeparator={false}
                  dir="rtl"
                />
              </td>
            </Row>
            <Row label="Prioritize label" bold>
              <td>
                <Cell
                  label="Notifications"
                  value="Push & email"
                  icon={<PlaceholderIcon />}
                  prioritize="label"
                />
              </td>
              <td>
                <Cell
                  label="الإشعارات"
                  value="دفع وبريد إلكتروني"
                  icon={<PlaceholderIcon />}
                  prioritize="label"
                  dir="rtl"
                />
              </td>
            </Row>
            <Row label="Toggle trailing" bold>
              <td>
                <Cell
                  label="Dark mode"
                  value="Follows system"
                  icon={<PlaceholderIcon />}
                  trailing="toggle"
                  toggleChecked={false}
                />
              </td>
              <td>
                <Cell
                  label="الوضع الليلي"
                  value="يتبع النظام"
                  icon={<PlaceholderIcon />}
                  trailing="toggle"
                  toggleChecked={true}
                  dir="rtl"
                />
              </td>
            </Row>
            <Row label="Stepper trailing" bold>
              <td>
                <Cell
                  label="Adults"
                  subtext="Age 12+"
                  icon={<PlaceholderIcon />}
                  trailing="stepper"
                  stepperValue={2}
                  stepperMin={1}
                  stepperMax={9}
                />
              </td>
              <td>
                <Cell
                  label="البالغون"
                  subtext="من عمر ١٢"
                  icon={<PlaceholderIcon />}
                  trailing="stepper"
                  stepperValue={2}
                  stepperMin={1}
                  stepperMax={9}
                  dir="rtl"
                />
              </td>
            </Row>
            <Row label="Toggle + label priority" bold>
              <td>
                <Cell
                  label="Wi-Fi"
                  value="Connected"
                  icon={<PlaceholderIcon />}
                  trailing="toggle"
                  prioritize="label"
                  toggleChecked={true}
                />
              </td>
              <td>
                <Cell
                  label="واي فاي"
                  value="متصل"
                  icon={<PlaceholderIcon />}
                  trailing="toggle"
                  prioritize="label"
                  toggleChecked={true}
                  dir="rtl"
                />
              </td>
            </Row>
            <Row label="Selected" bold>
              <td>
                <Cell
                  label="Economy"
                  value="SAR 499"
                  icon={<PlaceholderIcon />}
                  selected
                />
              </td>
              <td>
                <Cell
                  label="الاقتصادية"
                  value="٤٩٩ ريال"
                  icon={<PlaceholderIcon />}
                  selected
                  dir="rtl"
                />
              </td>
            </Row>
          </tbody>
        </table>
      </div>

      <header className="spec__header">
        <h1>List</h1>
      </header>

      <div className="spec__scroll">
        <table className="spec__table">
          <thead>
            <tr>
              <th />
              <th>EN</th>
              <th>AR</th>
            </tr>
          </thead>
          <tbody>
            <Row label="Icon / Active" bold>
              <td><ListItem type="icon" label="Label" keyValue="Key-value" /></td>
              <td><ListItem type="icon" label="ملصق" keyValue="مفتاح-قيمة" dir="rtl" /></td>
            </Row>
            <Row label="Icon / Tag">
              <td><ListItem type="icon" label="Label" tag="Label" keyValue="Key-value" /></td>
              <td><ListItem type="icon" label="ملصق" tag="ملصق" keyValue="مفتاح-قيمة" dir="rtl" /></td>
            </Row>
            <Row label="Icon / Disabled">
              <td><ListItem type="icon" disabled label="Label" keyValue="Key-value" /></td>
              <td><ListItem type="icon" disabled label="ملصق" keyValue="مفتاح-قيمة" dir="rtl" /></td>
            </Row>
            <Row label="Icon / Skeleton">
              <td><ListItem type="icon" skeleton /></td>
              <td><ListItem type="icon" skeleton dir="rtl" /></td>
            </Row>

            <Row label="Radio / Active" bold>
              <td><ListItem type="radio" label="Label" keyValue="Key-value" /></td>
              <td><ListItem type="radio" label="ملصق" keyValue="مفتاح-قيمة" dir="rtl" /></td>
            </Row>
            <Row label="Radio / Error">
              <td><ListItem type="radio" error label="Label" keyValue="Key-value" /></td>
              <td><ListItem type="radio" error label="ملصق" keyValue="مفتاح-قيمة" dir="rtl" /></td>
            </Row>
            <Row label="Radio / Selected">
              <td><ListItem type="radio" selected label="Label" keyValue="Key-value" /></td>
              <td><ListItem type="radio" selected label="ملصق" keyValue="مفتاح-قيمة" dir="rtl" /></td>
            </Row>
            <Row label="Radio / Disabled">
              <td><ListItem type="radio" disabled label="Label" keyValue="Key-value" /></td>
              <td><ListItem type="radio" disabled label="ملصق" keyValue="مفتاح-قيمة" dir="rtl" /></td>
            </Row>
            <Row label="Radio / Disabled + Selected">
              <td><ListItem type="radio" disabled selected label="Label" keyValue="Key-value" /></td>
              <td><ListItem type="radio" disabled selected label="ملصق" keyValue="مفتاح-قيمة" dir="rtl" /></td>
            </Row>
            <Row label="Radio / Skeleton">
              <td><ListItem type="radio" skeleton /></td>
              <td><ListItem type="radio" skeleton dir="rtl" /></td>
            </Row>

            <Row label="Checkbox / Active" bold>
              <td><ListItem type="checkbox" label="Label" keyValue="Key-value" /></td>
              <td><ListItem type="checkbox" label="ملصق" keyValue="مفتاح-قيمة" dir="rtl" /></td>
            </Row>
            <Row label="Checkbox / Error">
              <td><ListItem type="checkbox" error label="Label" keyValue="Key-value" /></td>
              <td><ListItem type="checkbox" error label="ملصق" keyValue="مفتاح-قيمة" dir="rtl" /></td>
            </Row>
            <Row label="Checkbox / Selected">
              <td><ListItem type="checkbox" selected label="Label" keyValue="Key-value" /></td>
              <td><ListItem type="checkbox" selected label="ملصق" keyValue="مفتاح-قيمة" dir="rtl" /></td>
            </Row>
            <Row label="Checkbox / Disabled">
              <td><ListItem type="checkbox" disabled label="Label" keyValue="Key-value" /></td>
              <td><ListItem type="checkbox" disabled label="ملصق" keyValue="مفتاح-قيمة" dir="rtl" /></td>
            </Row>
            <Row label="Checkbox / Disabled + Selected">
              <td><ListItem type="checkbox" disabled selected label="Label" keyValue="Key-value" /></td>
              <td><ListItem type="checkbox" disabled selected label="ملصق" keyValue="مفتاح-قيمة" dir="rtl" /></td>
            </Row>
            <Row label="Checkbox / Skeleton">
              <td><ListItem type="checkbox" skeleton /></td>
              <td><ListItem type="checkbox" skeleton dir="rtl" /></td>
            </Row>
          </tbody>
        </table>
      </div>

      <header className="spec__header">
        <h1>Radio</h1>
      </header>

      <div className="spec__scroll">
        <table className="spec__table">
          <thead>
            <tr>
              <th />
              <th>EN</th>
              <th>AR</th>
            </tr>
          </thead>
          <tbody>
            <RadioRows />
          </tbody>
        </table>
      </div>

      <header className="spec__header">
        <h1>Checkbox</h1>
      </header>

      <div className="spec__scroll">
        <table className="spec__table">
          <thead>
            <tr>
              <th />
              <th>EN</th>
              <th>AR</th>
            </tr>
          </thead>
          <tbody>
            <CheckboxRows />
          </tbody>
        </table>
      </div>

      <header className="spec__header">
        <h1>Toggle</h1>
      </header>

      <div className="spec__scroll">
        <table className="spec__table">
          <thead>
            <tr>
              <th />
              <th>EN</th>
              <th>AR</th>
            </tr>
          </thead>
          <tbody>
            <ToggleRows />
          </tbody>
        </table>
      </div>

      <header className="spec__header">
        <h1>Navbar</h1>
      </header>

      <NavbarShowcase />

      <header className="spec__header">
        <h1>Glass Button</h1>
      </header>

      <div className="spec__scroll">
        <table className="spec__table" style={{ background: 'linear-gradient(120deg, #0BA0B7, #875BF7)' }}>
          <thead>
            <tr><th /><th>Default</th><th>Primary</th><th>Dim</th></tr>
          </thead>
          <tbody>
            <Row label="Back">
              {['default', 'primary', 'dim'].map(bg => <td key={bg}><GlassButton bg={bg} type="back" aria-label="Back" /></td>)}
            </Row>
            <Row label="Label">
              {['default', 'primary', 'dim'].map(bg => <td key={bg}><GlassButton bg={bg} type="label" label="Label" /></td>)}
            </Row>
            <Row label="Back + Label">
              {['default', 'primary', 'dim'].map(bg => <td key={bg}><GlassButton bg={bg} type="back-label" label="Label" /></td>)}
            </Row>
            <Row label="1 icon">
              {['default', 'primary', 'dim'].map(bg => <td key={bg}><GlassButton bg={bg} type="1-icon" icon1={<PlaceholderIcon />} aria-label="Action" /></td>)}
            </Row>
            <Row label="2 icons">
              {['default', 'primary', 'dim'].map(bg => <td key={bg}><GlassButton bg={bg} type="2-icons" icon1={<PlaceholderIcon />} icon2={<PlaceholderIcon />} /></td>)}
            </Row>
            <Row label="X (close)">
              {['default', 'primary', 'dim'].map(bg => <td key={bg}><GlassButton bg={bg} type="x" aria-label="Close" /></td>)}
            </Row>
          </tbody>
        </table>
      </div>

      <header className="spec__header">
        <h1>Icon Button</h1>
      </header>

      <div className="spec__scroll">
        <table className="spec__table">
          <thead>
            <tr>
              <th />
              {SIZES.map((s) => <th key={s.key}>{s.label}</th>)}
            </tr>
          </thead>
          <tbody>
            <Row label="Primary" bold>
              <IconCells variant="primary" />
            </Row>
            <Row label="Hovered / Desktop">
              <IconCells variant="primary" />
            </Row>
            <Row label="Pressed">
              <IconCells variant="primary" />
            </Row>
            <Row label="Disabled">
              {SIZES.map((s) => (
                <td key={s.key}>
                  <IconButton variant="primary" size={s.key} aria-label="action" icon={<PlaceholderIcon />} disabled />
                </td>
              ))}
            </Row>

            <Row label="Secondary" bold>
              <IconCells variant="secondary" />
            </Row>
            <Row label="Hovered / Desktop">
              <IconCells variant="secondary" />
            </Row>
            <Row label="Pressed">
              <IconCells variant="secondary" />
            </Row>
            <Row label="Disabled">
              {SIZES.map((s) => (
                <td key={s.key}>
                  <IconButton variant="secondary" size={s.key} aria-label="action" icon={<PlaceholderIcon />} disabled />
                </td>
              ))}
            </Row>
          </tbody>
        </table>
      </div>

      <header className="spec__header">
        <h1>Stepper</h1>
      </header>
      <div className="spec__scroll">
        <table className="spec__table">
          <thead>
            <tr>
              <th />
              <th>EN</th>
              <th>AR</th>
            </tr>
          </thead>
          <tbody>
            <StepperRows />
          </tbody>
        </table>
      </div>

      <header className="spec__header">
        <h1>Segmented Control</h1>
      </header>
      <div className="spec__scroll">
        <table className="spec__table">
          <thead>
            <tr>
              <th />
              <th>EN</th>
              <th>AR</th>
            </tr>
          </thead>
          <tbody>
            <SegmentedControlRows />
          </tbody>
        </table>
      </div>
      <header className="spec__header">
        <h1>Slider</h1>
      </header>
      <div className="spec__scroll">
        <table className="spec__table">
          <thead>
            <tr>
              <th />
              <th>EN</th>
            </tr>
          </thead>
          <tbody>
            <SliderRows />
          </tbody>
        </table>
      </div>

      <header className="spec__header">
        <h1>Progress Stepper</h1>
      </header>
      <div className="spec__scroll">
        <table className="spec__table">
          <thead>
            <tr>
              <th />
              <th>3 steps</th>
              <th>4 steps</th>
              <th>5 steps</th>
            </tr>
          </thead>
          <tbody>
            <Row label="Step 1" bold>
              <td style={{ width: 160 }}><ProgressStepper steps={3} currentStep={1} /></td>
              <td style={{ width: 160 }}><ProgressStepper steps={4} currentStep={1} /></td>
              <td style={{ width: 160 }}><ProgressStepper steps={5} currentStep={1} /></td>
            </Row>
            <Row label="Step 2">
              <td><ProgressStepper steps={3} currentStep={2} /></td>
              <td><ProgressStepper steps={4} currentStep={2} /></td>
              <td><ProgressStepper steps={5} currentStep={2} /></td>
            </Row>
            <Row label="Step 3">
              <td><ProgressStepper steps={3} currentStep={3} /></td>
              <td><ProgressStepper steps={4} currentStep={3} /></td>
              <td><ProgressStepper steps={5} currentStep={3} /></td>
            </Row>
            <Row label="Complete">
              <td><ProgressStepper steps={3} currentStep={3} /></td>
              <td><ProgressStepper steps={4} currentStep={4} /></td>
              <td><ProgressStepper steps={5} currentStep={5} /></td>
            </Row>
          </tbody>
        </table>
      </div>

      <header className="spec__header">
        <h1>Circular Progress Indicator</h1>
      </header>
      <div className="spec__scroll">
        <table className="spec__table">
          <thead>
            <tr>
              <th />
              <th>Default</th>
              <th>Large</th>
              <th>With label</th>
            </tr>
          </thead>
          <tbody>
            <Row label="iOS" bold>
              <td><CircularProgressIndicator platform="ios" /></td>
              <td><CircularProgressIndicator platform="ios" size="large" /></td>
              <td><CircularProgressIndicator platform="ios" label="Loading results…" /></td>
            </Row>
            <Row label="Android">
              <td><CircularProgressIndicator platform="android" /></td>
              <td><CircularProgressIndicator platform="android" size="large" /></td>
              <td><CircularProgressIndicator platform="android" label="Loading results…" /></td>
            </Row>
          </tbody>
        </table>
      </div>

      <header className="spec__header">
        <h1>Linear Progress Indicator</h1>
      </header>
      <div className="spec__scroll">
        <table className="spec__table">
          <thead>
            <tr>
              <th />
              <th>0%</th>
              <th>40%</th>
              <th>80%</th>
              <th>100%</th>
            </tr>
          </thead>
          <tbody>
            <Row label="iOS" bold>
              <td style={{ width: 200 }}><LinearProgressIndicator platform="ios" value={0} /></td>
              <td style={{ width: 200 }}><LinearProgressIndicator platform="ios" value={40} /></td>
              <td style={{ width: 200 }}><LinearProgressIndicator platform="ios" value={80} /></td>
              <td style={{ width: 200 }}><LinearProgressIndicator platform="ios" value={100} /></td>
            </Row>
            <Row label="Android">
              <td style={{ width: 200 }}><LinearProgressIndicator platform="android" value={0} /></td>
              <td style={{ width: 200 }}><LinearProgressIndicator platform="android" value={40} /></td>
              <td style={{ width: 200 }}><LinearProgressIndicator platform="android" value={80} /></td>
              <td style={{ width: 200 }}><LinearProgressIndicator platform="android" value={100} /></td>
            </Row>
            <Row label="Android · RTL">
              <td style={{ width: 200 }}><LinearProgressIndicator platform="android" value={0} dir="rtl" /></td>
              <td style={{ width: 200 }}><LinearProgressIndicator platform="android" value={40} dir="rtl" /></td>
              <td style={{ width: 200 }}><LinearProgressIndicator platform="android" value={80} dir="rtl" /></td>
              <td style={{ width: 200 }}><LinearProgressIndicator platform="android" value={100} dir="rtl" /></td>
            </Row>
          </tbody>
        </table>
      </div>

      <header className="spec__header">
        <h1>Text Input</h1>
      </header>
      <div className="spec__scroll">
        <table className="spec__table">
          <thead>
            <tr>
              <th />
              <th>EN</th>
              <th>AR</th>
            </tr>
          </thead>
          <tbody>
            <TextInputRows />
          </tbody>
        </table>
      </div>

      <header className="spec__header">
        <h1>Search (iOS)</h1>
      </header>
      <div className="spec__scroll">
        <table className="spec__table">
          <thead>
            <tr>
              <th />
              <th>EN</th>
              <th>AR</th>
            </tr>
          </thead>
          <tbody>
            <SearchRows />
          </tbody>
        </table>
      </div>

      <header className="spec__header">
        <h1>Search (Android)</h1>
      </header>
      <div className="spec__scroll">
        <table className="spec__table">
          <thead>
            <tr>
              <th />
              <th>EN</th>
              <th>AR</th>
            </tr>
          </thead>
          <tbody>
            <SearchRows platform="android" />
          </tbody>
        </table>
      </div>

      <header className="spec__header">
        <h1>Tooltip</h1>
      </header>
      <div className="spec__scroll">
        <table className="spec__table">
          <thead>
            <tr>
              <th />
              <th>Top / center</th>
              <th>Bottom / center</th>
              <th>Top / start</th>
              <th>Top / end</th>
            </tr>
          </thead>
          <tbody>
            <Row label="Default">
              <td style={{ padding: '40px 24px' }}>
                <Tooltip content="Total duration">
                  <button>Hover me</button>
                </Tooltip>
              </td>
              <td style={{ padding: '40px 24px' }}>
                <Tooltip content="Total duration" position="bottom">
                  <button>Hover me</button>
                </Tooltip>
              </td>
              <td style={{ padding: '40px 24px' }}>
                <Tooltip content="Total duration" arrowAlign="start">
                  <button>Hover me</button>
                </Tooltip>
              </td>
              <td style={{ padding: '40px 24px' }}>
                <Tooltip content="Total duration" arrowAlign="end">
                  <button>Hover me</button>
                </Tooltip>
              </td>
            </Row>
          </tbody>
        </table>
      </div>

      <header className="spec__header">
        <h1>Snackbar</h1>
      </header>
      <div className="spec__scroll">
        <table className="spec__table">
          <thead>
            <tr>
              <th />
              <th>EN</th>
              <th>AR</th>
            </tr>
          </thead>
          <tbody>
            <SnackbarRows />
          </tbody>
        </table>
      </div>

      <header className="spec__header">
        <h1>TabBar</h1>
      </header>
      <div className="spec__scroll">
        <table className="spec__table">
          <thead>
            <tr>
              <th />
              <th>iOS</th>
              <th>Android</th>
            </tr>
          </thead>
          <tbody>
            <TabBarRows />
          </tbody>
        </table>
      </div>

      <header className="spec__header">
        <h1>DesignSystemProvider</h1>
      </header>
      <div className="spec__scroll">
        <table className="spec__table">
          <thead>
            <tr>
              <th />
              <th>platform="ios" (provider)</th>
              <th>platform="android" (provider)</th>
            </tr>
          </thead>
          <tbody>
            <ProviderRows />
          </tbody>
        </table>
      </div>

      <header className="spec__header">
        <h1>Expander</h1>
      </header>

      <div className="spec__scroll">
        <table className="spec__table">
          <thead>
            <tr>
              <th style={{ textAlign: 'left' }}>Collapsed LTR</th>
              <th style={{ textAlign: 'left' }}>Expanded LTR</th>
              <th style={{ textAlign: 'left' }}>Collapsed RTL</th>
              <th style={{ textAlign: 'left' }}>Expanded RTL</th>
            </tr>
          </thead>
          <tbody>
            <Row>
              <td style={{ textAlign: 'left' }}><ExpanderDemo dir="ltr" /></td>
              <td style={{ textAlign: 'left' }}><ExpanderDemo dir="ltr" initialExpanded /></td>
              <td style={{ textAlign: 'left' }}><ExpanderDemo dir="rtl" /></td>
              <td style={{ textAlign: 'left' }}><ExpanderDemo dir="rtl" initialExpanded /></td>
            </Row>
          </tbody>
        </table>
      </div>

      <header className="spec__header">
        <h1>Accordion</h1>
      </header>

      <div className="spec__scroll">
        <table className="spec__table">
          <thead>
            <tr>
              <th style={{ textAlign: 'left' }}>Collapsed</th>
              <th style={{ textAlign: 'left' }}>Expanded</th>
              <th style={{ textAlign: 'left' }}>Skeleton</th>
              <th style={{ textAlign: 'left' }}>Expanded · RTL</th>
            </tr>
          </thead>
          <tbody>
            <Row>
              <td style={{ textAlign: 'left', minWidth: 300 }}>
                <Accordion title="Accordion Item">{ACCORDION_BODY}</Accordion>
              </td>
              <td style={{ textAlign: 'left', minWidth: 300 }}>
                <Accordion title="Accordion Item" expanded>{ACCORDION_BODY}</Accordion>
              </td>
              <td style={{ textAlign: 'left', minWidth: 300 }}>
                <Accordion skeleton />
              </td>
              <td style={{ textAlign: 'left', minWidth: 300 }}>
                <Accordion title="عنصر الأكورديون" expanded dir="rtl">{ACCORDION_BODY}</Accordion>
              </td>
            </Row>
          </tbody>
        </table>
      </div>

      <header className="spec__header">
        <h1>MarketingCard</h1>
      </header>
      <div className="spec__scroll">
        <table className="spec__table">
          <thead>
            <tr>
              <th />
              <th>Solid</th>
              <th>Gradient Small</th>
              <th>Gradient Large</th>
              <th>Display</th>
            </tr>
          </thead>
          <tbody>
            <Row label="Default" bold>
              <td>
                <MarketingCard
                  type="solid"
                  title="Emirates Business Class"
                  subtitle="Dubai → London, non-stop"
                  tags={['Flight', 'Business']}
                  actionLabel="Book now"
                  onAction={() => {}}
                />
              </td>
              <td>
                <MarketingCard
                  type="gradient-small"
                  title="Istanbul"
                  subtitle="3 nights from SAR 499"
                  tags={['Hotel', 'Deal']}
                />
              </td>
              <td>
                <MarketingCard
                  type="gradient-large"
                  centerTitle="Dubai"
                  title="Explore the city"
                  subtitle="Year-round sunshine awaits"
                  tags={['Popular']}
                />
              </td>
              <td>
                <MarketingCard
                  type="display"
                  title="Summer Sale"
                  subtitle="Up to 40% off flights"
                  tags={['Limited']}
                />
              </td>
            </Row>
            <Row label="Skeleton" bold>
              <td><MarketingCard type="solid" state="skeleton" /></td>
              <td><MarketingCard type="gradient-small" state="skeleton" /></td>
              <td><MarketingCard type="gradient-large" state="skeleton" /></td>
              <td><MarketingCard type="display" state="skeleton" /></td>
            </Row>
            <Row label="RTL" bold>
              <td>
                <MarketingCard
                  type="solid"
                  dir="rtl"
                  title="طيران الإمارات"
                  subtitle="دبي ← لندن"
                  tags={['رحلة']}
                  actionLabel="احجز الآن"
                  onAction={() => {}}
                />
              </td>
              <td>
                <MarketingCard
                  type="gradient-small"
                  dir="rtl"
                  title="إسطنبول"
                  subtitle="٣ ليالٍ من ٤٩٩ ريال"
                  tags={['فندق']}
                />
              </td>
              <td>
                <MarketingCard
                  type="gradient-large"
                  dir="rtl"
                  centerTitle="دبي"
                  title="اكتشف المدينة"
                  subtitle="أشعة الشمس على مدار العام"
                  tags={['مشهور']}
                />
              </td>
              <td>
                <MarketingCard
                  type="display"
                  dir="rtl"
                  title="تخفيضات الصيف"
                  subtitle="خصم يصل إلى ٤٠٪ على الرحلات"
                  tags={['محدود']}
                />
              </td>
            </Row>
          </tbody>
        </table>
      </div>
      <header className="spec__header">
        <h1>AlmosaferLogo</h1>
      </header>
      <div className="spec__scroll">
        <table className="spec__table">
          <thead>
            <tr>
              <th />
              <th>Colour</th>
              <th>White</th>
            </tr>
          </thead>
          <tbody>
            <Row label="Wordmark EN">
              <td><AlmosaferLogo type="wordmark" variant="colour" lang="en" width={132} /></td>
              <td style={{ background: '#003143', padding: 12 }}><AlmosaferLogo type="wordmark" variant="white" lang="en" width={132} /></td>
            </Row>
            <Row label="Wordmark AR">
              <td><AlmosaferLogo type="wordmark" variant="colour" lang="ar" width={132} /></td>
              <td style={{ background: '#003143', padding: 12 }}><AlmosaferLogo type="wordmark" variant="white" lang="ar" width={132} /></td>
            </Row>
            <Row label="Logomark">
              <td><AlmosaferLogo type="logomark" variant="colour" width={48} /></td>
              <td style={{ background: '#003143', padding: 12 }}><AlmosaferLogo type="logomark" variant="white" width={48} /></td>
            </Row>
            <Row label="App Logo">
              <td><AlmosaferLogo type="applogo" variant="colour" width={64} /></td>
              <td style={{ background: '#003143', padding: 12 }}><AlmosaferLogo type="applogo" variant="white" width={64} /></td>
            </Row>
          </tbody>
        </table>
      </div>
      <header className="spec__header">
        <h1>BottomSheet</h1>
      </header>
      <div className="spec__scroll">
        <BottomSheetPreview />
      </div>
      <header className="spec__header">
        <h1>Dialog</h1>
      </header>
      <div className="spec__scroll">
        <table className="spec__table">
          <thead>
            <tr>
              <th />
              <th>EN</th>
              <th>AR</th>
            </tr>
          </thead>
          <tbody>
            <DialogRows />
          </tbody>
        </table>
      </div>
      <header className="spec__header">
        <h1>ActionSheet</h1>
      </header>
      <div className="spec__scroll">
        <table className="spec__table">
          <thead>
            <tr>
              <th />
              <th>EN</th>
              <th>AR</th>
            </tr>
          </thead>
          <tbody>
            <ActionSheetRows />
          </tbody>
        </table>
      </div>
    </main>
  )
}

function ActionSheetRows() {
  const [open, setOpen] = useState(null)

  const iosActions = [
    { label: 'Action 4', onClick: () => setOpen(null) },
    { label: 'Action 3', onClick: () => setOpen(null) },
    { label: 'Action 2', onClick: () => setOpen(null) },
    { label: 'Action 1', destructive: true, onClick: () => setOpen(null) },
  ]
  const iosActionsAr = [
    { label: 'الإجراء 4', onClick: () => setOpen(null) },
    { label: 'الإجراء 3', onClick: () => setOpen(null) },
    { label: 'الإجراء 2', onClick: () => setOpen(null) },
    { label: 'الإجراء 1', destructive: true, onClick: () => setOpen(null) },
  ]
  const androidItems = [
    { icon: <PlaceholderIcon />, label: 'Label', shortcut: '⌘C', chevron: true, onClick: () => setOpen(null) },
    { icon: <PlaceholderIcon />, label: 'Label', shortcut: '⌘C', chevron: true, onClick: () => setOpen(null) },
    { icon: <PlaceholderIcon />, label: 'Label', shortcut: '⌘C', chevron: true, onClick: () => setOpen(null) },
    { icon: <PlaceholderIcon />, label: 'Label', shortcut: '⌘C', chevron: true, onClick: () => setOpen(null) },
  ]
  const androidItemsAr = [
    { icon: <PlaceholderIcon />, label: 'تسمية', shortcut: '⌘C', chevron: true, onClick: () => setOpen(null) },
    { icon: <PlaceholderIcon />, label: 'تسمية', shortcut: '⌘C', chevron: true, onClick: () => setOpen(null) },
    { icon: <PlaceholderIcon />, label: 'تسمية', shortcut: '⌘C', chevron: true, onClick: () => setOpen(null) },
    { icon: <PlaceholderIcon />, label: 'تسمية', shortcut: '⌘C', chevron: true, onClick: () => setOpen(null) },
  ]

  return (
    <>
      <Row label="iOS" bold>
        <td>
          <button onClick={() => setOpen('i-en')}>Open</button>
          {open === 'i-en' && (
            <ActionSheet
              platform="ios"
              title="A Short Title Is Best"
              description="A description should be a short, complete sentence."
              actions={iosActions}
              onClose={() => setOpen(null)}
            />
          )}
        </td>
        <td>
          <button onClick={() => setOpen('i-ar')}>افتح</button>
          {open === 'i-ar' && (
            <ActionSheet
              platform="ios"
              dir="rtl"
              title="العنوان المختصر هو الأفضل"
              description="ينبغي أن يكون الوصف جملة قصيرة وكاملة."
              actions={iosActionsAr}
              onClose={() => setOpen(null)}
            />
          )}
        </td>
      </Row>
      <Row label="Android" bold>
        <td>
          <button onClick={() => setOpen('a-en')}>Open</button>
          {open === 'a-en' && (
            <ActionSheet
              platform="android"
              items={androidItems}
              onClose={() => setOpen(null)}
            />
          )}
        </td>
        <td>
          <button onClick={() => setOpen('a-ar')}>افتح</button>
          {open === 'a-ar' && (
            <ActionSheet
              platform="android"
              dir="rtl"
              items={androidItemsAr}
              onClose={() => setOpen(null)}
            />
          )}
        </td>
      </Row>
    </>
  )
}

function DialogRows() {
  const [open, setOpen] = useState(null)
  const close = () => setOpen(null)

  return (
    <>
      <Row label="Android" bold>
        <td>
          <button onClick={() => setOpen('a-en')}>Open</button>
          {open === 'a-en' && (
            <Dialog
              platform="android"
              icon={<PlaceholderIcon />}
              title="A short title is best"
              description="A dialog is a type of modal window that appears in front of app content to provide critical information, or prompt for a decision to be made."
              action1={{ label: 'Action 1', onClick: close }}
              action2={{ label: 'Action 2', onClick: close }}
              onClose={close}
            />
          )}
        </td>
        <td>
          <button onClick={() => setOpen('a-ar')}>افتح</button>
          {open === 'a-ar' && (
            <Dialog
              platform="android"
              dir="rtl"
              icon={<PlaceholderIcon />}
              title="العنوان المختصر هو الأفضل"
              description="الحوار هو نوع من النوافذ المنبثقة التي تظهر أمام محتوى التطبيق لتقديم معلومات مهمة، أو لحث المستخدم على اتخاذ قرار."
              action1={{ label: 'الإجراء 1', onClick: close }}
              action2={{ label: 'الإجراء 2', onClick: close }}
              onClose={close}
            />
          )}
        </td>
      </Row>
      <Row label="iOS — stacked" bold>
        <td>
          <button onClick={() => setOpen('i-en')}>Open</button>
          {open === 'i-en' && (
            <Dialog
              platform="ios"
              title="A Short Title Is Best"
              description="A description should be a short, complete sentence."
              primaryAction={{ label: 'Primary', onClick: close }}
              destructiveAction={{ label: 'Destructive', onClick: close }}
              secondaryAction={{ label: 'Secondary', onClick: close }}
              onClose={close}
            />
          )}
        </td>
        <td>
          <button onClick={() => setOpen('i-ar')}>افتح</button>
          {open === 'i-ar' && (
            <Dialog
              platform="ios"
              dir="rtl"
              title="العنوان المختصر هو الأفضل"
              description="ينبغي أن يكون الوصف جملة قصيرة وكاملة."
              primaryAction={{ label: 'أساسي', onClick: close }}
              destructiveAction={{ label: 'مُدَمِّر', onClick: close }}
              secondaryAction={{ label: 'ثانوي', onClick: close }}
              onClose={close}
            />
          )}
        </td>
      </Row>
      <Row label="iOS — side-by-side">
        <td>
          <button onClick={() => setOpen('i-sbs-en')}>Open</button>
          {open === 'i-sbs-en' && (
            <Dialog
              platform="ios"
              layout="side-by-side"
              title="A Short Title Is Best"
              description="A description should be a short, complete sentence."
              secondaryAction={{ label: 'Secondary', onClick: close }}
              primaryAction={{ label: 'Primary', onClick: close }}
              onClose={close}
            />
          )}
        </td>
        <td>
          <button onClick={() => setOpen('i-sbs-ar')}>افتح</button>
          {open === 'i-sbs-ar' && (
            <Dialog
              platform="ios"
              dir="rtl"
              layout="side-by-side"
              title="العنوان المختصر هو الأفضل"
              description="ينبغي أن يكون الوصف جملة قصيرة وكاملة."
              secondaryAction={{ label: 'ثانوي', onClick: close }}
              primaryAction={{ label: 'أساسي', onClick: close }}
              onClose={close}
            />
          )}
        </td>
      </Row>
    </>
  )
}

const SheetMapIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M3 7l6-3 6 3 6-3v13l-6 3-6-3-6 3V7z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    <path d="M9 4v13M15 7v13" stroke="currentColor" strokeWidth="1.5" />
  </svg>
)

// 393×852 mobile preview screen — the BottomSheet is `position: absolute`, so it is
// contained by this positioned, clipped screen instead of escaping to the viewport.
function BottomSheetPreview() {
  const [open, setOpen] = useState(false)
  const [platform, setPlatform] = useState('ios')
  const [size, setSize] = useState('medium')

  return (
    <div style={{ display: 'flex', gap: 24, alignItems: 'flex-start', padding: '24px 0', flexWrap: 'wrap' }}>
      {/* controls */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12, minWidth: 160 }}>
        <label style={{ display: 'flex', flexDirection: 'column', gap: 4, fontSize: 13, color: 'var(--text-base-subtext)' }}>
          Platform
          <select value={platform} onChange={(e) => setPlatform(e.target.value)}>
            <option value="ios">iOS</option>
            <option value="android">Android</option>
          </select>
        </label>
        <label style={{ display: 'flex', flexDirection: 'column', gap: 4, fontSize: 13, color: 'var(--text-base-subtext)' }}>
          Size
          <select value={size} onChange={(e) => setSize(e.target.value)}>
            <option value="small">small</option>
            <option value="medium">medium</option>
            <option value="fullscreen">fullscreen</option>
          </select>
        </label>
      </div>

      {/* phone screen */}
      <div
        style={{
          position: 'relative',
          width: 393,
          height: 852,
          flexShrink: 0,
          overflow: 'hidden',
          borderRadius: 40,
          border: '1px solid var(--border-base-default)',
          background: 'var(--background-base-subtle)',
          boxShadow: 'var(--elevation-raised)',
        }}
      >
        {/* screen content */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
          <Button variant="secondary" size="medium" label="Open sheet" onClick={() => setOpen(true)} />
        </div>

        <BottomSheet
          open={open}
          size={size}
          platform={platform}
          title="Title"
          subtitle="Subtitle"
          onClose={() => setOpen(false)}
          onAction={() => setOpen(false)}
          actionIcon={<SheetMapIcon />}
        >
          <div style={{ padding: 16, color: 'var(--text-base-subtext)', fontSize: 14 }}>Content slot</div>
        </BottomSheet>
      </div>
    </div>
  )
}

function ExpanderDemo({ dir, initialExpanded = false }) {
  const [expanded, setExpanded] = useState(initialExpanded)
  return <Expander expanded={expanded} onChange={setExpanded} dir={dir} />
}

const ACCORDION_BODY = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'

function SnackbarRows() {
  const [show, setShow] = useState(false)
  const [showAr, setShowAr] = useState(false)

  return (
    <Row label="Default">
      <td>
        <button onClick={() => setShow(true)}>Show snackbar</button>
        <Snackbar message="Single-line message" show={show} onClose={() => setShow(false)} />
      </td>
      <td>
        <button onClick={() => setShowAr(true)}>Show snackbar</button>
        <Snackbar message="رسالة قصيرة" show={showAr} onClose={() => setShowAr(false)} dir="rtl" />
      </td>
    </Row>
  )
}

// chaletFilled.svg — line-icons (filled; TabBar uses filled icons)
const HomeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" style={{ width: '100%', height: '100%' }}>
    <g transform="translate(3.9864 3.0936)">
      <path d="M7.84082 0.0804782C8.00416 -0.0252819 8.21418 -0.02703 8.37891 0.076572L16.0791 4.92716C16.224 5.01847 16.3121 5.17776 16.3125 5.34903L16.332 17.101C16.3319 17.5276 15.9531 17.9067 15.5264 17.9067H10.3574C10.3315 17.9067 10.3107 17.8857 10.3105 17.8598L10.291 11.7973C10.29 11.5218 10.0665 11.2992 9.79102 11.2992H6.57129C6.29468 11.2992 6.07065 11.5236 6.07129 11.8002L6.08984 17.8598C6.08972 17.8856 6.06884 17.9066 6.04297 17.9067H0.874024C0.399835 17.9067 0.0205083 17.5272 0.0205083 17.0531L4.69321e-07 5.44083C-0.000232438 5.27122 0.0862365 5.11324 0.228516 5.02091L7.84082 0.0804782Z" fill="currentColor" />
    </g>
  </svg>
)

// compassFilled.svg — line-icons (filled)
const ExploreIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" style={{ width: '100%', height: '100%' }}>
    <g transform="translate(2.5 2.5)">
      <path fillRule="evenodd" clipRule="evenodd" d="M9.5 0C4.25329 0 0 4.25329 0 9.5C0 14.7467 4.25329 19 9.5 19C14.7467 19 19 14.7467 19 9.5C19 4.25329 14.7467 0 9.5 0ZM14.1799 5.47112C14.2657 5.28137 14.2249 5.05832 14.0775 4.91123C13.9301 4.76414 13.7069 4.7238 13.5173 4.80998L7.70157 7.45382C7.58811 7.5054 7.49801 7.59748 7.44892 7.71203L5.06242 13.2805C4.98188 13.4684 5.02386 13.6864 5.16843 13.831C5.313 13.9756 5.53102 14.0176 5.71894 13.937L11.2874 11.5506C11.4023 11.5014 11.4946 11.4109 11.5461 11.297L14.1799 5.47112Z" fill="currentColor" />
    </g>
  </svg>
)

// calendarFilled.svg — line-icons (filled)
const TripsIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" style={{ width: '100%', height: '100%' }}>
    <g transform="translate(3.25 2.5)">
      <path fillRule="evenodd" clipRule="evenodd" d="M13.25 0C13.5261 0 13.75 0.223858 13.75 0.5V1.5H16.25C16.9404 1.5 17.5 2.05964 17.5 2.75V17.75C17.5 18.4404 16.9404 19 16.25 19H1.25C0.559644 19 0 18.4404 0 17.75V2.75C0 2.05964 0.559644 1.5 1.25 1.5H3.75V0.5C3.75 0.223858 3.97386 0 4.25 0C4.52614 0 4.75 0.223858 4.75 0.5V1.5H12.75V0.5C12.75 0.223858 12.9739 0 13.25 0ZM16.5 2.75V6H1V2.75C1 2.61193 1.11193 2.5 1.25 2.5H3.75V3.5C3.75 3.77614 3.97386 4 4.25 4C4.52614 4 4.75 3.77614 4.75 3.5V2.5H12.75V3.5C12.75 3.77614 12.9739 4 13.25 4C13.5261 4 13.75 3.77614 13.75 3.5V2.5H16.25C16.3881 2.5 16.5 2.61193 16.5 2.75Z" fill="currentColor" />
    </g>
  </svg>
)

// discountFilled.svg — line-icons (filled)
const OffersIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" style={{ width: '100%', height: '100%' }}>
    <g transform="translate(1.75 1.75)">
      <path fillRule="evenodd" clipRule="evenodd" d="M9.15393 0.342761C9.46759 0.149021 9.83393 0 10.25 0C10.6661 0 11.0325 0.149024 11.3461 0.342766C11.6564 0.534431 11.9418 0.786834 12.1984 1.02772C12.286 1.10997 12.3692 1.18972 12.4499 1.26714C12.6181 1.42848 12.7758 1.57977 12.9419 1.72291C13.1828 1.93053 13.3971 2.08018 13.5995 2.16394C13.7892 2.24243 14.0369 2.28458 14.351 2.30497C14.5575 2.31838 14.7616 2.3214 14.9801 2.32463H14.9801C15.1028 2.32644 15.2301 2.32833 15.365 2.33215C16.0395 2.3513 16.9089 2.4132 17.4978 3.00216C18.0868 3.59111 18.1487 4.46047 18.1679 5.13501C18.1717 5.26987 18.1736 5.39723 18.1754 5.51995C18.1786 5.73848 18.1816 5.94253 18.195 6.14904C18.2154 6.46315 18.2576 6.71078 18.3361 6.90048C18.4198 7.10293 18.5695 7.31718 18.7771 7.55813C18.9202 7.72425 19.0717 7.88215 19.233 8.05032C19.3104 8.13098 19.3901 8.21405 19.4723 8.30162C19.7132 8.5582 19.9656 8.84363 20.1572 9.15393C20.351 9.46759 20.5 9.83393 20.5 10.25C20.5 10.6661 20.351 11.0325 20.1572 11.3461C19.9656 11.6564 19.7132 11.9418 19.4723 12.1984C19.39 12.286 19.3103 12.3692 19.2329 12.4499C19.0715 12.618 18.9202 12.7758 18.7771 12.9419C18.5695 13.1828 18.4198 13.3971 18.3361 13.5995C18.2576 13.7892 18.2154 14.0369 18.195 14.351C18.1816 14.5575 18.1786 14.7616 18.1754 14.9801V14.9801V14.9801C18.1736 15.1028 18.1717 15.2301 18.1678 15.365C18.1487 16.0395 18.0868 16.9089 17.4978 17.4978C16.9089 18.0868 16.0395 18.1487 15.365 18.1679C15.2301 18.1717 15.1028 18.1736 14.98 18.1754C14.7615 18.1786 14.5575 18.1816 14.351 18.195C14.0369 18.2154 13.7892 18.2576 13.5995 18.3361C13.3971 18.4198 13.1828 18.5695 12.9419 18.7771C12.7757 18.9202 12.618 19.0716 12.4498 19.2329C12.3691 19.3103 12.286 19.39 12.1984 19.4723C11.9418 19.7132 11.6564 19.9656 11.3461 20.1572C11.0324 20.351 10.6661 20.5 10.25 20.5C9.83386 20.5 9.46752 20.351 9.15387 20.1572C8.84358 19.9656 8.55815 19.7132 8.30157 19.4723C8.21396 19.39 8.13085 19.3103 8.05015 19.2329C7.88196 19.0715 7.72424 18.9202 7.5581 18.7771C7.31715 18.5695 7.10291 18.4198 6.90048 18.3361C6.71077 18.2576 6.46314 18.2154 6.14904 18.195C5.94254 18.1816 5.73844 18.1786 5.51993 18.1754H5.5199H5.51987C5.39715 18.1736 5.26987 18.1717 5.13501 18.1678C4.46047 18.1487 3.59111 18.0868 3.00216 17.4978C2.4132 16.9089 2.35129 16.0395 2.33215 15.365C2.32832 15.2301 2.32644 15.1028 2.32462 14.9801C2.32139 14.7616 2.31837 14.5575 2.30497 14.351C2.28458 14.0369 2.24242 13.7892 2.16393 13.5995C2.08017 13.3971 1.93052 13.1828 1.7229 12.9419C1.57978 12.7758 1.42842 12.618 1.26711 12.4498C1.18969 12.3691 1.10996 12.286 1.02771 12.1984C0.786826 11.9418 0.534425 11.6564 0.342761 11.3461C0.149021 11.0324 0 10.6661 0 10.25C0 9.83386 0.149024 9.46752 0.342766 9.15387C0.534431 8.84358 0.786834 8.55815 1.02772 8.30157C1.10997 8.21397 1.1897 8.13086 1.26711 8.05016C1.42846 7.88196 1.57976 7.72424 1.72291 7.5581C1.93053 7.31715 2.08018 7.10291 2.16394 6.90048C2.24243 6.71077 2.28458 6.46314 2.30497 6.14904C2.31838 5.9425 2.3214 5.73843 2.32463 5.51988V5.51987C2.32644 5.39715 2.32833 5.26987 2.33215 5.13501C2.3513 4.46047 2.4132 3.59111 3.00216 3.00216C3.59111 2.4132 4.46047 2.35129 5.13501 2.33215C5.26988 2.32832 5.39719 2.32644 5.51991 2.32462H5.51992H5.51992C5.73846 2.32139 5.94252 2.31837 6.14904 2.30497C6.46315 2.28458 6.71078 2.24242 6.90049 2.16393C7.10293 2.08017 7.31718 1.93052 7.55813 1.7229C7.72427 1.57976 7.882 1.42845 8.0502 1.2671C8.1309 1.18969 8.21401 1.10996 8.30162 1.02771C8.5582 0.786827 8.84363 0.534425 9.15393 0.342761ZM5.25 7.25C5.25 6.14543 6.14543 5.25 7.25 5.25C8.35457 5.25 9.25 6.14543 9.25 7.25C9.25 8.35457 8.35457 9.25 7.25 9.25C6.14543 9.25 5.25 8.35457 5.25 7.25ZM7.25 6.25C6.69772 6.25 6.25 6.69772 6.25 7.25C6.25 7.80228 6.69772 8.25 7.25 8.25C7.80228 8.25 8.25 7.80228 8.25 7.25C8.25 6.69772 7.80228 6.25 7.25 6.25ZM14.3536 6.14645C14.5488 6.34171 14.5488 6.65829 14.3536 6.85355L6.85355 14.3536C6.65829 14.5488 6.34171 14.5488 6.14645 14.3536C5.95118 14.1583 5.95118 13.8417 6.14645 13.6464L13.6464 6.14645C13.8417 5.95118 14.1583 5.95118 14.3536 6.14645ZM11.25 13.25C11.25 12.1454 12.1454 11.25 13.25 11.25C14.3546 11.25 15.25 12.1454 15.25 13.25C15.25 14.3546 14.3546 15.25 13.25 15.25C12.1454 15.25 11.25 14.3546 11.25 13.25ZM13.25 12.25C12.6977 12.25 12.25 12.6977 12.25 13.25C12.25 13.8023 12.6977 14.25 13.25 14.25C13.8023 14.25 14.25 13.8023 14.25 13.25C14.25 12.6977 13.8023 12.25 13.25 12.25Z" fill="currentColor" />
    </g>
  </svg>
)

// userCircleFilled.svg — line-icons (filled)
const ProfileIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" style={{ width: '100%', height: '100%' }}>
    <g transform="translate(2.5 2.5)">
      <path fillRule="evenodd" clipRule="evenodd" d="M0 9.5C0 4.25329 4.25329 0 9.5 0C14.7467 0 19 4.25329 19 9.5C19 14.7467 14.7467 19 9.5 19C4.25329 19 0 14.7467 0 9.5ZM9.5 5.5C7.70507 5.5 6.25 6.95507 6.25 8.75C6.25 10.5449 7.70507 12 9.5 12C11.2949 12 12.75 10.5449 12.75 8.75C12.75 6.95507 11.2949 5.5 9.5 5.5ZM12.7689 13.9225C13.6416 14.4577 14.3677 15.1979 14.8858 16.0763C13.4195 17.2785 11.544 18 9.49996 18C7.45596 18 5.58047 17.2785 4.11426 16.0764C4.63229 15.198 5.35847 14.4578 6.23114 13.9226C7.21477 13.3193 8.34615 13 9.50003 13C10.6539 13 11.7853 13.3193 12.7689 13.9225Z" fill="currentColor" />
    </g>
  </svg>
)

const TAB_ITEMS_EN = [
  { label: 'Home',       icon: <HomeIcon />    },
  { label: 'Explore',    icon: <ExploreIcon /> },
  { label: 'My Trips',   icon: <TripsIcon />   },
  { label: 'Top offers', icon: <OffersIcon />  },
  { label: 'Profile',    icon: <ProfileIcon /> },
]

const TAB_ITEMS_AR = [
  { label: 'الرئيسية',    icon: <HomeIcon />    },
  { label: 'استكشاف',    icon: <ExploreIcon /> },
  { label: 'رحلاتي',     icon: <TripsIcon />   },
  { label: 'أفضل عروض', icon: <OffersIcon />  },
  { label: 'الملف',      icon: <ProfileIcon /> },
]

function TabBarRows() {
  const [iosTab, setIosTab] = useState(0)
  const [androidTab, setAndroidTab] = useState(0)
  const [iosTabAr, setIosTabAr] = useState(0)
  const [androidTabAr, setAndroidTabAr] = useState(0)

  return (
    <>
      <Row label="iOS" bold>
        <td style={{ padding: 0, width: 375 }}>
          <TabBar items={TAB_ITEMS_EN} value={iosTab} onChange={setIosTab} platform="ios" />
        </td>
        <td style={{ padding: 0, width: 375 }}>
          <TabBar items={TAB_ITEMS_AR} value={iosTabAr} onChange={setIosTabAr} platform="ios" dir="rtl" />
        </td>
      </Row>
      <Row label="Android" bold>
        <td style={{ padding: 0, width: 375 }}>
          <TabBar items={TAB_ITEMS_EN} value={androidTab} onChange={setAndroidTab} platform="android" />
        </td>
        <td style={{ padding: 0, width: 375 }}>
          <TabBar items={TAB_ITEMS_AR} value={androidTabAr} onChange={setAndroidTabAr} platform="android" dir="rtl" />
        </td>
      </Row>
    </>
  )
}

// Demonstrates platform inheritance: the TabBars below carry NO platform prop —
// each column's <DesignSystemProvider> supplies it. Same component, set once.
function ProviderRows() {
  const [iosTab, setIosTab] = useState(0)
  const [androidTab, setAndroidTab] = useState(0)

  return (
    <Row label="Inherited platform (no prop)" bold>
      <td style={{ padding: 0, width: 375 }}>
        <DesignSystemProvider platform="ios">
          <TabBar items={TAB_ITEMS_EN} value={iosTab} onChange={setIosTab} />
        </DesignSystemProvider>
      </td>
      <td style={{ padding: 0, width: 375 }}>
        <DesignSystemProvider platform="android">
          <TabBar items={TAB_ITEMS_EN} value={androidTab} onChange={setAndroidTab} />
        </DesignSystemProvider>
      </td>
    </Row>
  )
}

function ToggleRows() {
  const [on, setOn] = useState(false)
  const [onAr, setOnAr] = useState(false)
  const [andOn, setAndOn] = useState(false)
  const [andOnAr, setAndOnAr] = useState(false)

  return (
    <>
      <Row label="iOS · Active" bold>
        <td><Toggle label="Label" checked={on} onChange={e => setOn(e.target.checked)} /></td>
        <td><Toggle label="ملصق" checked={onAr} onChange={e => setOnAr(e.target.checked)} dir="rtl" /></td>
      </Row>
      <Row label="iOS · Disabled">
        <td><Toggle state="disabled" label="Label" /></td>
        <td><Toggle state="disabled" label="ملصق" dir="rtl" /></td>
      </Row>
      <Row label="iOS · Disabled / On">
        <td><Toggle state="disabled" label="Label" checked /></td>
        <td><Toggle state="disabled" label="ملصق" checked dir="rtl" /></td>
      </Row>
      <Row label="Android · Active" bold>
        <td><Toggle platform="android" label="Label" checked={andOn} onChange={e => setAndOn(e.target.checked)} /></td>
        <td><Toggle platform="android" label="ملصق" checked={andOnAr} onChange={e => setAndOnAr(e.target.checked)} dir="rtl" /></td>
      </Row>
      <Row label="Android · Disabled">
        <td><Toggle platform="android" state="disabled" label="Label" /></td>
        <td><Toggle platform="android" state="disabled" label="ملصق" dir="rtl" /></td>
      </Row>
      <Row label="Android · Disabled / On">
        <td><Toggle platform="android" state="disabled" label="Label" checked /></td>
        <td><Toggle platform="android" state="disabled" label="ملصق" checked dir="rtl" /></td>
      </Row>
      <Row label="Skeleton" bold>
        <td><Toggle state="skeleton" /></td>
        <td><Toggle platform="android" state="skeleton" dir="rtl" /></td>
      </Row>
    </>
  )
}

function RadioRows() {
  const [checked, setChecked] = useState(false)

  return (
    <>
      <Row label="Enabled" bold>
        <td><Radio name="r-demo" checked={checked} onChange={e => setChecked(e.target.checked)} aria-label="Select" /></td>
        <td><Radio name="r-demo-ar" checked={checked} onChange={e => setChecked(e.target.checked)} aria-label="Select" /></td>
      </Row>
      <Row label="Enabled / Selected">
        <td><Radio checked aria-label="Selected" /></td>
        <td><Radio checked aria-label="Selected" /></td>
      </Row>
      <Row label="Error" bold>
        <td><Radio error aria-label="Error" /></td>
        <td><Radio error aria-label="Error" /></td>
      </Row>
      <Row label="Error / Selected">
        <td><Radio error checked aria-label="Error selected" /></td>
        <td><Radio error checked aria-label="Error selected" /></td>
      </Row>
      <Row label="Disabled" bold>
        <td><Radio disabled aria-label="Disabled" /></td>
        <td><Radio disabled aria-label="Disabled" /></td>
      </Row>
      <Row label="Disabled / Selected">
        <td><Radio disabled checked aria-label="Disabled selected" /></td>
        <td><Radio disabled checked aria-label="Disabled selected" /></td>
      </Row>
      <Row label="Skeleton" bold>
        <td><Radio skeleton /></td>
        <td><Radio skeleton /></td>
      </Row>
    </>
  )
}

function CheckboxRows() {
  const [checked, setChecked] = useState(false)

  return (
    <>
      <Row label="Enabled" bold>
        <td><Checkbox checked={checked} onChange={e => setChecked(e.target.checked)} aria-label="Toggle" /></td>
        <td><Checkbox checked={checked} onChange={e => setChecked(e.target.checked)} aria-label="Toggle" /></td>
      </Row>
      <Row label="Enabled / Checked">
        <td><Checkbox checked aria-label="Checked" /></td>
        <td><Checkbox checked aria-label="Checked" /></td>
      </Row>
      <Row label="Error" bold>
        <td><Checkbox error aria-label="Error" /></td>
        <td><Checkbox error aria-label="Error" /></td>
      </Row>
      <Row label="Error / Checked">
        <td><Checkbox error checked aria-label="Error checked" /></td>
        <td><Checkbox error checked aria-label="Error checked" /></td>
      </Row>
      <Row label="Disabled" bold>
        <td><Checkbox disabled aria-label="Disabled" /></td>
        <td><Checkbox disabled aria-label="Disabled" /></td>
      </Row>
      <Row label="Disabled / Checked">
        <td><Checkbox disabled checked aria-label="Disabled checked" /></td>
        <td><Checkbox disabled checked aria-label="Disabled checked" /></td>
      </Row>
      <Row label="Skeleton" bold>
        <td><Checkbox skeleton /></td>
        <td><Checkbox skeleton /></td>
      </Row>
    </>
  )
}

function StepperRows() {
  const [en, setEn] = useState(0)
  const [ar, setAr] = useState(0)

  return (
    <>
      <Row label="Default" bold>
        <td><Stepper value={en} min={0} onChange={setEn} /></td>
        <td><Stepper value={ar} min={0} onChange={setAr} dir="rtl" /></td>
      </Row>
    </>
  )
}

function SegmentedControlRows() {
  const enItems2 = ['Label', 'Label']
  const arItems2 = ['ملصق', 'ملصق']
  const enItems3 = ['Label', 'Label', 'Label']
  const arItems3 = ['ملصق', 'ملصق', 'ملصق']
  const enItems4 = ['Label', 'Label', 'Label', 'Label']
  const arItems4 = ['ملصق', 'ملصق', 'ملصق', 'ملصق']

  const [sel2, setSel2] = useState(0)
  const [sel2ar, setSel2ar] = useState(0)
  const [sel3, setSel3] = useState(0)
  const [sel3ar, setSel3ar] = useState(0)
  const [sel4, setSel4] = useState(0)
  const [sel4ar, setSel4ar] = useState(0)

  const [aSel2, setASel2] = useState(0)
  const [aSel2ar, setASel2ar] = useState(0)
  const [aSel3, setASel3] = useState(0)
  const [aSel3ar, setASel3ar] = useState(0)
  const [aSel4, setASel4] = useState(0)
  const [aSel4ar, setASel4ar] = useState(0)

  return (
    <>
      <Row label="iOS · 2 Segments" bold>
        <td><SegmentedControl items={enItems2} value={sel2} onChange={setSel2} /></td>
        <td><SegmentedControl items={arItems2} value={sel2ar} onChange={setSel2ar} dir="rtl" /></td>
      </Row>
      <Row label="iOS · 3 Segments" bold>
        <td><SegmentedControl items={enItems3} value={sel3} onChange={setSel3} /></td>
        <td><SegmentedControl items={arItems3} value={sel3ar} onChange={setSel3ar} dir="rtl" /></td>
      </Row>
      <Row label="iOS · 4 Segments" bold>
        <td><SegmentedControl items={enItems4} value={sel4} onChange={setSel4} /></td>
        <td><SegmentedControl items={arItems4} value={sel4ar} onChange={setSel4ar} dir="rtl" /></td>
      </Row>
      <Row label="Android · 2 Segments" bold>
        <td><SegmentedControl platform="android" items={enItems2} value={aSel2} onChange={setASel2} /></td>
        <td><SegmentedControl platform="android" items={arItems2} value={aSel2ar} onChange={setASel2ar} dir="rtl" /></td>
      </Row>
      <Row label="Android · 3 Segments" bold>
        <td><SegmentedControl platform="android" items={enItems3} value={aSel3} onChange={setASel3} /></td>
        <td><SegmentedControl platform="android" items={arItems3} value={aSel3ar} onChange={setASel3ar} dir="rtl" /></td>
      </Row>
      <Row label="Android · 4 Segments" bold>
        <td><SegmentedControl platform="android" items={enItems4} value={aSel4} onChange={setASel4} /></td>
        <td><SegmentedControl platform="android" items={arItems4} value={aSel4ar} onChange={setASel4ar} dir="rtl" /></td>
      </Row>
    </>
  )
}

function SliderRows() {
  const [val, setVal] = useState(25)
  const [tickVal, setTickVal] = useState(50)

  return (
    <>
      <Row label="Default" bold>
        <td style={{ width: 280 }}><Slider value={val} onChange={setVal} /></td>
      </Row>
      <Row label="With ticks">
        <td><Slider value={tickVal} onChange={setTickVal} ticks={5} /></td>
      </Row>
    </>
  )
}

function NavbarShowcase() {
  const [seg, setSeg] = useState(0)
  const chips = [
    { icon: <PlaceholderIcon /> },
    { icon: <PlaceholderIcon /> },
    { icon: <PlaceholderIcon />, label: 'Label', dropdown: true },
    { icon: <PlaceholderIcon />, label: 'Label', dropdown: true },
    { label: 'Label', dropdown: true },
  ]
  const toolbar = {
    title: 'Title',
    subtitle: 'Subtitle',
    onBack: () => {},
    rightActions: [
      { icon: <PlaceholderIcon />, onClick: () => {}, 'aria-label': 'Action 1' },
      { icon: <PlaceholderIcon />, onClick: () => {}, 'aria-label': 'Action 2' },
    ],
  }
  const segmentedControl = { items: ['Label', 'Label'], value: seg, onChange: setSeg }

  // surfaces render over imagery — give gradient/overlay a backdrop to read against
  const onImage = { background: 'linear-gradient(120deg, #0BA0B7, #875BF7)', padding: '0 0 32px' }
  // iOS is a translucent glass surface, so even the default needs a colourful backdrop to read
  const iosBg = { background: 'linear-gradient(120deg, #0BA0B7, #875BF7)' }

  return (
    <div className="spec__scroll">
      <table className="spec__table">
        <thead>
          <tr><th /><th>iOS</th><th>Android</th></tr>
        </thead>
        <tbody>
          <Row label="Default · full" bold>
            <td style={iosBg}><Navbar platform="ios" toolbar={toolbar} chips={chips} segmentedControl={segmentedControl} /></td>
            <td><Navbar platform="android" toolbar={toolbar} chips={chips} segmentedControl={segmentedControl} /></td>
          </Row>
          <Row label="Toolbar only">
            <td style={iosBg}><Navbar platform="ios" toolbar={toolbar} /></td>
            <td><Navbar platform="android" toolbar={toolbar} /></td>
          </Row>
          <Row label="No back / no actions">
            <td style={iosBg}><Navbar platform="ios" toolbar={{ title: 'Title', subtitle: 'Subtitle' }} /></td>
            <td><Navbar platform="android" toolbar={{ title: 'Title', subtitle: 'Subtitle' }} /></td>
          </Row>
          <Row label="Gradient (Android only)" bold>
            <td style={{ color: 'var(--text-base-subtext)', fontSize: 12 }}>iOS always uses the default glass surface</td>
            <td style={onImage}><Navbar platform="android" surface="gradient" toolbar={toolbar} /></td>
          </Row>
          <Row label="Overlay (Android only)" bold>
            <td style={{ color: 'var(--text-base-subtext)', fontSize: 12 }}>iOS always uses the default glass surface</td>
            <td style={onImage}><Navbar platform="android" surface="overlay" toolbar={toolbar} /></td>
          </Row>
          <Row label="RTL · full">
            <td style={iosBg}><Navbar platform="ios" dir="rtl" toolbar={{ ...toolbar, title: 'عنوان', subtitle: 'عنوان فرعي' }} chips={chips} segmentedControl={{ ...segmentedControl, items: ['ملصق', 'ملصق'] }} /></td>
            <td><Navbar platform="android" dir="rtl" toolbar={{ ...toolbar, title: 'عنوان', subtitle: 'عنوان فرعي' }} chips={chips} segmentedControl={{ ...segmentedControl, items: ['ملصق', 'ملصق'] }} /></td>
          </Row>
        </tbody>
      </table>

      <p className="spec__note" style={{ margin: '24px 0 8px', fontWeight: 600 }}>iOS toolbar variants</p>
      <table className="spec__table">
        <thead>
          <tr><th /><th>EN</th><th>AR</th></tr>
        </thead>
        <tbody>
          <NavbarVariantRows platform="ios" />
        </tbody>
      </table>

      <p className="spec__note" style={{ margin: '24px 0 8px', fontWeight: 600 }}>Android toolbar variants (surface=default only)</p>
      <table className="spec__table">
        <thead>
          <tr><th /><th>EN</th><th>AR</th></tr>
        </thead>
        <tbody>
          <NavbarVariantRows platform="android" />
        </tbody>
      </table>
    </div>
  )
}

function NavbarVariantRows({ platform = 'ios' }) {
  const [a, setA] = useState(0)
  const [b, setB] = useState(0)
  const [enS, setEnS] = useState('')
  const [arS, setArS] = useState('')
  // iOS glass needs a colourful backdrop to read against; Android default is opaque
  const bg = platform === 'ios' ? { background: 'linear-gradient(120deg, #0BA0B7, #875BF7)' } : undefined

  const flights = (ar) => ({
    variant: 'flights', onBack: () => {},
    origin: 'DXB', destination: 'JED', tripType: ar ? 'ذهاب وعودة' : 'Round-trip',
    travelers: 2, cabin: ar ? 'الأعمال' : 'Premium Economy', dates: ar ? '١١ - ٢٨ أغسطس' : '11 - 28 Aug',
    onItinerary: () => {}, onCurrency: () => {},
  })
  const stays = (ar) => ({
    variant: 'stays', onBack: () => {},
    location: ar ? 'دبي' : 'Dubai', guests: 9, dates: ar ? '١١ - ٢٨ أغسطس' : '11 Aug - 28 Aug',
    onItinerary: () => {}, onCurrency: () => {}, onSearch: () => {},
  })
  const action = { icon: <PlaceholderIcon />, onClick: () => {}, 'aria-label': 'a' }

  return (
    <>
      <Row label="Default" bold>
        <td style={bg}><Navbar platform={platform} toolbar={{ variant: 'default', title: 'Title', subtitle: 'Subtitle', onBack: () => {}, rightActions: [action] }} /></td>
        <td style={bg}><Navbar platform={platform} dir="rtl" toolbar={{ variant: 'default', title: 'عنوان', subtitle: 'عنوان فرعي', onBack: () => {}, rightActions: [action] }} /></td>
      </Row>
      <Row label="Large" bold>
        <td style={bg}><Navbar platform={platform} toolbar={{ variant: 'large', title: 'Title', onBack: () => {}, rightActions: [action] }} /></td>
        <td style={bg}><Navbar platform={platform} dir="rtl" toolbar={{ variant: 'large', title: 'عنوان', onBack: () => {}, rightActions: [action] }} /></td>
      </Row>
      <Row label="Flights" bold>
        <td style={bg}><Navbar platform={platform} toolbar={flights(false)} /></td>
        <td style={bg}><Navbar platform={platform} dir="rtl" toolbar={flights(true)} /></td>
      </Row>
      <Row label="Stays" bold>
        <td style={bg}><Navbar platform={platform} toolbar={stays(false)} /></td>
        <td style={bg}><Navbar platform={platform} dir="rtl" toolbar={stays(true)} /></td>
      </Row>
      <Row label="Segmented control" bold>
        <td style={bg}><Navbar platform={platform} toolbar={{ variant: 'segmented-control', onBack: () => {}, onClose: () => {}, rightActions: [action], segmentedControl: { items: ['Label', 'Label'], value: a, onChange: setA } }} /></td>
        <td style={bg}><Navbar platform={platform} dir="rtl" toolbar={{ variant: 'segmented-control', onBack: () => {}, onClose: () => {}, rightActions: [action], segmentedControl: { items: ['ملصق', 'ملصق'], value: b, onChange: setB } }} /></td>
      </Row>
      <Row label="Search" bold>
        <td style={bg}><Navbar platform={platform} toolbar={{ variant: 'search', onClose: () => {}, search: { value: enS, onChange: e => setEnS(e.target.value), onClear: () => setEnS(''), placeholder: 'Search' } }} /></td>
        <td style={bg}><Navbar platform={platform} dir="rtl" toolbar={{ variant: 'search', onClose: () => {}, search: { value: arS, onChange: e => setArS(e.target.value), onClear: () => setArS(''), placeholder: 'بحث' } }} /></td>
      </Row>
    </>
  )
}

function SearchRows({ platform }) {
  const [enVal, setEnVal] = useState('')
  const [arVal, setArVal] = useState('')
  const [enPop, setEnPop] = useState('Search Term')
  const [arPop, setArPop] = useState('مصطلح البحث')
  const isAndroid = platform === 'android'

  return (
    <>
      <Row label="Default" bold>
        <td style={{ width: 240 }}>
          <Search platform={platform} value={enVal} onChange={e => setEnVal(e.target.value)} onClear={() => setEnVal('')} onClose={() => {}} />
        </td>
        <td style={{ width: 240 }}>
          <Search platform={platform} value={arVal} onChange={e => setArVal(e.target.value)} onClear={() => setArVal('')} onClose={() => {}} dir="rtl" />
        </td>
      </Row>
      <Row label="Populated" bold>
        <td>
          <Search platform={platform} value={enPop} onChange={e => setEnPop(e.target.value)} onClear={() => setEnPop('')} onClose={() => {}} />
        </td>
        <td>
          <Search platform={platform} value={arPop} onChange={e => setArPop(e.target.value)} onClear={() => setArPop('')} onClose={() => {}} dir="rtl" />
        </td>
      </Row>
      {!isAndroid && (
        <Row label="With close button" bold>
          <td>
            <Search value="" onChange={() => {}} showClose onClose={() => {}} />
          </td>
          <td>
            <Search value="" onChange={() => {}} showClose onClose={() => {}} dir="rtl" />
          </td>
        </Row>
      )}
    </>
  )
}

function TextInputRows() {
  const [enVal, setEnVal] = useState('')
  const [arVal, setArVal] = useState('')
  const [enPop, setEnPop] = useState('Value')
  const [arPop, setArPop] = useState('قيمة')

  return (
    <>
      <Row label="Default" bold>
        <td><TextInput label="Label" value={enVal} onChange={e => setEnVal(e.target.value)} helperText="Helper text" /></td>
        <td><TextInput label="تسمية" value={arVal} onChange={e => setArVal(e.target.value)} helperText="نص مساعد" dir="rtl" /></td>
      </Row>
      <Row label="Populated" bold>
        <td><TextInput label="Label" value={enPop} onChange={e => setEnPop(e.target.value)} helperText="Helper text" /></td>
        <td><TextInput label="تسمية" value={arPop} onChange={e => setArPop(e.target.value)} helperText="نص مساعد" dir="rtl" /></td>
      </Row>
      <Row label="Leading icon" bold>
        <td><TextInput label="Label" value={enVal} onChange={e => setEnVal(e.target.value)} helperText="Helper text" leadingIcon={<PlaceholderIcon />} /></td>
        <td><TextInput label="تسمية" value={arVal} onChange={e => setArVal(e.target.value)} helperText="نص مساعد" dir="rtl" leadingIcon={<PlaceholderIcon />} /></td>
      </Row>
      <Row label="Trailing icon" bold>
        <td><TextInput label="Label" value={enPop} onChange={e => setEnPop(e.target.value)} helperText="Helper text" trailingIcon={<PlaceholderIcon />} /></td>
        <td><TextInput label="تسمية" value={arPop} onChange={e => setArPop(e.target.value)} helperText="نص مساعد" dir="rtl" trailingIcon={<PlaceholderIcon />} /></td>
      </Row>
      <Row label="Leading + Trailing" bold>
        <td><TextInput label="Label" value={enPop} onChange={e => setEnPop(e.target.value)} helperText="Helper text" leadingIcon={<PlaceholderIcon />} trailingIcon={<PlaceholderIcon />} /></td>
        <td><TextInput label="تسمية" value={arPop} onChange={e => setArPop(e.target.value)} helperText="نص مساعد" dir="rtl" leadingIcon={<PlaceholderIcon />} trailingIcon={<PlaceholderIcon />} /></td>
      </Row>
      <Row label="Error" bold>
        <td><TextInput state="error" label="Label" value="Value" onChange={() => {}} errorText="Error message" /></td>
        <td><TextInput state="error" label="تسمية" value="قيمة" onChange={() => {}} errorText="رسالة خطأ" dir="rtl" /></td>
      </Row>
      <Row label="Disabled" bold>
        <td><TextInput state="disabled" label="Label" value="Value" helperText="Helper text" /></td>
        <td><TextInput state="disabled" label="تسمية" value="قيمة" helperText="نص مساعد" dir="rtl" /></td>
      </Row>
      <Row label="Skeleton" bold>
        <td><TextInput state="skeleton" /></td>
        <td><TextInput state="skeleton" dir="rtl" /></td>
      </Row>
    </>
  )
}
