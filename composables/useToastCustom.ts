export function successToast(message: string) {
    const toast = useToast();
    toast.add({
        icon: "i-heroicons-check-badge",
        color: "primary",
        title: message,
        description: "This is a notification.",
        timeout: 5000,
    });
}

export function errorToast(message: string) {
    const toast = useToast();
    toast.add({
        icon: "i-heroicons-x-circle",
        color: "red",
        title: message,
        description: "This is a notification.",
        timeout: 5000,
    });
}

export function infoToast(message: string) {
    const toast = useToast();
    toast.add({
        icon: "i-heroicons-information-circle",
        color: "blue",
        title: message,
        description: "This is a notification.",
        timeout: 5000,
    });
}

export function warningToast(message: string) {
    const toast = useToast();
    toast.add({
        icon: "i-heroicons-shield-exclamation",
        color: "yellow",
        title: message,
        description: "This is a notification.",
        timeout: 5000,
    });
}