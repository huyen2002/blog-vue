<template>
    <div class="w-full">
        <Logo/>
        <div class="flex gap-2">
            <IconSearch/>
            <input class="w-full rounded-lg border-gray-300 outline-none border-2 p-2" placeholder="Search"
                   type="text"/>
        </div>

    </div>
</template>

<script>

import {defineComponent} from "vue";
import IconSearch from "@/components/icons/IconSearch.vue";
import Logo from "@/components/Logo.vue";

export default defineComponent({
    components: {Logo, IconSearch}
})
</script>
