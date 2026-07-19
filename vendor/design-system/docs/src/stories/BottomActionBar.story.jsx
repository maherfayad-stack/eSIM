import { BottomActionBar } from 'design-system'

export default {
  title: 'BottomActionBar',
  category: 'Navigation',
  component: BottomActionBar,
  description: 'Sticky bottom bar for booking/payment flows. Three types: starting-price (with original), funnel (with back + booking details link), and payment (Apple Pay mark).',
  guidelines: {
    decisions: [
      {
        title: 'Type decision',
        columns: ['Flow context', 'Use type'],
        rows: [
          { condition: 'Entry point — first CTA showing starting price', use: 'starting-price' },
          { condition: 'Mid-funnel step — user sees booking details + continue', use: 'funnel' },
          { condition: 'Final payment confirmation', use: 'payment' },
        ],
      },
    ],
    contentRules: [
      {
        title: 'Label writing',
        items: [
          'Action button: verb-first, 2–4 words — matches the step\'s goal ("Book now", "Continue", "Pay SAR 1,215")',
          'Price label: short, standard copy ("Starting from", "From") — not custom marketing copy',
          'Booking details link (funnel): "Booking details" or equivalent — always reflects what the link reveals',
        ],
      },
    ],
    dos: [
      'Show the original price struck-through only when there is a genuine discount',
      'Use the payment type with the actual payment method name — don\'t use generic "Pay now" when you know it\'s Apple Pay',
    ],
    donts: [
      'Use a passive action label ("See options") — it must confirm the action the bar triggers',
      'Show a struck-through original price without a corresponding offer or promotion visible on screen',
    ],
  },
  previewFull: true,
  previewPadding: 'none',
  args: {
    type: 'starting-price',
    price: 'SAR 1,215',
    originalPrice: 'SAR 1,500',
    fromLabel: 'Starting from',
    actionLabel: 'Book now',
    dir: 'ltr',
  },
  argTypes: {
    type: {
      control: 'select',
      options: ['starting-price', 'funnel', 'payment'],
      description: 'Layout variant',
    },
    price: {
      control: 'text',
      description: 'Current price',
    },
    originalPrice: {
      control: 'text',
      description: 'Original price (shown struck-through, starting-price only)',
    },
    fromLabel: {
      control: 'text',
      description: 'Label above price (starting-price only)',
    },
    actionLabel: {
      control: 'text',
      description: 'CTA button label',
    },
    bookingDetailsLabel: {
      control: 'text',
      description: 'Booking details link text (funnel only)',
    },
    paymentMethod: {
      control: 'text',
      description: 'Payment method name displayed (payment only)',
    },
    dir: {
      control: 'select',
      options: ['ltr', 'rtl'],
      description: 'Text direction',
    },
  },
  examples: [
    { name: 'Starting price', args: { type: 'starting-price', price: 'SAR 1,215', originalPrice: 'SAR 1,500' } },
    { name: 'Funnel', args: { type: 'funnel', price: 'SAR 1,215' } },
    { name: 'Payment', args: { type: 'payment', actionLabel: 'Pay SAR 1,215' } },
  ],
  arArgs: {
    fromLabel: 'ابتداءً من',
    actionLabel: 'احجز الآن',
    bookingDetailsLabel: 'تفاصيل الحجز',
    dir: 'rtl',
  },
}
