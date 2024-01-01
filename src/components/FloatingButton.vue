<template>
    <div class = "text-2xl fixed bottom-0 right-0 p-4 flex items-end justify-end">
        <RouterLink :to="{name: 'newProperty'}">
            <span class="fa-stack cursor-pointer hover:drop-shadow-md hover:-translate-x-0.5 hover:-translate-y-0.5">
                <i class="fa-solid fa-circle fa-stack-2x text-calc-primary"></i>
                <i class="fa-solid fa-plus fa-stack-1x fa-inverse"></i>
            </span>
        </RouterLink>
    </div>
</template>

<script>
</script>

<style scoped>
</style>
