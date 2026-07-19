const SCALES = [
  {
    label: 'Display',
    meta: '34px · 600 · -1px',
    sample: 'Book your next adventure',
    arSample: 'احجز مغامرتك القادمة',
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--type-display-size)',
      fontWeight: 'var(--type-display-weight)',
      lineHeight: 'var(--type-display-lh)',
      letterSpacing: 'var(--type-display-ls)',
    },
  },
  {
    label: 'Headline',
    meta: '26px · 600 · -0.6px',
    sample: 'Best fares for your dates',
    arSample: 'أفضل الأسعار لتواريخك',
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--type-headline-size)',
      fontWeight: 'var(--type-headline-weight)',
      lineHeight: 'var(--type-headline-lh)',
      letterSpacing: 'var(--type-headline-ls)',
    },
  },
  {
    label: 'Title',
    meta: '18px · 600 · -0.2px',
    sample: 'Flight results · Dubai to London',
    arSample: 'نتائج الرحلات · دبي إلى لندن',
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--type-title-size)',
      fontWeight: 'var(--type-title-weight)',
      lineHeight: 'var(--type-title-lh)',
      letterSpacing: 'var(--type-title-ls)',
    },
  },
  {
    label: 'Title bold',
    meta: '18px · 700 · -0.2px',
    sample: 'Flight results · Dubai to London',
    arSample: 'نتائج الرحلات · دبي إلى لندن',
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--type-title-size)',
      fontWeight: 'var(--type-title-bold-weight)',
      lineHeight: 'var(--type-title-lh)',
      letterSpacing: 'var(--type-title-ls)',
    },
  },
  {
    label: 'Subtitle',
    meta: '16px · 600',
    sample: 'Select your seat preference',
    arSample: 'اختر تفضيل مقعدك',
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--type-subtitle-size)',
      fontWeight: 'var(--type-subtitle-weight)',
      lineHeight: 'var(--type-subtitle-lh)',
    },
  },
  {
    label: 'Subtitle bold',
    meta: '16px · 700',
    sample: 'Select your seat preference',
    arSample: 'اختر تفضيل مقعدك',
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--type-subtitle-size)',
      fontWeight: 'var(--type-subtitle-bold-weight)',
      lineHeight: 'var(--type-subtitle-lh)',
    },
  },
  {
    label: 'Eyebrow',
    meta: '12px · 400 · +1.5px · uppercase',
    sample: 'Popular routes',
    arSample: 'المسارات الشائعة',
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--type-eyebrow-size)',
      fontWeight: 'var(--type-eyebrow-weight)',
      lineHeight: 'var(--type-eyebrow-lh)',
      letterSpacing: 'var(--type-eyebrow-ls)',
      textTransform: 'uppercase',
    },
  },
  {
    label: 'Body regular',
    meta: '14px · 400',
    sample: 'Includes 1 carry-on bag and in-flight meal. Free cancellation within 24 hours of booking.',
    arSample: 'يشمل حقيبة يد واحدة ووجبة على متن الطائرة. إلغاء مجاني خلال ٢٤ ساعة من الحجز.',
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--type-body-size)',
      fontWeight: 'var(--type-body-regular-weight)',
      lineHeight: 'var(--type-body-lh)',
    },
  },
  {
    label: 'Body semibold',
    meta: '14px · 600',
    sample: 'Includes 1 carry-on bag and in-flight meal. Free cancellation within 24 hours of booking.',
    arSample: 'يشمل حقيبة يد واحدة ووجبة على متن الطائرة. إلغاء مجاني خلال ٢٤ ساعة من الحجز.',
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--type-body-size)',
      fontWeight: 'var(--type-body-semibold-weight)',
      lineHeight: 'var(--type-body-lh)',
    },
  },
  {
    label: 'Body bold',
    meta: '14px · 700',
    sample: 'Includes 1 carry-on bag and in-flight meal. Free cancellation within 24 hours of booking.',
    arSample: 'يشمل حقيبة يد واحدة ووجبة على متن الطائرة. إلغاء مجاني خلال ٢٤ ساعة من الحجز.',
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--type-body-size)',
      fontWeight: 'var(--type-body-bold-weight)',
      lineHeight: 'var(--type-body-lh)',
    },
  },
  {
    label: 'Caption regular',
    meta: '12px · 400',
    sample: 'Price shown in SAR, inclusive of taxes and fees.',
    arSample: 'السعر بالريال السعودي، شامل الضرائب والرسوم.',
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--type-caption-size)',
      fontWeight: 'var(--type-caption-regular-weight)',
      lineHeight: 'var(--type-caption-lh)',
    },
  },
  {
    label: 'Caption semibold',
    meta: '12px · 600',
    sample: 'Price shown in SAR, inclusive of taxes and fees.',
    arSample: 'السعر بالريال السعودي، شامل الضرائب والرسوم.',
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--type-caption-size)',
      fontWeight: 'var(--type-caption-semibold-weight)',
      lineHeight: 'var(--type-caption-lh)',
    },
  },
  {
    label: 'Meta regular',
    meta: '11px · 400',
    sample: 'Operated by Emirates. Aircraft: Boeing 777-300ER.',
    arSample: 'تشغيل بواسطة طيران الإمارات. الطائرة: بوينغ ٧٧٧-٣٠٠.',
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--type-meta-size)',
      fontWeight: 'var(--type-meta-regular-weight)',
      lineHeight: 'var(--type-meta-lh)',
    },
  },
  {
    label: 'Meta semibold',
    meta: '11px · 600',
    sample: 'Operated by Emirates. Aircraft: Boeing 777-300ER.',
    arSample: 'تشغيل بواسطة طيران الإمارات. الطائرة: بوينغ ٧٧٧-٣٠٠.',
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--type-meta-size)',
      fontWeight: 'var(--type-meta-semibold-weight)',
      lineHeight: 'var(--type-meta-lh)',
    },
  },
]

function TypographyPage({ dir = 'ltr' }) {
  const isRtl = dir === 'rtl'
  return (
    <div style={{ padding: '40px 48px' }} dir={dir}>
      <div style={{ marginBottom: 32, display: 'flex', gap: 24, flexDirection: isRtl ? 'row-reverse' : 'row' }}>
        {[
          { name: 'Open Sans',        role: isRtl ? 'اللغة الإنجليزية — جميع المقاييس' : 'Latin — all scales' },
          { name: 'Noto Sans Arabic', role: isRtl ? 'العربية — جميع المقاييس' : 'Arabic — all scales' },
        ].map(f => (
          <div
            key={f.name}
            style={{
              padding: '16px 20px',
              borderRadius: 12,
              border: '1px solid var(--docs-border, rgba(0,0,0,0.07))',
              display: 'flex',
              flexDirection: 'column',
              gap: 4,
            }}
          >
            <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--docs-text, #111)' }}>{f.name}</span>
            <span style={{ fontSize: 12, color: 'var(--docs-subtext, #888)' }}>{f.role}</span>
          </div>
        ))}
      </div>

      <div>
        {SCALES.map(scale => (
          <div
            key={scale.label}
            style={{
              display: 'grid',
              gridTemplateColumns: isRtl ? '1fr 160px' : '160px 1fr',
              gap: 24,
              alignItems: 'center',
              padding: '18px 0',
              borderBottom: '1px solid var(--docs-border, rgba(0,0,0,0.07))',
            }}
          >
            {!isRtl && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 3, flexShrink: 0 }}>
                <span style={{ fontSize: 12, fontWeight: 600, color: 'var(--docs-text, #111)' }}>{scale.label}</span>
                <span style={{ fontSize: 10, color: 'var(--docs-subtext, #888)', fontFamily: 'monospace' }}>{scale.meta}</span>
              </div>
            )}
            <span style={{ ...scale.style, color: 'var(--text-default, #1C1C1C)', textAlign: isRtl ? 'right' : 'left' }}>
              {isRtl ? scale.arSample : scale.sample}
            </span>
            {isRtl && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 3, flexShrink: 0, textAlign: 'right' }}>
                <span style={{ fontSize: 12, fontWeight: 600, color: 'var(--docs-text, #111)' }}>{scale.label}</span>
                <span style={{ fontSize: 10, color: 'var(--docs-subtext, #888)', fontFamily: 'monospace' }}>{scale.meta}</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default {
  title: 'Typography',
  category: 'Foundations',
  description: 'Open Sans across all scales — loaded from Google Fonts (400, 600, 700 weights). All values are CSS custom properties on :root. Body, caption, and meta scales share a size/line-height token but have separate regular and semibold weight variants. Title and subtitle each add a bold (700) variant.',
  render: TypographyPage,
  standalone: true,
  previewFull: true,
  args: {
    dir: 'ltr',
  },
  argTypes: {
    dir: {
      control: 'select',
      options: ['ltr', 'rtl'],
      description: 'Text direction',
    },
  },
}
