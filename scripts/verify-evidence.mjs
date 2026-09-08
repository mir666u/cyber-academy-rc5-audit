import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { createHash } from 'node:crypto';
import assert from 'node:assert/strict';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = fileURLToPath(new URL('../', import.meta.url));
const name = 'RC5_v1.2_Independent_Audit_Package_070926.txt';
const sha256 = data => createHash('sha256').update(data).digest('hex');
const bytes = readFileSync(path.join(root, name));
const expected = '6896500a47650af7f2cf84ce9d55513394b8523c51a510062eb232aef694b0f1';
assert.equal(bytes.length, 500851, 'Original package byte length changed');
assert.equal(sha256(bytes), expected, 'Original package SHA-256 changed');
assert.ok(bytes.toString('utf8').trimEnd().endsWith('===== END AUDIT PACKAGE ====='));

// Latin-1 gives one character per byte: offsets stay exact even for UTF-8 text.
const byteText = bytes.toString('latin1');
const pattern = /===== FILE: ([A-Za-z0-9_.-]+) =====\r?\nSOURCE_INDEX: (\d+)\/18\r?\nSOURCE_ROLE: ([^\r\n]+)\r?\nSOURCE_BYTE_LENGTH: (\d+)\r?\nSOURCE_SHA256: ([a-f0-9]{64})\r?\n===== CONTENT START: \1 =====\r?\n/g;
const records = [];
const extracting = process.argv.includes('--extract');
if (extracting) mkdirSync(path.join(root, 'raw'), { recursive: true });
for (const m of byteText.matchAll(pattern)) {
  const [header, filename, index, roleBytes, length, hash] = m;
  const start = m.index + header.length;
  const payload = bytes.subarray(start, start + Number(length));
  assert.equal(Number(index), records.length + 1, 'Source order mismatch');
  assert.equal(payload.length, Number(length));
  assert.equal(sha256(payload), hash, `Embedded source hash mismatch: ${filename}`);
  assert.ok(byteText.slice(start + Number(length)).trimStart().startsWith(`===== CONTENT END: ${filename} =====`), `Source end mismatch: ${filename}`);
  const output = path.join(root, 'raw', filename);
  if (extracting) writeFileSync(output, payload);
  assert.deepEqual(readFileSync(output), payload, `Raw source differs: ${filename}`);
  records.push({ index: Number(index), role: Buffer.from(roleBytes, 'latin1').toString('utf8'), filename, bytes: payload.length, sha256: hash, path: `raw/${filename}` });
}
assert.equal(records.length, 18, 'Expected exactly 18 sources');
const manifest = {
  package: { filename: name, bytes: bytes.length, sha256: expected, baseline_commit: 'f45469d68d9e5acf5af81f06730d13e4135ddf08' },
  note: 'Raw files are byte-for-byte extractions of the original package. Integrity verification is not an independent content audit or adoption approval.',
  sources: records
};
if (extracting) {
  writeFileSync(path.join(root, 'evidence-manifest.json'), JSON.stringify(manifest, null, 2) + '\n');
  writeFileSync(path.join(root, 'SHA256SUMS'), [[expected, name], ...records.map(r => [r.sha256, r.path])].map(([h, p]) => `${h}  ${p}`).join('\n') + '\n');
} else {
  assert.deepEqual(JSON.parse(readFileSync(path.join(root, 'evidence-manifest.json'), 'utf8')), manifest);
  assert.equal(readFileSync(path.join(root, 'SHA256SUMS'), 'utf8'), [[expected, name], ...records.map(r => [r.sha256, r.path])].map(([h, p]) => `${h}  ${p}`).join('\n') + '\n');
}
console.log(`Verified unchanged package (${bytes.length} bytes) and all ${records.length} exact raw sources.`);
