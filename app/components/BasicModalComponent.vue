<script setup lang="ts">
import { DialogClose, DialogContent, DialogDescription, DialogOverlay, DialogPortal, DialogRoot, DialogTitle, DialogTrigger } from 'reka-ui'

const open = defineModel<boolean>('open')
</script>

<template>
  <DialogRoot v-model:open="open">
    <DialogTrigger v-bind="$attrs" class="bg-transparent">
      <slot name="trigger" />
    </DialogTrigger>
    <DialogPortal>
      <Transition name="backdrop">
        <DialogOverlay fixed inset-0 z-200 bg-darkblue op-60 />
      </Transition>
      <Transition name="modal">
        <DialogContent
          class="top-1/2 left-1/2 translate--1/2 w-[440px] h-[409px]" rounded="4" data-modal fixed
          bottom-0 z-200 transform of-y-auto shadow-lg outline-none
          @open-auto-focus.prevent
        >
          <div relative bg-neutral-0 ring="1.5 neutral/3" class="modal-container py-4">
            <DialogTitle text="24 center neutral lh-24" px-4 mb-4 font-bold lh-none as="h2">
              <slot name="title" />
            </DialogTitle>
            <DialogDescription text="center neutral" class="px-4 block">
              <slot name="description" />
            </DialogDescription>

            <div>
              <slot name="content" />
            </div>

            <DialogClose aria-label="Close" as-child absolute right-2 top-2 w-10 h-10 cursor-pointer>
              <img src="/close.svg" alt="close">
            </DialogClose>
          </div>
        </DialogContent>
      </Transition>
    </DialogPortal>
  </DialogRoot>
</template>

<style scoped>
/* https://github.com/nimiq/wallet/blob/a88d34bfa16930adbfd52baaa5b0809c38c5c365/src/components/modals/Modal.vue */

.backdrop-enter-active {
    transition: opacity 650ms cubic-bezier(0.3, 1, 0.2, 1);
}

.backdrop-leave-active {
    transition: opacity 650ms cubic-bezier(0.3, 0, 0, 1);
}

.backdrop-enter-from,
.backdrop-leave-to {
    opacity: 0;
}

/* @screen lt-xl { */
@media screen and (max-width:1200px) {

    .modal-enter-active,
    .modal-leave-active {
        transition: transform 200ms ease-out;
    }

    .modal-enter-from,
    .modal-leave-to {
        --un-translate-y: 100%;
    }
}

@media screen and (min-width:1200px) {

    .modal-enter-active,
    .modal-leave-active {
        transition:
            opacity 250ms cubic-bezier(0.4, 0, 0.2, 1),
            transform 100ms var(--nq-ease);
    }

    .modal-enter-from,
    .modal-leave-to {
        opacity: 0;
        --un-scale-x: 0.96;
        --un-scale-y: 0.96;
        --un-translate-y: calc(-50% - 0.5rem);
    }
}
</style>
