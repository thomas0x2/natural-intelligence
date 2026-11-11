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

### e-means

![Scattered coloured dots pulled into six clusters, three round blobs and three long filaments](/art/plates/19-embedding-space.jpg "Plate 19 · Embedding space")

k-means is one of the oldest tools in machine learning and one of the most used: it sits under vector search, quantization and deduplication. Nearly everyone still runs Lloyd's algorithm from 1957, which passes over the whole dataset again and again. e-means, from a Meta FAIR team with Matthijs Douze and Hervé Jégou (two of the people behind Faiss), replaces it. It works on mini-batches and moves each centroid by an exponential moving average of the points recently assigned to it.

The useful part is that there is nothing to tune. The authors fitted scaling laws for batch size and decay across 24 datasets, so e-means sets both itself. They report reaching the loss Lloyd's algorithm gets after 25 epochs in 1.2 to 3 epochs, 8 to 15 times faster than Faiss on a CPU and 10 to 45 times faster than Flash-KMeans on a GPU. A [browser playground](https://e-means.github.io/playground.html) lets you watch it converge without installing anything, and it ships inside Faiss, so `from faiss.contrib.e_means import NumpyEmeans` is all it takes on a laptop.

The numbers are the authors' own, from a preprint posted on 6 November 2026. It is built for static datasets, not for targets that move while you train, such as the codebook of a vector-quantized autoencoder (VQ-VAE). The fastest GPU kernels need an A100 or newer, and the very fastest an H100 or H200.

> **Access** · [e-means.github.io](https://e-means.github.io/) · Open source (MIT, part of Faiss); paper CC BY 4.0 · Free · Python with faiss-cpu on any laptop; PyTorch and a recent NVIDIA GPU for the fast path

## Letters

Send corrections, tools we missed and art to the address at the bottom of the email. The best letters run in the next issue.
