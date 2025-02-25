#!/bin/bash

# AWS S3 bucket name
BUCKET_NAME="chexs-website"

# CloudFront distribution ID (you'll get this after setting up CloudFront)
DISTRIBUTION_ID="YOUR_CLOUDFRONT_DISTRIBUTION_ID"

# Upload to S3
aws s3 sync . s3://$BUCKET_NAME --exclude "*" --include "index.html" --include "*.css" --include "*.js"

# Invalidate CloudFront cache
aws cloudfront create-invalidation --distribution-id $DISTRIBUTION_ID --paths "/*"

echo "Deployment complete!" 