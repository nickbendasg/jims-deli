=== File: dump_context.sh ===
=== Content ===
#!/bin/bash

# Create output directory if it doesn't exist
OUTPUT_DIR="context_dump"
mkdir -p "$OUTPUT_DIR"

# Function to create parent directories
create_parent_dirs() {
    local file="$1"
    mkdir -p "$(dirname "$file")"
}

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
    ! -path "$OUTPUT_DIR/*" \
    -print0 | while IFS= read -r -d '' file; do
    
    # Remove leading ./
    clean_path="${file#./}"
    
    # Create output file path
    output_file="$OUTPUT_DIR/$clean_path"
    
    # Create parent directories
    create_parent_dirs "$output_file"
    
    # Add file header and content to output file
    echo "=== File: $clean_path ===" > "$output_file"
    echo "=== Content ===" >> "$output_file"
    cat "$file" >> "$output_file"
    echo -e "\n=== End of $clean_path ===\n" >> "$output_file"
    
    # Add to index file
    echo "- $clean_path" >> "$OUTPUT_DIR/index.md"
done

# Create a single concatenated file
echo "Creating single concatenated file..."
cat "$OUTPUT_DIR/index.md" > "$OUTPUT_DIR/all_files.txt"
echo -e "\n=== All Files Content ===\n" >> "$OUTPUT_DIR/all_files.txt"
find "$OUTPUT_DIR" -type f ! -name "all_files.txt" ! -name "index.md" -exec cat {} \; >> "$OUTPUT_DIR/all_files.txt"

echo "Context dump completed!"
echo "- Individual files are in the '$OUTPUT_DIR' directory"
echo "- Full concatenated output is in '$OUTPUT_DIR/all_files.txt'"
echo "- File index is in '$OUTPUT_DIR/index.md'"

=== End of dump_context.sh ===

