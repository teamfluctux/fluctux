#!/bin/bash

for branch in $(git branch -r | grep -v '\->'); do
  git branch --track "${branch#origin/}" "$branch" 2>/dev/null
done

# Step 1: Fetch all latest changes and prune deleted branches
git fetch --all --prune

# Step 2: Clean up any directories named like a branch (just in case)
for item in *; do
  if [ -d "$item" ] && git show-ref --verify --quiet "refs/heads/$item"; then
    echo "Directory '$item' conflicts with a branch name. Deleting directory..."
    rm -rf "$item"
  fi
done

# Step 3: Track all remote branches locally
for branch in $(git branch -r | grep -v '\->'); do
  local_branch="${branch#origin/}"
  if ! git show-ref --verify --quiet "refs/heads/$local_branch"; then
    git branch --track "$local_branch" "$branch" 2>/dev/null || \
      echo "Failed to track $local_branch (might already exist or be invalid)"
  fi
done

# Step 4: Final fetch to ensure all branches are synced
git fetch --all --prune