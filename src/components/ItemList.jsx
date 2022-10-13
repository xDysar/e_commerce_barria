import Item from "./Item"

const ItemList = ({data = []}) => {
  return (
    <div className="items">
    {data.map(product => <Item key={product.id} info={product} />)}
    </div>
  )
}
export default ItemList