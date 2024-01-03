<script lang="ts">
    // import reference to Svelte lifecycle hook onMount:
    import { onMount } from 'svelte'
    // import reference to our ItemInterface:
    import type { ItemInterface } from '$lib/models'
    //import a reference to our ItemsList component:
    import ItemsListComponent from '$lib/components/items/ItemsList.component.svelte'
    // import our useAppStore hook from our store:
    import { useAppStore } from '$lib/store'

    // get a reference to our itemsStore instance using our useAppStore() hook: 
    const { 
        itemsStore 
    } = useAppStore()
    
    // get a reference to the items state data through our itemsStore getters:
    const {
        loading,
        items
    } = itemsStore.getters

    function onSelectItem (event: CustomEvent<{ item: ItemInterface }>) {
        // get the item from the event payload:
        const item = event.detail.item
        // call the itemsStore action to select the item:
        itemsStore.actions.toggleItemSelected(item)
    }

    // lifecycle onMount hook: use to dispatch our loadItems action to our itemsStore:
    onMount(async() => {
        // invoke the itemsStore action to load the items:
        itemsStore.actions.loadItems()
    })

</script>

<div>
    <ItemsListComponent
        loading={$loading}
        items={$items}
        selectItem={onSelectItem}
    />
</div>