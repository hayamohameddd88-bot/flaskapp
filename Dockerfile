# Use official Python image
FROM python:3.12-slim

# Set working directory inside the container
WORKDIR /app

# Copy requirements and install
COPY requirement.txt .
RUN pip install --no-cache-dir -r requirement.txt

# Copy Flask app
COPY flaskbackend.py .

# Expose Flask port
EXPOSE 5000

# Set environment variables
ENV FLASK_APP=flaskbackend.py
ENV FLASK_RUN_HOST=0.0.0.0
ENV FLASK_ENV=production

# Command to run Flask
CMD ["flask", "run"]

