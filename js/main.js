/* ============================================================
   main.js — NEXUS Inc. 共通スクリプト
   ------------------------------------------------------------
   IIFE でグローバル汚染を防止。
   - ヘッダーのスクロール連動
   - ハンバーガー / ドロワー開閉
   - data-animate のスクロールフェードイン
   - data-count のカウントアップ
   - ページトップボタン
============================================================ */
(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', function () {
    /* --------------------------------------------------------
       1. ヘッダーのスクロール連動 + ページトップボタン
    -------------------------------------------------------- */
    var header = document.getElementById('header');
    var pageTop = document.getElementById('pageTop');
    var ticking = false;

    function onScroll() {
      var y = window.scrollY || window.pageYOffset;
      if (header) {
        header.classList.toggle('is-scrolled', y > 20);
      }
      if (pageTop) {
        pageTop.classList.toggle('is-visible', y > 600);
      }
      ticking = false;
    }

    window.addEventListener(
      'scroll',
      function () {
        if (!ticking) {
          window.requestAnimationFrame(onScroll);
          ticking = true;
        }
      },
      { passive: true }
    );
    onScroll();

    if (pageTop) {
      pageTop.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }

    /* --------------------------------------------------------
       2. ハンバーガー / ドロワー
    -------------------------------------------------------- */
    var hamburger = document.getElementById('hamburger');
    var drawer = document.getElementById('drawer');

    function closeDrawer() {
      if (!hamburger || !drawer) return;
      hamburger.classList.remove('is-open');
      drawer.classList.remove('is-open');
      hamburger.setAttribute('aria-expanded', 'false');
      drawer.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }

    function openDrawer() {
      if (!hamburger || !drawer) return;
      hamburger.classList.add('is-open');
      drawer.classList.add('is-open');
      hamburger.setAttribute('aria-expanded', 'true');
      drawer.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    }

    if (hamburger && drawer) {
      hamburger.addEventListener('click', function () {
        if (drawer.classList.contains('is-open')) {
          closeDrawer();
        } else {
          openDrawer();
        }
      });

      // ドロワー内リンク or 背景クリックで閉じる
      drawer.addEventListener('click', function (e) {
        if (e.target.closest('.drawer__link') || e.target === drawer) {
          closeDrawer();
        }
      });

      // Esc キーで閉じる
      document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') closeDrawer();
      });
    }

    /* --------------------------------------------------------
       3. スクロールフェードイン（data-animate）
    -------------------------------------------------------- */
    var animateEls = document.querySelectorAll('[data-animate]');

    if ('IntersectionObserver' in window && animateEls.length) {
      var animObserver = new IntersectionObserver(
        function (entries, observer) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              var delay = entry.target.getAttribute('data-delay') || 0;
              entry.target.style.transitionDelay = delay + 'ms';
              entry.target.classList.add('is-visible');
              observer.unobserve(entry.target);
            }
          });
        },
        { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
      );

      animateEls.forEach(function (el) {
        animObserver.observe(el);
      });
    } else {
      // 非対応環境ではそのまま表示
      animateEls.forEach(function (el) {
        el.classList.add('is-visible');
      });
    }

    /* --------------------------------------------------------
       4. カウントアップ（data-count）
    -------------------------------------------------------- */
    var counters = document.querySelectorAll('[data-count]');

    function animateCount(el) {
      var target = parseInt(el.getAttribute('data-count'), 10) || 0;
      var duration = 1600;
      var start = null;

      function step(timestamp) {
        if (!start) start = timestamp;
        var progress = Math.min((timestamp - start) / duration, 1);
        // ease-out
        var eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.floor(eased * target).toString();
        if (progress < 1) {
          window.requestAnimationFrame(step);
        } else {
          el.textContent = target.toString();
        }
      }
      window.requestAnimationFrame(step);
    }

    if ('IntersectionObserver' in window && counters.length) {
      var countObserver = new IntersectionObserver(
        function (entries, observer) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              animateCount(entry.target);
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.5 }
      );

      counters.forEach(function (el) {
        countObserver.observe(el);
      });
    } else {
      counters.forEach(function (el) {
        el.textContent = el.getAttribute('data-count');
      });
    }
  });
})();
