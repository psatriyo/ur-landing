/* UangRumah — English (source language). Keys must exist in id.js and ms.js too.
   Run `node tools/check-i18n.mjs` after editing. Strings used with data-i18n-html may contain HTML. */
window.translations = window.translations || {};
window.translations.en = {
  common: {
    skip: 'Skip to content',
    menu: 'Open menu',
    theme: 'Switch light or dark theme',
    language: 'Language',
    mainNav: 'Main',
    home: 'Home',
    nav: {
      features: 'Features',
      privacy: 'Privacy',
      howItWorks: 'How it works',
      faq: 'FAQ',
      help: 'Help',
      contact: 'Contact'
    },
    cta: {
      getApp: 'Get the app',
      downloadOn: 'Download on the',
      appStore: 'App Store',
      appStoreLabel: 'Download UangRumah on the App Store',
      seeHow: 'See how it works',
      helpCenter: 'Visit the Help Center',
      emailUs: 'Email us',
      backHome: 'Back to home'
    },
    footer: {
      tagline: 'A simple, private expense tracker for households and side businesses. Free on iPhone and iPad.',
      product: 'Product',
      help: 'Help',
      legal: 'Legal',
      features: 'Features',
      privacy: 'Privacy',
      howItWorks: 'How it works',
      faq: 'FAQ',
      helpCenter: 'Help Center',
      contact: 'Contact us',
      privacyPolicy: 'Privacy Policy',
      terms: 'Terms of Use',
      madeIn: 'Made with care in Jakarta, Indonesia.',
      rights: 'All rights reserved.',
      apple: 'Apple, the Apple logo, iPhone, iPad and iCloud are trademarks of Apple Inc., registered in the U.S. and other countries and regions. App Store is a service mark of Apple Inc.'
    },
    mock: {
      bookHome: 'Home',
      bookShop: 'Shop',
      monthlyBudget: 'Monthly Budget',
      weeklyBudget: 'Weekly Budget',
      spent: 'Spent',
      ofBudget: 'of budget',
      remaining: 'Remaining',
      perDay: 'Per Day',
      allowedToday: 'Allowed Today',
      onTrack: 'On Track',
      watchOut: 'Watch Out',
      dayOf: 'Day 21 of 30',
      weekDay: 'Day 5 of 7',
      insightGood: 'Great job! Only 62% spent with 70% of the month gone',
      insightWeek: 'Spending 78% with 71% of the week gone - watch your pace',
      topCategories: 'Top Categories',
      paymentMethods: 'Payment Methods',
      weeklyComparison: 'Weekly Comparison',
      thisWeek: 'This Week',
      lastWeek: 'Last Week',
      lessThanLast: '12% less',
      food: 'Food & Dining',
      housing: 'Housing & Utilities',
      transport: 'Transportation',
      education: 'Education',
      comms: 'Communications',
      tabDashboard: 'Dashboard',
      tabManage: 'Manage',
      tabSettings: 'Settings',
      addExpense: 'Add Expense',
      expenseName: 'Expense Name',
      lunch: 'Lunch',
      vendor: 'Vendor',
      category: 'Category',
      costCenter: 'Cost Center',
      costCenters: 'Cost Centers',
      cash: 'Cash',
      bank: 'Bank Account',
      ewallet: 'E-Wallet',
      date: 'Date',
      today: 'Today',
      recurring: 'Recurring Expense',
      batchMode: 'Batch Entry Mode',
      saveAnother: 'Save & Add Another',
      batchCounter: '3 expense(s) added in this batch',
      books: 'Books',
      expensesCount142: '142 expenses',
      expensesCount38: '38 expenses',
      booksLimit: '2 of 2 books',
      costCentersLimit: '3 of 3 cost centers',
      alertTitle: 'Budget Alert',
      alertBody: 'You\'ve reached 90% of your allowed spending for today.',
      now: 'now',
      nudgeTitle: 'Time to log your expenses',
      nudgeBody: 'Keep your budget on track by logging today\'s expenses'
    }
  },

  home: {
    meta: {
      title: 'UangRumah — Simple, private expense tracker for iPhone & iPad',
      description: 'Track household spending, set monthly and weekly budgets, and see what you can still spend today. Free, no ads, no tracking. Works offline and syncs through your private iCloud. In English, Bahasa Indonesia and Bahasa Melayu.'
    },
    hero: {
      badge: 'Plan your 2027 budget today',
      title: 'Know where your <span class="hl">household money</span> goes.',
      lead: 'UangRumah is a simple, private expense tracker for iPhone and iPad. Log spending in seconds, set a monthly or weekly budget, and see exactly how much you can still spend today.',
      proofFree: 'Free',
      proofAds: 'No ads',
      proofTracking: 'No tracking',
      proofSignup: 'No sign-up',
      floatAllowed: 'Allowed today',
      floatPrivate: 'Private by design',
      floatPrivateSub: 'No account, no analytics'
    },
    trust: {
      free: 'Free',
      freeSub: 'Every feature included',
      ads: 'No ads',
      adsSub: 'No tracking, ever',
      offline: 'Works offline',
      offlineSub: 'No signal needed',
      sync: 'iCloud sync',
      syncSub: 'iPhone and iPad',
      langs: '3 languages',
      langsSub: 'EN · ID · MS',
      currencies: '150+ currencies',
      currenciesSub: 'Rupiah, ringgit and more'
    },
    why: {
      eyebrow: 'Why UangRumah',
      title: 'Money tracking that fits real life',
      lead: 'Made for households first, with room for your side business too. UangRumah means "house money" in Indonesian.',
      p1Title: 'Fast enough to keep up',
      p1Text: 'Add an expense in a few taps. Vendors auto-complete, recurring bills add themselves, and Batch Entry clears a pile of receipts in one go.',
      p2Title: 'Budgets that show what\'s left',
      p2Text: 'UangRumah turns your monthly or weekly budget into a daily figure, so you always know how much you can spend today.',
      p3Title: 'Private by design',
      p3Text: 'No account, no ads, no analytics. Your records live on your device and sync only through your own iCloud.'
    },
    f1: {
      eyebrow: 'Budgets',
      title: 'See what you can still spend today',
      lead: 'Set a monthly budget, a weekly budget, or both. UangRumah compares what you\'ve spent with how far you are into the month or week, and tells you if you\'re on track.',
      b1: 'A daily figure for the days that are left',
      b2: 'On Track, Watch Out or Over Budget at a glance',
      b3: 'An alert when you reach 50%, 75%, 90% or 100% of what your budget allows so far',
      b4: 'Your week can start on Sunday or Monday'
    },
    f2: {
      eyebrow: 'Expenses',
      title: 'Log spending in seconds',
      lead: 'Tap +, type a name and an amount, and you\'re done. Add a category, payment method, vendor, date and notes when you want more detail.',
      b1: 'Batch Entry Mode keeps the form open for the next receipt',
      b2: 'Vendor names auto-complete from your history',
      b3: 'Recurring expenses: daily, weekly, every 2 weeks, monthly, quarterly or yearly',
      b4: 'A daily Expense Nudge reminder helps the habit stick'
    },
    f3: {
      eyebrow: 'Dashboard',
      title: 'Understand your spending at a glance',
      lead: 'Your dashboard shows where the money went, how you\'re paying for it, and how this week compares with last week.',
      b1: 'Top categories chart for the month',
      b2: 'Spending by payment method: cash, bank, card or e-wallet',
      b3: 'This week compared with last week',
      b4: 'Search and filter by date, category, payment method or amount'
    },
    f4: {
      eyebrow: 'Books',
      title: 'Keep home and side business apart',
      lead: 'Start a second book for a side business, a renovation or a big project. Each book has its own budget, categories, payment methods and vendors.',
      b1: 'Up to 2 books, switch with one tap',
      b2: '15 ready-made categories you can rename, recolor and extend',
      b3: 'Up to 3 payment methods (cost centers) per book',
      b4: 'A monthly summary reminder on the 1st of each month'
    },
    more: {
      eyebrow: 'And more',
      title: 'Everything else you\'d expect',
      lead: 'Small things that make tracking easier every day.',
      searchTitle: 'Search & filter',
      searchText: 'Find any expense by name, vendor, category, payment method, date or amount.',
      weekTitle: 'Week by week',
      weekText: 'Browse your expenses one week at a time, grouped by date.',
      historyTitle: 'Edit history',
      historyText: 'Every change to an expense is saved, with the differences highlighted.',
      hideTitle: 'Hide Numbers',
      hideText: 'Blur amounts with one tap when someone can see your screen.',
      pdfTitle: 'PDF reports',
      pdfText: 'Share a clean report for this week, month, year or any dates you choose.',
      csvTitle: 'CSV export',
      csvText: 'Open your data in Excel, Numbers or Google Sheets.',
      backupTitle: 'Backup & restore',
      backupText: 'Save a backup file anytime. Restoring creates a new book, so nothing is overwritten.',
      themeTitle: 'Light & dark',
      themeText: 'Follows your system setting, or choose light or dark yourself.',
      a11yTitle: 'Accessible',
      a11yText: 'Works with VoiceOver and supports larger text sizes.',
      devicesTitle: 'iPhone & iPad',
      devicesText: 'Designed for both, and kept in sync through iCloud.',
      langTitle: '3 languages',
      langText: 'English, Bahasa Indonesia and Bahasa Melayu. Switch inside the app.',
      currencyTitle: '150+ currencies',
      currencyText: 'Pick the currency you use, from rupiah and ringgit to dollars and euros.'
    },
    privacy: {
      eyebrow: 'Privacy',
      title: 'Your money is nobody else\'s business',
      lead: 'UangRumah has no servers, no accounts and no analytics. We can\'t see your data, even if we wanted to.',
      i1Title: 'Stored on your device',
      i1Text: 'Your records are saved on your iPhone or iPad, and everything works offline.',
      i2Title: 'Synced through your iCloud',
      i2Text: 'When you\'re signed in to iCloud, your devices stay in sync through your private iCloud account. Only your Apple ID can access it.',
      i3Title: 'No ads, no tracking',
      i3Text: 'No analytics, no advertising and no third-party SDKs in the app.',
      i4Title: 'Yours to take with you',
      i4Text: 'Export to PDF or CSV, or save a full backup, whenever you like.',
      link: 'Read the privacy policy'
    },
    audience: {
      eyebrow: 'Made for',
      title: 'Built for the way you handle money',
      a1Title: 'Households',
      a1Text: 'Keep daily spending and monthly bills under one budget, and see where the household money goes.',
      a2Title: 'Individuals',
      a2Text: 'Build a daily tracking habit and finally see where your salary goes each month.',
      a3Title: 'Freelancers & side businesses',
      a3Text: 'Keep business costs in their own book, apart from home spending, and export them when you need to.'
    },
    steps: {
      eyebrow: 'Getting started',
      title: 'Up and running in a few minutes',
      lead: 'The app walks you through the basics the first time you open it.',
      s1Title: 'Create your book',
      s1Text: 'A book is a separate ledger. Start with one for your household, then add another if you need it.',
      s2Title: 'Set your budget',
      s2Text: 'Choose a monthly or weekly budget, or both, and the alerts you want.',
      s3Title: 'Add expenses',
      s3Text: 'Tap + whenever you spend. Pick a category to see where your money goes.',
      s4Title: 'Track your progress',
      s4Text: 'Check the Dashboard to stay on track and spot your spending patterns.'
    },
    specs: {
      eyebrow: 'The details',
      title: 'What you need to know',
      price: 'Price',
      priceValue: 'Free, no in-app purchases',
      requires: 'Requires',
      requiresValue: 'iOS or iPadOS 16 or later',
      devices: 'Devices',
      devicesValue: 'iPhone and iPad',
      languages: 'Languages',
      languagesValue: 'English, Indonesia, Melayu',
      currencies: 'Currencies',
      currenciesValue: '150+ world currencies',
      sync: 'Sync',
      syncValue: 'iCloud (Apple CloudKit)',
      books: 'Books',
      booksValue: 'Up to 2',
      payment: 'Payment methods',
      paymentValue: 'Up to 3 per book',
      export: 'Export',
      exportValue: 'PDF, CSV and backup file'
    },
    faq: {
      eyebrow: 'FAQ',
      title: 'Questions, answered',
      q1: 'Is UangRumah really free?',
      a1: '<p>Yes. Every feature is free, with no ads and no in-app purchases.</p>',
      q2: 'Do I need to create an account?',
      a2: '<p>No. There\'s nothing to sign up for. UangRumah uses the iCloud account already on your device to keep your iPhone and iPad in sync.</p>',
      q3: 'Where is my data stored?',
      a3: '<p>On your device, and in your private iCloud account when you\'re signed in to iCloud. We don\'t run any servers, so your data never reaches us.</p>',
      q4: 'Does it work without internet?',
      a4: '<p>Yes. Everything works offline. Changes sync to your other devices the next time you\'re online.</p>',
      q5: 'Can I share a book with my partner?',
      a5: '<p>Not at the moment. Sync works between devices signed in to the same Apple ID. To share your figures with someone else, send them a PDF report or a CSV export.</p>',
      q6: 'Which currencies and languages are supported?',
      a6: '<p>More than 150 currencies, and the full app in English, Bahasa Indonesia and Bahasa Melayu. You can change both anytime in <strong>Settings → Preferences</strong>. One currency is used across the whole app.</p>',
      q7: 'Is there an Android version?',
      a7: '<p>Not at the moment. UangRumah is available for iPhone and iPad with iOS or iPadOS 16 or later.</p>',
      more: 'More answers in the Help Center'
    },
    cta: {
      title: 'Start tracking today. It\'s free.',
      lead: 'Download UangRumah and set up your first budget in a few minutes.'
    }
  },

  help: {
    meta: {
      title: 'Help Center — UangRumah',
      description: 'Answers to common questions about UangRumah: getting started, budgets, books, export, backup, iCloud sync, privacy and troubleshooting.'
    },
    badge: 'Help Center',
    title: 'How can we help?',
    lead: 'Answers to common questions, plus step-by-step fixes for sync, notifications and more.',
    searchLabel: 'Search the Help Center',
    searchPlaceholder: 'Search, e.g. "backup" or "budget alert"',
    noResults: 'No answers match your search. Try another word, or email us and we\'ll help.',
    topics: {
      start: 'Getting started',
      startSub: 'Books, setup and basics',
      budgets: 'Expenses & budgets',
      budgetsSub: 'Adding, alerts, recurring',
      data: 'Books & your data',
      dataSub: 'Export, backup, settings',
      sync: 'Sync & privacy',
      syncSub: 'iCloud and who sees what',
      trouble: 'Troubleshooting',
      troubleSub: 'Fixes for common problems',
      contact: 'Contact us',
      contactSub: 'We reply in 1–2 business days'
    },
    g1: {
      title: 'Getting started',
      q1: 'How do I get started?',
      a1: '<ol><li>Download UangRumah from the App Store.</li><li>Open the app and follow the short introduction. Your first book is created for you.</li><li>Set a monthly or weekly budget in <strong>Settings → Budget</strong>.</li><li>Check your categories and cost centers (payment methods) in <strong>Settings</strong>.</li><li>Tap <strong>+</strong> on the <strong>Manage</strong> tab to add your first expense.</li><li>Optional: turn on <strong>Expense Nudge</strong> in <strong>Settings → Preferences</strong> for a daily reminder.</li></ol>',
      q2: 'What is a book?',
      a2: '<p>A book is a separate ledger with its own expenses, budget, categories, cost centers and vendors. Most people use one book for the household. Add a second for a side business or a big project. You can have up to 2 books and switch between them from the book icon at the top of the screen.</p>',
      q3: 'Is UangRumah free?',
      a3: '<p>Yes. All features are free, with no ads and no in-app purchases.</p>',
      q4: 'Which devices are supported?',
      a4: '<p>iPhone and iPad with iOS or iPadOS 16 or later. There\'s no Android version at the moment.</p>'
    },
    g2: {
      title: 'Expenses & budgets',
      q1: 'How do I add an expense?',
      a1: '<p>Go to the <strong>Manage</strong> tab and tap <strong>+</strong>. Enter a name and amount. Everything else is optional: vendor, category, cost center, date and notes. Tap <strong>Add Expense</strong> to save.</p><p>To edit or delete, tap an expense or swipe left on it.</p>',
      q2: 'What is Batch Entry Mode?',
      a2: '<p>Batch Entry Mode lets you add several expenses without closing the form. After each save the form clears and keeps the date you picked, so entering a stack of receipts is quick. Turn it on in the Add Expense form.</p>',
      q3: 'How do recurring expenses work?',
      a3: '<p>When adding an expense, turn on <strong>Recurring Expense</strong> and choose how often it repeats: daily, weekly, every 2 weeks, monthly, quarterly or yearly. You can add an end date. When a payment is due, UangRumah adds it for you the next time you open the app.</p>',
      q4: 'How do budget alerts work?',
      a4: '<p>Set a budget in <strong>Settings → Budget</strong> and choose when to be alerted: at 50%, 75%, 90% or 100%. UangRumah compares what you\'ve spent this month with what your budget allows up to today, and sends a notification when you reach that level.</p><p>Make sure notifications for UangRumah are allowed in iOS Settings.</p>',
      q5: 'What does the daily figure on the Dashboard mean?',
      a5: '<p>It\'s the budget you have left divided by the days left in the month (or week). If you spend less than this each day, you\'ll finish within budget. The status shows <strong>On Track</strong>, <strong>Watch Out</strong> or <strong>Over Budget</strong> by comparing how much you\'ve spent with how much of the month has passed.</p>',
      q6: 'What are cost centers?',
      a6: '<p>Cost centers are the ways you pay: cash, a bank account, a credit card or an e-wallet. Pick one when you add an expense, and the Dashboard shows your spending by payment method. Each book can have up to 3 cost centers. Manage them in <strong>Settings → Cost Centers</strong>.</p>',
      q7: 'What is Expense Nudge?',
      a7: '<p>A friendly reminder to log your spending. Choose the time and the days (every day, weekdays or days you pick) in <strong>Settings → Preferences → Expense Nudge</strong>.</p>',
      q8: 'Can I see what changed in an expense?',
      a8: '<p>Yes. UangRumah keeps an edit history for every expense. Open the expense to see earlier versions, with changes highlighted.</p>'
    },
    g3: {
      title: 'Books & your data',
      q1: 'How many books can I create?',
      a1: '<p>Up to 2 books. Book names can be up to 9 characters long so they fit neatly at the top of the screen. Manage books in <strong>Settings → Books</strong>.</p>',
      q2: 'How do I export my expenses?',
      a2: '<p>On the <strong>Manage</strong> tab, tap the export icon, or go to <strong>Settings → Create Report</strong>. Choose <strong>PDF</strong> for a formatted report or <strong>CSV</strong> for spreadsheets, pick a date range (this week, this month, this year or custom), then save or share the file.</p>',
      q3: 'How do I back up and restore?',
      a3: '<p>Go to <strong>Settings → Backup &amp; Restore</strong>. <strong>Export Backup</strong> saves a backup file of the current book that you can keep in Files or share. <strong>Import Backup</strong> restores a backup file as a <strong>new book</strong>, so your existing data is never overwritten.</p>',
      q4: 'How do I change the currency or language?',
      a4: '<p>Go to <strong>Settings → Preferences</strong>. You can choose English, Bahasa Indonesia or Bahasa Melayu, and any of more than 150 currencies. The currency applies across the whole app. You can also choose light, dark or system appearance there.</p>',
      q5: 'How do I delete a book?',
      a5: '<p>Go to <strong>Settings → Books</strong> and swipe left on the book. You\'ll be asked to confirm twice, because deleting a book permanently removes all of its expenses, budgets, categories and cost centers, on every device that syncs with it. Export a backup first if you might need the data later.</p>'
    },
    g4: {
      title: 'Sync & privacy',
      q1: 'How does iCloud sync work?',
      a1: '<p>If you\'re signed in to iCloud, UangRumah syncs automatically between your iPhone and iPad through your private iCloud account, using Apple\'s CloudKit. There\'s no switch to turn on inside the app. Use the same Apple ID on each device. You can check the sync status in <strong>Settings → iCloud Sync</strong>.</p><p>App preferences such as language, currency and reminders are saved on each device and don\'t sync.</p>',
      q2: 'Can I use UangRumah without iCloud?',
      a2: '<p>Yes. If you\'re not signed in to iCloud, or you turn off iCloud for UangRumah in iOS Settings, your data stays only on that device. In that case, export a backup regularly from <strong>Settings → Backup &amp; Restore</strong>, because deleting the app would delete your data.</p>',
      q3: 'Can my family see my expenses?',
      a3: '<p>Only people who use your Apple ID on a device can see your synced data. Sharing a book between different Apple IDs isn\'t supported yet. To share numbers with someone, send them a PDF report or a CSV export.</p>',
      q4: 'Can the UangRumah team see my data?',
      a4: '<p>No. We don\'t run servers, there\'s no account, and the app contains no analytics or advertising code. Your data stays on your devices and in your private iCloud account, which we can\'t access. Read the <a href="privacy-policy.html">Privacy Policy</a> for details.</p>',
      q5: 'What is Hide Numbers?',
      a5: '<p>Hide Numbers blurs amounts on your screen, which is useful in public. Tap the eye icon on the Dashboard to hide or show amounts, or set the default in <strong>Settings → Preferences</strong>.</p>'
    },
    g5: {
      title: 'Troubleshooting',
      t1: 'My data isn\'t syncing between devices',
      t1Body: '<ol><li>Check that each device is signed in to the <strong>same Apple ID</strong>.</li><li>In iOS Settings, tap your name → <strong>iCloud</strong> and make sure UangRumah is allowed to use iCloud.</li><li>Make sure both devices are online, and that your iCloud storage isn\'t full.</li><li>Open UangRumah on both devices and wait a few minutes. The first sync after installing can take longer.</li><li>Check <strong>Settings → iCloud Sync</strong> in UangRumah for the current status.</li><li>Still stuck? Restart both devices, then contact us.</li></ol>',
      t2: 'I see "no book" after installing on a new device',
      t2Body: '<p>When you install UangRumah on another device, your books download from iCloud in the background. This can take a few minutes, especially with a lot of data.</p><ol><li>Stay connected to the internet and keep the app open for a few minutes.</li><li>Check that you\'re signed in to the same Apple ID as your other device.</li><li>If you don\'t use iCloud, create a new book, or restore one from a backup file.</li></ol>',
      t3: 'I\'m not getting notifications',
      t3Body: '<ol><li>Open iOS <strong>Settings → Notifications → UangRumah</strong> and turn on <strong>Allow Notifications</strong>.</li><li>In UangRumah, check <strong>Settings → Preferences</strong> to make sure notifications and Expense Nudge are on.</li><li>Budget alerts need a budget: set one in <strong>Settings → Budget</strong>.</li><li>Check that a Focus mode isn\'t silencing UangRumah.</li></ol>',
      t4: 'The Dashboard numbers look wrong',
      t4Body: '<ol><li>Check you\'re looking at the right book (book icon at the top).</li><li>Check the date on recent expenses, since only expenses in the current month or week count.</li><li>Check your week start day (Sunday or Monday) in the budget settings.</li><li>If you just added expenses on another device, give iCloud a moment to sync.</li></ol>',
      t5: 'The app crashes or won\'t open',
      t5Body: '<ol><li>Update UangRumah to the latest version from the App Store.</li><li>Update iOS or iPadOS, then restart your device.</li><li>Make sure your device has some free storage.</li><li>Email us with your device model, iOS version and what happened just before the crash.</li></ol><p><strong>Before reinstalling:</strong> if you don\'t use iCloud, deleting the app also deletes your data. Export a backup first if you can.</p>'
    },
    req: {
      title: 'System requirements',
      body: '<strong>iPhone or iPad</strong> with iOS or iPadOS 16 or later. iCloud is optional and is used for sync between your devices.'
    },
    contact: {
      title: 'Still need help?',
      lead: 'Email us and we\'ll get back to you, usually within 1–2 business days.'
    }
  },

  contact: {
    meta: {
      title: 'Contact — UangRumah',
      description: 'Contact the UangRumah team by email for help, bug reports and feature ideas.'
    },
    badge: 'Contact',
    title: 'We\'re happy to help',
    lead: 'Questions, bug reports or ideas for UangRumah? Send us an email. We read every one.',
    emailTitle: 'Email support',
    emailText: 'The fastest way to reach us. You can also write from the app: Settings → Contact Developer.',
    emailSubject: 'UangRumah support',
    responseLabel: 'Response time',
    responseValue: 'Usually 1–2 business days',
    hoursLabel: 'Hours',
    hoursValue: 'Monday–Friday, 09:00–17:00 WIB (UTC+7)',
    langLabel: 'We reply in',
    langValue: 'English or Bahasa Indonesia',
    locationLabel: 'Based in',
    locationValue: 'Jakarta, Indonesia',
    beforeTitle: 'Before you write',
    beforeLead: 'You might find an answer straight away.',
    faqTitle: 'Help Center',
    faqText: 'Answers about budgets, books, export, backup and more.',
    troubleTitle: 'Troubleshooting',
    troubleText: 'Step-by-step fixes for sync, notifications and crashes.',
    privacyTitle: 'Privacy',
    privacyText: 'How your data is stored and who can see it.',
    open: 'Open',
    includeTitle: 'What to include in your email',
    includeLead: 'A few details help us solve the problem faster.',
    deviceTitle: 'Your device',
    device1: 'iPhone or iPad model',
    device2: 'iOS or iPadOS version',
    appTitle: 'The app',
    app1: 'UangRumah version (Settings → About)',
    app2: 'Whether you use iCloud sync',
    issueTitle: 'What happened',
    issue1: 'What you were trying to do',
    issue2: 'What happened instead, and any error message',
    stepsTitle: 'How to repeat it',
    steps1: 'The steps that lead to the problem',
    steps2: 'Screenshots, if you can',
    ideasTitle: 'Have an idea?',
    ideasText: 'Feature requests are welcome. Tell us what you\'d like UangRumah to do, and why it would help.'
  },

  privacy: {
    meta: {
      title: 'Privacy Policy — UangRumah',
      description: 'How UangRumah handles your data: stored on your device, synced through your private iCloud, no accounts, no analytics, no ads.'
    },
    badge: 'Legal',
    title: 'Privacy Policy',
    lead: 'The short version: your financial data stays on your devices and in your own iCloud. We don\'t collect it, see it or sell it.',
    updated: 'Last updated: 22 November 2026',
    effective: 'Effective: 22 November 2026',
    toc: 'On this page',
    s1: {
      title: 'Summary',
      body: '<div class="summary-grid"><div><b>We collect nothing</b><p>No account, no analytics, no tracking and no advertising in the app.</p></div><div><b>Stored on your device</b><p>Your records are saved on your iPhone or iPad and work offline.</p></div><div><b>Synced through your iCloud</b><p>When you\'re signed in to iCloud, data syncs through your private iCloud account. We can\'t access it.</p></div><div><b>No ads, no selling</b><p>Your financial information is never shown to advertisers, shared or sold.</p></div></div>'
    },
    s2: {
      title: 'Who we are',
      body: '<p>UangRumah is an independent app developed by Prayudi Satriyo in Jakarta, Indonesia ("we", "us"). This policy explains how the UangRumah app for iPhone and iPad and the website uangrumah.com handle information. If you have questions, email <a href="mailto:support@uangrumah.com">support@uangrumah.com</a>.</p>'
    },
    s3: {
      title: 'Information we collect',
      body: '<p><strong>We don\'t collect personal information.</strong> UangRumah has no sign-up, we don\'t operate any servers that receive your data, and the app contains no analytics, crash-reporting, advertising or other third-party SDKs.</p><p>If you have chosen to share analytics with app developers in iOS (<strong>Settings → Privacy &amp; Security → Analytics &amp; Improvements</strong>), Apple may give us anonymous, aggregated crash and usage statistics. This is controlled by Apple and you can turn it off at any time.</p><p>If you email us, we receive your email address and whatever you choose to include, and use it only to reply to you.</p>'
    },
    s4: {
      title: 'Data stored on your device',
      body: '<p>To work, the app stores the following on your device:</p><ul><li>Expenses: name, amount, vendor, date, category, cost center and notes</li><li>Edit history of expenses</li><li>Books, budgets and alert thresholds</li><li>Categories, cost centers and vendors you create</li><li>Recurring expense settings</li><li>App preferences such as language, currency, appearance, reminders and Hide Numbers</li></ul><p>This data is protected by iOS security, including your device passcode.</p>'
    },
    s5: {
      title: 'iCloud sync',
      body: '<p>UangRumah uses Apple\'s CloudKit to keep your books in sync across devices signed in to the same Apple ID. <strong>Sync happens automatically when you\'re signed in to iCloud and iCloud is allowed for UangRumah.</strong> There is no separate switch inside the app.</p><ul><li>Your data is stored in your <strong>private</strong> iCloud database, which only your Apple ID can access. We have no access to it.</li><li>Apple encrypts iCloud data in transit and at rest. iCloud is governed by Apple\'s Privacy Policy.</li><li>To stop syncing, open iOS Settings, tap your name → <strong>iCloud</strong>, and turn off iCloud for UangRumah. Your data then stays only on that device.</li><li>App preferences (language, currency, appearance, reminders) stay on each device and are not synced.</li></ul>'
    },
    s6: {
      title: 'Notifications',
      body: '<p>Budget alerts, Expense Nudge reminders and the monthly summary are scheduled locally on your device. Apple may send the app silent background notifications that tell it your iCloud data has changed. These contain no personal content.</p>'
    },
    s7: {
      title: 'Exports and backups',
      body: '<p>PDF reports, CSV exports and backup files are created on your device and saved or shared wherever you choose (for example the Files app, email or messaging apps). Once you share a file, its privacy depends on where you put it.</p>'
    },
    s8: {
      title: 'What we never do',
      body: '<ul><li>Ask you to create an account or collect your name, email or phone number in the app</li><li>Track your location or your behaviour across apps and websites</li><li>Use analytics services such as Google Analytics or Firebase</li><li>Include advertising SDKs or show ads</li><li>Sell, rent or share your data with third parties</li><li>Send your financial data to our own servers (we don\'t have any)</li></ul>'
    },
    s9: {
      title: 'Your choices and rights',
      body: '<p>You have full control over your data, directly in the app:</p><ul><li><strong>Access and correct:</strong> view and edit every record at any time.</li><li><strong>Export:</strong> download your data as PDF, CSV or a backup file.</li><li><strong>Delete:</strong> delete individual expenses or a whole book. Deleting the app removes local data. To remove synced data, go to iOS Settings → your name → iCloud → Manage Account Storage.</li></ul><p>Because we don\'t hold your data, we can\'t access, correct or delete it for you, but we\'re happy to explain how.</p>'
    },
    s10: {
      title: 'Children',
      body: '<p>UangRumah is not directed at children under 13. We don\'t knowingly collect information from anyone, including children.</p>'
    },
    s11: {
      title: 'This website',
      body: '<p>uangrumah.com is a static website hosted on GitHub Pages. It uses no cookies, no analytics and no advertising. Your language and theme choices are saved in your browser\'s local storage and never leave your device. GitHub may log technical information such as IP addresses for security, under GitHub\'s own privacy statement.</p>'
    },
    s12: {
      title: 'Changes to this policy',
      body: '<p>If we change this policy, we\'ll update the date at the top of this page. If a change significantly affects how your data is handled, we\'ll also mention it in the app or the App Store release notes.</p>'
    },
    s13: {
      title: 'Contact',
      body: '<p>Questions about privacy? Email <a href="mailto:support@uangrumah.com">support@uangrumah.com</a>. We aim to reply within 7 business days.</p>'
    }
  },

  terms: {
    meta: {
      title: 'Terms of Use — UangRumah',
      description: 'The terms for using the UangRumah expense tracker app for iPhone and iPad.'
    },
    badge: 'Legal',
    title: 'Terms of Use',
    lead: 'Please read these terms before using UangRumah. They\'re written to be as clear as possible.',
    updated: 'Last updated: 22 November 2026',
    effective: 'Effective: 22 November 2026',
    toc: 'On this page',
    s1: {
      title: 'Agreement to these terms',
      body: '<p>By downloading, installing or using UangRumah, you agree to these Terms of Use. If you don\'t agree, please don\'t use the app.</p>'
    },
    s2: {
      title: 'About UangRumah',
      body: '<p>UangRumah is a privacy-focused expense tracker for iPhone and iPad. It lets you record expenses, set budgets, keep separate books, export reports and sync your data through your own iCloud account.</p>'
    },
    s3: {
      title: 'Who can use UangRumah',
      body: '<p>To use UangRumah, you must:</p><ul><li>Be at least 18 years old</li><li>Own or control an iPhone or iPad with iOS or iPadOS 16 or later</li><li>Have a valid Apple ID</li><li>Follow all laws that apply to you</li></ul>'
    },
    s4: {
      title: 'Your license',
      body: '<p>We give you a limited, non-exclusive, non-transferable license to download, install and use UangRumah on Apple devices you own or control, to keep records of your personal, household or small-business expenses.</p>'
    },
    s5: {
      title: 'Restrictions',
      body: '<p>You may not:</p><ul><li>Reverse engineer or decompile the app</li><li>Copy, modify or create derivative works of the app</li><li>Rent, sell or redistribute the app</li><li>Use the app for any illegal purpose</li></ul>'
    },
    s6: {
      title: 'Not professional advice',
      body: '<p>UangRumah is a record-keeping tool. It is not a substitute for professional accounting software, or for financial, tax or legal advice. If you use it to track business expenses, you are responsible for checking the figures and for meeting your own reporting and tax obligations.</p>'
    },
    s7: {
      title: 'Your responsibilities',
      body: '<p>When using UangRumah, you agree to:</p><ul><li>Enter accurate information</li><li>Keep your device and Apple ID secure</li><li>Keep backups of data that is important to you</li><li>Check important calculations yourself</li><li>Use the app in line with the law</li></ul>'
    },
    s8: {
      title: 'Your data',
      body: '<p>You own all the data you enter in UangRumah. We don\'t claim any rights to it. Your data is stored on your devices and, when you\'re signed in to iCloud, in your private iCloud account. We have no copy of it and can\'t recover it for you, so please keep backups. You can export or delete your data at any time. See the <a href="privacy-policy.html">Privacy Policy</a> for details.</p>'
    },
    s9: {
      title: 'Disclaimer',
      body: '<p>UangRumah is provided "as is", without warranties of any kind. We don\'t guarantee that calculations will always be accurate, that the app will always be available or error-free, or that it will suit any particular purpose.</p>'
    },
    s10: {
      title: 'Limitation of liability',
      body: '<p>To the extent allowed by law, we are not liable for any financial loss, data loss or other damages arising from your use of UangRumah. Our total liability is limited to the amount you paid for the app.</p>'
    },
    s11: {
      title: 'Ending your use',
      body: '<p>You can stop using UangRumah at any time by deleting the app. We may change, suspend or discontinue the app or any feature, with or without notice.</p>'
    },
    s12: {
      title: 'Changes to these terms',
      body: '<p>We may update these terms from time to time and will change the date at the top of this page when we do. If you keep using the app after a change, you accept the updated terms. We\'ll let you know about significant changes in the app or the App Store release notes.</p>'
    },
    s13: {
      title: 'Governing law',
      body: '<p>These terms are governed by the laws of the Republic of Indonesia. Any disputes will be resolved in the courts of Jakarta, Indonesia.</p>'
    },
    s14: {
      title: 'Contact',
      body: '<p>Questions about these terms? Email <a href="mailto:support@uangrumah.com">support@uangrumah.com</a>.</p><p>By using UangRumah, you confirm that you have read, understood and agree to these Terms of Use.</p>'
    }
  },

  notFound: {
    meta: { title: 'Page not found — UangRumah', description: 'This page could not be found.' },
    title: 'This page isn\'t here',
    lead: 'The link may be old, or the page has moved. Try the home page or the Help Center.'
  }
};
