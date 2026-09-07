# Cyber Academy RC5 — Independent Audit Source

This public repository exists to provide a stable, model-neutral evidence source for independent external audit of the Cyber Academy RC5 release package.

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
