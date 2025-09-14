import type { OrderActions } from "../reducers/order-reducer"
import type { MenuItems } from "../types/types"

type MenuItemProps = {
    item: MenuItems
    dispatch: React.ActionDispatch<[action: OrderActions]>
}

const Menu = ({item, dispatch} : MenuItemProps) => {


    return (
        <button className="border-2 border-teal-400 hover:bg-teal-200 cursor-pointer w-full p-3 flex justify-between"
        onClick={() => dispatch({type: 'add-item', payload: {item}})}
        >
            <p>{item.name}</p>
            <p className="font-black">${item.price}</p>
        </button>
    )
}

export default Menu