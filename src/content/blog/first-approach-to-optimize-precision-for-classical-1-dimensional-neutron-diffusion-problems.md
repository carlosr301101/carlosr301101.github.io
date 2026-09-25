---
title: 'First approach to optimize precision for classical 1-Dimensional neutron diffusion problems.'
description: 'The goal of this post is about building the foundation for a roadmap to integrate Neutron Diffusion Problems with a non deterministic approach using Deep Learning.'
pubDate: 'Dec 4 2025'
heroImage: '../../assets/first-approach-to-optimize-precision-for-classical-1-dimensional-neutron-diffusion-problems.webp'
badge: 'Physics'
tags: ['Algorithm', 'Math', 'Learn']
timeRead: 10
---

## The Importance of New Approaches: Bridging Non Deterministic Precision and Data-Driven Speed.

The shift toward integrating Deep Learning (DL) <a href="https://www.deeplearningbook.org" target="_blank">[ 1 ]</a> , and specifically methods like Physics-Informed Neural Networks (PINNs)<a href="https://docs.nvidia.com/physicsnemo/latest/physicsnemo-sym/user_guide/theory/phys_informed.html" target="_blank">[ 2 ]</a>, into computational neutronics marks a critical advancement. This transition isn't about entirely replacing classical methods entirely, but rather about addressing their fundamental limitations in the context of modern reactor design and operational analysis.

### 1. The Challenge of Computational Cost

Classical, high-fidelity deterministic methods (like fine-mesh Finite Difference or Finite Element methods) <a href="https://www.ljll.fr/~frey/cours/UdC/ma691/ma691_ch6.pdf" target="_blank">[ 3 ]</a> are the gold standard for accuracy. However, they are computationally expensive:

- **Time-Critical Applications:** In dynamic simulations (like transient analysis) or real-time control systems, solving the underlying Partial Differential Equations (PDEs) at every time step is too slow. Engineers often have to sacrifice precision for speed, relying on highly simplified low-order models.

- **Design Optimization:** Reactor design involves exploring a massive parameter space (material composition, geometry, moderator-to-fuel ratios). Each design iteration requires a full neutronics calculation. Using classical solvers can make optimization studies take weeks or even months.

- **The Solution:** A well-trained PINN can provide an approximate solution to the Neutron Diffusion Equation in a fraction of a second (milliseconds), effectively decoupling the solution speed from the mesh size or iteration count.

### 2. Generalization Beyond Discretization

Traditional solvers are constrained by their discretization scheme. If you train a model on a **1000**-node grid, and then need a solution on a **2000**-node grid or a slightly different geometry, you must re-solve the entire system.

- **Mesh-Agnostic Solutions:** PINNs learn the underlying continuous physics of the PDE itself, rather than just solving the discretized system of linear equations. Once trained, the network acts as a continuous function of the spatial coordinates.

- **Transfer Learning Potential:** DL models trained on one family of reactor cores (e.g., Small Modular Reactors) might be fine-tuned or adapted rapidly to new core designs, a process that is far more challenging with traditional code modification and re-validation.

## 3. Handling Inverse and Optimization Problems

Many critical nuclear problems are inherently inverse: finding the material composition or fuel arrangement that results in a target flux shape.

- **Classical Difficulty:** Solving inverse problems requires iterative forward solutions, often involving adjoint functions and gradient calculations—a complex process.

- **DL Advantage:** Neural networks are inherently built for gradient descent optimization. The same Automatic Differentiation (AD) used to calculate the physical loss function (the PDE residual) can be repurposed to optimize design parameters (like geometry or cross-sections) directly, vastly simplifying and accelerating complex optimization tasks.

## 4. Robustness and Noise Resilience

While the first approach focuses on using clean, high-fidelity data, the ultimate goal is to move toward real-world applications where data is noisy and sparse (e.g., measurements from in-core detectors).

- **Data Integration:** PINNs and other DL techniques are uniquely suited to fuse noisy experimental data (non-deterministic) with the established physical laws (deterministic). The loss function automatically penalizes solutions that violate physics, providing a smoothing and regularization effect on sparse or noisy measurement data. This yields a more robust and reliable estimate of the core state than relying solely on measurements or solely on a potentially outdated deterministic model.

## 5. Similar works

In 2023 a paper was released with a similar approach for _"Solving the discretised neutron diffusion equations using neural networks"_ <a href="https://onlinelibrary.wiley.com/doi/10.1002/nme.7321" target="_blank">[ 4 ]</a>. The paper outlines a method to resolve this by reformulating numerical discretizations (Finite Volume and Finite Element) in terms of standard operations found in AI libraries, particularly discrete convolutions.

The significant advantage is code portability. Since the entire computation (discretization and solving) is expressed using functions from widely supported AI libraries, the code can be deployed seamlessly across CPUs, GPUs, and AI processors without modification. The results are shown to be identical to those obtained by standard, non-AI-library codes (e.g., Fortran) <a href="https://github.com/trfphillips/Neural-Network-Transport-Solver" target="_blank">[ 5 ]</a> .

The paper differentiates its approach from surrogate modeling, stating that their method provides an exact representation of a given discretization, whereas surrogate models only provide an approximation requiring training.

The authors adopt an approach that uses untrained networks because they are primarily interested in solving discretizations exactly, rather than approximating solutions via training.

## Conclusion

The integration of DL into Neutron Diffusion Problems is not a mere technological upgrade; it is a paradigm shift towards data-informed physics modeling.
By establishing a robust foundation of high-precision classical solutions, we create the ground truth necessary to train and validate these neural network models. This roadmap leads to:

- Ultra-fast solvers for real-time control.

- Efficient optimization for advanced reactor design.

- Robust data assimilation for improved operational safety and maintenance.

This new approach ensures that the accuracy achieved by decades of nuclear computational science is preserved, while the computational speed required for modern, complex engineering challenges is finally met.
