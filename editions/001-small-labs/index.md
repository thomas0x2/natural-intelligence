---
title: "Small Labs"
number: 1
date: 2026-11-08
summary: Working draft of the second issue. What a very small team can now build from scratch, starting with an open image model trained for about $21,000.
cover: /art/plates/20-denoising.jpg
coverAlt: A field of noisy dots resolving into the outline of a mountain
coverCredit: "PLATE 20 · Denoising. Pure noise, seven seconds of denoising, a mountain, then noise again."
topics: [ml, tools]
draft: true
---

## Purpose

A short opening note for this edition.

## Building with AI

Models you can train, not only run.

### Linum P-JiT 21K

![A field of noisy dots resolving into the outline of a mountain](/art/plates/20-denoising.jpg "Plate 20 · Denoising")

Linum is a two-person research lab, Sahil and Manu Chopra, training generative video models from scratch. On the way to their next video model they released P-JiT 21K: a 2-billion-parameter text-to-image model trained on 660 million samples for, in their words, "about $21K of compute." The weights are Apache 2.0, and so is the code.

The architecture is the interesting part. Most image models draw in a compressed latent space and need a separate autoencoder (a VAE) to turn that back into pixels. P-JiT denoises the pixels directly, and during training it is also asked to get low-resolution drafts right on the way to the full image. Linum has written up the road there in a series of public field notes, which makes this one of the clearest public accounts of what it takes to train an image model from nothing. The weights and inference code are on [Hugging Face](https://huggingface.co/Linum-AI/pjit-21k) and [GitHub](https://github.com/Linum-AI/pjit-21k).

Take Linum at its word that this is "an experimental research artifact, not a production model." Text was filtered out of the training data on purpose, so it cannot write words or make posters, and it struggles with full-body shots, crowds and people interacting. The released repository is inference only. The reference training loss lives in a separate Pyramid-JiT repository, and the training dataset itself is not named. The default sampler also rewrites your prompt through a paid API; pass `--no_upsample` to keep it local.

> **Access** · [linum.ai](https://www.linum.ai) · Open weights and code (Apache 2.0) · Free · A CUDA GPU with room for about 17 GB of weights (2B model plus a 4B text encoder)

## Letters

Send corrections, tools we missed and art to the address at the bottom of the email. The best letters run in the next issue.
