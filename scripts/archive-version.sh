#!/usr/bin/env bash
#
# archive-version.sh — freeze a portfolio version for the site history.
#
# Usage:
#   ./scripts/archive-version.sh v1 8a5bf51 "Original glass-cards design" [--dry-run]
#
# What it does:
#   1. Validates the version name + commit.
#   2. Verifies the commit contains a complete dist/ build.
#   3. Creates + pushes the annotated tag.
#   4. Prints the exact VPS commands, the nginx snippet, and the cv.js
#      entry to add once https://v1.n3dhir.com is live.
#
# Note: archived versions are served frontend-only (nginx + dist/).
# Making sure the archived commit needs no backend is your responsibility.
#
# With --dry-run, step 3 is skipped (nothing is pushed).

set -euo pipefail

DRY_RUN=false
ARGS=()
for arg in "$@"; do
  if [[ "$arg" == "--dry-run" ]]; then
    DRY_RUN=true
  else
    ARGS+=("$arg")
  fi
done

if [[ ${#ARGS[@]} -lt 3 ]]; then
  echo "Usage: $0 <version, e.g. v1> <commit sha> \"<short description>\" [--dry-run]"
  exit 1
fi

VERSION="${ARGS[0]}"
COMMIT="${ARGS[1]}"
DESCRIPTION="${ARGS[2]}"
DOMAIN="n3dhir.com"
HOST="${VERSION}.${DOMAIN}"
ROOT_DIR="/var/www/portfolio-${VERSION}"

if [[ ! "$VERSION" =~ ^v[0-9]+$ ]]; then
  echo "ERROR: version must look like v1, v2, ... (got '$VERSION')"
  exit 1
fi

echo "==> Resolving commit $COMMIT..."
FULL_SHA="$(git rev-parse --verify "$COMMIT^{commit}")"
echo "    $FULL_SHA"

echo "==> Checking dist/ build exists in commit..."
if ! git ls-tree -r --name-only "$FULL_SHA" -- dist/index.html | grep -q "dist/index.html"; then
  echo "ERROR: $FULL_SHA has no dist/index.html — build it first (npm run build + commit dist/)."
  exit 1
fi
DIST_FILES="$(git ls-tree -r --name-only "$FULL_SHA" -- dist | wc -l)"
echo "    dist/ OK ($DIST_FILES files)"

if git rev-parse --verify "refs/tags/$VERSION" >/dev/null 2>&1; then
  echo "ERROR: tag '$VERSION' already exists ($(git rev-list -n 1 "$VERSION")). Delete it first if you mean to redo it."
  exit 1
fi

if [[ "$DRY_RUN" == true ]]; then
  echo "==> --dry-run: skipping tag creation + push."
else
  echo "==> Creating annotated tag $VERSION..."
  git tag -a "$VERSION" "$FULL_SHA" -m "$VERSION: $DESCRIPTION"
  echo "==> Pushing tag to origin..."
  git push origin "$VERSION"
  echo "    tag $VERSION pushed."
fi

echo ""
echo "================================================================"
echo " ONE-TIME SETUP (manual, only ever done once)"
echo "================================================================"
cat <<EOF
1. DNS: one wildcard A record  *.n3dhir.com -> your VPS IP.
2. Nginx: one server block matching all versions (regex + variable root):

   server {
     listen 443 ssl;
     server_name ~^(?<ver>v[0-9]+)\.n3dhir\.com\$;
     root /var/www/portfolio-\$ver/dist;
     ssl_certificate /etc/letsencrypt/live/n3dhir.com/fullchain.pem;
     ssl_certificate_key /etc/letsencrypt/live/n3dhir.com/privkey.pem;
     location / {
       try_files \$uri \$uri/ /index.html;
     }
   }

   (Wildcard cert via DNS-01 — HTTP-01 can't issue wildcards.
    Covers *.n3dhir.com + n3dhir.com in one cert.)
EOF

echo ""
echo "================================================================"
echo " PER VERSION (the only repeating step)"
echo "================================================================"
cat <<EOF
cd /path/to/portfolio && git pull && git fetch --tags
git worktree add $ROOT_DIR $VERSION
# ...and https://$HOST just works. No nginx/DNS changes, ever again.
EOF

echo ""
echo "================================================================"
echo " SITE ENTRY (add to cv.versions in src/data/cv.js once live)"
echo "================================================================"
cat <<EOF
{ version: "$VERSION", note: "$DESCRIPTION", href: "https://$HOST" },
EOF

echo ""
echo "Verify with: curl -sI https://$HOST | head -1   (expect HTTP/2 200)"
echo "Done."
