<script setup lang="ts">
import { Check, Copy } from '@lucide/vue'

const props = defineProps<{ command: string; compact?: boolean }>()
const copied = ref(false)
let timer: ReturnType<typeof setTimeout> | undefined

async function copyCommand() {
  try {
    await navigator.clipboard.writeText(props.command)
    copied.value = true
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => (copied.value = false), 1800)
  } catch {
    // Clipboard access is only available in secure contexts; users can still select the command.
  }
}

onBeforeUnmount(() => { if (timer) clearTimeout(timer) })
</script>

<template>
  <div class="command-shell" :class="{ compact }">
    <div class="command-prompt"><span class="prompt-dollar">$</span><code>{{ command }}</code></div>
    <button class="copy-command" type="button" :aria-label="copied ? 'Copied command' : 'Copy command'" @click="copyCommand">
      <Check v-if="copied" :size="15" class="copied-check" />
      <Copy v-else :size="15" />
      <span>{{ copied ? 'Copied' : 'Copy' }}</span>
    </button>
  </div>
</template>
