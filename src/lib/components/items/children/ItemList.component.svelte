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

    function handleClick(item: ItemInterface) {
        // send an event to the parent component
        dispatch('selectItem', {
            item
        })
    }

    function handleKeyDown(event: KeyboardEvent, item: ItemInterface) {
        if (event.key === 'Enter') {
            handleClick(item);
        }
    }
</script>

<button data-testid={testid} class={cssClass()} on:click={() => handleClick(item)} on:keydown={(event) => handleKeyDown(event, item)}>
    <div class="selected-indicator">*</div>
    <div class="name"> {item.name} [{item.selected}]</div>
</button>

<style>
    button.item {
        padding: 5px;
        outline: solid 1px #eee;
        display: flex;
        align-items: center;
        height: 30px;
        cursor: pointer;
        transition: background-color 0.3s ease;

    }
    button.item.name{
        margin-left: 6px;
    }
    button.item.selected-indicator {
        font-size: 2em;
        line-height: 0.5em;
        margin: 10px 8px 0 8px;
        color: lightgray;
    }
    button.item.selected.selected-indicator {
        color: skyblue;
    }
    button.item:hover {
        background-color: #eee;
    }
</style>