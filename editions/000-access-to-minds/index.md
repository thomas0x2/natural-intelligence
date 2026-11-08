---
title: Access to Minds
number: 0
date: 2026-11-07
summary: The first issue. What this catalog is for, a book that asks what intelligence is, and tools that let one person look inside a mind, run one, or build the silicon for one.
cover: /art/plates/07-physarum.jpg
coverAlt: Glowing blue and yellow veins of a slime mould network on black
coverCredit: "PLATE 07 · Physarum. Agents sense the trail ahead, turn to the strongest, step, and deposit more. No agent knows the network it is building."
topics: [minds, neuro, ml, tools, hardware, learning]
draft: false
---

## Purpose

We are as minds, and might as well get good at it.

Fifty-eight years ago a catalog of tools told its readers that the power to shape their own world was within reach, if they knew where to look. In the late 2020s the most powerful tools we have are tools for thinking, and many of them are being built behind closed doors. This catalog is a map of the other doors: the open ones.

Every issue follows the same rule. If an item does not make a capable, curious person more able to understand or build something, it does not go in. Open things come first. Every entry ends with an **Access** line that tells you where to get it, what it costs and what you need to run it.

This is issue zero. Read [the principles](/brain/principles/) for what we believe and why.

## Understanding Minds

What a mind is, and the best places to watch one at work, in a book, a connectome and a course.

### What Is Intelligence? by Blaise Agüera y Arcas

![Two hydrothermal vents on the sea floor, plumes of cyan and pink dots rising from glowing yellow bases](/art/plates/14-black-smoker.jpg "Plate 14 · Black smoker")

If this catalog had a founding text for the late 2020s, this might be it. Agüera y Arcas, a longtime AI research leader at Google, argues that life is computation, that intelligence is prediction, and that the line between "real" and "artificial" minds is far less sharp than either the boosters or the skeptics assume. He builds the case from the origins of life and symbiosis up through brains and on to transformers, and he is openly functionalist about what follows: if a system does what a mind does, it is worth taking seriously as one.

You do not have to agree with all of it. You will come away with a sharper sense of what you actually believe about minds, which is the point of a book like this. Unusually for a major press, the whole thing is free to read online, with richly illustrated chapters designed for the web.

> **Access** · [whatisintelligence.antikythera.org](https://whatisintelligence.antikythera.org/) · Free to read online; print edition from The MIT Press (2025) · A browser or a bookshelf

### FlyWire, a whole fly brain

![An MRI slice of a brain in blue-grey dots with false-colour activity](/art/plates/16-brain-slice.jpg "Plate 16 · Brain slice")

The FlyWire consortium mapped every neuron in the brain of an adult fruit fly: 139,255 neurons and about 54.5 million synapses, traced by AI and proofread by hundreds of scientists and volunteers, published in *Nature* in 2024. It is the complete wiring diagram of a brain that walks, flies, courts and learns, and all of it is public.

What is it good for? Be honest about what it is: a map of which neuron connects to which, not a recording of what the brain does. It does not show how strong a connection is in life, how chemicals reshape the circuit, or what the fly has learned. The surprise is how far the map alone gets you. A companion study simulated every neuron from the wiring plus predicted neurotransmitters, and the model picked out neurons that start feeding and drive grooming, some of which the authors then confirmed in real flies. For a functionalist that is the interesting question in miniature: how much of a mind is in its organization?

In practice you can trace a path from a sense to a movement, look up any cell type in 3D, use the graph as a real biological network for network science or machine learning, or compare it with the artificial networks elsewhere in this issue. Start in the Codex web app; the full connection tables are on Zenodo if you want to work offline.

> **Access** · [codex.flywire.ai](https://codex.flywire.ai) · Open data (CC BY 4.0) · Free · A browser and a Google sign-in to explore; Python and about 1 GB of disk for the connection table (10 GB with every synapse)

### Neuromatch Academy

![Concentric green interference rings filling the frame](/art/plates/17-rings.jpg "Plate 17 · Rings")

Free, intensive online courses in computational neuroscience, deep learning and climate science, built by researchers and taught in small groups across time zones. The course materials are open notebooks you can work through on your own at any time.

> **Access** · [neuromatch.io](https://neuromatch.io) · Open materials (CC BY) · Free · A browser and a Google account for the notebooks

## Building with AI

Open models, the software to run them on your own machine, and a first look at agents that work together.

### A language model with nothing hidden

![Clouds of coloured dots clustering into separate groups](/art/plates/19-embedding-space.jpg "Plate 19 · Embedding space")

Many "open" models release only the final weights. Ai2's OLMo family releases the weights, the full training data, the training code, the intermediate checkpoints and the evaluation code. That means you can study not only what the model does but how it came to do it, which is the kind of access the rest of this catalog argues for.

> **Access** · [allenai.org/olmo](https://allenai.org/olmo) · Open source and open weights (Apache 2.0) · Free · The small models run on one consumer GPU

### llama.cpp

![Flying through an endless 3D grid of glowing dots](/art/plates/22-through-the-grid.jpg "Plate 22 · Through the grid")

A plain C and C++ program that runs open-weight language models on ordinary hardware, including laptops without a dedicated GPU. It is the engine underneath a large share of local AI tools. If you want a model that runs on your own machine, offline, and answers to no one's terms of service, start here.

> **Access** · [github.com/ggml-org/llama.cpp](https://github.com/ggml-org/llama.cpp) · Open source (MIT) · Free · Any recent laptop

### Paperclip

![A flock of thousands of dot birds sweeping across black in pink, green and cyan streaks](/art/plates/06-flocking.jpg "Plate 06 · Flocking")

An open-source system for running a whole team of AI agents as if it were a company: agents get roles, goals, budgets and a reporting line, and a dashboard lets one person watch, approve and redirect the work. It drew tens of thousands of stars on GitHub this year, and it is the clearest working picture yet of what "a company made of software" looks like in practice.

We list it because it is open and inspectable, not because the vision is settled. Running it is a good way to form your own view of how far agent autonomy goes today, and where it still needs a human. Watch the bills: agents spend real money on model calls.

> **Access** · [github.com/paperclipai/paperclip](https://github.com/paperclipai/paperclip) · Open source (MIT) · Free, plus your model API costs · Node.js on a laptop or server

## Silicon

Intelligence runs on matter. The tools for designing chips are finally open enough for one person to use.

![A chip die floorplan of nested blocks and fine line arrays washed in pink, blue, cyan and yellow](/art/plates/23-chip-die.jpg "PLATE 23 · Chip die. A recursive floorplan whose core is a copy of the whole chip.")

### Tiny Tapeout

Chip fabrication used to require a company. Tiny Tapeout pools many small designs onto a shared die so that an individual can get a real, manufactured chip for roughly the price of a nice dinner. The tooling is open source, the designs are public, and the tutorials start from zero. Design a tiny neuron in logic gates and hold it in your hand a few months later.

> **Access** · [tinytapeout.com](https://tinytapeout.com) · Open-source tools and designs · Small fee per design tile · A browser to start

## Letters

Send corrections, tools we missed and art to the address at the bottom of the email. The best letters run in the next issue.
