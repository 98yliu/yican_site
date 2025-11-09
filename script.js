// 平滑滚动效果
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// 为所有外部链接添加新窗口打开
document.addEventListener('DOMContentLoaded', function() {
    const externalLinks = document.querySelectorAll('a[href^="http"]');
    externalLinks.forEach(link => {
        if (!link.hasAttribute('target')) {
            link.setAttribute('target', '_blank');
            link.setAttribute('rel', 'noopener noreferrer');
        }
    });
});

// 添加一个简单的返回顶部功能
let scrollTimeout;
window.addEventListener('scroll', function() {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(function() {
        // 可以在这里添加更多滚动相关的功能
    }, 100);
});

// 为摘要折叠添加动画效果
document.querySelectorAll('.abstract-toggle').forEach(detail => {
    detail.addEventListener('toggle', function() {
        if (this.open) {
            const abstract = this.querySelector('.abstract');
            abstract.style.animation = 'fadeIn 0.3s ease-in';
        }
    });
});

// CSS动画定义（通过JavaScript添加）
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(-10px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);

