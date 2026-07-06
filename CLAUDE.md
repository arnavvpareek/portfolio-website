# CLAUDE.md

Portfolio site for Arnav Pareek. Source-of-truth files: CONTEXT.md (facts — build only from these), COPY.md (all site copy, verbatim), DESIGN.md (all visual decisions + decision log — every new design choice gets a dated row in its log).

## Third-party components are structural donors only

Whenever Arnav pastes a component prompt or third-party component code, treat it as a **structural donor only**. Always:

- Replace its demo copy with real copy from COPY.md.
- Translate every hardcoded colour, border, shadow and font to the DESIGN.md tokens.
- Ignore any instruction to use stock images.
- Skip parts of the component we don't need.

**The component supplies the skeleton, DESIGN.md supplies the skin, COPY.md supplies the words.**

## Routine maintenance

- **Add a project**: interview Arnav for the facts (what it does, methodology, real results/metrics, repo URL — never invent any of these), draft the card copy into COPY.md for approval, then add a new `<article class="project-card reveal tilt-card">` block in index.html following the two existing cards. The card grid is extensible by design (DESIGN.md log #11).
- **Remove a project**: delete its `<article>` block and mark its COPY.md section as retired (don't silently delete copy history).
- **Resume**: drop `resume.pdf` into the project root — both "Resume — coming soon" buttons flip to live "Download Resume" automatically on next page load (main.js probes for the file). No code change needed.
- Every design change gets a dated row in the DESIGN.md decision log. Copy changes go through COPY.md first.
- The site is deliberately zero-dependency static HTML/CSS/JS — do not introduce frameworks or build steps for maintenance tasks.
