# v7 Patch — apply these edits directly to the v7 document

---

## PATCH 1 — Replace §0.2 entirely

**DELETE the existing §0.2 block** ("Confirmed details... Email: [FILL]...") and **REPLACE** with:

> ## 0.2 Confirmed details
>
> All contact, deployment, mobility and rights facts live in `content/source/portfolio-facts.md` — read it as part of §0.1, not as a separate chat input. Do not extract contact details from résumé PDFs. If `portfolio-facts.md` is missing any required field, stop and ask for that field specifically rather than inventing it.
>
> If GitHub is `NONE` or the linked repo doesn't exist yet, omit GitHub from Contact for now — see §25a. If Headshot is `NONE`, build About without an image slot rather than leaving a gap.

---

## PATCH 2 — Update §0.1 required inputs

In the file list, change:

```
content/source/portfolio-facts.md           REQUIRED
```

to:

```
content/source/portfolio-facts.md           REQUIRED — contact, deployment, mobility,
                                              and client-project rights record (template below)
```

---

## PATCH 3 — Insert the canonical portfolio-facts.md template

Add as a new subsection, **§0.2a**, immediately after the replaced §0.2:

> ## 0.2a portfolio-facts.md — required structure
>
> Esmail supplies this file in the following shape. Client Project Rights are a **record of the decision already made in §15** — do not treat them as open fields to resolve differently.
>
> ```markdown
> # Public Portfolio Facts
>
> ## Contact
> Email: esmailshahid@gmail.com
> LinkedIn: https://www.linkedin.com/in/esmailarshad/
> GitHub: https://github.com/esmailshahid-hue  (repo not yet created — see §25a)
>
> ## Deployment
> Custom domain: NONE
> Use Vercel default URL until a custom domain exists: YES
>
> ## Mobility
> Based in: Lahore, Pakistan
> Priority relocation markets: UAE, Saudi Arabia
> Open to broader international relocation: YES
> Open to remote: YES
>
> ## Client Project Rights (locked — see §15, do not reopen)
> ### Freight Spend & Vendor Cost Review
> rightsStatus: sanitized-recreation
> Sanitized workbook may be shown: YES
> Screenshot may be shown: YES
> Downloads may be offered: NO
>
> ### Inventory Forecasting & Reorder Planning
> rightsStatus: sanitized-recreation
> Sanitized workbook may be shown: YES
> Screenshot may be shown: YES
> Downloads may be offered: NO
>
> ## Certification
> Lean Six Sigma Green Belt — issuer: [FILL, or "not specified"]
>
> ## Systems
> [Any confirmed system not already listed in §9, or "none beyond résumé-confirmed systems"]
>
> ## Optional
> Headshot supplied: YES/NO
> Headshot path: content/images/headshot.jpg  (omit line if NONE)
> ```

---

## PATCH 4 — New §25a, insert after §25 (Technical), before §26 (Do not build)

> # 25a. Repository and deploy sequencing
>
> No GitHub repository exists yet. Sequence:
>
> 1. Build the full site locally with `git init` and normal commits. Do not block any part of Step 3 or Step 4 on a remote existing.
> 2. Once the build passes §0.4 definition of done, tell Esmail to create one empty repository at `https://github.com/esmailshahid-hue` (no README, no `.gitignore` — this project supplies its own) and share the resulting URL.
> 3. Add that URL as `origin`, push, then connect the repo to Vercel for deploys. Do not attempt to create the GitHub repository via API or CLI unless `gh` is already authenticated in this environment — check for that before assuming it.
> 4. Deploy target is the default Vercel URL. No custom domain at this stage, per `portfolio-facts.md`.
> 5. Once the repo exists and the site is deployed, add the GitHub URL to Contact per §21 — only if it will contain this portfolio's own source, not as a generic profile link.

---

## PATCH 5 — §21 (Contact), append one line

> If no GitHub repository exists yet at build time, omit GitHub from Contact and note it as a follow-up in the Step 4 final report rather than leaving a placeholder link.
