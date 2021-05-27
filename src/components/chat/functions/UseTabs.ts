import IDictionary from "@/types/IDictionary";
import { Ref, ref, computed } from "vue";

export default function useTabs(tabs: Ref<IDictionary<string, string>>) {
    const currentTab = ref(tabs.value[0]);

    const currentTabComponent = computed(() => currentTab.value.Value);

    return { currentTabComponent, currentTab, tabs }
}