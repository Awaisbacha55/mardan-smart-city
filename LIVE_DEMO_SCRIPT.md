# 🎤 Live Demonstration Script

**Tender Reference:** DESC-MRD-2026-CNC-088
**Goal:** Prove to the evaluation board that your Cloud-Native architecture can successfully "spin up", scale under load, and remain highly resilient.

---

## Part 1: The "Spin Up" (Containerization & Orchestration)

**What you say to the board:**
> *"Respected Board Members, to demonstrate our Containerization Strategy, I will now 'spin up' the entire Mardan Smart City infrastructure from scratch using a single declarative command. This includes the isolated React Frontend, Node.js Backend, PostgreSQL Database, and Redis Cache."*

**What you type in your terminal:**
```bash
docker-compose up -d --build
```

**What you say while it loads:**
> *"As you can see, our CI/CD pipeline builds the microservices automatically. In our production environment, these identical containers are orchestrated by K3s Kubernetes, ensuring zero-downtime rollouts via GitOps (ArgoCD)."*

---

## Part 2: Proving the System is Live

**What you say:**
> *"The microservices are now live. Let's access the citizen portal."*

**What you do:**
1. Open your web browser.
2. Go to `http://localhost:3000`
3. Show the board the beautiful, responsive UI.
4. Click **Create Account**. 
5. Register a fake user *(Make sure your email ends in `.com`!)*.
6. Submit a fake "Water Leakage" complaint to prove the database is capturing stateful data.

---

## Part 3: Demonstrating Resilience & Self-Healing

**What you say:**
> *"In a legacy monolith, if the backend crashes, the whole city loses access. Because we use a Cloud-Native architecture, our containers are self-healing. Let's simulate a massive failure by manually killing the backend."*

**What you type in your terminal:**
```bash
docker kill mardan-backend
```

**What you say immediately after:**
> *"The backend is dead. However, Kubernetes/Docker instantly detects the failure and self-heals by spinning up a replacement container automatically."*

**What you type to prove it:**
```bash
docker ps
```
*(Point out to the board that the `mardan-backend` container says "Up 2 seconds" — it automatically restarted!)*

---

## Part 4: Auto-Scaling & Load Balancing (Theory)

**What you say:**
> *"Finally, regarding Auto-Scaling: If 100,000 citizens log in at the exact same time, our Kubernetes Horizontal Pod Autoscaler (HPA) and KEDA metrics will detect the CPU spike. It will instantly scale our backend from 3 pods to 20 pods to load-balance the traffic. Once the spike ends, it scales back down to save the government money. All of this is provisioned automatically via our Terraform Infrastructure-as-Code scripts."*

---

**End of Demo.** 
*(Smile, ask if they have any questions, and hand them your printed Envelopes A & B!)*
