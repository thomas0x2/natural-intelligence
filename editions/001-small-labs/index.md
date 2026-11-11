---
title: "Small Labs"
number: 1
date: 2026-11-08
summary: Working draft of the second issue. What a very small team can now build from scratch.
cover: /art/plates/20-denoising.jpg
coverAlt: A field of noisy dots resolving into the outline of a mountain
coverCredit: "PLATE 20 · Denoising. Pure noise, seven seconds of denoising, a mountain, then noise again."
topics: [ml, tools]
draft: true
---

## Purpose

A short opening note for this edition.

## Building with AI

A faster way to cluster, and an inference engine you build yourself one kernel at a time.

### e-means

![Scattered coloured dots pulled into six clusters, three round blobs and three long filaments](/art/plates/19-embedding-space.jpg "Plate 19 · Embedding space")

k-means is one of the oldest tools in machine learning and one of the most used: it sits under vector search, quantization and deduplication. Nearly everyone still runs Lloyd's algorithm from 1957, which passes over the whole dataset again and again. e-means, from a Meta FAIR team with Matthijs Douze and Hervé Jégou (two of the people behind Faiss), replaces it. It works on mini-batches and moves each centroid by an exponential moving average of the points recently assigned to it.

The useful part is that there is nothing to tune. The authors fitted scaling laws for batch size and decay across 24 datasets, so e-means sets both itself. They report reaching the loss Lloyd's algorithm gets after 25 epochs in 1.2 to 3 epochs, 8 to 15 times faster than Faiss on a CPU and 10 to 45 times faster than Flash-KMeans on a GPU. A [browser playground](https://e-means.github.io/playground.html) lets you watch it converge without installing anything, and it ships inside Faiss, so `from faiss.contrib.e_means import NumpyEmeans` is all it takes on a laptop.

The numbers are the authors' own, from a preprint posted on 6 November 2026. It is built for static datasets, not for targets that move while you train, such as the codebook of a vector-quantized autoencoder (VQ-VAE). The fastest GPU kernels need an A100 or newer, and the very fastest an H100 or H200.

> **Access** · [e-means.github.io](https://e-means.github.io/) · Open source (MIT, part of Faiss); paper CC BY 4.0 · Free · Python with faiss-cpu on any laptop; PyTorch and a recent NVIDIA GPU for the fast path

### samir-vllm

![A neon chip floorplan whose core is a smaller copy of the whole chip](/art/plates/23-chip-die.jpg "Plate 23 · Chip die")

Samir Sarwar wanted to know what happens between a prompt and the next token, so he built a small inference engine for Llama 3.2 1B from scratch in C++17 and CUDA, and filmed it. The build series runs to more than six hours on YouTube, from a first video that follows a prompt through the model to a finale on paged attention. Each part adds one piece: loading the safetensors weights onto the GPU, a byte-pair-encoding (BPE) tokenizer, the embedding, RMSNorm and rotary-position kernels, self-attention, the feed-forward layers, then decode with a key-value (KV) cache, static and continuous batching, and a paged KV cache.

Those last steps are the ideas behind vLLM, the engine that serves a large share of open models, and most people use them without ever seeing them. Here each one is code you can read next to a video that explains it. It is the "how it works" companion to llama.cpp in Edition 000. Sarwar also wrote more than 80 pages of handwritten notes and diagrams, and companion notes for every video.

It is a learning engine, not a server. It runs one model with fixed dimensions and a 2,048-token context, and it is one person's project. The license is split: the engine code is MIT, but the notes, PDFs and other teaching materials are all rights reserved, free for personal reading and study only. The Llama 3.2 weights it runs are weights-available under Meta's community license, and you download them separately.

> **Access** · [github.com/samir-sarwar/samir-vllm](https://github.com/samir-sarwar/samir-vllm) · Open source (MIT code); notes all rights reserved; Llama 3.2 weights-available · Free · An NVIDIA GPU with the CUDA Toolkit, CMake and a C++17 compiler to build it; a browser for the videos

## On Your Own Machine

A voice small enough for a browser tab and a model small enough to run an agent on a laptop: two pieces of a stack that never leaves your computer.

### Phonon 31m

![A halftone wave rolling through a field of blue dots](/art/plates/24-grid-wave.jpg "Plate 24 · Grid wave")

A text-to-speech model from Gradium, a voice AI company spun out of the Kyutai research lab in Paris. It has 31 million parameters, not counting its audio tokenizer, and the 8-bit file is about 65 MB. It turns English text into 24 kHz speech, streams as it goes, and needs no server: it runs on a laptop CPU, on a phone or in a browser tab. The weights, the tokenizer and a catalog of about 100 voices are Apache 2.0.

What makes it useful is how many ways in there are. The runtime, ptts, is MIT or Apache 2.0 and comes as a Python package, a command-line tool, Rust and C libraries, and a browser build, with routes to iOS, Android and Home Assistant. One line, `uvx ptts --lang en --voice Easton "Hello from Phonon." -o speech.wav`, gets you a voice. Put it next to llama.cpp and a local model can talk back without sending a word off your machine.

Only this English model is open. The larger 40M Phonon models, including the multilingual one, are CC BY-NC 4.0, so they are weights-available, not open. Quality claims are the maker's own. Long text is split into sentences and spoken one after another, so the intonation does not carry across a paragraph.

> **Access** · [huggingface.co/gradium/phonon-31m-en](https://huggingface.co/gradium/phonon-31m-en) · Open weights (Apache 2.0); runtime open source (MIT or Apache 2.0) · Free · Any laptop, phone or browser

### LFM3-1.7B

![A field of pink strokes turning, wave by wave, to point the same way](/art/plates/21-aligning-field.jpg "Plate 21 · Aligning field")

A small language model from Liquid AI, built to drive an agent on your own hardware. It has 1.7 billion parameters, and most of its 24 layers are not attention at all: 13 are gated short convolutions, with 5 sliding-window and 6 global attention layers in between. That mix is why it is cheap to run. At 4 bits it needs about 1 GB of memory and handles a 256,000-token context. It was post-trained for agent harnesses such as Hermes Agent, Pi and OpenClaw, and for tool calls and structured output.

It ships in every format a local stack wants: GGUF for llama.cpp, Ollama and LM Studio, MLX for Apple Silicon, and ONNX. On a 16 GB laptop it leaves plenty of room for everything else. Pair it with Phonon above and llama.cpp from Edition 000, and you have an agent that reads, acts and talks without a network connection.

It is not open. The LFM Open License lets you use, modify and redistribute it, but any commercial use by a company with US$10 million or more in annual revenue is not licensed (qualified non-profits are exempt). So we call it weights-available. Liquid AI says itself that it is "not recommended for agentic coding or complex multi-step reasoning due to its small size," and suggests retrieval or search for knowledge-heavy tasks. Benchmark claims are the maker's own.

> **Access** · [huggingface.co/LiquidAI/LFM3-1.7B](https://huggingface.co/LiquidAI/LFM3-1.7B) · Weights-available (LFM Open License v1.0; no commercial use by companies with US$10M+ revenue) · Free · Any laptop; llama.cpp, Ollama, LM Studio or MLX

## Letters

Send corrections, tools we missed and art to the address at the bottom of the email. The best letters run in the next issue.
