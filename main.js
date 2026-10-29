
"use strict";

/*
 * DropCours — MVP frontend de démonstration
 * HTML + CSS + JavaScript natifs.
 * Les comptes, résultats et progrès restent locaux au navigateur.
 * Aucun backend n'est connecté.
 */

const app = document.querySelector("#app");
const nav = document.querySelector("#main-nav");
const menuToggle = document.querySelector("#menu-toggle");
const toastRegion = document.querySelector("#toast-region");
const year = document.querySelector("#year");

if (year) year.textContent = new Date().getFullYear();

const courses = [
  {
    id: "html-css",
    title: "HTML et CSS",
    category: "Frontend",
    level: "Débutant",
    duration: "6 modules",
    icon: "H/C",
    color: "",
    description: "Construisez vos premières pages web et apprenez à les mettre en forme.",
    modules: [
      {
        title: "Découvrir le Web",
        lessons: [
          {
            title: "Comment fonctionne un site web ?",
            duration: "8 min",
            content: `
              <h2>Comprendre le Web</h2>
              <p>Un site web est un ensemble de pages accessibles depuis un navigateur. HTML structure le contenu, CSS définit son apparence et JavaScript ajoute des interactions.</p>
              <h2>Les trois technologies</h2>
              <ul>
                <li><strong>HTML :</strong> titres, paragraphes, images et liens.</li>
                <li><strong>CSS :</strong> couleurs, tailles, espaces et disposition.</li>
                <li><strong>JavaScript :</strong> événements, calculs et comportements dynamiques.</li>
              </ul>
              <pre><code>&lt;h1&gt;Bonjour le Web !&lt;/h1&gt;
&lt;p&gt;Ma première page.&lt;/p&gt;</code></pre>
              <p>Le navigateur lit le HTML et affiche les éléments à l'écran.</p>
            `
          },
          {
            title: "Créer une première page",
            duration: "12 min",
            content: `
              <h2>La structure HTML</h2>
              <p>Un document HTML commence par <code class="inline-code">&lt;!doctype html&gt;</code>. L'élément <code class="inline-code">head</code> contient les informations de la page et <code class="inline-code">body</code> contient ce que le visiteur voit.</p>
              <pre><code>&lt;!doctype html&gt;
&lt;html lang="fr"&gt;
&lt;head&gt;
  &lt;meta charset="utf-8"&gt;
  &lt;title&gt;Ma page&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;h1&gt;Bienvenue&lt;/h1&gt;
  &lt;p&gt;Je découvre HTML.&lt;/p&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>
              <p>Essaie de modifier le titre et le paragraphe dans un éditeur de code.</p>
            `
          }
        ]
      },
      {
        title: "Mettre en forme avec CSS",
        lessons: [
          {
            title: "Les sélecteurs CSS",
            duration: "10 min",
            content: `
              <h2>Styliser les éléments</h2>
              <p>Une règle CSS associe un sélecteur à des déclarations. Chaque déclaration possède une propriété et une valeur.</p>
              <pre><code>h1 {
  color: royalblue;
  font-size: 32px;
}

p {
  line-height: 1.7;
}</code></pre>
              <p>Le sélecteur <code class="inline-code">h1</code> cible les titres de niveau 1. La propriété <code class="inline-code">color</code> change leur couleur.</p>
            `
          }
        ]
      }
    ]
  },
  {
    id: "javascript",
    title: "JavaScript",
    category: "Programmation",
    level: "Débutant",
    duration: "5 modules",
    icon: "JS",
    color: "orange",
    description: "Apprenez les variables, les conditions, les fonctions et les interactions.",
    modules: [
      {
        title: "Les bases",
        lessons: [
          {
            title: "Variables et valeurs",
            duration: "10 min",
            content: `
              <h2>Stocker des informations</h2>
              <p>Une variable donne un nom à une valeur. En JavaScript, on utilise généralement <code class="inline-code">const</code> ou <code class="inline-code">let</code>.</p>
              <pre><code>const prenom = "Amina";
let age = 20;

console.log(prenom);
console.log(age);</code></pre>
              <p>Utilise <code class="inline-code">const</code> si tu ne prévois pas de réaffecter la variable. Utilise <code class="inline-code">let</code> si sa valeur doit changer.</p>
            `
          },
          {
            title: "Conditions et décisions",
            duration: "12 min",
            content: `
              <h2>Prendre une décision</h2>
              <p>Une condition permet d'exécuter un bloc si une expression est vraie.</p>
              <pre><code>const note = 14;

if (note >= 10) {
  console.log("Admis");
} else {
  console.log("À reprendre");
}</code></pre>
              <p>Le symbole <code class="inline-code">&gt;=</code> signifie « supérieur ou égal à ».</p>
            `
          }
        ]
      },
      {
        title: "Fonctions",
        lessons: [
          {
            title: "Créer une fonction",
            duration: "10 min",
            content: `
              <h2>Réutiliser du code</h2>
              <p>Une fonction regroupe des instructions que l'on peut appeler plusieurs fois.</p>
              <pre><code>function addition(a, b) {
  return a + b;
}

console.log(addition(3, 4));</code></pre>
              <p>Les paramètres <code class="inline-code">a</code> et <code class="inline-code">b</code> reçoivent les valeurs transmises lors de l'appel.</p>
            `
          }
        ]
      }
    ]
  },
  {
    id: "python",
    title: "Python",
    category: "Programmation",
    level: "Débutant",
    duration: "6 modules",
    icon: "Py",
    color: "green",
    description: "Découvrez un langage polyvalent pour automatiser des tâches et préparer la data science.",
    modules: [
      {
        title: "Premiers pas",
        lessons: [
          {
            title: "Votre premier programme",
            duration: "8 min",
            content: `
              <h2>Afficher un message</h2>
              <p>Python est un langage utilisé notamment pour l'automatisation, l'analyse de données et l'intelligence artificielle.</p>
              <pre><code>print("Bonjour DropCours !")</code></pre>
              <p>La fonction <code class="inline-code">print()</code> affiche une information. Dans ce prototype, le code Python n'est pas exécuté sur un véritable interpréteur Python.</p>
            `
          },
          {
            title: "Variables et calculs",
            duration: "10 min",
            content: `
              <h2>Faire des calculs</h2>
              <pre><code>nom = "Koffi"
note1 = 12
note2 = 16

moyenne = (note1 + note2) / 2
print(nom)
print(moyenne)</code></pre>
              <p>Le signe <code class="inline-code">=</code> affecte une valeur à une variable. Les parenthèses permettent de rendre le calcul explicite.</p>
            `
          }
        ]
      },
      {
        title: "Conditions",
        lessons: [
          {
            title: "Décider avec if",
            duration: "10 min",
            content: `
              <h2>Une condition en Python</h2>
              <pre><code>note = 15

if note >= 10:
    print("Admis")
else:
    print("À reprendre")</code></pre>
              <p>En Python, l'indentation détermine les blocs d'instructions. Elle est indispensable.</p>
            `
          }
        ]
      }
    ]
  }
];

const storageKey = "dropcours_demo_v1";

function loadState() {
  const initial = {
    user: null,
    completed: [],
    quizResults: {},
    enrollments: [],
    profiles: []
  };

  try {
    const saved = JSON.parse(localStorage.getItem(storageKey) || "{}");
    return { ...initial, ...saved };
  } catch {
    return initial;
  }
}

let state = loadState();

function saveState() {
  try {
    localStorage.setItem(storageKey, JSON.stringify(state));
  } catch {
    notify("Le navigateur ne permet pas de sauvegarder ces données.", "error");
  }
}

function notify(message, type = "") {
  if (!toastRegion) return;
  const toast = document.createElement("div");
  toast.className = `toast ${type}`;
  toast.textContent = message;
  toastRegion.appendChild(toast);
  window.setTimeout(() => toast.remove(), 3500);
}

function escapeHTML(value) {
  return String(value ?? "").replace(/[&<>"']/g, character => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[character]);
}

function allLessons(course) {
  return course.modules.flatMap((module, moduleIndex) =>
    module.lessons.map((lesson, lessonIndex) => ({
      ...lesson,
      moduleTitle: module.title,
      moduleIndex,
      lessonIndex,
      key: `${course.id}:${moduleIndex}:${lessonIndex}`
    }))
  );
}

function getCourse(id) {
  return courses.find(course => course.id === id);
}

function getLesson(course, moduleIndex, lessonIndex) {
  const module = course?.modules[moduleIndex];
  return module?.lessons[lessonIndex] || null;
}

function courseProgress(course) {
  const lessons = allLessons(course);
  if (!lessons.length) return 0;
  const done = lessons.filter(lesson => state.completed.includes(lesson.key)).length;
  return Math.round(done / lessons.length * 100);
}

function progressBar(percent) {
  return `
    <div class="progress-label">
      <span>Progression</span><strong>${percent}%</strong>
    </div>
    <div class="progress-track" role="progressbar"
      aria-valuenow="${percent}" aria-valuemin="0" aria-valuemax="100">
      <div class="progress-fill" style="width:${percent}%"></div>
    </div>`;
}

function courseCard(course) {
  const progress = courseProgress(course);
  return `
    <article class="card">
      <div class="course-icon ${course.color}">${escapeHTML(course.icon)}</div>
      <div class="tag-row">
        <span class="tag">${escapeHTML(course.category)}</span>
        <span class="tag">${escapeHTML(course.level)}</span>
      </div>
      <h3>${escapeHTML(course.title)}</h3>
      <p>${escapeHTML(course.description)}</p>
      <div class="muted">${allLessons(course).length} leçons disponibles · ${escapeHTML(course.duration)}</div>
      ${state.enrollments.includes(course.id) ? progressBar(progress) : ""}
      <div class="card-footer">
        <span class="muted">${state.enrollments.includes(course.id) ? "Dans votre espace" : "Gratuit en démonstration"}</span>
        <button class="btn btn-primary btn-small" data-action="course" data-id="${course.id}">
          ${state.enrollments.includes(course.id) ? "Continuer" : "Découvrir"}
        </button>
      </div>
    </article>`;
}

function renderHome() {
  app.innerHTML = `
    <section class="hero" id="accueil">
      <div class="container hero-grid">
        <div>
          <span class="eyebrow">Apprentissage pratique</span>
          <h1>Apprenez à coder.<br><span>Construisez vos projets.</span></h1>
          <p class="hero-copy">Progressez à votre rythme avec des leçons accessibles, des exemples concrets et des exercices de programmation.</p>
          <div class="hero-actions">
            <button class="btn btn-primary" data-action="catalog">Explorer les formations</button>
            <button class="btn btn-outline" data-action="signup">Créer mon espace</button>
          </div>
          <p class="hero-note">HTML, CSS, JavaScript et Python. Un parcours à la fois.</p>
        </div>
        <div class="code-window" aria-label="Exemple de code">
          <div class="code-window-head">
            <span class="dot"></span><span class="dot"></span><span class="dot"></span>
            <span style="margin-left:8px">premier_projet.js</span>
          </div>
          <pre><span class="code-blue">const</span> objectif = <span class="code-orange">"Apprendre"</span>;

<span class="code-blue">function</span> progresser(pratique) {
  <span class="code-blue">if</span> (pratique) {
    <span class="code-blue">return</span> <span class="code-orange">"Je progresse"</span>;
  }
  <span class="code-blue">return</span> <span class="code-orange">"Je recommence"</span>;
}

console.log(progresser(<span class="code-green">true</span>));</pre>
        </div>
      </div>
    </section>

    <section class="trust-strip">
      <div class="container trust-grid">
        <div class="trust-item"><strong>Apprendre</strong><span>Des leçons progressives</span></div>
        <div class="trust-item"><strong>Pratiquer</strong><span>Des exercices concrets</span></div>
        <div class="trust-item"><strong>Progresser</strong><span>Un suivi de démonstration</span></div>
      </div>
    </section>

    <section class="section" id="formations">
      <div class="container">
        <div class="section-heading">
          <div>
            <span class="eyebrow">Nos formations</span>
            <h2>Choisissez votre prochain défi</h2>
            <p>Commencez par les bases et avancez vers des compétences que vous pourrez utiliser dans vos projets.</p>
          </div>
          <button class="btn btn-outline" data-action="catalog">Tout le catalogue</button>
        </div>
        <div class="card-grid">${courses.map(courseCard).join("")}</div>
      </div>
    </section>

    <section class="section section-white" id="methode">
      <div class="container">
        <div class="section-heading">
          <div>
            <span class="eyebrow">Notre méthode</span>
            <h2>Apprendre en construisant</h2>
            <p>La compréhension se renforce quand on passe de la lecture à la pratique.</p>
          </div>
        </div>
        <div class="method-grid">
          <article class="method-step"><span class="step-number">01</span><h3>Comprendre</h3><p>Suivez une leçon et découvrez les notions essentielles avec des exemples.</p></article>
          <article class="method-step"><span class="step-number">02</span><h3>Pratiquer</h3><p>Répondez à des questions et testez votre compréhension avec des exercices.</p></article>
          <article class="method-step"><span class="step-number">03</span><h3>Progresser</h3><p>Marquez les leçons terminées et retrouvez votre progression locale.</p></article>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="cta-band">
          <div><h2>Votre prochaine compétence commence ici.</h2><p>Créez votre espace de démonstration et commencez à explorer les parcours.</p></div>
          <button class="btn btn-primary" data-action="signup">Commencer maintenant</button>
        </div>
      </div>
    </section>`;
}

function renderCatalog() {
  app.innerHTML = `
    <section class="page-shell">
      <div class="container">
        <div class="breadcrumb"><a href="#accueil">Accueil</a><span>/</span><span>Formations</span></div>
        <span class="eyebrow">Catalogue</span>
        <h1 class="page-title">Toutes les formations</h1>
        <p class="page-intro">Choisissez un parcours adapté à vos objectifs. Ce catalogue est actuellement alimenté par des données de démonstration.</p>
        <div class="toolbar">
          <div class="search-input"><input id="course-search" type="search" placeholder="Rechercher une formation..." aria-label="Rechercher une formation"></div>
          <select id="course-level" class="input" aria-label="Filtrer par niveau" style="max-width:220px">
            <option value="">Tous les niveaux</option>
            <option value="Débutant">Débutant</option>
          </select>
        </div>
        <div class="card-grid" id="course-grid">${courses.map(courseCard).join("")}</div>
        <p class="muted">Les cours présentés sont des contenus initiaux de démonstration. Le catalogue sera connecté au backend plus tard.</p>
      </div>
    </section>`;

  const search = document.querySelector("#course-search");
  const level = document.querySelector("#course-level");
  const grid = document.querySelector("#course-grid");

  function filter() {
    const query = search.value.trim().toLowerCase();
    const filtered = courses.filter(course =>
      `${course.title} ${course.description} ${course.category}`.toLowerCase().includes(query)
      && (!level.value || course.level === level.value)
    );
    grid.innerHTML = filtered.length
      ? filtered.map(courseCard).join("")
      : `<div class="empty-state"><h3>Aucune formation trouvée</h3><p>Essaie un autre mot-clé.</p></div>`;
  }
  search.addEventListener("input", filter);
  level.addEventListener("change", filter);
}

function renderCourse(id) {
  const course = getCourse(id);
  if (!course) return renderCatalog();

  const lessons = allLessons(course);
  const enrolled = state.enrollments.includes(course.id);

  app.innerHTML = `
    <section class="page-shell">
      <div class="container">
        <div class="breadcrumb"><a href="#accueil">Accueil</a><span>/</span><a href="#catalogue">Formations</a><span>/</span><span>${escapeHTML(course.title)}</span></div>
        <div class="card" style="margin-bottom:25px">
          <div class="course-icon ${course.color}">${escapeHTML(course.icon)}</div>
          <div class="tag-row"><span class="tag">${escapeHTML(course.category)}</span><span class="tag">${escapeHTML(course.level)}</span></div>
          <h1 class="page-title">${escapeHTML(course.title)}</h1>
          <p class="page-intro">${escapeHTML(course.description)}</p>
          <p class="muted">${course.modules.length} modules · ${lessons.length} leçons</p>
          ${enrolled ? progressBar(courseProgress(course)) : ""}
          <button class="btn btn-primary" data-action="enroll" data-id="${course.id}">
            ${enrolled ? "Continuer la formation" : "Commencer cette formation"}
          </button>
        </div>
        <h2>Programme de la formation</h2>
        ${course.modules.map((module, mi) => `
          <section class="card" style="margin:16px 0">
            <h3>Module ${mi + 1} — ${escapeHTML(module.title)}</h3>
            ${module.lessons.map((lesson, li) => {
              const key = `${course.id}:${mi}:${li}`;
              const done = state.completed.includes(key);
              return `<div class="card-footer">
                <div><strong>${done ? "✓ " : ""}${escapeHTML(lesson.title)}</strong><div class="muted">${escapeHTML(lesson.duration)}</div></div>
                <button class="btn btn-outline btn-small" data-action="lesson" data-id="${course.id}" data-module="${mi}" data-lesson="${li}">Ouvrir</button>
              </div>`;
            }).join("")}
          </section>`).join("")}
      </div>
    </section>`;
}

function renderLesson(courseId, moduleIndex, lessonIndex) {
  const course = getCourse(courseId);
  const lesson = getLesson(course, moduleIndex, lessonIndex);
  if (!course || !lesson) return renderCatalog();

  const key = `${course.id}:${moduleIndex}:${lessonIndex}`;
  const lessons = allLessons(course);
  const index = lessons.findIndex(item => item.key === key);
  const previous = lessons[index - 1];
  const next = lessons[index + 1];
  const done = state.completed.includes(key);

  app.innerHTML = `
    <section class="page-shell">
      <div class="container">
        <div class="breadcrumb"><a href="#accueil">Accueil</a><span>/</span><a href="#catalogue">Formations</a><span>/</span><a href="#cours/${course.id}">${escapeHTML(course.title)}</a><span>/</span><span>Leçon</span></div>
        <div class="lesson-layout">
          <aside class="lesson-list">
            <h3>${escapeHTML(course.title)}</h3>
            ${course.modules.map((module, mi) => `
              <p class="sidebar-title">${escapeHTML(module.title)}</p>
              ${module.lessons.map((item, li) => {
                const itemKey = `${course.id}:${mi}:${li}`;
                return `<div class="lesson-item ${mi === Number(moduleIndex) && li === Number(lessonIndex) ? "active" : ""}">
                  <div>${state.completed.includes(itemKey) ? "✓" : "○"}</div>
                  <div><strong><a href="#lecon/${course.id}/${mi}/${li}">${escapeHTML(item.title)}</a></strong><small>${escapeHTML(item.duration)}</small></div>
                </div>`;
              }).join("")}`).join("")}
            <button class="btn btn-outline btn-block" data-action="course" data-id="${course.id}">Retour au cours</button>
          </aside>
          <article class="lesson-content">
            <span class="eyebrow">Leçon ${index + 1} sur ${lessons.length}</span>
            <h1>${escapeHTML(lesson.title)}</h1>
            <p class="muted">${escapeHTML(course.title)} · ${escapeHTML(lesson.duration)}</p>
            ${lesson.content}
            <div class="notice notice-blue"><strong>À retenir :</strong> essaie de reformuler la notion avec tes propres mots avant de poursuivre.</div>
            ${renderExercise(course.id, moduleIndex, lessonIndex)}
            <div class="lesson-actions">
              ${previous ? `<button class="btn btn-outline" data-action="lesson" data-id="${course.id}" data-module="${previous.moduleIndex}" data-lesson="${previous.lessonIndex}">Leçon précédente</button>` : `<span></span>`}
              <button class="btn btn-primary" data-action="complete-lesson" data-key="${key}" data-id="${course.id}" data-module="${moduleIndex}" data-lesson="${lessonIndex}">
                ${done ? "Leçon terminée ✓" : "Marquer comme terminée"}
              </button>
              ${next ? `<button class="btn btn-outline" data-action="lesson" data-id="${course.id}" data-module="${next.moduleIndex}" data-lesson="${next.lessonIndex}">Leçon suivante</button>` : `<button class="btn btn-outline" data-action="course" data-id="${course.id}">Terminer le parcours</button>`}
            </div>
          </article>
        </div>
      </div>
    </section>`;
}

function renderExercise(courseId, moduleIndex, lessonIndex) {
  const course = getCourse(courseId);
  const questions = {
    "html-css": {
      question: "Quel langage sert principalement à structurer le contenu d'une page web ?",
      options: ["CSS", "HTML", "Python"],
      answer: 1,
      explanation: "HTML structure le contenu ; CSS définit son apparence."
    },
    javascript: {
      question: "Quel mot-clé convient à une variable dont on ne veut pas réaffecter la valeur ?",
      options: ["const", "repeat", "change"],
      answer: 0,
      explanation: "const déclare une liaison qui ne peut pas être réaffectée."
    },
    python: {
      question: "Quelle instruction affiche un message en Python ?",
      options: ["echo()", "print()", "showText()"],
      answer: 1,
      explanation: "print() permet d'afficher une valeur dans la sortie standard."
    }
  };
  const q = questions[courseId];
  if (!q) return "";

  const quizKey = `${courseId}:${moduleIndex}:${lessonIndex}`;
  const previous = state.quizResults[quizKey];

  return `
    <section class="exercise-card">
      <span class="eyebrow">Vérifie ta compréhension</span>
      <h3>Question rapide</h3>
      <p>${escapeHTML(q.question)}</p>
      <form data-form="quiz" data-course="${courseId}" data-quiz-key="${quizKey}">
        ${q.options.map((option, index) => `
          <label class="answer-option">
            <input type="radio" name="answer" value="${index}" required>
            <span>${escapeHTML(option)}</span>
          </label>`).join("")}
        <button class="btn btn-primary" type="submit">Vérifier ma réponse</button>
      </form>
      <div id="quiz-feedback" class="feedback ${previous ? (previous.correct ? "success" : "error") : "hidden"}" role="status">
        ${previous ? escapeHTML(previous.message) : ""}
      </div>
    </section>
    <section class="exercise-card">
      <h3>Mini-exercice de code</h3>
      <p>Modifie le code ci-dessous, puis lance la vérification de démonstration. Cette zone ne lance pas de véritable interpréteur Python.</p>
      <textarea class="editor" id="practice-code" aria-label="Éditeur de code" spellcheck="false">${escapeHTML(courseId === "python" ? 'print("Bonjour DropCours !")' : courseId === "javascript" ? 'console.log("Bonjour DropCours !");' : '<h1>Bonjour DropCours !</h1>')}</textarea>
      <div class="toolbar">
        <button class="btn btn-outline" data-action="reset-editor" data-course="${courseId}">Réinitialiser</button>
        <button class="btn btn-primary" data-action="check-editor" data-course="${courseId}">Vérifier le code</button>
      </div>
      <div class="output" id="editor-output" role="status">La sortie apparaîtra ici.</div>
    </section>`;
}

function renderAuth(mode) {
  const signup = mode === "signup";
  app.innerHTML = `
    <section class="page-shell">
      <div class="container">
        <div class="form-card">
          <span class="eyebrow">${signup ? "Créer un espace" : "Bienvenue"}</span>
          <h1 class="page-title">${signup ? "Rejoignez DropCours" : "Connexion"}</h1>
          <p class="form-note">${signup ? "Crée un profil local pour tester le parcours apprenant." : "Connecte-toi au profil de démonstration enregistré sur ce navigateur."}</p>
          <div class="notice notice-blue">Mode démonstration : ce formulaire ne crée pas de compte serveur et ne sécurise pas les identifiants.</div>
          <form id="auth-form" data-form="${signup ? "signup" : "login"}">
            ${signup ? `<div class="field"><label for="name">Nom complet</label><input id="name" name="name" autocomplete="name" required maxlength="80"></div>` : ""}
            <div class="field"><label for="email">Adresse e-mail</label><input id="email" name="email" type="email" autocomplete="email" required maxlength="120"></div>
            <div class="field"><label for="password">Mot de passe de démonstration</label><input id="password" name="password" type="password" autocomplete="${signup ? "new-password" : "current-password"}" required minlength="4" maxlength="100"></div>
            <button class="btn btn-primary btn-block" type="submit">${signup ? "Créer mon profil local" : "Entrer dans mon espace"}</button>
          </form>
          <p class="form-note">${signup ? "Déjà un profil sur cet appareil ?" : "Pas encore de profil ?"} <button class="link-button" style="color:var(--blue-dark)" data-action="${signup ? "login" : "signup"}">${signup ? "Se connecter" : "Créer un profil"}</button></p>
          <p class="form-note">N'utilise pas un vrai mot de passe ici. Le backend de Brave devra fournir la vraie authentification.</p>
        </div>
      </div>
    </section>`;
}

function renderDashboard() {
  if (!state.user) {
    app.innerHTML = `
      <section class="page-shell"><div class="container">
        <div class="empty-state"><h1>Ton espace apprenant</h1><p>Crée un profil de démonstration pour tester le tableau de bord.</p>
        <button class="btn btn-primary" data-action="signup">Créer mon espace</button></div>
      </div></section>`;
    return;
  }

  const enrolledCourses = courses.filter(course => state.enrollments.includes(course.id));
  const doneCount = state.completed.length;
  const totalLessons = enrolledCourses.reduce((sum, course) => sum + allLessons(course).length, 0);
  const percent = totalLessons ? Math.round(doneCount / totalLessons * 100) : 0;

  app.innerHTML = `
    <section class="page-shell" id="tableau-de-bord">
      <div class="container">
        <div class="breadcrumb"><a href="#accueil">Accueil</a><span>/</span><span>Mon espace</span></div>
        <span class="eyebrow">Espace apprenant</span>
        <h1 class="page-title">Bonjour ${escapeHTML(state.user.name)}.</h1>
        <p class="page-intro">Retrouve tes parcours et continue à progresser. Ces données sont enregistrées uniquement dans ce navigateur.</p>
        <div class="dashboard-layout">
          <aside class="sidebar">
            <p class="sidebar-title">Mon espace</p>
            <a class="sidebar-link active" href="#tableau-de-bord">Vue d'ensemble</a>
            <a class="sidebar-link" href="#catalogue">Découvrir les cours</a>
            <button class="sidebar-link link-button" data-action="logout">Se déconnecter</button>
          </aside>
          <div class="dashboard-main">
            <div class="stats-grid">
              <div class="stat-card"><strong>${enrolledCourses.length}</strong><span>Formations suivies</span></div>
              <div class="stat-card"><strong>${doneCount}</strong><span>Leçons terminées</span></div>
              <div class="stat-card"><strong>${percent}%</strong><span>Progression globale indicative</span></div>
            </div>
            <h2>Mes formations</h2>
            ${enrolledCourses.length ? `<div class="card-grid">${enrolledCourses.map(courseCard).join("")}</div>` : `
              <div class="empty-state"><h3>Ton parcours commence ici</h3><p>Choisis une formation pour la retrouver dans ton espace.</p><button class="btn btn-primary" data-action="catalog">Explorer les formations</button></div>`}
            <div class="notice notice-blue" style="margin-top:25px">Les résultats sont locaux et ne sont pas transmis à un serveur. Ils peuvent disparaître si les données du navigateur sont effacées.</div>
          </div>
        </div>
      </div>
    </section>`;
}

function renderAdmin() {
  app.innerHTML = `
    <section class="page-shell">
      <div class="container">
        <div class="breadcrumb"><a href="#accueil">Accueil</a><span>/</span><span>Administration</span></div>
        <span class="eyebrow">Aperçu administratif</span>
        <h1 class="page-title">Espace administrateur</h1>
        <p class="page-intro">Maquette de l'interface d'administration. Ce n'est pas un espace protégé : il ne faut pas y saisir de données confidentielles.</p>
        <div class="notice notice-blue" style="margin-bottom:22px">L'administration réelle devra être protégée par le backend, avec des rôles et des permissions vérifiés côté serveur.</div>
        <div class="stats-grid">
          <div class="stat-card"><strong>${courses.length}</strong><span>Parcours de démonstration</span></div>
          <div class="stat-card"><strong>${state.profiles.length}</strong><span>Profils locaux créés</span></div>
          <div class="stat-card"><strong>${state.completed.length}</strong><span>Leçons marquées terminées</span></div>
        </div>
        <div class="card">
          <h2>Catalogue de démonstration</h2>
          <div class="table-wrap"><table>
            <thead><tr><th>Formation</th><th>Catégorie</th><th>Niveau</th><th>Leçons</th></tr></thead>
            <tbody>${courses.map(course => `<tr><td>${escapeHTML(course.title)}</td><td>${escapeHTML(course.category)}</td><td>${escapeHTML(course.level)}</td><td>${allLessons(course).length}</td></tr>`).join("")}</tbody>
          </table></div>
          <p class="form-note">La création, la modification et la suppression des cours nécessiteront le backend et une interface d'administration dédiée.</p>
        </div>
      </div>
    </section>`;
}

function render() {
  const hash = decodeURIComponent(location.hash || "#accueil");
  const parts = hash.slice(1).split("/");

  if (parts[0] === "catalogue" || parts[0] === "formations") return renderCatalog();
  if (parts[0] === "cours" && parts[1]) return renderCourse(parts[1]);
  if (parts[0] === "lecon" && parts.length >= 4) {
    return renderLesson(parts[1], Number(parts[2]), Number(parts[3]));
  }
  if (parts[0] === "connexion") return renderAuth("login");
  if (parts[0] === "inscription") return renderAuth("signup");
  if (parts[0] === "tableau-de-bord") return renderDashboard();
  if (parts[0] === "administration") return renderAdmin();
  return renderHome();
}

function navigate(hash) {
  if (location.hash === hash) {
    render();
  } else {
    location.hash = hash;
  }
  closeMenu();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function closeMenu() {
  if (!nav || !menuToggle) return;
  nav.classList.remove("is-open");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Ouvrir le menu");
}

function requireEnrollment(courseId) {
  if (!state.enrollments.includes(courseId)) {
    state.enrollments.push(courseId);
    saveState();
  }
}

function handleQuiz(form) {
  const courseId = form.dataset.course;
  const quizKey = form.dataset.quizKey;
  const selected = form.querySelector('input[name="answer"]:checked');
  if (!selected) {
    notify("Choisis une réponse avant de vérifier.", "error");
    return;
  }

  const answers = {
    "html-css": { answer: 1, explanation: "HTML structure le contenu ; CSS définit son apparence." },
    javascript: { answer: 0, explanation: "const déclare une liaison qui ne peut pas être réaffectée." },
    python: { answer: 1, explanation: "print() permet d'afficher une valeur." }
  };
  const result = answers[courseId];
  const correct = Number(selected.value) === result.answer;
  const message = correct
    ? `Bonne réponse ! ${result.explanation}`
    : `Pas encore. Relis la leçon et réessaie. ${result.explanation}`;

  state.quizResults[quizKey] = { correct, message };
  saveState();

  const feedback = document.querySelector("#quiz-feedback");
  if (feedback) {
    feedback.className = `feedback ${correct ? "success" : "error"}`;
    feedback.textContent = message;
  }
}

function checkEditor(courseId) {
  const editor = document.querySelector("#practice-code");
  const output = document.querySelector("#editor-output");
  if (!editor || !output) return;

  const code = editor.value.trim();
  let valid = false;
  let message = "";

  if (courseId === "html-css") {
    valid = /<h1[\s>]/i.test(code) && /<\/h1>/i.test(code);
    message = valid
      ? "Structure HTML détectée. Ceci vérifie seulement la présence d'un titre, pas l'exécution du code."
      : "Ajoute un titre avec <h1>Ton titre</h1>.";
  } else if (courseId === "javascript") {
    valid = /console\.log\s*\(/.test(code);
    message = valid
      ? "Appel console.log détecté. Ce code n'a pas été exécuté."
      : "Essaie d'utiliser console.log(\"Bonjour\");";
  } else {
    valid = /\bprint\s*\(/.test(code);
    message = valid
      ? "Appel print détecté. Python n'a pas été exécuté par ce prototype."
      : "Essaie d'utiliser print(\"Bonjour\").";
  }

  output.textContent = message;
  output.className = `output ${valid ? "notice-green" : "notice"}`;
}

document.addEventListener("click", event => {
  const control = event.target.closest("[data-action]");
  if (!control) return;

  const action = control.dataset.action;
  const id = control.dataset.id;

  switch (action) {
    case "catalog":
      navigate("#catalogue");
      break;
    case "course":
      navigate(`#cours/${id}`);
      break;
    case "lesson":
      navigate(`#lecon/${id}/${control.dataset.module}/${control.dataset.lesson}`);
      break;
    case "login":
      navigate("#connexion");
      break;
    case "signup":
      navigate("#inscription");
      break;
    case "admin":
      navigate("#administration");
      break;
    case "enroll":
      requireEnrollment(id);
      navigate(`#lecon/${id}/0/0`);
      break;
    case "complete-lesson": {
      const key = control.dataset.key;
      if (!state.completed.includes(key)) state.completed.push(key);
      requireEnrollment(id);
      saveState();
      notify("Leçon marquée comme terminée.", "success");
      renderLesson(id, Number(control.dataset.module), Number(control.dataset.lesson));
      break;
    }
    case "logout":
      state.user = null;
      saveState();
      notify("Profil de démonstration déconnecté.");
      navigate("#accueil");
      break;
    case "reset-editor": {
      const editor = document.querySelector("#practice-code");
      const output = document.querySelector("#editor-output");
      if (!editor || !output) break;
      editor.value = id === "python"
        ? 'print("Bonjour DropCours !")'
        : id === "javascript"
          ? 'console.log("Bonjour DropCours !");'
          : '<h1>Bonjour DropCours !</h1>';
      output.textContent = "Éditeur réinitialisé.";
      output.className = "output";
      break;
    }
    case "check-editor":
      checkEditor(id);
      break;
  }
});

document.addEventListener("submit", event => {
  const form = event.target;
  if (!(form instanceof HTMLFormElement)) return;

  if (form.dataset.form === "quiz") {
    event.preventDefault();
    handleQuiz(form);
    return;
  }

  if (form.dataset.form === "signup") {
    event.preventDefault();
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim().toLowerCase();
    const password = String(data.get("password") || "");

    if (!name || !email || password.length < 4) {
      notify("Vérifie les informations saisies.", "error");
      return;
    }

    /*
     * Démonstration uniquement :
     * ne pas enregistrer de mot de passe.
     * L'inscription réelle sera traitée par le backend.
     */
    let profile = state.profiles.find(item => item.email === email);
    if (!profile) {
      profile = { name, email };
      state.profiles.push(profile);
    }

    state.user = { name: profile.name, email: profile.email };
    saveState();
    notify("Profil local créé. Bienvenue sur DropCours.", "success");
    navigate("#tableau-de-bord");
    return;
  }

  if (form.dataset.form === "login") {
    event.preventDefault();
    const data = new FormData(form);
    const email = String(data.get("email") || "").trim().toLowerCase();
    const profile = state.profiles.find(item => item.email === email);

    if (!profile) {
      notify("Aucun profil de démonstration trouvé pour cet e-mail sur cet appareil. Crée d'abord un profil.", "error");
      return;
    }

    state.user = { name: profile.name, email: profile.email };
    saveState();
    notify("Connexion locale réussie.", "success");
    navigate("#tableau-de-bord");
  }
});

if (menuToggle && nav) {
  menuToggle.addEventListener("click", () => {
    const open = nav.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", String(open));
    menuToggle.setAttribute("aria-label", open ? "Fermer le menu" : "Ouvrir le menu");
  });

  nav.addEventListener("click", event => {
    if (event.target.closest("a, button")) closeMenu();
  });
}

window.addEventListener("hashchange", render);

render();
