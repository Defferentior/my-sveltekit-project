<script lang="ts">
    // import createEventDispatcher from Svelte:
    import { createEventDispatcher } from 'svelte';
    //import a reference to our ItemInterface:
    import type { ItemInterface } from '$lib/models/items/Item.interface';

    // expose a property called testid. This will be useful for unite tests (or automation testing)
    export let testid: string = 'not-set';

    // expose a property called items with a default value of a blank array
    export let item: ItemInterface = {
        id: 0,
        name: '',
        selected: false
    };

    // create a dispatcher to send events to the parent component
    const dispatch = createEventDispatcher();

    // a computed property to return a different css class based on the selected value
    $: cssClass = (): string => {
        let css = 'item'
        if (item.selected) {
            css += ' selected'
        }
        return css.trim()
    }

    function handleClick() {
        // send an event to the parent component
        dispatch('selectItem', {
            item
        })
    }
</script>
