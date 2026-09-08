# Cyber Academy RC5 — Independent Audit Source

This public repository exists to provide a stable, model-neutral evidence source for independent external audit of the Cyber Academy RC5 release package.

## Public audit website and raw sources

- [Open the audit website](https://mir666u.github.io/cyber-academy-rc5-audit/)
- [Complete package — raw text](https://raw.githubusercontent.com/mir666u/cyber-academy-rc5-audit/main/RC5_v1.2_Independent_Audit_Package_070926.txt)
- [18 individually accessible original sources](raw/)
- [Machine-readable evidence manifest](evidence-manifest.json)
- [SHA-256 checksums](SHA256SUMS)

The website is a navigation layer, not a new audit verdict or adoption decision. Source files in `raw/` are exact byte extractions from the unchanged primary package. They are not rewritten or reconstructed documents. The package remains the primary evidence set, including its full audit protocol.

### Reproduce the integrity check

With Node.js installed, run from this repository's folder:

```sh
node scripts/verify-evidence.mjs
```

The verifier checks the package against its fixed 500,851-byte length and SHA-256; parses all 18 source boundaries; verifies each embedded source's byte length and SHA-256; compares each raw file byte-for-byte; and checks both published manifests. Any mismatch stops verification with an error. No files are written in this default verification mode.

All 18 sources were reverified during website preparation on 2026-09-08. This is a file-integrity check, not an independent content audit.

[Immutable baseline package](https://raw.githubusercontent.com/mir666u/cyber-academy-rc5-audit/f45469d68d9e5acf5af81f06730d13e4135ddf08/RC5_v1.2_Independent_Audit_Package_070926.txt)

Evidence is marked `-text` in `.gitattributes` to prevent Git from converting its line endings on Windows. Download raw files when checking hashes; copying rendered browser text may change their bytes.

### Website maintenance

GitHub Pages publishes the static site from the `main` branch, `/` (root) folder. `index.html` and `styles.css` provide the website; `.nojekyll` keeps publication static. No third-party scripts, tracking, external fonts, or build dependencies are used.

Before publishing any later change, run the verifier and inspect the diff. Keep the original package and extracted evidence unchanged. New evidence versions require separate, explicitly identified files and provenance. Website publication does not establish adoption in the Cyber Academy project.

## Primary audit package

**RC5_v1.2_Independent_Audit_Package_070926.txt**

This file contains:
- the independent audit protocol;
- the complete audit source index;
- all 18 original source payloads;
- source byte lengths;
- SHA-256 integrity values;
- continuity, release, migration and QA evidence needed for RC5 review.

### Package integrity

SHA-256:

`6896500a47650af7f2cf84ce9d55513394b8523c51a510062eb232aef694b0f1`

Size:

`500,851 bytes`

All 18 embedded original source payloads were verified byte-for-byte against their recorded SHA-256 values when the package was assembled.

## Audit use

Independent auditors should treat the package itself as the primary evidence set and follow the audit protocol contained at the beginning of the file.

The audit should be independent and evidence-bound. Do not assume that prospective plans are historical canon, do not silently resolve evidence gaps, and do not infer completion or adoption beyond what the package supports.

## Important release-state boundary

The package describes a production file set that has passed technical QA for staged adoption, but Project UI adoption was still pending at package creation time.

Current continuity lock recorded in the package:
- CH05-P1 COMPLETE
- CH05-P2 COMPLETE
- CH05-P3 DELIVERED / CURRENT / NOT YET ACCEPTED COMPLETE
- CH05-P4 prospective only after P3 acceptance
- CH05 uses the delivered six-part manifest
- CH04-P20 primary lesson/acceptance evidence remains unrecovered and explicitly qualified

## Repository purpose

This repository is an audit publication surface. It is not itself the active Cyber Academy runtime source of truth unless and until a later release explicitly says so.

Historical material is preserved for auditability, comparison and rollback. Historical status statements must not override newer verified state.

## File

[Open the complete RC5 independent audit package](RC5_v1.2_Independent_Audit_Package_070926.txt)
