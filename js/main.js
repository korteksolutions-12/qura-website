// Qura - Shiny Pink Theme JavaScript

import { gsap } from 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js';
import { ScrollTrigger } from 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js';

gsap.registerPlugin(ScrollTrigger);

// Hide loading spinner after page load
window.addEventListener('load', function() {
    const loader = document.getElementById('loader');
    if (loader) {
        loader.classList.add('hidden');
    }
});

// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('navToggle');
    const nav = document.getElementById('nav');

    if (navToggle && nav) {
        navToggle.addEventListener('click', function() {
            nav.classList.toggle('active');
            navToggle.classList.toggle('active');
        });

        // Close mobile menu when clicking a link
        const navLinks = document.querySelectorAll('.nav__link');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                nav.classList.remove('active');
                navToggle.classList.remove('active');
            });
        });
    }

    // Initialize animations
    initShinyAnimations();
});

// Shiny Pink Theme Animations
function initShinyAnimations() {
    // Hero Section Entrance
    gsap.from('.hero__title', {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: '.hero',
            start: 'top 90%',
            toggleActions: 'play none none none'
        }
    });

    gsap.from('.hero__subtitle', {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
            trigger: '.hero',
            start: 'top 90%',
            toggleActions: 'play none none none'
        },
        delay: 0.2
    });

    gsap.from('.hero__actions', {
        opacity: 0,
        y: 30,
        duration: 0.6,
        ease: 'power2.out',
        scrollTrigger: {
            trigger: '.hero',
            start: 'top 90%',
            toggleActions: 'play none none none'
        },
        delay: 0.4
    });

    // Stats Reveal
    gsap.utils.toArray('.stat-item').forEach((stat, index) => {
        gsap.from(stat, {
            opacity: 0,
            y: 20,
            duration: 0.5,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: stat,
                start: 'top 85%',
                toggleActions: 'play none none none'
            },
            delay: index * 0.1
        });
    });

    // Service Cards Animation
    gsap.utils.toArray('.service-card').forEach((card, index) => {
        gsap.from(card, {
            opacity: 0,
            y: 50,
            duration: 0.6,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: card,
                start: 'top 85%',
                toggleActions: 'play none none none'
            },
            delay: index * 0.1
        });
    });

    // CTA Section Animation
    gsap.from('.cta__title', {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: '.cta',
            start: 'top 80%',
            toggleActions: 'play none none none'
        }
    });

    gsap.from('.cta__text', {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
            trigger: '.cta',
            start: 'top 80%',
            toggleActions: 'play none none none'
        },
        delay: 0.2
    });

    // Sparkle Animation
    gsap.from('.sparkle', {
        opacity: 0,
        scale: 0,
        duration: 0.5,
        ease: 'power2.out',
        stagger: 0.1
    });

    // Section Titles
    gsap.utils.toArray('.section-title, .section-subtitle').forEach(title => {
        gsap.from(title, {
            opacity: 0,
            y: 30,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: title,
                start: 'top 85%',
                toggleActions: 'play none none none'
            }
        });
    });
}