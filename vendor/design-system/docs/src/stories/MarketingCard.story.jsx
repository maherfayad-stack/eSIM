import { MarketingCard } from 'design-system'

export default {
  title: 'MarketingCard',
  category: 'Content',
  component: MarketingCard,
  description: 'Promotional card with an image and optional content overlay, supporting three visual types. Solid renders an image section with a separate content block below holding the title, subtitle, and CTA button; gradient-small and gradient-large render a gradient overlay at the bottom of the image with the title and subtitle on top, and gradient-large can additionally show a centered title mid-image. Optional Tag chips and a partner logo can sit over the image (partner logo is solid only), and setting skeleton replaces all content with shimmer bars.',
  guidelines: {
    decisions: [
      {
        title: 'Type decision',
        columns: ['Visual intent', 'Use type'],
        rows: [
          { condition: 'Clean card with image top + text content below', use: 'solid' },
          { condition: 'Compact card with gradient overlay on image', use: 'gradient-small' },
          { condition: 'Tall card with gradient overlay + centered title', use: 'gradient-large' },
        ],
      },
      {
        title: 'Image size decision',
        columns: ['Context', 'Use imageSize'],
        rows: [
          { condition: 'Compact row, limited vertical space', use: 'small (120px)' },
          { condition: 'Standard card in a feed or grid', use: 'medium (224px)' },
          { condition: 'Hero or editorial card needing visual impact', use: 'large (360px)' },
        ],
      },
    ],
    when: [
      'Upselling or cross-selling relevant products in a non-intrusive way',
      'Highlighting a feature the user may not know about',
      'Running a campaign or promotion that adds value but is not time-critical',
      'Introducing something new without interrupting the flow',
    ],
    whenNot: [
      'Communicating urgent, critical, or system-level information → use System Banner (planned)',
      'The message requires immediate confirmation or dismissal → use BottomSheet',
      'Showing multiple offers at once → arrange as a horizontally-scrollable row of MarketingCards',
    ],
    contentRules: [
      {
        title: 'Content hierarchy (strict)',
        items: [
          'Title — the hook; 3–6 words; easy to scan',
          'Subtitle — adds detail to the title, does not repeat it; 1–2 short sentences',
          'CTA — specific to the action; 2–4 words',
        ],
      },
      {
        title: 'Writing principles',
        items: [
          'Lead with value: state the benefit first, then the detail',
          'Use exact numbers or facts; avoid vague claims ("up to SAR 1,000", not "big savings")',
          'Show both percentage and absolute value when relevant ("5% off, up to SAR 1,000")',
          'Include qualifiers where needed ("up to", "per stay")',
          'Make CTAs specific ("Copy code: ALMBIZ", not "Learn more")',
          'Stay positive, factual, and confident — avoid hype',
          'Avoid exclamation marks unless campaign tone explicitly demands it',
          'One core message per card; never combine multiple offers',
          'Frontload the most important words for mobile readability',
        ],
      },
    ],
    examples: [
      { do: 'Plan smarter with the new Fare Calendar', dont: 'You\'re missing out by not using Trip Calendar!', why: 'Fear-based framing; name inconsistency' },
      { do: 'Earn double points when you book a stay this week', dont: 'Only a few hours left! Book now or lose your points.', why: 'False urgency; loss framing' },
      { do: 'Fly Business. Pay Less. · Enjoy 5% off and save up to SAR 1,000 · [Copy code: ALMBIZ]', dont: 'Up to SAR 1000 off · Save when you fly on Business Class', why: 'Weak title; value incomplete; body adds no new information' },
    ],
    dos: [
      'Keep titles to 3–6 words; lead with the benefit or hook',
      'Make subtitle add new detail, not restate the title',
      'Use specific, action-oriented CTAs',
      'Show a skeleton placeholder while card content is loading',
    ],
    donts: [
      'Use fear-based, urgent, or loss-framing language',
      'Repeat the title in the subtitle',
      'Combine multiple offers in a single card',
      'Use exclamation marks as a substitute for a compelling message',
    ],
  },
  args: {
    type: 'solid',
    skeleton: false,
    imageSize: 'small',
    title: 'Skip the taxi queue',
    subtitle: 'Book a transfer and arrive stress-free',
    actionLabel: 'Action',
    tagCount: 0,
    tag1Label: 'Tag', tag1Variant: 'default', tag1Style: 'tinted',
    tag2Label: 'Tag', tag2Variant: 'default', tag2Style: 'tinted',
    tag3Label: 'Tag', tag3Variant: 'default', tag3Style: 'tinted',
    tag4Label: 'Tag', tag4Variant: 'default', tag4Style: 'tinted',
    buttonVariant: 'primary',
    buttonSize: 'small',
    buttonDisabled: false,
    dir: 'ltr',
  },
  argTypes: {
    type: {
      control: 'select',
      options: ['solid', 'gradient-small', 'gradient-large'],
      description: 'Layout variant',
    },
    skeleton: {
      control: 'boolean',
      description: 'Replaces all content with shimmer placeholder bars',
    },
    imageSize: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Image section height: small (120px), medium (224px), large (360px)',
    },
    title: {
      control: 'text',
      description: 'Card headline',
    },
    subtitle: {
      control: 'text',
      description: 'Supporting text',
    },
    buttonVariant: {
      control: 'select',
      options: ['primary', 'primary-inverted', 'secondary', 'secondary-inverted', 'destructive', 'payment', 'apple-pay', 'skeleton'],
      description: 'Button variant (solid only)',
    },
    buttonSize: {
      control: 'select',
      options: ['default', 'medium', 'small'],
      description: 'Button size (solid only)',
    },
    actionLabel: {
      control: 'text',
      description: 'Button label (solid only)',
    },
    buttonDisabled: {
      control: 'boolean',
      description: 'Disables the button (solid only)',
    },
    imageSrc: {
      control: 'text',
      description: 'Image URL',
    },
    centerTitle: {
      control: 'text',
      description: 'Title overlaid mid-image (gradient-large only)',
    },

    tagCount: {
      control: 'select',
      options: [0, 1, 2, 3, 4],
      description: 'Number of tags to display over the image (0–4)',
    },
    tag1Label:   { control: 'text',   description: 'Tag 1 label' },
    tag1Variant: { control: 'select', options: ['default', 'warning', 'caution', 'success', 'neutral'], description: 'Tag 1 variant' },
    tag1Style:   { control: 'select', options: ['tinted', 'filled'], description: 'Tag 1 style' },
    tag2Label:   { control: 'text',   description: 'Tag 2 label' },
    tag2Variant: { control: 'select', options: ['default', 'warning', 'caution', 'success', 'neutral'], description: 'Tag 2 variant' },
    tag2Style:   { control: 'select', options: ['tinted', 'filled'], description: 'Tag 2 style' },
    tag3Label:   { control: 'text',   description: 'Tag 3 label' },
    tag3Variant: { control: 'select', options: ['default', 'warning', 'caution', 'success', 'neutral'], description: 'Tag 3 variant' },
    tag3Style:   { control: 'select', options: ['tinted', 'filled'], description: 'Tag 3 style' },
    tag4Label:   { control: 'text',   description: 'Tag 4 label' },
    tag4Variant: { control: 'select', options: ['default', 'warning', 'caution', 'success', 'neutral'], description: 'Tag 4 variant' },
    tag4Style:   { control: 'select', options: ['tinted', 'filled'], description: 'Tag 4 style' },

    buttonProps: {
      control: 'none',
      description: 'Extra props spread onto the CTA Button (solid only)',
    },
    partnerLogoSrc: {
      control: 'text',
      description: 'Partner logo URL over image (solid only)',
    },

    dir: {
      control: 'select',
      options: ['ltr', 'rtl'],
      description: 'Text direction',
    },
  },
  examples: [
    {
      name: 'Solid',
      args: { type: 'solid', imageSize: 'medium', title: 'Skip the taxi queue', subtitle: 'Book a transfer', actionLabel: 'Action' },
    },
    {
      name: 'Solid — small image',
      args: { type: 'solid', imageSize: 'small', title: 'Skip the taxi queue', subtitle: 'Book a transfer', actionLabel: 'Action' },
    },
    {
      name: 'Solid — with tags',
      args: {
        type: 'solid',
        imageSize: 'medium',
        title: 'Skip the taxi queue',
        subtitle: 'Book a transfer',
        actionLabel: 'Action',
        tagCount: 2,
        tag1Label: 'Popular',
        tag2Label: 'New',
      },
    },
    {
      name: 'Gradient small',
      args: { type: 'gradient-small', imageSize: 'medium', title: 'Dubai deals', subtitle: 'From SAR 499' },
    },
    {
      name: 'Gradient large — center title',
      args: { type: 'gradient-large', imageSize: 'large', centerTitle: 'Top picks', title: 'Unforgettable stays', subtitle: 'Curated hotels just for you' },
    },
    {
      name: 'Skeleton',
      args: { type: 'solid', skeleton: true, imageSize: 'medium' },
    },
  ],
  arArgs: {
    title: 'تجاوز طابور التاكسي',
    subtitle: 'احجز خدمة نقل واصل بلا توتر',
    actionLabel: 'إجراء',
    dir: 'rtl',
  },
}
