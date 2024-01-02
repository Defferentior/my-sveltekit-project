<script lang="ts">
    // import a reference to our ItemInterface
    import type { ItemInterface } from '$lib/models/items/Item.interface';
    // expose a property called items with a default value of a blank array
    export let items: ItemInterface[] = []; //here replace any[] with ItemInterface[]

    // add a function to handle the click event
    const handleClick = (item: ItemInterface) => { 
        item.selected = !item.selected 
        items = items
        //console.log('handleItemClick', item.id, item.selected)
    }
</script>

<div>
    <h3>Items:</h3> 
    <ul>
    {#each items as item} 
        <li>
            {item.name} 
            <button on:click={() => handleClick(item)}>
                {item.selected ? 'Deselect' : 'Select'}
            </button>
        </li>
    {/each} 
    </ul>
</div>