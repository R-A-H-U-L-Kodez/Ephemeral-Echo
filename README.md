# 🌀 Ephemeral-Echo

**A cryptic CTF where every echo hides a secret.**

Ephemeral-Echo is a lore-driven cryptography and OSINT CTF designed to test your problem-solving, lateral thinking, and cryptanalysis skills. Decode hidden clues, uncover encrypted messages, and follow the echoes to reveal the mystery of the *First Singer*.

---

## 🧭 Overview

- Explore repository files and artifacts — nothing is as it seems.
- Solve puzzles involving:
  - Cryptography 🔐
  - Steganography 🖼️
  - OSINT & metadata sleuthing 🕵️
  - Narrative-driven hints and red herrings 📝
- Every file may contain subtle hints; the story itself is part of the puzzle.

Goal: Recover the hidden flag that proves you’ve uncovered the secrets of the First Singer.

---

## 🚀 Quick Start

1. Clone the repository:
```bash
git clone https://github.com/R-A-H-U-L-Kodez/Ephemeral-Echo.git
cd Ephemeral-Echo
```

2. Inspect files carefully. Try:
```bash
ls -la
file *
strings somefile
exiftool image.png
binwalk artifact.bin
steghide extract -sf cover.jpg
```

3. Decode messages, follow clues, and collect evidence — the flag is hidden in the echoes.

---

## 🧩 Puzzle Types & Examples

Each puzzle may use multiple layers. Typical techniques you might encounter:

- Cryptography
```text
- classical ciphers (Caesar, Vigenère, Atbash)
- stream/xor obfuscation
- block ciphers used as puzzles (ECB pattern hints)
```

- Steganography
```text
- LSB image/steganography
- hidden files inside archives
- audio spectrograms and reversed audio
```

- OSINT & Metadata
```text
- EXIF timestamps and comments
- git commit history and timestamps
- DNS/email clues, social footprints
```

- File & Format Tricks
```text
- polyglot files with multiple headers
- files with mislabelled extensions
- visible strings masked by simple transformations
```

---

## 💡 Hints (subtle, not spoilers)

- Filenames, timestamps, and file sizes are meaningful.
- “Echo,” “silence,” and “singing” are recurring motifs — think audio and repetition patterns.
- Narrative text may contain acrostics, hidden indices, or deliberately odd phrasing.
- Check for whitespace, Unicode homoglyphs, zero-width characters, and metadata fields.
- Don’t assume a file type by extension — inspect file headers.

---

## 🏁 Flag Submission

When you find the flag, it will follow this format (example):
```text
ACTF{example_of_a_flag}
```

If you want to record progress locally, add a file:
```bash
echo "FLAG{...}" > FOUND_FLAG.txt
```

---

## 🛠 Tools & Useful Commands

- exiftool — inspect metadata
- binwalk — analyze binary blobs
- strings — view printable text
- steghide / zsteg / stegsolve — stego analysis
- audacity / sox — audio analysis (spectrograms, reverse)
- GPG / OpenSSL — crypto utilities
- jq / yq — parse JSON/YAML
- git log / git blame — investigate history and changes

---

## 🗂 Suggested Workflow

1. Read README and story files first — the narrative often gives structure.
2. Make a map: list files, sizes, timestamps, and oddities.
3. Triage: quickly identify which files are likely images, audio, archives, or text.
4. Use non-destructive tools first (strings, exiftool, file).
5. Layered approach: solve one layer, then re-check the file for additional hides.
6. Keep notes and hypotheses — puzzles may reference earlier discoveries.

---

## 🧑‍🤝‍🧑 Contributing & Reporting Issues

Found a bug in a puzzle or a repo problem (broken file, missing asset)? Open an issue describing:
- Which file or puzzle
- What you tried
- Any error messages or unexpected behavior

If you want to propose improvements or additional puzzles, open a pull request.

---

Good luck. Follow the echoes — the First Singer waits in the silence.
