#!/bin/bash

echo "=== CONTEXT DUMP - CONSOLE OUTPUT ONLY ==="
echo ""

# Find all files excluding node_modules, .git, and other common excludes
find . \
    -type f \
    ! -path "*/\.*" \
    ! -path "*/node_modules/*" \
    ! -name "*.png" \
    ! -name "*.jpg" \
    ! -name "*.jpeg" \
    ! -name "*.ico" \
    ! -name "*.ttf" \
    ! -name "*.svg" \
    ! -name "dump_context.sh" \
    -print0 | while IFS= read -r -d '' file; do
    
    # Remove leading ./
    clean_path="${file#./}"
    
    # Output file header and content to console
    echo "=== File: $clean_path ==="
    echo "=== Content ==="
    cat "$file"
    echo -e "\n=== End of $clean_path ===\n"
done

echo "=== END OF CONTEXT DUMP ==="
