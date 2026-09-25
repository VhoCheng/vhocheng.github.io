# Weihao Cheng · Academic Homepage

A responsive, dependency-free academic homepage for **Weihao Cheng (程炜豪)**.

**Live site:** https://vhocheng.github.io/

## Included

- Profile, research interests, recent highlights, and research projects.
- Five illustrated publications: VeloSubspace, MedCollab, PathLens, Radiology Letter, and PNAS Letter.
- Publication category filters, local PDF files, publisher DOI links, BibTeX disclosures, and a downloadable bibliography.
- Nine competition awards with certificate previews.
- Cardiovascular data platform interface and software copyright certificate.
- Three patent applications with documented statuses and inventor positions.
- Student memberships, academic service, experience, and the existing photo gallery.
- Mobile navigation, keyboard-accessible image dialogs, reduced-motion support, and print styling.

## GitHub Pages deployment

Upload the **contents of this directory** to the root of `VhoCheng/vhocheng.github.io`, preserving the `assets` directory structure. In **Settings → Pages**, select **Deploy from a branch**, branch **main**, folder **/(root)**. The `.nojekyll` file enables plain static hosting. No npm, build step, API key, paid service, or remote font is needed.

If GitHub Pages is already configured for `main`, pushing the files updates the existing site automatically.

## Preview locally

```sh
python3 -m http.server 8000
```

Open `http://localhost:8000`. Opening `index.html` directly also works for the core page.

## Edit content

- `index.html`: all visible text and links, organized into named sections. Edit this file to update the site.
- `assets/style.css`: layout, typography, breakpoints, and print styles.
- `assets/site.js`: filters, mobile navigation, and image preview dialogs.
- `assets/images/`: paper figures, Letter previews, and software interface.
- `assets/papers/`: the five supplied paper PDFs.
- `assets/certificates/`: public competition and software copyright certificates.
- `publications.bib`: downloadable bibliography; update alongside the BibTeX snippets in `index.html`.
- `data/*.json`: editorial metadata snapshots for reference. They are not a runtime content source; changing JSON alone does not update the rendered page.

To add a paper, copy an existing `<article class="publication">`, update its identifiers, links, metadata, image and citation, then update the filter counts and bibliography. The full page remains readable with JavaScript disabled.

## Content and attribution

The layout is inspired by [Yifei Sun’s homepage](https://diaoquesang.github.io/) and independently implemented. His personal biography, publications, images, and other assets were not copied.

Publication figures and PDFs remain subject to their original authors’ and publishers’ rights. PathLens identifies a CC BY-NC 4.0 license in the supplied publication. Certificate images belong to their respective holders/issuers. No blanket open-source license is applied to academic PDFs, personal photographs, or certificates.

See `CONTENT_NOTES.md` for source reconciliation and exact status handling.
