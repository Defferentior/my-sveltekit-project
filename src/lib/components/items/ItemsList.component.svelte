<script lang="ts">
    // import a reference to our ItemInterface
    import type { ItemInterface } from '$lib/models/items/Item.interface';
    // import a reference to our Item component
    import ItemComponent from './children/Item.component.svelte';
    // import a reference to our Loader component
    import Loader from '../shared/Loader.component.svelte';

    // expose loading property
    export let loading = false
    //
    export let selectItem: (event: CustomEvent<{item: ItemInterface}>) => void

    // expose a property called items with a default value of a blank array
    export let items: ItemInterface[] = []; //here replace any[] with ItemInterface[]

</script>

<div>
    <h3>My Items - loading: {loading}</h3> 
    {#if loading} 
        <Loader /> 
    {/if}
    <ul>
    {#each items as item} 
        <ItemComponent 
            {item} 
            on:selectItem={selectItem} 
        />
    {/each} 
    </ul>
</div>


<style> 
    ul {
        padding-inline-start: 0; 
        margin-block-start: 0; 
        margin-block-end: 0; 
        margin-inline-start: 0px; 
        margin-inline-end: 0px; 
        padding-inline-start: 0px;
    } 
</style>