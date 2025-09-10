# Flask Docker Monitoring Project

## Description
This project demonstrates a **Flask app** running in Docker with monitoring and deployment automation:

- Flask backend and React frontend
- MySQL database running inside Docker
- Monitoring with Prometheus, Grafana, Loki, and Promtail
- Deployment automation via Ansible
- CI/CD pipeline using Jenkins

This README explains how to run the project and provides screenshots of each component.

---

## Screenshots

### 1. Codes / Flask App
![Codes Screenshot](screenshots/codes.jpg)
> Screenshot showing your project code or Flask app running.

### 2. Jenkins Pipeline Success
![Jenkins Pipeline Screenshot](screenshots/jenkins-pipeline.jpg)
> Shows the Jenkins pipeline running and completing successfully.

### 3. Ansible Playbook Execution
![Ansible Playbook Screenshot](screenshots/ansible-playbook.jpg)
> Execution of Ansible playbook installing or deploying Nginx/Docker apps.

### 4. Grafana Dashboard
![Grafana Dashboard Screenshot](screenshots/Grafana-dashboard.jpg)
> Grafana displaying live metrics such as CPU, memory, disk, swap, and logs.

### 5. Loki Logs
![Loki Logs Screenshot](screenshots/loki-logs.jpg)
> Loki logs visualized in Grafana.

---

## How to Run the Project

### 1. Clone the repository
```bash
git clone https://github.com/hayamohameddd88-bot/flaskapp.git
cd flaskapp
---
# Flask Docker Monitoring Project

## How to Run the Project

### 1. Start Docker containers
```bash
docker-compose up -d --build

---

### Access Flask App

- Open your browser at: [http://localhost:5000](http://localhost:5000)  
- You should see the Flask application interface.

---

### Access Grafana Dashboard

- Open your browser at: [http://localhost:3000](http://localhost:3000)  
- Login with default credentials:
  
### Run Ansible Playbook (Optional)

```bash
ansible-playbook ansible/install_nginx.yml -i ansible/inventory.ini --ask-become-pass

### CI/CD with Jenkins

- Jenkins pipeline is configured to build and deploy the Flask app automatically.  
- Access Jenkins at: [http://localhost:8080](http://localhost:8080) (or your configured URL).

## Notes

- Make sure Docker, Docker Compose, Ansible, and Jenkins are installed.  
- Prometheus, Grafana, Loki, and Promtail containers must be running for monitoring.  
- Add screenshots to the `screenshots/` folder and ensure filenames match exactly.  
- Avoid committing temporary files like `.swp`, `.swo`, or `.swn`; add them to `.gitignore`.

