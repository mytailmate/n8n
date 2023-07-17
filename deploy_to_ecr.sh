#!/bin/bash

# Replace these variables with your own values
AWS_REGION="your-aws-region"
ECR_REPOSITORY_URI="your-ecr-repository-uri"
DOCKER_IMAGE_NAME="your-image-name"
DOCKER_IMAGE_TAG="your-image-tag"

# Step 1: Build the Docker image locally
docker build -t $DOCKER_IMAGE_NAME:$DOCKER_IMAGE_TAG .

# Step 2: Tag the Docker image with the Amazon ECR repository URI
docker tag $DOCKER_IMAGE_NAME:$DOCKER_IMAGE_TAG $ECR_REPOSITORY_URI/$DOCKER_IMAGE_NAME:$DOCKER_IMAGE_TAG

# Step 3: Log in to Amazon ECR
AWS_LOGIN_CMD=$(aws ecr get-login-password --region $AWS_REGION)
$AWS_LOGIN_CMD

# Step 4: Push the Docker image to Amazon ECR
docker push $ECR_REPOSITORY_URI/$DOCKER_IMAGE_NAME:$DOCKER_IMAGE_TAG

echo "Docker image '$DOCKER_IMAGE_NAME:$DOCKER_IMAGE_TAG' has been pushed to Amazon ECR repository '$ECR_REPOSITORY_URI'."

