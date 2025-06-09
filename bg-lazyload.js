(function() {
  const lazyClass = 'bg-lazyload';
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        // media query min-width 條件
        const viewportWidth = el.getAttribute('data-viewport-width');
        let shouldLoadImage = true;
        if (viewportWidth && window.innerWidth < parseInt(viewportWidth, 10)) {
          shouldLoadImage = false;
        }
        // 設定背景圖片（必填）
        const bg = el.getAttribute('data-image');
        if (shouldLoadImage && bg) {
          el.style.backgroundImage = `url('${bg}')`;
          el.classList.remove(lazyClass);
          el.classList.add('bg-lazyloaded');
        }
        // min-height 設定
        const minHeight = el.getAttribute('data-min-height');
        if (minHeight) el.style.minHeight = minHeight;
        const color = el.getAttribute('data-color');
        if (color) el.style.color = color;
        const bgColor = el.getAttribute('data-bgcolor');
        if (bgColor) el.style.backgroundColor = bgColor;
        const bgSize = el.getAttribute('data-bgsize');
        if (bgSize) el.style.backgroundSize = bgSize;
        // 避免重複觸發
        obs.unobserve(el);
      }
    });
  });

  // 初始化時觀察所有現有元素
  function observeAll() {
    document.querySelectorAll(`.${lazyClass}`).forEach(el => observer.observe(el));
  }

  // 監控 DOM 變化，動態載入的元素也能被觀察
  const mutationObs = new MutationObserver(mutations => {
    mutations.forEach(mutation => {
      mutation.addedNodes.forEach(node => {
        if (node.nodeType === 1) {
          if (node.classList && node.classList.contains(lazyClass)) {
            observer.observe(node);
          }
          // 也觀察子孫節點
          node.querySelectorAll && node.querySelectorAll(`.${lazyClass}`).forEach(el => observer.observe(el));
        }
      });
    });
  });
  mutationObs.observe(document.documentElement, { childList: true, subtree: true });

  // 頁面載入時先觀察現有元素
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', observeAll);
  } else {
    observeAll();
  }
})();
