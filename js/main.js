// Arnav Pareek — Portfolio interactions.
// No dependencies, no external calls except the local resume.pdf probe.

(function () {
  'use strict';

  // ?static — disables entrance animations (screenshot/debug aid)
  if (/[?&]static\b/.test(location.search)) {
    document.documentElement.classList.add('static');
  }

  // Hero background path field.
  // Structural donor: BackgroundPaths (framer-motion/React) — skeleton only,
  // per CLAUDE.md. Same curve formula, two mirrored layers; strokes in
  // bone-white low alpha per DESIGN.md (pitch green stays undiluted).
  // framer-motion loops replaced with CSS keyframes; negative delays
  // desynchronize the drift.
  var hero = document.getElementById('hero');
  if (hero) {
    var SVG_NS = 'http://www.w3.org/2000/svg';
    var buildPathLayer = function (position) {
      var svg = document.createElementNS(SVG_NS, 'svg');
      svg.setAttribute('viewBox', '0 0 696 316');
      svg.setAttribute('fill', 'none');
      svg.setAttribute('preserveAspectRatio', 'none');
      for (var i = 0; i < 28; i++) {
        var p = document.createElementNS(SVG_NS, 'path');
        var d = 'M-' + (380 - i * 5 * position) + ' -' + (189 + i * 6) +
          'C-' + (380 - i * 5 * position) + ' -' + (189 + i * 6) +
          ' -' + (312 - i * 5 * position) + ' ' + (216 - i * 6) +
          ' ' + (152 - i * 5 * position) + ' ' + (343 - i * 6) +
          'C' + (616 - i * 5 * position) + ' ' + (470 - i * 6) +
          ' ' + (684 - i * 5 * position) + ' ' + (875 - i * 6) +
          ' ' + (684 - i * 5 * position) + ' ' + (875 - i * 6);
        p.setAttribute('d', d);
        p.setAttribute('stroke', '#fffdf9');
        p.setAttribute('stroke-width', (0.6 + i * 0.045).toFixed(2));
        p.setAttribute('stroke-opacity', (0.07 + i * 0.02).toFixed(3));
        p.setAttribute('vector-effect', 'non-scaling-stroke');
        p.setAttribute('pathLength', '1');
        if (i % 2 === 0) {
          // every other path is a flowing stream — dash drifts along the curve
          p.classList.add('flow');
          p.style.strokeDasharray = '0.65 0.35';
          p.style.animationDuration = (14 + Math.random() * 10).toFixed(2) + 's';
          p.style.animationDelay = (-Math.random() * 14).toFixed(2) + 's';
        }
        svg.appendChild(p);
      }
      return svg;
    };
    var pathsWrap = document.createElement('div');
    pathsWrap.className = 'hero-paths';
    pathsWrap.setAttribute('aria-hidden', 'true');
    pathsWrap.appendChild(buildPathLayer(1));
    pathsWrap.appendChild(buildPathLayer(-1));
    hero.prepend(pathsWrap);

    // Pause the dash-flow repaints while scrolling (see styles.css note)
    var flowPauseTimer = null;
    var flowPaused = false;
    window.addEventListener('scroll', function () {
      if (!flowPaused) {
        flowPaused = true;
        pathsWrap.classList.add('scroll-paused');
      }
      clearTimeout(flowPauseTimer);
      flowPauseTimer = setTimeout(function () {
        flowPaused = false;
        pathsWrap.classList.remove('scroll-paused');
      }, 160);
    }, { passive: true });
  }

  // Letter-stagger on the hero name (donor: BackgroundPaths headline).
  // Delay pattern kept from the donor: word*0.1s + letter*0.03s.
  var nameEl = document.querySelector('.hero-name');
  if (nameEl && !document.documentElement.classList.contains('static')) {
    var nameText = nameEl.textContent;
    nameEl.setAttribute('aria-label', nameText);
    nameEl.textContent = '';
    nameText.split(' ').forEach(function (word, wi) {
      var wordSpan = document.createElement('span');
      wordSpan.className = 'word';
      wordSpan.setAttribute('aria-hidden', 'true');
      word.split('').forEach(function (letter, li) {
        var ch = document.createElement('span');
        ch.className = 'ch';
        ch.textContent = letter;
        ch.style.setProperty('--d', (wi * 0.1 + li * 0.03).toFixed(2) + 's');
        wordSpan.appendChild(ch);
      });
      nameEl.appendChild(wordSpan);
    });
  }

  // Hero load sequence
  window.addEventListener('load', function () {
    document.body.classList.add('loaded');
  });
  // Fallback in case 'load' already fired or hangs on slow assets
  setTimeout(function () { document.body.classList.add('loaded'); }, 600);

  // Nav background on scroll
  var nav = document.getElementById('nav');
  function onScroll() {
    nav.classList.toggle('scrolled', window.scrollY > 24);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Scroll reveals
  var reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add('in'); });
  }

  // Active nav link — hero clears the highlight when scrolled back to the top
  var sections = ['hero', 'projects', 'skills', 'about', 'contact'];
  var navLinks = {};
  sections.forEach(function (id) {
    navLinks[id] = document.querySelector('.nav-links a[href="#' + id + '"]');
  });
  function clearActive() {
    Object.keys(navLinks).forEach(function (id) {
      navLinks[id] && navLinks[id].classList.remove('active');
    });
  }
  if ('IntersectionObserver' in window) {
    var activeIO = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        clearActive();
        var link = navLinks[entry.target.id];
        link && link.classList.add('active');
      });
    }, { rootMargin: '-40% 0px -55% 0px' });
    sections.forEach(function (id) {
      var el = document.getElementById(id);
      el && activeIO.observe(el);
    });
  }

  // Scroll-scrubbed 3D flatten on project cards.
  // Structural donor: ContainerScroll (framer-motion) — skeleton only, per
  // CLAUDE.md. Skin comes from DESIGN.md tokens; framer-motion replaced
  // with a rAF scrub. rotateX 18°→0°, scale 0.97→1 as the card rises from
  // the viewport bottom to its midpoint. Off on mobile, reduced motion and
  // ?static.
  var tiltCards = Array.prototype.slice.call(document.querySelectorAll('.tilt-card'));
  var tiltOK = tiltCards.length &&
    !document.documentElement.classList.contains('static');
  if (tiltOK) {
    var narrowMQ = window.matchMedia('(max-width: 900px)');
    var tiltTicking = false;

    var updateTilt = function () {
      tiltTicking = false;
      if (narrowMQ.matches) {
        tiltCards.forEach(function (el) { el.style.transform = ''; });
        return;
      }
      var vh = window.innerHeight;
      tiltCards.forEach(function (el) {
        var top = el.getBoundingClientRect().top;
        var p = (vh - top) / (vh * 0.5); // 0 at viewport bottom → 1 at midpoint
        p = Math.max(0, Math.min(1, p));
        var rot = 18 * (1 - p);
        var sc = 0.97 + 0.03 * p;
        el.style.transform = 'rotateX(' + rot + 'deg) scale(' + sc + ')';
      });
    };

    var requestTilt = function () {
      if (!tiltTicking) {
        tiltTicking = true;
        requestAnimationFrame(updateTilt);
      }
    };

    window.addEventListener('scroll', requestTilt, { passive: true });
    window.addEventListener('resize', requestTilt, { passive: true });
    updateTilt();
  }

  // Wheel-only inertia glide (DESIGN.md log #36): discrete mouse-wheel
  // notches get damped smoothing; touchpads (fine deltas + native OS
  // momentum), touchscreens, scrollbar and keyboard stay fully native.
  // Notch detection: line/page delta modes are always classic wheels, and
  // Chromium reports wheelDeltaY in exact multiples of 120 per notch.
  var glideOK = !document.documentElement.classList.contains('static');
  if (glideOK) {
    var glTarget = 0;
    var glCurrent = 0;
    var glActive = false;

    var glMax = function () {
      return document.documentElement.scrollHeight - window.innerHeight;
    };

    var glStep = function () {
      glCurrent += (glTarget - glCurrent) * 0.12;
      if (Math.abs(glTarget - glCurrent) < 0.5) {
        glCurrent = glTarget;
        glActive = false;
      }
      window.scrollTo(0, glCurrent);
      if (glActive) requestAnimationFrame(glStep);
    };

    var isNotchWheel = function (e) {
      if (e.deltaMode !== 0) return true;
      var wd = e.wheelDeltaY;
      return typeof wd === 'number' && Math.abs(wd) >= 120 && wd % 120 === 0;
    };

    window.addEventListener('wheel', function (e) {
      if (e.ctrlKey) return; // pinch-zoom stays native
      if (!isNotchWheel(e)) {
        glActive = false; // touchpad input takes over natively, mid-glide too
        return;
      }
      e.preventDefault();
      var dy = e.deltaY;
      if (e.deltaMode === 1) dy *= 16;
      else if (e.deltaMode === 2) dy *= window.innerHeight;
      if (!glActive) { glTarget = glCurrent = window.scrollY; }
      glTarget = Math.max(0, Math.min(glMax(), glTarget + dy));
      if (!glActive) {
        glActive = true;
        requestAnimationFrame(glStep);
      }
    }, { passive: false });

    // Scrollbar drags, keyboard paging and anchor jumps move the page outside
    // the loop — adopt their position instead of fighting it.
    window.addEventListener('scroll', function () {
      if (!glActive) { glTarget = glCurrent = window.scrollY; }
    }, { passive: true });
  }

  // Resume slot: buttons go live the moment resume.pdf exists in the project root.
  var RESUME_PATH = 'resume.pdf';
  fetch(RESUME_PATH, { method: 'HEAD' })
    .then(function (res) {
      var type = (res.headers.get('content-type') || '').toLowerCase();
      if (res.ok && type.indexOf('pdf') !== -1) {
        document.querySelectorAll('.resume-slot').forEach(function (btn) {
          btn.classList.remove('is-disabled');
          btn.removeAttribute('aria-disabled');
          btn.removeAttribute('role');
          btn.setAttribute('href', RESUME_PATH);
          btn.setAttribute('download', 'Arnav-Pareek-Resume.pdf');
          btn.textContent = 'Download Resume';
        });
      }
    })
    .catch(function () { /* no resume yet — slot stays in coming-soon state */ });
})();
