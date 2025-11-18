// Language Switcher for UangRumah
(function() {
    'use strict';

    // Default language
    const DEFAULT_LANG = 'en';
    const STORAGE_KEY = 'uangrumah_language';

    // Get current language from localStorage or default
    function getCurrentLanguage() {
        return localStorage.getItem(STORAGE_KEY) || DEFAULT_LANG;
    }

    // Set language in localStorage
    function setLanguage(lang) {
        localStorage.setItem(STORAGE_KEY, lang);
    }

    // Get nested translation value using dot notation (e.g., 'home.heroTitle')
    function getTranslation(key, lang) {
        const keys = key.split('.');
        let value = translations[lang];

        for (const k of keys) {
            if (value && typeof value === 'object') {
                value = value[k];
            } else {
                return key; // Return key if translation not found
            }
        }

        return value || key;
    }

    // Apply translations to the page
    function applyTranslations(lang) {
        // Update HTML lang attribute
        document.documentElement.lang = lang;

        // Update all elements with data-i18n attribute
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            const translation = getTranslation(key, lang);

            // Check if element is an input/textarea (update placeholder)
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translation;
            } else {
                element.textContent = translation;
            }
        });

        // Update all elements with data-i18n-html attribute (for HTML content)
        document.querySelectorAll('[data-i18n-html]').forEach(element => {
            const key = element.getAttribute('data-i18n-html');
            const translation = getTranslation(key, lang);
            element.innerHTML = translation;
        });

        // Update meta description
        const metaDesc = document.querySelector('meta[name="description"]');
        const pageType = document.body.getAttribute('data-page');
        if (metaDesc && pageType) {
            const descKey = `${pageType}.metaDescription`;
            const translation = getTranslation(descKey, lang);
            if (translation !== descKey) {
                metaDesc.setAttribute('content', translation);
            }
        }

        // Update page title
        const titleElement = document.querySelector('title');
        if (titleElement && pageType) {
            const titleKey = `${pageType}.title`;
            const translation = getTranslation(titleKey, lang);
            if (translation !== titleKey) {
                titleElement.textContent = translation;
            }
        }

        // Update language switcher active state
        updateLanguageSwitcherState(lang);
    }

    // Update language switcher UI to show active language
    function updateLanguageSwitcherState(lang) {
        document.querySelectorAll('.lang-option').forEach(option => {
            const optionLang = option.getAttribute('data-lang');
            if (optionLang === lang) {
                option.classList.add('active');
            } else {
                option.classList.remove('active');
            }
        });

        // Update mobile dropdown if exists
        const mobileSelect = document.getElementById('mobile-lang-select');
        if (mobileSelect) {
            mobileSelect.value = lang;
        }
    }

    // Switch language
    function switchLanguage(newLang) {
        if (newLang !== getCurrentLanguage()) {
            setLanguage(newLang);
            applyTranslations(newLang);
        }
    }

    // Initialize language switcher
    function initLanguageSwitcher() {
        const currentLang = getCurrentLanguage();

        // Apply translations on page load
        applyTranslations(currentLang);

        // Add click handlers to language options
        document.querySelectorAll('.lang-option').forEach(option => {
            option.addEventListener('click', function(e) {
                e.preventDefault();
                const lang = this.getAttribute('data-lang');
                switchLanguage(lang);
            });
        });

        // Add change handler to mobile select
        const mobileSelect = document.getElementById('mobile-lang-select');
        if (mobileSelect) {
            mobileSelect.addEventListener('change', function() {
                switchLanguage(this.value);
            });
        }
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initLanguageSwitcher);
    } else {
        initLanguageSwitcher();
    }

    // Expose switchLanguage globally for debugging
    window.switchLanguage = switchLanguage;
})();
