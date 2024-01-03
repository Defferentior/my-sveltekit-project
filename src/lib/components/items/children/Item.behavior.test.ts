//import references to testing library "render" and "fireEvent"
import { render, fireEvent, screen } from '@testing-library/svelte';

// import reference to our interface
import type { ItemInterface } from '$lib/models/items/Item.interface'
// import our component
import ItemComponent from './Item.component.svelte'

describe ('Item.component: behavior',() => {
    // Note: This is an async test as we are using `fireEvent`
    it('emits an event when clicked', async () => {
        // our data to pass to our component:
        const item: ItemInterface = {
            id: 1,
            name: 'Unit test item 1',
            selected: false
        }

        const testid = 'unit-test-behavior-1'
        
        // using testing library "render to get the element by text"
        const { component } = render( ItemComponent, {
            testid,
            item
        })

        // get element reference by testid
        const buttonElement = screen.getByTestId(testid)
     
        // create a spy function with vitest.fn()
        const mockOnItemSelect = vitest.fn()
        // wire up the spy function on the event that is dispatched as 'selectItem
        component.$on('selectItem', mockOnItemSelect)

        // click the element
        // Note: In svelte testing we have to use await when firing events
        // because we must wait for the next `tick` to allow for svelte to flush all pending state changes
        await fireEvent.click(buttonElement)
        

        expect(mockOnItemSelect).toHaveBeenCalledTimes(1)
    })
})