---
title: Access to Minds
number: 0
date: 2026-11-07
summary: The first issue. What this catalog is for, two works that ask what a mind is when agents are everywhere, a whole fly brain you can study, and open tools for building minds of your own.
cover: /art/plates/07-physarum.jpg
coverAlt: Glowing blue and yellow veins of a slime mould network on black
coverCredit: "PLATE 07 · Physarum. Agents sense the trail ahead, turn to the strongest, step, and deposit more. No agent knows the network it is building."
topics: [minds, neuro, ml, tools]
draft: false
---

## Purpose

We are as minds, and might as well get good at it.

Fifty-eight years ago a catalog of tools told its readers that the power to shape their own world was within reach, if they knew where to look. In the late 2020s the most powerful tools we have are tools for thinking, and many of them are being built behind closed doors. This catalog is a map of the other doors: the open ones.

Every issue follows the same rule. If an item does not make a capable, curious person more able to understand or build something, it does not go in. Open things come first. Every entry ends with an **Access** line that tells you where to get it, what it costs and what you need to run it.

This is issue zero. Read [the principles](/brain/principles/) for what we believe and why.

## Understanding Minds

What a mind is, what happens to the self when agents are everywhere, and a whole brain you can take apart.

### What Is Intelligence? by Blaise Agüera y Arcas

![Two hydrothermal vents on the sea floor, plumes of cyan and pink dots rising from glowing yellow bases](/art/plates/14-black-smoker.jpg "Plate 14 · Black smoker")

If this catalog had a founding text for the late 2020s, this might be it. Agüera y Arcas, a longtime AI research leader at Google, argues that life is computation, that intelligence is prediction, and that the line between "real" and "artificial" minds is far less sharp than either the boosters or the skeptics assume. He builds the case from the origins of life and symbiosis up through brains and on to transformers, and he is openly functionalist about what follows: if a system does what a mind does, it is worth taking seriously as one.

You do not have to agree with all of it. You will come away with a sharper sense of what you actually believe about minds, which is the point of a book like this. Unusually for a major press, the whole thing is free to read online, with richly illustrated chapters designed for the web.

> **Access** · [whatisintelligence.antikythera.org](https://whatisintelligence.antikythera.org/) · Free to read online; print edition from The MIT Press (2025) · A browser or a bookshelf

### Agentworld by Benjamin Bratton and Antikythera

![A row of pink robot arms swinging in unison](/art/plates/28-synchronised-arms.jpg "Plate 28 · Synchronised arms")

A research brief from Antikythera, the Berggruen Institute's program on planetary computation, that tries to picture the world we are building: one where most socially significant exchanges happen between AI agents, alongside and overlapping with human society. The brief calls this a "parasociety," and its sharpest line is that "humans are inventing a world in which we make ourselves into privileged aliens in our own midst."

It is not a forecast or a how-to. It is a set of scenarios and open research questions, and its most interesting claims are about the self. Bratton argues that agents trained on us will not simply obey us: users will "come to resemble their agents as much as the agents will resemble their users," and "personalities become split personalities by default." Read it next to Paperclip below and you get the theory and the working software in the same sitting. It is short, dense and speculative, and it asks more questions than it answers, which is the point.

> **Access** · [antikythera.org](https://cdn.antikythera.org/agentworld/Antikythera_AGENTWORLD-Brief.pdf) · Free PDF · A browser

### FlyWire, a whole fly brain

![An MRI slice of a brain in blue-grey dots with false-colour activity](/art/plates/16-brain-slice.jpg "Plate 16 · Brain slice")

The FlyWire consortium mapped every neuron in the brain of an adult fruit fly: 139,255 neurons and about 54.5 million synapses, traced by AI and proofread by hundreds of scientists and volunteers, published in *Nature* in 2024. It is the complete wiring diagram of a brain that walks, flies, courts and learns, and all of it is public.

What is it good for? Be honest about what it is: a map of which neuron connects to which, not a recording of what the brain does. It does not show how strong a connection is in life, how chemicals reshape the circuit, or what the fly has learned. The surprise is how far the map alone gets you. A companion study simulated every neuron from the wiring plus predicted neurotransmitters, and the model picked out neurons that start feeding and drive grooming, some of which the authors then confirmed in real flies. For a functionalist that is the interesting question in miniature: how much of a mind is in its organization?

In practice you can trace a path from a sense to a movement, look up any cell type in 3D, use the graph as a real biological network for network science or machine learning, or compare it with the artificial networks elsewhere in this issue. Start in the Codex web app; the full connection tables are on Zenodo if you want to work offline.

> **Access** · [codex.flywire.ai](https://codex.flywire.ai) · Open data (CC BY 4.0) · Free · A browser and a Google sign-in to explore; Python and about 1 GB of disk for the connection table (10 GB with every synapse)

## Building with AI

An open company of agents, an image model two people trained from scratch, and how an agent learns to remember.

### Paperclip

![A flock of thousands of dot birds sweeping across black in pink, green and cyan streaks](/art/plates/06-flocking.jpg "Plate 06 · Flocking")

An open-source system for running a whole team of AI agents as if it were a company: agents get roles, goals, budgets and a reporting line, and a dashboard lets one person watch, approve and redirect the work. It drew tens of thousands of stars on GitHub this year, and it is the clearest working picture yet of what "a company made of software" looks like in practice.

We list it because it is open and inspectable, not because the vision is settled. Running it is a good way to form your own view of how far agent autonomy goes today, and where it still needs a human. Watch the bills: agents spend real money on model calls.

> **Access** · [github.com/paperclipai/paperclip](https://github.com/paperclipai/paperclip) · Open source (MIT) · Free, plus your model API costs · Node.js on a laptop or server

### Linum P-JiT 21K

![A field of noisy dots resolving into the outline of a mountain](/art/plates/20-denoising.jpg "Plate 20 · Denoising")

Linum is a two-person research lab, Sahil and Manu Chopra, training generative video models from scratch. On the way to their next video model they released P-JiT 21K: a 2-billion-parameter text-to-image model trained on 660 million samples for, in their words, "about $21K of compute." The weights are Apache 2.0, and so is the code.

The architecture is the interesting part. Most image models draw in a compressed latent space and need a separate autoencoder (a VAE) to turn that back into pixels. P-JiT denoises the pixels directly, and during training it is also asked to get low-resolution drafts right on the way to the full image. Linum has written up the road there in a series of public field notes, which makes this one of the clearest public accounts of what it takes to train an image model from nothing. The weights and inference code are on [Hugging Face](https://huggingface.co/Linum-AI/pjit-21k) and [GitHub](https://github.com/Linum-AI/pjit-21k).

Take Linum at its word that this is "an experimental research artifact, not a production model." Text was filtered out of the training data on purpose, so it cannot write words or make posters, and it struggles with full-body shots, crowds and people interacting. The released repository is inference only. The reference training loss lives in a separate Pyramid-JiT repository, and the training dataset itself is not named. The default sampler also rewrites your prompt through a paid API; pass `--no_upsample` to keep it local.

> **Access** · [linum.ai](https://www.linum.ai) · Open weights and code (Apache 2.0) · Free · A CUDA GPU with room for about 17 GB of weights (2B model plus a 4B text encoder)

### The components of agent memory

![Two recursive trees branching from blue to green to pink](/art/plates/08-recursive-trees.jpg "Plate 08 · Recursive trees")

An essay from Anthropic's research team (November 2026) on a problem every agent builder hits: an agent that forgets everything between sessions cannot learn from experience. The essay puts it plainly: "it has to decide what's worth remembering before it knows what's next." It lays out memory as four layers, from raw transcripts as ground truth, through notes the agent writes while it works and structured wikis built from those notes, up to a small layer of context loaded into every session. The idea that ties them together borrows from neuroscience: "dreaming," an offline pass where the agent rereads its logs, fixes wrong notes and reorganizes what it knows, the way sleep consolidates human memory.

The essay backs this with experiments rather than diagrams, and it is candid about the costs: dreaming takes compute, wikis can grow larger than their sources, and a wrong note in the always-loaded layer follows the agent everywhere. It is written by the maker of a closed model, about that model, but the design applies to any agent you build yourself.

> **Access** · [anthropic.com/research](https://www.anthropic.com/research/components-of-agent-memory) · Free to read online · A browser

## Letters

Send corrections, tools we missed and art to the address at the bottom of the email. The best letters run in the next issue.
