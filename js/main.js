/**
 * Main JavaScript for ISCU Tools Website
 * Handles navigation, smooth scrolling, and mobile menu
 */

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {

    // ===================================
    // Mobile Menu Toggle
    // ===================================
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mainNav = document.querySelector('.main-nav');

    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            mainNav.classList.toggle('active');
            this.classList.toggle('active');
        });
    }

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        const isClickInsideNav = mainNav.contains(event.target);
        const isClickOnToggle = mobileMenuToggle.contains(event.target);

        if (!isClickInsideNav && !isClickOnToggle && mainNav.classList.contains('active')) {
            mainNav.classList.remove('active');
            mobileMenuToggle.classList.remove('active');
        }
    });

    // ===================================
    // Smooth Scrolling for Navigation Links
    // ===================================
    const navLinks = document.querySelectorAll('.main-nav a[href^="#"]');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                // Close mobile menu if open
                if (mainNav.classList.contains('active')) {
                    mainNav.classList.remove('active');
                    mobileMenuToggle.classList.remove('active');
                }

                // Smooth scroll to section
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });

                // Update active state
                updateActiveLink(this);
            }
        });
    });

    // ===================================
    // Update Active Navigation Link on Scroll
    // ===================================
    function updateActiveLink(clickedLink) {
        navLinks.forEach(link => link.classList.remove('active'));
        if (clickedLink) {
            clickedLink.classList.add('active');
        }
    }

    // Intersection Observer for automatic active link updates
    const sections = document.querySelectorAll('.tool-section, .hero');
    const observerOptions = {
        root: null,
        rootMargin: '-20% 0px -70% 0px',
        threshold: 0
    };

    const sectionObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const sectionId = entry.target.getAttribute('id');
                const correspondingLink = document.querySelector(`.main-nav a[href="#${sectionId}"]`);
                if (correspondingLink) {
                    updateActiveLink(correspondingLink);
                }
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        sectionObserver.observe(section);
    });

    // ===================================
    // Card Hover Effects Enhancement
    // ===================================
    const toolCards = document.querySelectorAll('.tool-card');

    toolCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.borderColor = getComputedStyle(document.documentElement)
                .getPropertyValue('--primary-color');
        });

        card.addEventListener('mouseleave', function() {
            this.style.borderColor = '';
        });
    });

    // ===================================
    // Utility Functions
    // ===================================

    /**
     * Get current scroll position
     */
    function getCurrentScroll() {
        return window.pageYOffset || document.documentElement.scrollTop;
    }

    /**
     * Debounce function for performance optimization
     */
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    // ===================================
    // Header Shadow on Scroll
    // ===================================
    const header = document.querySelector('.main-header');
    let lastScroll = 0;

    window.addEventListener('scroll', debounce(function() {
        const currentScroll = getCurrentScroll();

        if (currentScroll > 50) {
            header.style.boxShadow = '0 2px 12px rgba(0, 0, 0, 0.15)';
        } else {
            header.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.08)';
        }

        lastScroll = currentScroll;
    }, 10));

    // ===================================
    // Console Welcome Message
    // ===================================
    console.log('%c ISCU Tools Website ', 'background: #0066b3; color: white; font-size: 16px; padding: 10px;');
    console.log('%c Framework loaded successfully ', 'background: #00a651; color: white; font-size: 12px; padding: 5px;');
    console.log('Ready to add your tools and calculators!');

});

// ===================================
// Export utilities for tool pages
// ===================================
window.ISCUTools = {
    /**
     * Initialize a tool page
     */
    initToolPage: function(toolName) {
        console.log(`Initializing tool: ${toolName}`);
    },

    /**
     * Show notification (can be enhanced with a toast library)
     */
    notify: function(message, type = 'info') {
        console.log(`[${type.toUpperCase()}] ${message}`);
        // TODO: Implement toast notifications
    },

    /**
     * Validate form inputs
     */
    validateInput: function(value, type) {
        switch(type) {
            case 'number':
                return !isNaN(parseFloat(value)) && isFinite(value);
            case 'percentage':
                const num = parseFloat(value);
                return !isNaN(num) && num >= 0 && num <= 100;
            case 'currency':
                return !isNaN(parseFloat(value.replace(/[^0-9.-]+/g, '')));
            default:
                return value.trim() !== '';
        }
    },

    /**
     * Format currency
     */
    formatCurrency: function(amount) {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(amount);
    },

    /**
     * Format percentage
     */
    formatPercentage: function(value, decimals = 2) {
        return `${parseFloat(value).toFixed(decimals)}%`;
    }
};
