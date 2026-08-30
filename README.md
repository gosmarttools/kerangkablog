# Blogger Framework & Code Collection

**Kerangka Pengembangan Template Blogger/Blogspot dan Kumpulan Kode**

Repository ini merupakan **framework, starter kit, dokumentasi, dan kumpulan kode** untuk membantu proses pembuatan, pengembangan, modifikasi, dan pemeliharaan template **Blogger / Blogspot** secara lebih terstruktur.

Project ini ditujukan untuk pengembang yang ingin membangun template Blogger mulai dari kerangka dasar hingga template dengan fitur yang lebih kompleks seperti portal berita, blog, company profile, landing page, marketplace, tools, dashboard, dan kebutuhan web lainnya.

---

## 🎯 Tujuan Project

Project ini dibuat untuk:

* Menyediakan kerangka dasar template Blogger.
* Menyimpan kumpulan kode Blogger yang dapat digunakan kembali.
* Menstandarkan struktur XML template.
* Menyediakan komponen HTML, CSS, JavaScript, dan Blogger XML.
* Mempermudah pengembangan template dari awal.
* Mengurangi pengulangan kode pada setiap project.
* Menjadi referensi pengembangan template Blogger.
* Menyediakan komponen siap pakai untuk berbagai kebutuhan.
* Mempermudah maintenance dan debugging template.
* Menjadi basis pengembangan framework Blogger.

---

# 🏗️ Arsitektur Project

Struktur repository direkomendasikan sebagai berikut:

```text
blogger-framework/
│
├── README.md
├── LICENSE
├── CHANGELOG.md
├── CONTRIBUTING.md
│
├── templates/
│   │
│   ├── starter/
│   │   ├── starter.xml
│   │   └── README.md
│   │
│   ├── blog/
│   │   ├── blog.xml
│   │   └── README.md
│   │
│   ├── news/
│   │   ├── news.xml
│   │   └── README.md
│   │
│   ├── company/
│   │   ├── company.xml
│   │   └── README.md
│   │
│   └── landing-page/
│       ├── landing.xml
│       └── README.md
│
├── core/
│   │
│   ├── blogger/
│   │   ├── sections.xml
│   │   ├── widgets.xml
│   │   ├── loops.xml
│   │   ├── conditional.xml
│   │   └── variables.xml
│   │
│   ├── html/
│   │   ├── header.html
│   │   ├── navigation.html
│   │   ├── hero.html
│   │   ├── content.html
│   │   ├── sidebar.html
│   │   └── footer.html
│   │
│   ├── css/
│   │   ├── reset.css
│   │   ├── variables.css
│   │   ├── layout.css
│   │   ├── components.css
│   │   └── responsive.css
│   │
│   └── javascript/
│       ├── core.js
│       ├── navigation.js
│       ├── search.js
│       ├── pagination.js
│       └── lazyload.js
│
├── components/
│   │
│   ├── header/
│   ├── navigation/
│   ├── hero/
│   ├── post-card/
│   ├── post-grid/
│   ├── sidebar/
│   ├── breadcrumbs/
│   ├── pagination/
│   ├── related-posts/
│   ├── comments/
│   ├── search/
│   ├── labels/
│   ├── newsletter/
│   ├── social-share/
│   └── footer/
│
├── features/
│   │
│   ├── ads/
│   ├── dark-mode/
│   ├── search/
│   ├── related-posts/
│   ├── infinite-scroll/
│   ├── numeric-pagination/
│   ├── lazyload/
│   ├── toc/
│   ├── share/
│   ├── reading-progress/
│   └── back-to-top/
│
├── seo/
│   │
│   ├── meta-tags.xml
│   ├── open-graph.xml
│   ├── twitter-card.xml
│   ├── canonical.xml
│   ├── schema-article.xml
│   ├── schema-website.xml
│   └── breadcrumbs-schema.xml
│
├── snippets/
│   │
│   ├── html/
│   ├── css/
│   ├── javascript/
│   └── blogger/
│
├── documentation/
│   │
│   ├── blogger-xml.md
│   ├── widgets.md
│   ├── sections.md
│   ├── layouts.md
│   ├── data-tags.md
│   ├── conditionals.md
│   ├── css.md
│   ├── javascript.md
│   ├── seo.md
│   └── troubleshooting.md
│
├── examples/
│   │
│   ├── homepage/
│   ├── post-page/
│   ├── static-page/
│   ├── label-page/
│   ├── search-page/
│   └── archive-page/
│
└── tools/
    │
    ├── validator/
    ├── generator/
    ├── converter/
    └── utilities/
```

---

# 🧩 Blogger Template Core

Template Blogger menggunakan XML sebagai struktur utama.

Contoh kerangka dasar:

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE html>
<html b:version='2'
      expr:dir='data:blog.languageDirection'
      expr:lang='data:blog.locale'
      xmlns='http://www.w3.org/1999/xhtml'
      xmlns:b='http://www.google.com/2005/gml/b'
      xmlns:data='http://www.google.com/2005/gml/data'
      xmlns:expr='http://www.google.com/2005/gml/expr'>

<head>

  <meta charset='UTF-8'/>
  <meta content='width=device-width, initial-scale=1' name='viewport'/>

  <title>
    <data:blog.pageTitle/>
  </title>

  <b:skin><![CDATA[

  /* CSS TEMPLATE */

  ]]></b:skin>

</head>

<body>

  <b:section
    class='header'
    id='header'
    maxwidgets='1'
    showaddelement='no'>

    <b:widget
      id='Header1'
      locked='true'
      title='Header'
      type='Header'
      version='2'/>

  </b:section>

  <main>

    <b:section
      class='main'
      id='main'
      showaddelement='yes'>

      <b:widget
        id='Blog1'
        locked='true'
        title='Blog Posts'
        type='Blog'
        version='2'/>

    </b:section>

  </main>

  <b:section
    class='footer'
    id='footer'
    showaddelement='yes'/>

</body>

</html>
```

---

# 🧱 Struktur Widget Blogger

Widget Blogger harus menggunakan ID yang valid.

Contoh:

```xml
<b:section id='header'>
</b:section>
```

Widget HTML:

```xml
<b:widget
  id='HTML1'
  type='HTML'
  title='Header Content'/>
```

Widget berikutnya:

```xml
<b:widget
  id='HTML2'
  type='HTML'
  title='Hero Content'/>
```

Kemudian:

```xml
<b:widget
  id='HTML3'
  type='HTML'
  title='About'/>
```

### Aturan penting

Untuk widget dengan `type='HTML'`, gunakan:

```text
HTML1
HTML2
HTML3
HTML4
HTML5
...
```

Hindari ID seperti:

```text
HTMLFeatures
HTMLHeader
HTMLHero
HTMLFooter
```

karena Blogger dapat menolak ID tersebut sebagai ID widget HTML yang tidak valid.

---

# 📦 Contoh Struktur Section

```xml
<b:section
  id='header'
  class='header'
  showaddelement='yes'>
</b:section>

<b:section
  id='hero'
  class='hero'
  showaddelement='yes'>
</b:section>

<b:section
  id='content'
  class='content'
  showaddelement='yes'>
</b:section>

<b:section
  id='sidebar'
  class='sidebar'
  showaddelement='yes'>
</b:section>

<b:section
  id='footer'
  class='footer'
  showaddelement='yes'>
</b:section>
```

---

# 📰 Struktur Template Media Online

Template berita dapat menggunakan struktur:

```text
HOME
│
├── Header
├── Navigation
├── Breaking News
├── Headline
├── Latest News
├── Nasional
├── Metro
├── Politik
├── Ekonomi
├── Global
├── Kriminal
├── Olahraga
├── Teknologi
├── Saham
├── Video
├── Pilihan Redaksi
├── Trending
├── Sidebar
│   ├── Popular
│   ├── Advertisement
│   └── Social Media
├── Newsletter
└── Footer
```

Contoh label:

```text
News
Nasional
Metro
Ekonomi
Politik
Global
Kriminal
Olahraga
Teknologi
Saham
Video
Berita Umum
Pilihan Redaksi
Trending
Lifestyle
Travel
Otomotif
Kesehatan
Pendidikan
```

---

# 📝 Blog Post

Widget utama posting Blogger:

```xml
<b:widget
  id='Blog1'
  type='Blog'
  title='Blog Posts'
  locked='true'
  version='2'/>
```

Data posting dapat digunakan melalui:

```text
data:post.title
data:post.body
data:post.timestamp
data:post.url
data:post.labels
data:post.author
data:post.thumbnailUrl
```

Contoh:

```xml
<h2>
  <a expr:href='data:post.url'>
    <data:post.title/>
  </a>
</h2>
```

---

# 🏷️ Label

Label Blogger dapat digunakan sebagai kategori konten.

Contoh:

```xml
<b:loop values='data:post.labels' var='label'>

  <a expr:href='data:label.url'>
    <data:label.name/>
  </a>

</b:loop>
```

Label dapat digunakan untuk:

* Kategori
* Feed
* Navigasi
* Filter artikel
* Related posts
* Homepage section
* Trending
* Editorial selection

---

# 🔄 Feed

Blogger menyediakan feed berdasarkan label.

Format:

```text
/feeds/posts/default/-/Nasional
```

Untuk JSON:

```text
/feeds/posts/default/-/Nasional?alt=json
```

Untuk RSS:

```text
/feeds/posts/default/-/Nasional?alt=rss
```

Feed ini dapat digunakan untuk membuat section kategori secara otomatis.

---

# 🔍 Search

Endpoint pencarian Blogger:

```text
/search?q=keyword
```

Contoh:

```text
/search?q=politik
```

Form:

```html
<form action='/search' method='get'>

  <input
    name='q'
    type='search'
    placeholder='Cari berita...'/>

  <button type='submit'>
    Cari
  </button>

</form>
```

---

# 📄 Conditional Blogger

Blogger menyediakan conditional tags.

Homepage:

```xml
<b:if cond='data:view.isHomepage'>

</b:if>
```

Halaman posting:

```xml
<b:if cond='data:view.isPost'>

</b:if>
```

Static page:

```xml
<b:if cond='data:view.isPage'>

</b:if>
```

Halaman label:

```xml
<b:if cond='data:view.isLabelSearch'>

</b:if>
```

Halaman pencarian:

```xml
<b:if cond='data:view.isSearch'>

</b:if>
```

Archive:

```xml
<b:if cond='data:view.isArchive'>

</b:if>
```

---

# 🎨 CSS Architecture

CSS sebaiknya dibagi menjadi beberapa bagian:

```text
CSS
│
├── Variables
├── Reset
├── Typography
├── Layout
├── Header
├── Navigation
├── Cards
├── Sidebar
├── Footer
├── Forms
├── Buttons
├── Utilities
└── Responsive
```

Contoh variable:

```css
:root {
  --primary: #000000;
  --secondary: #ffffff;
  --text: #222222;
  --muted: #777777;
  --border: #eeeeee;

  --container: 1200px;
  --radius: 8px;
  --spacing: 20px;
}
```

---

# ⚙️ JavaScript

JavaScript digunakan untuk fitur interaktif.

Contoh struktur:

```text
javascript/
│
├── core.js
├── menu.js
├── search.js
├── slider.js
├── pagination.js
├── lazyload.js
├── share.js
└── utilities.js
```

Contoh menu:

```javascript
document.addEventListener('DOMContentLoaded', function () {

  const menuButton = document.querySelector('[data-menu]');
  const navigation = document.querySelector('[data-navigation]');

  if (!menuButton || !navigation) return;

  menuButton.addEventListener('click', function () {
    navigation.classList.toggle('is-active');
  });

});
```

---

# 🚀 SEO

Template dapat menyediakan:

* Meta description
* Canonical URL
* Open Graph
* Twitter Card
* Schema.org
* Article schema
* Website schema
* Breadcrumb schema
* Image metadata
* Robots metadata

Contoh canonical:

```xml
<link
  expr:href='data:blog.canonicalUrl'
  rel='canonical'/>
```

---

# 🧠 Schema.org

Contoh struktur Article:

```html
<script type='application/ld+json'>
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "<data:blog.pageName/>",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "<data:blog.url/>"
  }
}
</script>
```

Untuk implementasi produksi, data Schema harus diisi dengan data artikel yang benar dan tidak menggunakan nilai dummy.

---

# 📱 Responsive Design

Template harus mengikuti pendekatan:

```text
Mobile
   ↓
Tablet
   ↓
Desktop
```

Breakpoint dapat disesuaikan dengan kebutuhan.

Contoh:

```css
@media (min-width: 768px) {

}

@media (min-width: 1024px) {

}

@media (min-width: 1280px) {

}
```

---

# 🌙 Dark Mode

Contoh sederhana:

```css
[data-theme='dark'] {
  --primary: #ffffff;
  --secondary: #111111;
  --text: #eeeeee;
  --border: #333333;
}
```

JavaScript:

```javascript
const toggle = document.querySelector('[data-theme-toggle]');

toggle?.addEventListener('click', function () {

  const current =
    document.documentElement.dataset.theme;

  document.documentElement.dataset.theme =
    current === 'dark' ? 'light' : 'dark';

});
```

---

# 🧰 Components

Component harus dibuat reusable.

Contoh:

```text
components/
│
├── post-card
├── featured-post
├── news-grid
├── news-list
├── sidebar-widget
├── label-list
├── pagination
├── breadcrumb
├── share-button
├── search-box
└── newsletter
```

Tujuannya adalah agar satu component dapat digunakan pada beberapa template.

---

# 🔧 Features

Feature tambahan dapat disimpan terpisah dari core.

Contoh:

```text
features/
│
├── lazyload
├── dark-mode
├── infinite-scroll
├── numeric-pagination
├── related-posts
├── table-of-content
├── reading-progress
├── social-share
└── back-to-top
```

Dengan struktur ini, fitur dapat ditambahkan atau dilepas tanpa mengubah seluruh framework.

---

# 🛠️ Tools

Repository juga dapat menyimpan tools untuk membantu pengembangan.

Contoh:

```text
tools/
│
├── validator/
│   └── blogger-validator
│
├── generator/
│   └── widget-generator
│
├── converter/
│   └── html-to-blogger
│
└── utilities/
    ├── minifier
    └── formatter
```

---

# 🧪 Testing

Sebelum template digunakan pada blog produksi, lakukan pemeriksaan:

### XML

* XML valid
* Semua tag tertutup
* Namespace Blogger tersedia
* `b:skin` tersedia
* `Blog1` tersedia
* ID widget valid
* ID section tidak duplikat

### Blogger

* Template dapat di-upload
* Layout/Tata Letak dapat dibuka
* Widget dapat ditambahkan
* Posting dapat tampil
* Label dapat bekerja
* Search bekerja
* Static page bekerja
* Mobile view bekerja

### Frontend

* Responsive
* JavaScript tidak error
* Tidak ada broken link
* Gambar memiliki alt
* Navigasi berfungsi
* Loading tidak berlebihan

### SEO

* Title
* Description
* Canonical
* Open Graph
* Schema
* Sitemap
* Robots

---

# 🐛 Troubleshooting

## Error: Widget ID tidak valid

Gunakan ID sesuai tipe widget.

Untuk HTML:

```text
HTML1
HTML2
HTML3
HTML4
```

Untuk Blog:

```text
Blog1
```

Untuk Header:

```text
Header1
```

Jangan membuat:

```text
HTMLFeatures
HTMLHero
HTMLFooter
```

---

## Error: XML Parse Error

Periksa:

* Tag tidak tertutup.
* Karakter `&` tidak di-escape.
* Quote tidak berpasangan.
* Struktur XML rusak.
* CDATA tidak ditutup.
* Nested element tidak valid.

Untuk karakter ampersand:

```xml
&amp;
```

bukan:

```xml
&
```

---

# 📚 Dokumentasi

Dokumentasi lengkap berada di:

```text
documentation/
```

Dokumentasi utama:

| Dokumentasi          | Keterangan           |
| -------------------- | -------------------- |
| `blogger-xml.md`     | Struktur XML Blogger |
| `widgets.md`         | Widget Blogger       |
| `sections.md`        | Section Blogger      |
| `layouts.md`         | Struktur layout      |
| `data-tags.md`       | Data tags            |
| `conditionals.md`    | Conditional Blogger  |
| `css.md`             | CSS framework        |
| `javascript.md`      | JavaScript           |
| `seo.md`             | SEO                  |
| `troubleshooting.md` | Pemecahan masalah    |

---

# 📌 Prinsip Pengembangan

Project mengikuti beberapa prinsip:

### 1. Stable First

Prioritaskan kestabilan template daripada menambahkan terlalu banyak fitur.

### 2. Reusable

Kode harus dapat digunakan kembali.

### 3. Modular

Core, component, feature, dan template dipisahkan.

### 4. Valid Blogger XML

Semua template harus mengikuti sintaks XML Blogger yang valid.

### 5. Mobile First

Tampilan harus nyaman digunakan pada perangkat mobile.

### 6. Performance

Hindari JavaScript, CSS, dan dependency yang tidak diperlukan.

### 7. SEO Friendly

Struktur template harus mendukung crawling dan indexing mesin pencari.

### 8. Maintainable

Kode harus mudah dibaca, diperbaiki, dan dikembangkan.

---

# 🔀 Workflow Development

Alur pengembangan:

```text
Idea
  ↓
Structure
  ↓
Core
  ↓
Component
  ↓
Feature
  ↓
Template
  ↓
Testing
  ↓
Validation
  ↓
Release
```

---

# 🌿 Git Branch

Rekomendasi branch:

```text
main
develop
feature/*
fix/*
release/*
```

Contoh:

```text
feature/news-homepage
feature/dark-mode
feature/numeric-pagination
fix/widget-id
fix/xml-parser
```

---

# 📦 Versioning

Project menggunakan Semantic Versioning:

```text
MAJOR.MINOR.PATCH
```

Contoh:

```text
v1.0.0
v1.1.0
v1.1.1
v2.0.0
```

Keterangan:

```text
MAJOR = perubahan besar / breaking change
MINOR = fitur baru
PATCH = bug fix
```

---

# 📝 Changelog

Setiap perubahan penting dicatat di:

```text
CHANGELOG.md
```

Contoh:

```markdown
## [1.1.0]

### Added
- Numeric pagination
- Related posts
- Dark mode

### Fixed
- Invalid HTML widget ID
- XML parsing error

### Changed
- Improved mobile navigation
```

---

# 🤝 Contributing

Kontribusi dapat dilakukan melalui:

1. Fork repository.
2. Buat branch baru.
3. Tambahkan atau perbaiki kode.
4. Test template.
5. Commit perubahan.
6. Push branch.
7. Buat Pull Request.

Contoh:

```bash
git checkout -b feature/new-component
```

Kemudian:

```bash
git add .
git commit -m "Add new Blogger component"
git push origin feature/new-component
```

---

# 📄 License

Tambahkan lisensi sesuai kebijakan project.

Contoh:

```text
MIT License
```

atau gunakan lisensi lain sesuai kebutuhan distribusi kode.

---

# 🗺️ Roadmap

## Phase 1 — Foundation

* [x] Basic Blogger XML
* [x] Basic sections
* [x] Blog widget
* [x] HTML widget
* [ ] Core CSS
* [ ] Core JavaScript

## Phase 2 — Components

* [ ] Header
* [ ] Navigation
* [ ] Post Card
* [ ] Post Grid
* [ ] Sidebar
* [ ] Breadcrumb
* [ ] Pagination
* [ ] Footer

## Phase 3 — Features

* [ ] Related Posts
* [ ] Numeric Pagination
* [ ] Lazy Loading
* [ ] Dark Mode
* [ ] Search
* [ ] Social Share
* [ ] Table of Contents
* [ ] Reading Progress

## Phase 4 — SEO

* [ ] Meta system
* [ ] Open Graph
* [ ] Twitter Card
* [ ] Schema Article
* [ ] Breadcrumb Schema
* [ ] Website Schema

## Phase 5 — Templates

* [ ] Starter Template
* [ ] Blog Template
* [ ] News Template
* [ ] Company Template
* [ ] Landing Page Template

## Phase 6 — Developer Tools

* [ ] XML Validator
* [ ] Widget Generator
* [ ] Component Generator
* [ ] HTML → Blogger Converter
* [ ] Template Formatter
* [ ] Template Documentation

---

# ⭐ Project Vision

Project ini ditujukan untuk menjadi **repository framework Blogger yang modular, reusable, dan developer-friendly**.

Bukan hanya kumpulan template, tetapi menjadi ekosistem yang terdiri dari:

```text
Blogger Framework
       │
       ├── Core
       │
       ├── Components
       │
       ├── Features
       │
       ├── Templates
       │
       ├── Snippets
       │
       ├── SEO
       │
       ├── Tools
       │
       └── Documentation
```

Dengan pendekatan tersebut, satu kode dasar dapat digunakan sebagai fondasi untuk berbagai jenis website Blogger.

---

## 🚀 Quick Start

Clone repository:

```bash
git clone https://github.com/USERNAME/REPOSITORY.git
```

Masuk ke repository:

```bash
cd REPOSITORY
```

Pilih starter template:

```text
templates/starter/starter.xml
```

Kemudian buka:

```text
Blogger
→ Theme
→ Edit HTML
```

atau upload template XML melalui menu Theme sesuai metode yang tersedia pada Blogger.

---

## 📬 Project Status

**Status:** Active Development

**Platform:** Blogger / Blogspot

**Format utama:** XML / HTML / CSS / JavaScript

**Target:** Blogger Template Framework & Code Collection

---

> Build once. Reuse everywhere.
>
> **Blogger Framework — Structured, Modular, Reusable.**
