// UangRumah Translations
const translations = {
    en: {
        // Common
        common: {
            beta: 'Beta',
            home: 'Home',
            features: 'Features',
            howItWorks: 'How It Works',
            requirements: 'Requirements',
            download: 'Download',
            privacy: 'Privacy',
            terms: 'Terms',
            support: 'Support',
            contact: 'Contact',
            privacyPolicy: 'Privacy Policy',
            termsConditions: 'Terms & Conditions',
            allRightsReserved: 'All rights reserved',
        },

        // Navigation
        nav: {
            features: 'Features',
            howItWorks: 'How It Works',
            requirements: 'Requirements',
            download: 'Download',
        },

        // Home Page
        home: {
            metaDescription: 'UangRumah - Household expense tracker for Indonesian couples. Track expenses, manage budgets, and take control of your finances with simple, effective tracking.',
            title: 'UangRumah - Household Expense Tracker for Indonesian Couples',
            heroTitle: 'Household Expense Tracker for Indonesian Couples',
            heroSubtitle: 'Take control of your finances with simple, effective expense tracking. Track daily expenses, manage budgets, monitor multiple payment methods, and gain insights into your financial habits with beautiful visualizations.',
            ctaButton: 'Ask Invitation',

            // Features Section
            featuresTitle: 'Comprehensive Features',
            featuresSubtitle: 'Everything you need to manage your household finances effectively',

            // Budget Management
            budgetManagementTitle: 'Budget Management',
            monthlyWeeklyBudgets: 'Monthly & Weekly Budgets',
            monthlyWeeklyBudgetsDesc: 'Set monthly spending limits with automatic daily allowance calculations. Configure weekly budgets for granular spending control.',
            smartAlerts: 'Smart Alerts',
            smartAlertsDesc: 'Get notified at configurable thresholds (50%, 75%, 90%, 100%) so you never overspend unexpectedly.',
            budgetProgressTracking: 'Budget Progress Tracking',
            budgetProgressTrackingDesc: 'Real-time monitoring with visual indicators showing your spending vs budget with color-coded status.',

            // Expense Tracking
            expenseTrackingTitle: 'Expense Tracking',
            quickAdd: 'Quick Add',
            quickAddDesc: 'Easily log expenses with name, vendor, amount, category, and cost center. Simple and fast entry for busy couples.',
            recurringExpenses: 'Recurring Expenses',
            recurringExpensesDesc: 'Automatic tracking for subscriptions and regular bills with daily, weekly, monthly, or yearly frequencies.',
            versionHistory: 'Version History',
            versionHistoryDesc: 'Complete audit trail for all expense modifications. Never lose track of changes to your financial records.',
            searchFilter: 'Search & Filter',
            searchFilterDesc: 'Multi-field search with advanced filtering by date, amount, category, and cost center for quick access.',
            vendorTracking: 'Vendor Tracking',
            vendorTrackingDesc: 'Smart vendor suggestions based on usage history make expense entry even faster.',

            // Dashboard & Analytics
            dashboardAnalyticsTitle: 'Dashboard & Analytics',
            categoryBreakdown: 'Category Breakdown',
            categoryBreakdownDesc: 'Visual pie charts showing spending distribution across categories with percentages and amounts.',
            costCenterReports: 'Cost Center Reports',
            costCenterReportsDesc: 'Track expenses by payment method - cash, credit cards, e-wallets, bank transfers. Perfect for couples managing joint and separate accounts.',
            privacyMode: 'Privacy Mode',
            privacyModeDesc: 'Toggle sensitive data visibility with dashboard blur and amount censoring for protection in public.',
            realtimeUpdates: 'Real-time Updates',
            realtimeUpdatesDesc: 'Pull-to-refresh for instant data sync across all your devices via iCloud.',

            // Reminders & Notifications
            remindersNotificationsTitle: 'Reminders & Notifications',
            expenseNudge: 'Expense Nudge',
            expenseNudgeDesc: 'Daily reminders to log expenses with customizable frequencies: Daily, Every 2 Days, Weekdays Only, or Custom schedules.',
            budgetAlerts: 'Budget Alerts',
            budgetAlertsDesc: 'Automatic notifications when approaching spending limits at your configured thresholds.',
            monthlySummary: 'Monthly Summary',
            monthlySummaryDesc: 'Receive monthly expense overview notifications to stay on top of your financial habits.',

            // Data Export
            dataExportTitle: 'Data Export',
            pdfReports: 'PDF Reports',
            pdfReportsDesc: 'Professional formatted reports with expense summaries and daily breakdowns for sharing or printing.',
            csvExport: 'CSV Export',
            csvExportDesc: 'Export data for analysis in Excel, Numbers, or Google Sheets with full data compatibility.',
            flexibleDateRanges: 'Flexible Date Ranges',
            flexibleDateRangesDesc: 'Export all time, current month, last month, or custom date ranges to fit your reporting needs.',

            // Customization
            customizationTitle: 'Customization',
            customCategories: 'Custom Categories',
            customCategoriesDesc: 'Create custom expense categories with SF Symbol icons and color coding to match your spending patterns.',
            costCenters: 'Cost Centers',
            costCentersDesc: 'Manage payment methods including bank accounts, credit cards, cash, and e-wallets with ease.',
            privacySettings: 'Privacy Settings',
            privacySettingsDesc: 'Configure dashboard visibility defaults and protect your financial data with customizable privacy options.',
            builtForIndonesia: 'Built for Indonesia',
            builtForIndonesiaDesc: 'Full support for Rupiah (IDR) currency and designed specifically for Indonesian household expense management.',

            // How It Works
            howItWorksTitle: 'How It Works',
            howItWorksSubtitle: 'Start managing your household finances in simple steps',
            step1Title: 'Set Your Budget',
            step1Desc: 'Configure monthly and weekly budgets with alert thresholds. Set up your preferred privacy settings and cost centers.',
            step2Title: 'Track Expenses',
            step2Desc: 'Quick add daily expenses with vendor tracking, categories, and cost centers. Enable expense nudge reminders to never forget.',
            step3Title: 'Monitor & Analyze',
            step3Desc: 'View dashboard insights with category breakdowns, cost center reports, and budget progress. Export reports when needed.',
            step4Title: 'Stay on Track',
            step4Desc: 'Receive smart alerts when approaching budget limits. Review monthly summaries and adjust spending habits accordingly.',

            // Requirements
            requirementsTitle: 'Requirements',
            requirementsSubtitle: 'Technical specifications for UangRumah',
            platform: 'Platform',
            platformValue: 'iOS 16.0+',
            devices: 'Devices',
            devicesValue: 'iPhone & iPad',
            technology: 'Technology',
            technologyValue: 'SwiftUI',
            sync: 'Sync',
            syncValue: 'iCloud',
            currency: 'Currency',
            currencyValue: 'IDR (Rupiah)',
            storage: 'Storage',
            storageValue: 'Local + Cloud',

            // Download CTA
            downloadCtaTitle: 'Ready to Take Control of Your Finances?',
            downloadCtaSubtitle: 'Join couples who have improved their financial health with UangRumah',
            downloadCtaButton: 'Ask Invitation',
        },

        // Contact Page
        contact: {
            metaDescription: 'Contact UangRumah - Get in touch with our support team for help with the expense tracker app.',
            title: 'Contact Us - UangRumah',
            heroTitle: 'Contact Us',
            heroSubtitle: 'Have questions or need help? We\'re here to assist you.',

            emailSupportTitle: 'Email Support',
            emailSupportDesc: 'Send us an email and we\'ll respond within 1-2 business days.',

            websiteTitle: 'Website',
            websiteDesc: 'Visit our website for more information and updates.',

            supportCenterTitle: 'Support Center',
            supportCenterDesc: 'Check our FAQ and troubleshooting guides for quick answers.',
            visitSupport: 'Visit Support',

            supportInfoTitle: 'Support Information',
            location: 'Location',
            locationValue: 'Jakarta, Indonesia',
            responseTime: 'Response Time',
            responseTimeValue: '1-2 Business Days',
            businessHours: 'Business Hours',
            businessHoursValue: 'Mon-Fri, 9AM-5PM WIB',
            languages: 'Languages',
            languagesValue: 'English & Indonesian',

            betaProgramNote: 'Beta Program: UangRumah is currently in beta (v0.1.0). We highly value your feedback and bug reports to help us improve the app. Thank you for being an early adopter!',

            beforeContactTitle: 'Before You Contact Us',
            beforeContactSubtitle: 'You might find answers faster by checking these resources first:',

            faqTitle: 'Frequently Asked Questions',
            faqDesc: 'Find answers to common questions about budgets, expenses, sync, and more.',
            viewFaq: 'View FAQ',

            troubleshootingTitle: 'Troubleshooting Guide',
            troubleshootingDesc: 'Step-by-step solutions for common technical issues and problems.',
            getHelp: 'Get Help',

            privacySecurityTitle: 'Privacy & Security',
            privacySecurityDesc: 'Learn how we protect your data and respect your privacy.',

            whatToIncludeTitle: 'What to Include in Your Support Request',
            whatToIncludeSubtitle: 'Help us help you faster by including this information:',

            deviceInfoTitle: 'Device Information',
            deviceInfoDesc: '• iPhone or iPad model<br>• iOS version number<br>• Available storage space',

            appDetailsTitle: 'App Details',
            appDetailsDesc: '• UangRumah version<br>• When the issue started<br>• Frequency of the problem',

            problemDescTitle: 'Problem Description',
            problemDescDesc: '• What you were trying to do<br>• What happened instead<br>• Any error messages',

            stepsToReproduceTitle: 'Steps to Reproduce',
            stepsToReproduceDesc: '• Step-by-step actions<br>• Screenshots (if applicable)<br>• How to recreate the issue',
        },

        // Support Page
        support: {
            metaDescription: 'UangRumah Support - Get help with common issues and troubleshooting for the expense tracker app.',
            title: 'Support - UangRumah',
            heroTitle: 'Support Center',
            heroSubtitle: 'Find answers to common questions and get help with UangRumah.',

            gettingStartedTitle: 'Getting Started',
            gettingStartedDesc: 'Learn the basics of setting up budgets, adding expenses, and navigating the app.',

            troubleshootingTitle: 'Troubleshooting',
            troubleshootingDesc: 'Solve common issues with syncing, notifications, and data management.',

            contactUsTitle: 'Contact Us',
            contactUsDesc: 'Can\'t find what you\'re looking for? Reach out to our support team.',

            systemRequirements: 'System Requirements',
            systemRequirementsValue: 'Platform: iOS 16.0 or later | Devices: iPhone & iPad | Version: 0.1.0 Beta | Storage: iCloud (optional)',

            faqSectionTitle: 'Frequently Asked Questions',

            // FAQ Items
            faq1Q: 'How do I get started with UangRumah?',
            faq1A: 'Getting started is easy:',
            faq1Steps: [
                'Download UangRumah from the App Store',
                'Set up your monthly and weekly budgets in Settings',
                'Create custom categories and cost centers for your spending',
                'Start adding expenses by tapping the "+" button',
                'Enable expense nudge reminders to stay on track'
            ],

            faq2Q: 'How does iCloud sync work?',
            faq2A: 'iCloud sync keeps your data synchronized across all your Apple devices:',
            faq2Points: [
                'Enable iCloud sync in iOS Settings > [Your Name] > iCloud',
                'Make sure UangRumah has iCloud access enabled',
                'Your expense data will automatically sync between iPhone and iPad',
                'Changes made on one device appear on others within minutes',
                'Requires active internet connection for syncing'
            ],

            faq3Q: 'Can I export my expense data?',
            faq3A: 'Yes! UangRumah supports data export in two formats:',
            faq3Points: [
                'PDF Reports: Professional formatted reports with expense summaries and daily breakdowns',
                'CSV Files: Spreadsheet-compatible format for Excel, Numbers, or Google Sheets'
            ],
            faq3Extra: 'To export: Go to Settings > Export Data > Choose format and date range > Share or save the file.',

            faq4Q: 'How do budget alerts work?',
            faq4A: 'Budget alerts help you stay within your spending limits:',
            faq4Points: [
                'Set monthly and weekly budgets in Settings',
                'Configure alert thresholds (50%, 75%, 90%, 100%)',
                'Receive notifications when you reach each threshold',
                'Alerts are calculated in real-time as you add expenses',
                'Make sure notifications are enabled in iOS Settings'
            ],

            faq5Q: 'What are cost centers and how do I use them?',
            faq5A: 'Cost centers help you track which payment method you used for each expense:',
            faq5Points: [
                'Create cost centers for bank accounts, credit cards, cash, e-wallets, etc.',
                'Assign a cost center when adding each expense',
                'View spending breakdown by cost center in the dashboard',
                'Perfect for couples managing both joint and separate accounts'
            ],

            faq6Q: 'Can I track recurring expenses like subscriptions?',
            faq6A: 'Yes! UangRumah supports automatic recurring expense tracking:',
            faq6Points: [
                'Add an expense and mark it as "Recurring"',
                'Choose frequency: Daily, Weekly, Monthly, or Yearly',
                'Set start and optional end dates',
                'The app will automatically track these expenses going forward',
                'Perfect for subscriptions, bills, and regular payments'
            ],

            faq7Q: 'What is Privacy Mode?',
            faq7A: 'Privacy Mode helps protect your financial information in public:',
            faq7Points: [
                'Dashboard Blur: Blurs sensitive information on the main screen',
                'Amount Censoring: Hides specific amounts with asterisks',
                'Toggle on/off quickly from the dashboard',
                'Set default privacy mode in Settings'
            ],

            faq8Q: 'Is my financial data secure?',
            faq8A: 'Yes, we take security seriously:',
            faq8Points: [
                'All data is stored locally on your device by default',
                'No data is sent to external servers (except your personal iCloud if enabled)',
                'Data is encrypted during iCloud sync',
                'We never share your data with third parties',
                'Use device passcode or Face ID/Touch ID for additional security'
            ],
            faq8Extra: 'Read our Privacy Policy for complete details.',

            faq9Q: 'Does UangRumah work offline?',
            faq9A: 'Yes! UangRumah works fully offline:',
            faq9Points: [
                'Add, edit, and delete expenses without internet',
                'View all dashboard features and reports',
                'All data is stored locally on your device',
                'Internet only needed for iCloud sync (if enabled)'
            ],

            faq10Q: 'Is UangRumah free?',
            faq10A: 'Currently, UangRumah version 0.1.0 Beta is completely free to use with all features included. Future versions may introduce optional premium features, but we will always maintain a robust free tier.',

            troubleshootingSectionTitle: 'Troubleshooting Guide',

            // Troubleshooting Items
            trouble1Title: 'iCloud Sync Not Working',
            trouble1Desc: 'If your data isn\'t syncing between devices, try these steps:',
            trouble1Steps: [
                'Verify you\'re signed in to the same iCloud account on all devices',
                'Check iOS Settings > [Your Name] > iCloud and ensure UangRumah is enabled',
                'Make sure you have an active internet connection',
                'Check available iCloud storage (Settings > [Your Name] > iCloud > Manage Storage)',
                'Force close and reopen the app on both devices',
                'Try toggling iCloud sync off and on again',
                'Restart your device'
            ],

            trouble2Title: 'Notifications Not Appearing',
            trouble2Desc: 'If you\'re not receiving budget alerts or expense nudges:',
            trouble2Steps: [
                'Go to iOS Settings > Notifications > UangRumah',
                'Ensure "Allow Notifications" is enabled',
                'Check that alert styles are configured (Lock Screen, Notification Center, Banners)',
                'Verify notification settings within the UangRumah app (Settings > Notifications)',
                'Make sure Do Not Disturb / Focus mode isn\'t blocking notifications',
                'Check that you\'ve set up budget thresholds or reminder schedules'
            ],

            trouble3Title: 'Dashboard Data Not Updating',
            trouble3Desc: 'If your dashboard shows outdated information:',
            trouble3Steps: [
                'Pull down on the dashboard to refresh manually',
                'Close and reopen the app completely',
                'Check if expenses were added to the correct date',
                'Verify your budget period settings (monthly vs weekly)',
                'If using iCloud sync, wait a few minutes for synchronization'
            ],

            trouble4Title: 'Data Not Saving',
            trouble4Desc: 'If your expenses or changes aren\'t being saved:',
            trouble4Steps: [
                'Make sure all required fields are filled in when adding expenses',
                'Check available device storage (Settings > General > iPhone Storage)',
                'Ensure the app has necessary permissions in iOS Settings',
                'Update to the latest version of UangRumah from the App Store',
                'Restart the app and try again',
                'If problem persists, export your data and contact support'
            ],

            trouble5Title: 'App Crashes or Freezes',
            trouble5Desc: 'If UangRumah is unstable or crashing:',
            trouble5Steps: [
                'Force close the app and reopen it',
                'Restart your iPhone or iPad',
                'Update to the latest iOS version (Settings > General > Software Update)',
                'Update UangRumah to the latest version from the App Store',
                'Free up device storage if running low',
                'If crashes persist, export your data and reinstall the app',
                'Report the issue to our support team with crash details'
            ],

            trouble6Title: 'Missing Expenses',
            trouble6Desc: 'If you can\'t find expenses you previously added:',
            trouble6Steps: [
                'Use the search function to find specific expenses',
                'Check date filters - expenses may be outside your current view',
                'Look in the expense history or version history',
                'If using iCloud sync, check on another device',
                'Pull to refresh the expense list',
                'Review if expenses were accidentally deleted (check recently deleted if available)'
            ],

            trouble7Title: 'Export Problems',
            trouble7Desc: 'If you\'re having issues exporting data:',
            trouble7Steps: [
                'Ensure you have expenses in the selected date range',
                'Check available device storage for PDF/CSV generation',
                'Try a smaller date range if exporting large amounts of data',
                'Make sure you have apps that can handle PDF or CSV files',
                'Try a different export format (PDF vs CSV)',
                'Update the app to the latest version'
            ],

            betaNotice: 'Beta Version Notice: UangRumah is currently in beta (v0.1.0). Some bugs and issues are expected. Your feedback helps us improve! Please report any problems to support@uangrumah.com.',

            stillNeedHelpTitle: 'Still Need Help?',
            stillNeedHelpDesc: 'Our support team is here to assist you with any questions or issues.',
            contactSupportButton: 'Contact Support',
        },
    },

    id: {
        // Common
        common: {
            beta: 'Beta',
            home: 'Beranda',
            features: 'Fitur',
            howItWorks: 'Cara Kerja',
            requirements: 'Persyaratan',
            download: 'Unduh',
            privacy: 'Privasi',
            terms: 'Ketentuan',
            support: 'Dukungan',
            contact: 'Kontak',
            privacyPolicy: 'Kebijakan Privasi',
            termsConditions: 'Syarat & Ketentuan',
            allRightsReserved: 'Hak cipta dilindungi',
        },

        // Navigation
        nav: {
            features: 'Fitur',
            howItWorks: 'Cara Kerja',
            requirements: 'Persyaratan',
            download: 'Unduh',
        },

        // Home Page
        home: {
            metaDescription: 'UangRumah - Pelacak pengeluaran rumah tangga untuk pasangan Indonesia. Lacak pengeluaran, kelola anggaran, dan kendalikan keuangan Anda dengan pelacakan yang sederhana dan efektif.',
            title: 'UangRumah - Pelacak Pengeluaran Rumah Tangga untuk Pasangan Indonesia',
            heroTitle: 'Pelacak Pengeluaran Rumah Tangga untuk Pasangan Indonesia',
            heroSubtitle: 'Kendalikan keuangan Anda dengan pelacakan pengeluaran yang sederhana dan efektif. Lacak pengeluaran harian, kelola anggaran, pantau berbagai metode pembayaran, dan dapatkan wawasan tentang kebiasaan keuangan Anda dengan visualisasi yang indah.',
            ctaButton: 'Minta Undangan',

            // Features Section
            featuresTitle: 'Fitur Lengkap',
            featuresSubtitle: 'Semua yang Anda butuhkan untuk mengelola keuangan rumah tangga secara efektif',

            // Budget Management
            budgetManagementTitle: 'Manajemen Anggaran',
            monthlyWeeklyBudgets: 'Anggaran Bulanan & Mingguan',
            monthlyWeeklyBudgetsDesc: 'Tetapkan batas pengeluaran bulanan dengan perhitungan tunjangan harian otomatis. Konfigurasikan anggaran mingguan untuk kontrol pengeluaran yang lebih detail.',
            smartAlerts: 'Peringatan Pintar',
            smartAlertsDesc: 'Dapatkan notifikasi pada ambang batas yang dapat dikonfigurasi (50%, 75%, 90%, 100%) sehingga Anda tidak pernah berlebihan pengeluaran secara tidak terduga.',
            budgetProgressTracking: 'Pelacakan Kemajuan Anggaran',
            budgetProgressTrackingDesc: 'Pemantauan real-time dengan indikator visual yang menunjukkan pengeluaran Anda vs anggaran dengan status kode warna.',

            // Expense Tracking
            expenseTrackingTitle: 'Pelacakan Pengeluaran',
            quickAdd: 'Tambah Cepat',
            quickAddDesc: 'Mudah mencatat pengeluaran dengan nama, vendor, jumlah, kategori, dan pusat biaya. Entri sederhana dan cepat untuk pasangan yang sibuk.',
            recurringExpenses: 'Pengeluaran Berulang',
            recurringExpensesDesc: 'Pelacakan otomatis untuk langganan dan tagihan reguler dengan frekuensi harian, mingguan, bulanan, atau tahunan.',
            versionHistory: 'Riwayat Versi',
            versionHistoryDesc: 'Jejak audit lengkap untuk semua modifikasi pengeluaran. Tidak akan pernah kehilangan jejak perubahan pada catatan keuangan Anda.',
            searchFilter: 'Cari & Filter',
            searchFilterDesc: 'Pencarian multi-bidang dengan filter lanjutan berdasarkan tanggal, jumlah, kategori, dan pusat biaya untuk akses cepat.',
            vendorTracking: 'Pelacakan Vendor',
            vendorTrackingDesc: 'Saran vendor pintar berdasarkan riwayat penggunaan membuat entri pengeluaran lebih cepat.',

            // Dashboard & Analytics
            dashboardAnalyticsTitle: 'Dasbor & Analitik',
            categoryBreakdown: 'Rincian Kategori',
            categoryBreakdownDesc: 'Diagram lingkaran visual yang menunjukkan distribusi pengeluaran di seluruh kategori dengan persentase dan jumlah.',
            costCenterReports: 'Laporan Pusat Biaya',
            costCenterReportsDesc: 'Lacak pengeluaran berdasarkan metode pembayaran - tunai, kartu kredit, e-wallet, transfer bank. Sempurna untuk pasangan yang mengelola rekening bersama dan terpisah.',
            privacyMode: 'Mode Privasi',
            privacyModeDesc: 'Beralih visibilitas data sensitif dengan blur dasbor dan penyensoran jumlah untuk perlindungan di tempat umum.',
            realtimeUpdates: 'Pembaruan Real-time',
            realtimeUpdatesDesc: 'Tarik untuk menyegarkan untuk sinkronisasi data instan di semua perangkat Anda melalui iCloud.',

            // Reminders & Notifications
            remindersNotificationsTitle: 'Pengingat & Notifikasi',
            expenseNudge: 'Pengingat Pengeluaran',
            expenseNudgeDesc: 'Pengingat harian untuk mencatat pengeluaran dengan frekuensi yang dapat disesuaikan: Harian, Setiap 2 Hari, Hanya Hari Kerja, atau jadwal Kustom.',
            budgetAlerts: 'Peringatan Anggaran',
            budgetAlertsDesc: 'Notifikasi otomatis ketika mendekati batas pengeluaran pada ambang batas yang Anda konfigurasi.',
            monthlySummary: 'Ringkasan Bulanan',
            monthlySummaryDesc: 'Terima notifikasi ringkasan pengeluaran bulanan untuk tetap mengetahui kebiasaan keuangan Anda.',

            // Data Export
            dataExportTitle: 'Ekspor Data',
            pdfReports: 'Laporan PDF',
            pdfReportsDesc: 'Laporan format profesional dengan ringkasan pengeluaran dan rincian harian untuk berbagi atau mencetak.',
            csvExport: 'Ekspor CSV',
            csvExportDesc: 'Ekspor data untuk analisis di Excel, Numbers, atau Google Sheets dengan kompatibilitas data penuh.',
            flexibleDateRanges: 'Rentang Tanggal Fleksibel',
            flexibleDateRangesDesc: 'Ekspor semua waktu, bulan ini, bulan lalu, atau rentang tanggal kustom untuk memenuhi kebutuhan pelaporan Anda.',

            // Customization
            customizationTitle: 'Kustomisasi',
            customCategories: 'Kategori Kustom',
            customCategoriesDesc: 'Buat kategori pengeluaran kustom dengan ikon SF Symbol dan kode warna untuk menyesuaikan pola pengeluaran Anda.',
            costCenters: 'Pusat Biaya',
            costCentersDesc: 'Kelola metode pembayaran termasuk rekening bank, kartu kredit, tunai, dan e-wallet dengan mudah.',
            privacySettings: 'Pengaturan Privasi',
            privacySettingsDesc: 'Konfigurasikan default visibilitas dasbor dan lindungi data keuangan Anda dengan opsi privasi yang dapat disesuaikan.',
            builtForIndonesia: 'Dibuat untuk Indonesia',
            builtForIndonesiaDesc: 'Dukungan penuh untuk mata uang Rupiah (IDR) dan dirancang khusus untuk manajemen pengeluaran rumah tangga Indonesia.',

            // How It Works
            howItWorksTitle: 'Cara Kerja',
            howItWorksSubtitle: 'Mulai mengelola keuangan rumah tangga Anda dalam langkah sederhana',
            step1Title: 'Tetapkan Anggaran Anda',
            step1Desc: 'Konfigurasikan anggaran bulanan dan mingguan dengan ambang batas peringatan. Siapkan pengaturan privasi dan pusat biaya yang Anda sukai.',
            step2Title: 'Lacak Pengeluaran',
            step2Desc: 'Tambahkan pengeluaran harian dengan cepat dengan pelacakan vendor, kategori, dan pusat biaya. Aktifkan pengingat pengeluaran agar tidak lupa.',
            step3Title: 'Pantau & Analisis',
            step3Desc: 'Lihat wawasan dasbor dengan rincian kategori, laporan pusat biaya, dan kemajuan anggaran. Ekspor laporan bila diperlukan.',
            step4Title: 'Tetap di Jalur',
            step4Desc: 'Terima peringatan pintar ketika mendekati batas anggaran. Tinjau ringkasan bulanan dan sesuaikan kebiasaan pengeluaran sesuai kebutuhan.',

            // Requirements
            requirementsTitle: 'Persyaratan',
            requirementsSubtitle: 'Spesifikasi teknis untuk UangRumah',
            platform: 'Platform',
            platformValue: 'iOS 16.0+',
            devices: 'Perangkat',
            devicesValue: 'iPhone & iPad',
            technology: 'Teknologi',
            technologyValue: 'SwiftUI',
            sync: 'Sinkronisasi',
            syncValue: 'iCloud',
            currency: 'Mata Uang',
            currencyValue: 'IDR (Rupiah)',
            storage: 'Penyimpanan',
            storageValue: 'Lokal + Cloud',

            // Download CTA
            downloadCtaTitle: 'Siap Mengendalikan Keuangan Anda?',
            downloadCtaSubtitle: 'Bergabunglah dengan pasangan yang telah meningkatkan kesehatan keuangan mereka dengan UangRumah',
            downloadCtaButton: 'Minta Undangan',
        },

        // Contact Page
        contact: {
            metaDescription: 'Hubungi UangRumah - Hubungi tim dukungan kami untuk bantuan dengan aplikasi pelacak pengeluaran.',
            title: 'Hubungi Kami - UangRumah',
            heroTitle: 'Hubungi Kami',
            heroSubtitle: 'Ada pertanyaan atau butuh bantuan? Kami di sini untuk membantu Anda.',

            emailSupportTitle: 'Dukungan Email',
            emailSupportDesc: 'Kirimkan email kepada kami dan kami akan merespons dalam 1-2 hari kerja.',

            websiteTitle: 'Situs Web',
            websiteDesc: 'Kunjungi situs web kami untuk informasi dan pembaruan lebih lanjut.',

            supportCenterTitle: 'Pusat Dukungan',
            supportCenterDesc: 'Periksa FAQ dan panduan pemecahan masalah kami untuk jawaban cepat.',
            visitSupport: 'Kunjungi Dukungan',

            supportInfoTitle: 'Informasi Dukungan',
            location: 'Lokasi',
            locationValue: 'Jakarta, Indonesia',
            responseTime: 'Waktu Respons',
            responseTimeValue: '1-2 Hari Kerja',
            businessHours: 'Jam Kerja',
            businessHoursValue: 'Sen-Jum, 9 Pagi-5 Sore WIB',
            languages: 'Bahasa',
            languagesValue: 'Bahasa Inggris & Indonesia',

            betaProgramNote: 'Program Beta: UangRumah saat ini dalam beta (v0.1.0). Kami sangat menghargai umpan balik dan laporan bug Anda untuk membantu kami meningkatkan aplikasi. Terima kasih telah menjadi pengguna awal!',

            beforeContactTitle: 'Sebelum Menghubungi Kami',
            beforeContactSubtitle: 'Anda mungkin menemukan jawaban lebih cepat dengan memeriksa sumber daya ini terlebih dahulu:',

            faqTitle: 'Pertanyaan yang Sering Diajukan',
            faqDesc: 'Temukan jawaban untuk pertanyaan umum tentang anggaran, pengeluaran, sinkronisasi, dan lainnya.',
            viewFaq: 'Lihat FAQ',

            troubleshootingTitle: 'Panduan Pemecahan Masalah',
            troubleshootingDesc: 'Solusi langkah demi langkah untuk masalah teknis umum dan masalah.',
            getHelp: 'Dapatkan Bantuan',

            privacySecurityTitle: 'Privasi & Keamanan',
            privacySecurityDesc: 'Pelajari bagaimana kami melindungi data Anda dan menghormati privasi Anda.',

            whatToIncludeTitle: 'Apa yang Harus Disertakan dalam Permintaan Dukungan Anda',
            whatToIncludeSubtitle: 'Bantu kami membantu Anda lebih cepat dengan menyertakan informasi ini:',

            deviceInfoTitle: 'Informasi Perangkat',
            deviceInfoDesc: '• Model iPhone atau iPad<br>• Nomor versi iOS<br>• Ruang penyimpanan yang tersedia',

            appDetailsTitle: 'Detail Aplikasi',
            appDetailsDesc: '• Versi UangRumah<br>• Kapan masalah dimulai<br>• Frekuensi masalah',

            problemDescTitle: 'Deskripsi Masalah',
            problemDescDesc: '• Apa yang Anda coba lakukan<br>• Apa yang terjadi sebagai gantinya<br>• Pesan kesalahan apa pun',

            stepsToReproduceTitle: 'Langkah-langkah untuk Mereproduksi',
            stepsToReproduceDesc: '• Tindakan langkah demi langkah<br>• Screenshot (jika ada)<br>• Cara membuat ulang masalah',
        },

        // Support Page
        support: {
            metaDescription: 'Dukungan UangRumah - Dapatkan bantuan dengan masalah umum dan pemecahan masalah untuk aplikasi pelacak pengeluaran.',
            title: 'Dukungan - UangRumah',
            heroTitle: 'Pusat Dukungan',
            heroSubtitle: 'Temukan jawaban untuk pertanyaan umum dan dapatkan bantuan dengan UangRumah.',

            gettingStartedTitle: 'Memulai',
            gettingStartedDesc: 'Pelajari dasar-dasar pengaturan anggaran, menambahkan pengeluaran, dan menavigasi aplikasi.',

            troubleshootingTitle: 'Pemecahan Masalah',
            troubleshootingDesc: 'Selesaikan masalah umum dengan sinkronisasi, notifikasi, dan manajemen data.',

            contactUsTitle: 'Hubungi Kami',
            contactUsDesc: 'Tidak menemukan apa yang Anda cari? Hubungi tim dukungan kami.',

            systemRequirements: 'Persyaratan Sistem',
            systemRequirementsValue: 'Platform: iOS 16.0 atau lebih baru | Perangkat: iPhone & iPad | Versi: 0.1.0 Beta | Penyimpanan: iCloud (opsional)',

            faqSectionTitle: 'Pertanyaan yang Sering Diajukan',

            // FAQ Items
            faq1Q: 'Bagaimana cara memulai dengan UangRumah?',
            faq1A: 'Memulai sangat mudah:',
            faq1Steps: [
                'Unduh UangRumah dari App Store',
                'Siapkan anggaran bulanan dan mingguan Anda di Pengaturan',
                'Buat kategori kustom dan pusat biaya untuk pengeluaran Anda',
                'Mulai menambahkan pengeluaran dengan mengetuk tombol "+"',
                'Aktifkan pengingat pengeluaran untuk tetap di jalur'
            ],

            faq2Q: 'Bagaimana cara kerja sinkronisasi iCloud?',
            faq2A: 'Sinkronisasi iCloud menjaga data Anda tetap tersinkronisasi di semua perangkat Apple Anda:',
            faq2Points: [
                'Aktifkan sinkronisasi iCloud di Pengaturan iOS > [Nama Anda] > iCloud',
                'Pastikan UangRumah memiliki akses iCloud yang diaktifkan',
                'Data pengeluaran Anda akan secara otomatis disinkronkan antara iPhone dan iPad',
                'Perubahan yang dilakukan pada satu perangkat muncul di perangkat lain dalam beberapa menit',
                'Memerlukan koneksi internet aktif untuk sinkronisasi'
            ],

            faq3Q: 'Bisakah saya mengekspor data pengeluaran saya?',
            faq3A: 'Ya! UangRumah mendukung ekspor data dalam dua format:',
            faq3Points: [
                'Laporan PDF: Laporan format profesional dengan ringkasan pengeluaran dan rincian harian',
                'File CSV: Format kompatibel spreadsheet untuk Excel, Numbers, atau Google Sheets'
            ],
            faq3Extra: 'Untuk mengekspor: Buka Pengaturan > Ekspor Data > Pilih format dan rentang tanggal > Bagikan atau simpan file.',

            faq4Q: 'Bagaimana cara kerja peringatan anggaran?',
            faq4A: 'Peringatan anggaran membantu Anda tetap dalam batas pengeluaran Anda:',
            faq4Points: [
                'Tetapkan anggaran bulanan dan mingguan di Pengaturan',
                'Konfigurasikan ambang batas peringatan (50%, 75%, 90%, 100%)',
                'Terima notifikasi ketika Anda mencapai setiap ambang batas',
                'Peringatan dihitung secara real-time saat Anda menambahkan pengeluaran',
                'Pastikan notifikasi diaktifkan di Pengaturan iOS'
            ],

            faq5Q: 'Apa itu pusat biaya dan bagaimana cara menggunakannya?',
            faq5A: 'Pusat biaya membantu Anda melacak metode pembayaran mana yang Anda gunakan untuk setiap pengeluaran:',
            faq5Points: [
                'Buat pusat biaya untuk rekening bank, kartu kredit, tunai, e-wallet, dll.',
                'Tetapkan pusat biaya saat menambahkan setiap pengeluaran',
                'Lihat rincian pengeluaran berdasarkan pusat biaya di dasbor',
                'Sempurna untuk pasangan yang mengelola rekening bersama dan terpisah'
            ],

            faq6Q: 'Bisakah saya melacak pengeluaran berulang seperti langganan?',
            faq6A: 'Ya! UangRumah mendukung pelacakan pengeluaran berulang otomatis:',
            faq6Points: [
                'Tambahkan pengeluaran dan tandai sebagai "Berulang"',
                'Pilih frekuensi: Harian, Mingguan, Bulanan, atau Tahunan',
                'Tetapkan tanggal mulai dan akhir opsional',
                'Aplikasi akan secara otomatis melacak pengeluaran ini ke depan',
                'Sempurna untuk langganan, tagihan, dan pembayaran reguler'
            ],

            faq7Q: 'Apa itu Mode Privasi?',
            faq7A: 'Mode Privasi membantu melindungi informasi keuangan Anda di tempat umum:',
            faq7Points: [
                'Blur Dasbor: Mengaburkan informasi sensitif di layar utama',
                'Penyensoran Jumlah: Menyembunyikan jumlah spesifik dengan tanda bintang',
                'Beralih dengan cepat dari dasbor',
                'Tetapkan mode privasi default di Pengaturan'
            ],

            faq8Q: 'Apakah data keuangan saya aman?',
            faq8A: 'Ya, kami menganggap serius keamanan:',
            faq8Points: [
                'Semua data disimpan secara lokal di perangkat Anda secara default',
                'Tidak ada data yang dikirim ke server eksternal (kecuali iCloud pribadi Anda jika diaktifkan)',
                'Data dienkripsi selama sinkronisasi iCloud',
                'Kami tidak pernah membagikan data Anda dengan pihak ketiga',
                'Gunakan kode sandi perangkat atau Face ID/Touch ID untuk keamanan tambahan'
            ],
            faq8Extra: 'Baca Kebijakan Privasi kami untuk detail lengkap.',

            faq9Q: 'Apakah UangRumah berfungsi offline?',
            faq9A: 'Ya! UangRumah berfungsi sepenuhnya offline:',
            faq9Points: [
                'Tambahkan, edit, dan hapus pengeluaran tanpa internet',
                'Lihat semua fitur dasbor dan laporan',
                'Semua data disimpan secara lokal di perangkat Anda',
                'Internet hanya diperlukan untuk sinkronisasi iCloud (jika diaktifkan)'
            ],

            faq10Q: 'Apakah UangRumah gratis?',
            faq10A: 'Saat ini, UangRumah versi 0.1.0 Beta sepenuhnya gratis untuk digunakan dengan semua fitur termasuk. Versi masa depan mungkin memperkenalkan fitur premium opsional, tetapi kami akan selalu mempertahankan tingkat gratis yang kuat.',

            troubleshootingSectionTitle: 'Panduan Pemecahan Masalah',

            // Troubleshooting Items
            trouble1Title: 'Sinkronisasi iCloud Tidak Berfungsi',
            trouble1Desc: 'Jika data Anda tidak disinkronkan antar perangkat, coba langkah-langkah berikut:',
            trouble1Steps: [
                'Verifikasi Anda masuk ke akun iCloud yang sama di semua perangkat',
                'Periksa Pengaturan iOS > [Nama Anda] > iCloud dan pastikan UangRumah diaktifkan',
                'Pastikan Anda memiliki koneksi internet aktif',
                'Periksa penyimpanan iCloud yang tersedia (Pengaturan > [Nama Anda] > iCloud > Kelola Penyimpanan)',
                'Tutup paksa dan buka kembali aplikasi di kedua perangkat',
                'Coba matikan dan hidupkan kembali sinkronisasi iCloud',
                'Restart perangkat Anda'
            ],

            trouble2Title: 'Notifikasi Tidak Muncul',
            trouble2Desc: 'Jika Anda tidak menerima peringatan anggaran atau pengingat pengeluaran:',
            trouble2Steps: [
                'Buka Pengaturan iOS > Notifikasi > UangRumah',
                'Pastikan "Izinkan Notifikasi" diaktifkan',
                'Periksa bahwa gaya peringatan dikonfigurasi (Layar Kunci, Pusat Notifikasi, Spanduk)',
                'Verifikasi pengaturan notifikasi dalam aplikasi UangRumah (Pengaturan > Notifikasi)',
                'Pastikan mode Jangan Ganggu / Fokus tidak memblokir notifikasi',
                'Periksa bahwa Anda telah menyiapkan ambang batas anggaran atau jadwal pengingat'
            ],

            trouble3Title: 'Data Dasbor Tidak Diperbarui',
            trouble3Desc: 'Jika dasbor Anda menampilkan informasi yang ketinggalan zaman:',
            trouble3Steps: [
                'Tarik ke bawah pada dasbor untuk menyegarkan secara manual',
                'Tutup dan buka kembali aplikasi sepenuhnya',
                'Periksa apakah pengeluaran ditambahkan ke tanggal yang benar',
                'Verifikasi pengaturan periode anggaran Anda (bulanan vs mingguan)',
                'Jika menggunakan sinkronisasi iCloud, tunggu beberapa menit untuk sinkronisasi'
            ],

            trouble4Title: 'Data Tidak Tersimpan',
            trouble4Desc: 'Jika pengeluaran atau perubahan Anda tidak disimpan:',
            trouble4Steps: [
                'Pastikan semua bidang yang diperlukan diisi saat menambahkan pengeluaran',
                'Periksa penyimpanan perangkat yang tersedia (Pengaturan > Umum > Penyimpanan iPhone)',
                'Pastikan aplikasi memiliki izin yang diperlukan di Pengaturan iOS',
                'Perbarui ke versi terbaru UangRumah dari App Store',
                'Restart aplikasi dan coba lagi',
                'Jika masalah berlanjut, ekspor data Anda dan hubungi dukungan'
            ],

            trouble5Title: 'Aplikasi Crash atau Freeze',
            trouble5Desc: 'Jika UangRumah tidak stabil atau crash:',
            trouble5Steps: [
                'Tutup paksa aplikasi dan buka kembali',
                'Restart iPhone atau iPad Anda',
                'Perbarui ke versi iOS terbaru (Pengaturan > Umum > Pembaruan Perangkat Lunak)',
                'Perbarui UangRumah ke versi terbaru dari App Store',
                'Bebaskan penyimpanan perangkat jika hampir habis',
                'Jika crash berlanjut, ekspor data Anda dan instal ulang aplikasi',
                'Laporkan masalah ke tim dukungan kami dengan detail crash'
            ],

            trouble6Title: 'Pengeluaran Hilang',
            trouble6Desc: 'Jika Anda tidak dapat menemukan pengeluaran yang sebelumnya Anda tambahkan:',
            trouble6Steps: [
                'Gunakan fungsi pencarian untuk menemukan pengeluaran spesifik',
                'Periksa filter tanggal - pengeluaran mungkin di luar tampilan Anda saat ini',
                'Lihat di riwayat pengeluaran atau riwayat versi',
                'Jika menggunakan sinkronisasi iCloud, periksa di perangkat lain',
                'Tarik untuk menyegarkan daftar pengeluaran',
                'Tinjau apakah pengeluaran tidak sengaja dihapus (periksa yang baru dihapus jika tersedia)'
            ],

            trouble7Title: 'Masalah Ekspor',
            trouble7Desc: 'Jika Anda mengalami masalah mengekspor data:',
            trouble7Steps: [
                'Pastikan Anda memiliki pengeluaran dalam rentang tanggal yang dipilih',
                'Periksa penyimpanan perangkat yang tersedia untuk generasi PDF/CSV',
                'Coba rentang tanggal yang lebih kecil jika mengekspor data dalam jumlah besar',
                'Pastikan Anda memiliki aplikasi yang dapat menangani file PDF atau CSV',
                'Coba format ekspor yang berbeda (PDF vs CSV)',
                'Perbarui aplikasi ke versi terbaru'
            ],

            betaNotice: 'Pemberitahuan Versi Beta: UangRumah saat ini dalam beta (v0.1.0). Beberapa bug dan masalah diharapkan. Umpan balik Anda membantu kami meningkatkan! Silakan laporkan masalah apa pun ke support@uangrumah.com.',

            stillNeedHelpTitle: 'Masih Butuh Bantuan?',
            stillNeedHelpDesc: 'Tim dukungan kami di sini untuk membantu Anda dengan pertanyaan atau masalah apa pun.',
            contactSupportButton: 'Hubungi Dukungan',
        },
    }
};
