import { ref, computed } from "vue";

export default function useTabs() {
    const tabs = ref(["Usuários", "Chats"]);
    const currentTab = ref(tabs.value[0]);

    const currentTabComponent = computed(() => {
        return currentTab.value === "Usuários" ? "ListUsuarios" : "ListChats"
    });

    return { currentTabComponent, currentTab, tabs }
}