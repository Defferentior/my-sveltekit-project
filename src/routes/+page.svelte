<script lang="ts">
import type { ItemInterface } from '$lib/models/items/Item.interface'

import ItemsListComponent from '$lib/components/items/ItemsList.component.svelte'

const items: ItemInterface[] = [{ // here change any[] to ItemInterface[]
    id: 1,
    name: 'Item 1',
    selected: true // add selected: false to each item
}, {
  id: 2,
    name: 'Item 2',
    selected: false
  }, {
    id: 3,
    name: 'Item 3',
    selected: false
}]

</script>

<main>
  <div class="home">
    <ItemsListComponent items={items}/> 
  </div>
</main>

<style> 
  .home {
    padding: 20px; 
  }
</style>