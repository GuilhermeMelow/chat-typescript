import ITabs from "@/types/ITabs";
import { Ref, ref, computed } from "vue";

export default function useTabs(tabs: Ref<ITabs[]>) {
    const currentTab = ref(tabs.value[0]);

    const currentTabComponent = computed(() => currentTab.value.component);

    return { currentTabComponent, currentTab, tabs }
}