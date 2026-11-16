# Instructions for any AI coding assistant

Read HANDOFF.md, README.md, AI_CONTEXT.md and CHANGELOG.md before editing. Claude should follow these instructions too. This file is repository guidance, not app content.

## Baseline and scope
- Current build: **M.Claude.3.3.40** (APP_VER and cache; SECTION batch40 of design-system.js/.css: sheet grip re-added synchronously (window.sheetGrip40), returning to an already-visited tab/step only moves history back (silent40 in extensions.js) instead of rebuilding the dialog, fixed tab/sheet heights, compact 64px phone nav floating above the iOS home indicator, Senpai kể always returns to the card (window click capture + dismiss), Library titles Nunito 600. Do not reintroduce async grip insertion or full restore on in-app back. Before that M.Claude.3.3.39: typography: Be Vietnam Pro body + Nunito headings/buttons/numbers/labels via styles/fonts39.css and SECTION batch39 of design-system.css — change fonts only there; SVG/canvas text stays Roboto Flex. Before that M.Claude.3.3.38: batch-3 in SECTION batch38 of design-system.js/.css: new Library list/lessons with search (wraps eveningLibrary; Tools tab still uses the earlier chain), weekly review “Shin nhìn lại tuần này” (wraps nbSum), lighter achievement card (wraps openTreeCard30), formula sentence 18px in wizard16. Before that M.Claude.3.3.37: batch-2 in SECTION batch37 of design-system.js/.css: card ⋯ menu — Sửa công thức, Tạm dừng thẻ/Tiếp tục rèn, Cất thẻ; “Tạm dừng” keeps the card on hand with status pause (not counted, not missed), “Cất thẻ” = unslot; compact custom-card step 1 (`cuStepName`, `.cu37`); removed B3/B5 sentences derived from Thầy’s words. Before that M.Claude.3.3.36: batch-1 fixes in SECTION batch36 of design-system.js/.css; daily practice notes must not accept paste; page text not copyable. Before that M.Claude.3.3.35: softer icon colors chosen by the user — keep them muted. Before that M.Claude.3.3.34: all habit/custom/lesson/group icons are Material Symbols Rounded SVG in tonal rounded-square containers — SECTION m3-habit-icons in design-system.js/.css; do not reintroduce the old circle/coin glyphs. Before that M.Claude.3.3.33: game Tung thói quen full-screen M3 redesign, Pomodoro and breathing tools removed from the UI (code kept, no entry point); Tools tab shows only the game card shinGameCard33. Before that M.Claude.3.3.32: batch 3 text: lessons 1/4/5 “Trong app”, benefit-oriented note hints BEN32, the level term is “Bậc” not “Cấp” — keep it). Before that, M.Claude.3.3.31: training rules v2, batch 2 UI (maintained cards on Today, once-a-day Shin question, formula question at level-up, move-to-maintain question at mastery, weekly Lửa on Thẻ tuần) on top of batch 1 core logic in scripts/rules-v2.js — Lửa points (+1 recorded day, +2 all cards done, 1 free missed day per 7, −1 per extra miss, never reset), auto level-up 7/14/21 days or 3/6/9 times, maintained cards nudge at 7 and web at 14 idle days. No weekly goals, weekly challenges, XP, per-card streaks, peer/teacher confirmation, teacher codes, teacher mode or tier upgrades. Do not reintroduce them. Previous: M.Claude.3.3.29 (final of the visual how-to work). Do not add quotes attributed to Thầy Lê Long Sơn anywhere in the app. It reopens the visual how-to work as PA2, rebuilt from scratch in the original illSVG/person style, in scripts/how-visual.js (batch 1: vandong, ngu, chitieu, horenso; batch 2: anuong, camxuc, giup, 5phut; batch 3: 5s, som, chao; batch 4: memo, xinloi, viecko — all 14 done; the 5 lessons b1–b5 are illustrated via LV (wraps lsDialog/lsApp, inserts into LESSONS[].c1 once); draw hands only with arm()/hand(); old ill[] images are kept automatically). Speech bubbles must never overlap a character. Balance male/female figures; duo tags default Ở TRƯỜNG/Ở NHẬT. Continue batches there; still do not import the shelved M3.3.21 prototype.
- Feature baseline: Shin routine M3.3.20, 14 habits. This package is the final 5S.2 edition with the seven revised illustrations approved by the user, including 6A and 7B. Curriculum and progress calculations remain unchanged. The M3.3.21 visual how-to prototype was shelved; do not import or resume it without a new user request.
- Work from this exact folder/ZIP, not from similarly named older releases. Start each change on a separate copy or branch.
- Make the user's requested change; avoid unrelated UI, curriculum or data changes.
- Do not claim that every legacy override is dead or that this is a full architectural rewrite. See known debt in AI_CONTEXT.md.

## Editing sources
- The files under scripts/ and styles/ are the canonical, directly loaded sources. There is no build process and no second hidden copy.
- SECTION markers name the old source location for search/provenance. They are not imports. Do not recreate all the old files.
- Classic scripts share globals. Preserve index.html script order. Do not change to modules/IIFEs or shuffle declarations without tracing dependencies.
- Many extensions capture earlier functions in aliases and wrap them. A later assignment does NOT prove the earlier function is unused. Do not delete wrappers using text search alone.
- Shared typography/components belong in design-system.css and design-system.js. Game document styling is in design-game.css. Do not reintroduce per-element runtime font scaling.
- Prefer changing the responsible source section over appending another global override. Avoid broad .x or .back rules; these class names also occur in status legends.

## Data and progress
- Storage keys must remain shin-curriculum16-v1-data, shin-curriculum16-v1-demo and shin-curriculum16-v1-mode unless a deliberate migration is part of the task.
- Preserve validation, export/import and existing data when changing schemas. Do not reset learner data or silently replace it with Demo.
- Since M.Claude.3.3.30 all progress rules live in scripts/rules-v2.js (r2Calc/r2Info/r2Sync). Days/opportunities, partial outcomes, Lửa and level thresholds are distinct concepts; there are no weekly targets or XP. Interface step progress must not alter learning progress.
- Notes and check-in drafts are separate from committed records. Do not change commit timing merely to match a button label.
- Tests must use isolated synthetic/Demo data, never the user's live learner profile.

## Releases and verification
- Keep APP_VER in scripts/core.js as the feature version (currently M.Claude.3.3.40). sw.js VERSION and all local JS/CSS ?v= tags identify the cache build and must agree (currently M.Claude.3.3.40).
- Register new offline assets in sw.js CORE. Keep URLs relative so GitHub Pages subdirectories work. Keep licenses with assets.
- Run node tools/verify.mjs. Check both pages (index and habit-game), fresh/returning learner, both card faces, all 14 how-to flows, 5 lessons, custom card, goal 1–7, note/check-in drafts, save/undo, Back, import/export and offline reload.
- Prioritize 320–430px phone widths. Also test long text, reduced height/keyboard, 200% zoom, Chrome and WebKit. State honestly whether physical phones were used.
- If behavior-preserving work is requested, compare against the baseline, not just whether the new build starts.

## Handoff
- Update HANDOFF.md, AI_CONTEXT.md, CHANGELOG.md and VALIDATION.json after each completed change: feature/cache version, actual files changed, rationale, tests actually run, known limitations, next action.
- Never mark unrun tests as passed. Explain unfinished work.
- Deliver the complete folder as one ZIP, with index.html at the package root and intact assets/. Keep the file count below 100 where feasible (72 since 3.3.39). Do not include node_modules, browser caches, real learner exports or credentials.

## Card faces (M3.3.20)
- shinCardFaces mounts both faces once; touchFlipCard rotates their shared turner without drawCard() at completion. Do not reintroduce whole-dialog redraw for flips.
- Inactive faces are inert and aria-hidden. Use shinActivePaper() instead of the first .flow-paper; two are present.
- Each face keeps its own scroll; the illustrated back scrolls .shin-back-copy. Its illustration occupies 25% of the paper height.
- SHIN_BACK_ART contains 14 inline SVG illustrations in design-system.js. No external image assets are required. Preserve voice/Senpai data-act controls.
- SHIN_BACK_ART_VIEWBOX: 480×200 for the eight 3.3.29 artworks (som, 5s, xinloi, 5phut, camxuc, vandong, viecko, horenso), 480×220 for chitieu and giup, 340×150 fallback for the rest. The art band background is flat #173F79 with a bottom fade; artworks must not carry their own background. Keep each native aspect ratio. Gradient IDs are namespaced by habit. The final approved subjects are recorded in HANDOFF.md and source-map.json; do not substitute earlier rejected candidates.
