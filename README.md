# CI/CD Pipeline with Docker & Kubernetes

## 🚀 Project Overview
This project demonstrates a complete CI/CD pipeline using GitHub Actions, Docker, and Kubernetes.

## ⚙️ Tech Stack
- GitHub Actions (CI)
- Docker
- DockerHub
- Kubernetes

## 🔄 Workflow
1. Developer pushes code to GitHub
2. GitHub Actions builds Docker image
3. Image is pushed to DockerHub
4. Kubernetes deploys the application
5. Service exposes the app

## 📦 Commands Used
kubectl apply -f k8s/
kubectl get pods
kubectl get svc

## 🌐 Output
Application successfully deployed and accessed via port-forward.
