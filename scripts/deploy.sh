#!/usr/bin/env bash

CI_REGISTRY_IMAGE=${1}
BUILD_NUMBER=${2}
ENVIRONMENT=${3}

export CI_REGISTRY_IMAGE
export BUILD_NUMBER
export ENVIRONMENT

envsubst < "scripts/$ENVIRONMENT.yaml" >  ".generated-$ENVIRONMENT.yaml"

kubectl apply -f .generated-$ENVIRONMENT.yaml
