# COPY.md — Portfolio Site Copy (Draft for Review)

Single-page scrolling site. Section order: Hero → Projects → Skills → About → Contact.
All copy below is final draft — review before build.

---

## Page Metadata (SEO)

- **Page title:** `Arnav Pareek — Data Science Portfolio | Jaipur, India`
- **Meta description:** `Arnav Pareek is a data science student in Jaipur building statistics-driven projects — a FIFA World Cup 2026 prediction model backtested at 76.6% on 12,000+ matches, and full EDA pipelines in Python. Open to Software Engineering, Analyst and Data Science roles.`
- **Target searches:** "Arnav Pareek", "Arnav Pareek data scientist", "data science portfolio Jaipur"

---

## 1. Hero

**Headline (H1):**
> Arnav Pareek

**Subtitle:**
> Data Science & Engineering — Jaipur, India

**Supporting line:**
> Data science student building statistics-driven projects in Python — from a World Cup prediction model graded live against real results, to full exploratory analysis pipelines. From raw data to efficient, end-to-end machine learning models.

**CTAs:**
- Primary button: **View Projects** (scrolls to Projects)
- Secondary button: **Download Resume** — built as a resume slot: shows "Resume — coming soon" (disabled state) until the PDF is added; swapping in the file later requires no rebuild, just dropping `resume.pdf` into the project.

---

## 2. Projects

**Section heading (H2):**
> Projects

**Section intro:**
> Statistics-first work with code you can read and results you can check.

### Project card 1 — FIFA World Cup 2026 Predictor

**Card title (H3):**
> FIFA World Cup 2026 Prediction Model — Elo, Poisson & Monte Carlo

**Body copy:**
> A probabilistic model that forecasts the 2026 World Cup using Elo ratings to measure team strength, a Poisson model to simulate goals, and Monte Carlo simulation to run the full bracket thousands of times.
>
> Backtested at **76.6% accuracy on 12,000+ historical matches** — and now graded live against the tournament as it happens, with a public tracker comparing predicted vs. actual outcomes in the repo.

**Tags:** Python · Elo ratings · Poisson goal model · Monte Carlo simulation · Sports prediction

**CTA:** **View code & live tracker on GitHub** → `github.com/arnavvpareek/worldcup26-predictor`

**Target searches:** "world cup 2026 prediction model", "FIFA world cup Monte Carlo simulation", "Elo rating football prediction", "Poisson goal model"

### Project card 2 — Netflix EDA

**Card title (H3):**
> Netflix Catalog EDA — Python Data Analysis with ANOVA Testing

**Body copy:**
> A full exploratory data analysis pipeline: data cleaning, feature engineering, formal statistical testing, and matplotlib visualizations — not just charts, but conclusions you can defend.
>
> Key findings:
> - **Content explosion post-2015** — additions grew sharply, with movies outpacing TV shows roughly 2:1 at peak (2019: ~1,420 movies vs. ~590 TV shows).
> - **India's outsized presence** — 1,046 titles, nearly 3× the UK and 7× France, second only to the US.
> - **Indian cinema runs longer** — ANOVA confirmed a significant duration difference across top producing countries (F = 312.29, p < 0.001); Indian movies average ~126 minutes, 25–35 minutes longer than the US, UK, Canada and France.

**Tags:** Python · Pandas · ANOVA · Feature engineering · Matplotlib

**CTA:** **Read the full analysis on GitHub** → `github.com/arnavvpareek/Netflix-EDA`

**Target searches:** "Netflix EDA python", "ANOVA python analysis", "Netflix data analysis project"

**Extensibility note (not copy):** cards are a repeatable component — IPL EDA and Zomato EDA drop in later with no rebuild.

---

## 3. Skills

**Section heading (H2):**
> Skills

**Section intro:** *(removed at Arnav's request, 2026-07-06 — the section opens with the caption and goes straight to the skills table)*

- **Languages:** Python, C++, SQL
- **Machine Learning:** scikit-learn, XGBoost, SHAP, Optuna
- **Deep Learning:** TensorFlow, PyTorch, Hugging Face
- **Data:** Pandas, NumPy, Matplotlib, Seaborn
- **Deployment:** FastAPI, Docker, MLflow, Git, CI/CD, Streamlit, AWS (basics)
- **Generative AI:** LLMs, RAG, Agents

---

## 4. About

**Section heading (H2):**
> About Me

**Body copy:**
> I'm a data science student in Jaipur, pursuing a B.Tech at JECRC Foundation (2023–2027). I work comfortably across the whole pipeline — taking raw, messy data and cleaning it into something trustworthy, then building efficient, end-to-end machine learning models on top of it. I like claims you can backtest, not just assert.
>
> I'm **actively seeking Software Engineering, Analyst and Data Science roles**, and open to opportunities starting soon.
>
> Off the keyboard: football (which explains the World Cup model), gaming, and keeping up with new technology.

**CTA:** **Download Resume** — same resume slot as the Hero: disabled "coming soon" state until the PDF is dropped in.

**Target searches:** "Arnav Pareek JECRC", "data science student Jaipur"

*(Note: compensation tier and placement timeline from CONTEXT.md are deliberately kept off the public site — that's negotiation info, not portfolio copy.)*

---

## 5. Contact

**Section heading (H2):**
> Contact

**Body copy:**
> Hiring for data or software roles? I'd love to hear from you — email me or connect on LinkedIn.

**Links:**
- **Email:** pareekarnav16@gmail.com
- **LinkedIn:** https://www.linkedin.com/in/arnav-pareek-a9988a295/
- **GitHub:** github.com/arnavvpareek

---

## Open items before build

1. ~~LinkedIn profile URL~~ — added.
2. ~~Netflix EDA repo~~ — added.
3. Resume PDF — deferred by design: site ships with a resume slot; drop `resume.pdf` in later and the buttons go live.
