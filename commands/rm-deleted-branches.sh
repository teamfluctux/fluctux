# !/bin/bash
# -- Get the latest status of the remote repositories.
git fetch -p
# -- Remove local branches whose origin was deleted.
git branch -vv | grep ': gone]'|  grep -v "\*" | awk '{ print $1; }' | xargs -r git branch -d