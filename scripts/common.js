/**
 * UangRumah - Common JavaScript
 * Shared functionality for all pages
 */
(function() {
    'use strict';

    /**
     * Mobile Menu Module
     * Handles the hamburger menu for mobile devices
     */
    const MobileMenu = {
        elements: {
            btn: null,
            menu: null,
            overlay: null,
            closeBtn: null,
            links: null
        },

        init: function() {
            this.cacheElements();
            if (this.elements.menu) {
                this.bindEvents();
            }
        },

        cacheElements: function() {
            this.elements.btn = document.querySelector('.mobile-menu-btn');
            this.elements.menu = document.getElementById('mobile-menu');
            this.elements.overlay = document.getElementById('mobile-menu-overlay');
            this.elements.closeBtn = document.getElementById('mobile-menu-close');
            this.elements.links = document.querySelectorAll('.mobile-menu-nav a');
        },

        bindEvents: function() {
            const self = this;

            if (this.elements.btn) {
                this.elements.btn.addEventListener('click', function() {
                    self.open();
                });
            }

            if (this.elements.closeBtn) {
                this.elements.closeBtn.addEventListener('click', function() {
                    self.close();
                });
            }

            if (this.elements.overlay) {
                this.elements.overlay.addEventListener('click', function() {
                    self.close();
                });
            }

            // Close menu when clicking on nav links
            this.elements.links.forEach(function(link) {
                link.addEventListener('click', function() {
                    self.close();
                });
            });

            // Close menu on escape key
            document.addEventListener('keydown', function(e) {
                if (e.key === 'Escape' && self.isOpen()) {
                    self.close();
                }
            });
        },

        open: function() {
            if (this.elements.menu) {
                this.elements.menu.classList.add('active');
            }
            if (this.elements.overlay) {
                this.elements.overlay.classList.add('active');
            }
            document.body.classList.add('menu-open');
        },

        close: function() {
            if (this.elements.menu) {
                this.elements.menu.classList.remove('active');
            }
            if (this.elements.overlay) {
                this.elements.overlay.classList.remove('active');
            }
            document.body.classList.remove('menu-open');
        },

        isOpen: function() {
            return this.elements.menu && this.elements.menu.classList.contains('active');
        }
    };

    /**
     * Smooth Scroll Module
     * Handles smooth scrolling for anchor links
     */
    const SmoothScroll = {
        init: function() {
            document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
                anchor.addEventListener('click', function(e) {
                    const targetId = this.getAttribute('href');

                    // Skip if it's just "#" or empty
                    if (targetId === '#' || targetId === '') return;

                    const targetElement = document.querySelector(targetId);

                    if (targetElement) {
                        e.preventDefault();
                        const headerOffset = 80;
                        const elementPosition = targetElement.getBoundingClientRect().top;
                        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                        window.scrollTo({
                            top: offsetPosition,
                            behavior: 'smooth'
                        });
                    }
                });
            });
        }
    };

    /**
     * Header Scroll Effect Module
     * Adds shadow to header on scroll
     */
    const HeaderScroll = {
        header: null,

        init: function() {
            this.header = document.querySelector('header');
            if (this.header) {
                this.bindEvents();
                this.update(); // Check initial state
            }
        },

        bindEvents: function() {
            const self = this;
            let ticking = false;

            window.addEventListener('scroll', function() {
                if (!ticking) {
                    window.requestAnimationFrame(function() {
                        self.update();
                        ticking = false;
                    });
                    ticking = true;
                }
            });
        },

        update: function() {
            if (window.scrollY > 10) {
                this.header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
            } else {
                this.header.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.05)';
            }
        }
    };

    /**
     * Initialize all modules when DOM is ready
     */
    function init() {
        MobileMenu.init();
        SmoothScroll.init();
        HeaderScroll.init();
    }

    // Run init when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    // Expose modules globally for debugging if needed
    window.UangRumah = {
        MobileMenu: MobileMenu,
        SmoothScroll: SmoothScroll,
        HeaderScroll: HeaderScroll
    };
})();
