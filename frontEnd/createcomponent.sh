#!/bin/bash
EXEC_DIR=$(pwd)
read -p "名前を入力してください: " USER_INPUT
TARGET_PATH="${EXEC_DIR}/${USER_INPUT}"
mkdir -p "$TARGET_PATH/src"
cat <<EOF > "$TARGET_PATH/${USER_INPUT}.ts"
import ${USER_INPUT} from './src/${USER_INPUT}.vue'
export { ${USER_INPUT} }
export default ${USER_INPUT}
EOF

cat <<EOF > "$TARGET_PATH/src/${USER_INPUT}.vue"
<template></template>
<script lang="ts" setup></script>
<style scoped></style>

EOF
echo "作成完了: $TARGET_PATH"