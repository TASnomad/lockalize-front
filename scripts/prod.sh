#!/usr/bin/env bash

set -o errexit

echo "Installing helm"
curl -fsSL -o get_helm.sh https://raw.githubusercontent.com/helm/helm/master/scripts/get-helm-3
chmod 700 ./get_helm.sh
./get_helm.sh

helm version

echo "Deploying frontend build $COMMIT in production"
helm upgrade $IMAGE ./chart --namespace production --set image.revision=$COMMIT

echo "Running helm tests"
helm test frontend --namespace production

echo "Checking status from $COMMIT"
helm status frontend --namespace production
