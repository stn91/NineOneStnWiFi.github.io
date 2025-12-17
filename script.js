/**
 * 主要脚本 - 处理交互和动态内容
 */

document.addEventListener('DOMContentLoaded', function() {
    // 初始化页面
    initializePage();
    
    // 渲染内容
    renderFeatures();
    renderPlans();
    renderProcess();
    renderFAQ();
    
    // 绑定事件
    bindEvents();
    
    // 平滑滚动
    initSmoothScroll();
    
    // 动画观察器
    initScrollAnimations();
    
    // 回到顶部按钮
    initBackToTop();
});

// 初始化基础信息
function initializePage() {
    document.getElementById('page-title').textContent = SITE_CONFIG.title;
    document.getElementById('nav-brand').textContent = SITE_CONFIG.brand;
    document.getElementById('hero-title').textContent = SITE_CONFIG.hero.title;
    document.getElementById('hero-subtitle').textContent = SITE_CONFIG.hero.subtitle;
    document.getElementById('contact-phone').textContent = SITE_CONFIG.contact.phone;
    document.getElementById('contact-email').textContent = SITE_CONFIG.contact.email;
    document.getElementById('contact-time').textContent = SITE_CONFIG.contact.time;
    document.getElementById('contact-location').textContent = SITE_CONFIG.contact.location;
    document.getElementById('footer-text').innerHTML = SITE_CONFIG.footer;
}

// 渲染功能特点
function renderFeatures() {
    const grid = document.getElementById('features-grid');
    grid.innerHTML = SITE_CONFIG.features.map(feature => `
        <div class="feature-card">
            <div class="w-14 h-14 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mb-4">
                <i class="fas ${feature.icon} text-white text-xl"></i>
            </div>
            <h3 class="text-xl font-bold text-gray-800 mb-3">${feature.title}</h3>
            <p class="text-gray-600 leading-relaxed">${feature.description}</p>
        </div>
    `).join('');
}

// 渲染套餐
function renderPlans() {
    const grid = document.getElementById('plans-grid');
    grid.innerHTML = SITE_CONFIG.plans.map(plan => `
        <div class="plan-card ${plan.recommended ? 'featured' : ''}">
            ${plan.recommended ? '<div class="bg-blue-500 text-white text-center py-2 font-semibold">🔥 推荐</div>' : ''}
            <div class="p-8">
                <h3 class="text-2xl font-bold text-gray-800 mb-2">${plan.name}</h3>
                <div class="text-4xl font-bold text-blue-600 mb-2">${plan.price}</div>
                <p class="text-gray-600 mb-6">${plan.speed}</p>
                <ul class="space-y-3 mb-8">
                    ${plan.features.map(f => `
                        <li class="flex items-center text-gray-700">
                            <i class="fas fa-check text-green-500 mr-3"></i>
                            <span>${f}</span>
                        </li>
                    `).join('')}
                </ul>
                <button onclick="handleCTA('${plan.name}')" class="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition-all transform hover:scale-105">
                    ${plan.cta}
                </button>
            </div>
        </div>
    `).join('');
}

// 渲染流程
function renderProcess() {
    const container = document.getElementById('process-steps');
    container.innerHTML = SITE_CONFIG.process.map(step => `
        <div class="process-step">
            <div class="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4">
                ${step.step}
            </div>
            <h3 class="text-xl font-bold text-gray-800 mb-2">${step.title}</h3>
            <p class="text-gray-600">${step.desc}</p>
        </div>
    `).join('');
}

// 渲染FAQ
function renderFAQ() {
    const container = document.getElementById('faq-list');
    container.innerHTML = SITE_CONFIG.faq.map((item, index) => `
        <div class="faq-item" data-index="${index}">
            <button class="faq-question" onclick="toggleFAQ(${index})">
                <span>${item.q}</span>
                <i class="fas fa-chevron-down transition-transform"></i>
            </button>
            <div class="faq-answer hidden">
                ${item.a}
            </div>
        </div>
    `).join('');
}

// 绑定事件
function bindEvents() {
    // 移动端菜单
    const mobileBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    mobileBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
    
    // 点击菜单项后关闭
    document.querySelectorAll('.nav-link-mobile').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    });
}

// 平滑滚动
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    const offset = 80; // 导航栏高度
    const elementPosition = element.offsetTop - offset;
    
    window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
    });
}

// FAQ切换
function toggleFAQ(index) {
    const faqItem = document.queryS