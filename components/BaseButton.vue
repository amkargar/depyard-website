<script setup lang="ts">
import { cva } from 'class-variance-authority'
import { cn } from '~/utils/cn'

const props = withDefaults(defineProps<{
  variant?: 'default' | 'secondary' | 'outline' | 'ghost'
  size?: 'default' | 'sm' | 'lg' | 'icon'
  to?: string
  href?: string
  class?: string
}>(), { variant: 'default', size: 'default' })
const buttonClass = computed(() => cn(buttonVariants({ variant: props.variant, size: props.size }), props.class))
const buttonVariants = cva('ui-button', {
  variants: {
    variant: {
      default: 'ui-button-primary',
      secondary: 'ui-button-secondary',
      outline: 'ui-button-outline',
      ghost: 'ui-button-ghost',
    },
    size: {
      default: 'ui-button-md',
      sm: 'ui-button-sm',
      lg: 'ui-button-lg',
      icon: 'ui-button-icon',
    },
  },
  defaultVariants: { variant: 'default', size: 'default' },
})
</script>

<template>
  <NuxtLink v-if="to" :to="to" :class="buttonClass"><slot /></NuxtLink>
  <a v-else-if="href" :href="href" :class="buttonClass"><slot /></a>
  <button v-else :class="buttonClass" type="button"><slot /></button>
</template>
