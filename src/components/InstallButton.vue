<script lang="ts">
import {defineComponent, onBeforeUnmount, onMounted, ref} from 'vue'

export default defineComponent({
    name: 'InstallButton',
    setup() {
        const showInstallButton = ref(false);
        let deferredPrompt: any = null;

        const beforeInstallPromptHandler = (event: Event) => {
            event.preventDefault();
            deferredPrompt = event;
            showInstallButton.value = true;
        };

        const installPWA = () => {
            if (deferredPrompt) {
                deferredPrompt.prompt();
                deferredPrompt.userChoice.then((choiceResult: { outcome: string }) => {
                    if (choiceResult.outcome === 'accepted') {
                        console.log('User accepted the install prompt');
                    } else {
                        console.log('User dismissed the install prompt');
                    }
                    deferredPrompt = null;
                    showInstallButton.value = false;
                });
            }
        };

        onMounted(() => {
            window.addEventListener('beforeinstallprompt', beforeInstallPromptHandler);
        });

        onBeforeUnmount(() => {
            window.removeEventListener('beforeinstallprompt', beforeInstallPromptHandler);
        });

        return {
            showInstallButton,
            installPWA
        };
    }
})
</script>

<template>
    <div class="flex flex-col justify-center items-center">
        <button class="bg-violet-600 text-white p-3 rounded-3xl"
                @click="installPWA">
            Installer SimonSays
        </button>
    </div>
</template>
