import React from 'react'
import { Button } from 'react-bootstrap'
import { UpdateCart, RemoveItemFromCart } from '../service'
import { useDispatch, useSelector } from 'react-redux'

function CartItem({ cartItemData, quantity, notifyNotEnoughBalance }) {
  const dispatch = useDispatch()
  const user = useSelector((state) => state.user)
  const { cart } = useSelector((state) => state.cart)

  function getPrice() {
    let total = 0
    for (let index = 0; index < cart.length; index++) {
      const element = cart[index]

      total += element['quantity'] * element['product']['price']
    }

    return total
  }

  function updateQty(Action) {
    if (Action === 'add') {
      if (user.balance < getPrice() + cartItemData['product']['price']) {
        notifyNotEnoughBalance()
      } else {
        dispatch(
          UpdateCart({
            customer_id: cartItemData['customer']['id'],
            product_id: cartItemData['product']['id'],
            quantity: cartItemData['quantity'] + 1,
          })
        )
      }
    } else if (Action === 'sub' && cartItemData['quantity'] >= 1) {
      dispatch(
        UpdateCart({
          customer_id: cartItemData['customer']['id'],
          product_id: cartItemData['product']['id'],
          quantity: cartItemData['quantity'] - 1,
        })
      )
    } else if (Action === 'remove') {
      dispatch(
        RemoveItemFromCart({
          customer_id: cartItemData['customer']['id'],
          product_id: cartItemData['product']['id'],
        })
      )
    }
  }

  return (
    <div class="d-flex justify-content-between align-items-center p-2">
      <img
        class="img-thumbnail rounded"
        src={cartItemData['product']['image']}
        alt="Fast Starter"
        style={{ width: '20%' }}
      />
      <div class>
        <h5>{cartItemData['product']['name']}</h5>
      </div>
      <div class="d-flex flex-column">
        <p class="text-center">
          <strong id="summary">{`${cartItemData['product']['price']} points`}</strong>
        </p>
        <div class="input-group">
          <span class="input-group-btn">
            <button
              type="button"
              class="btn btn-default btn-number"
              data-type="minus"
              onClick={() => {
                updateQty('sub')
              }}
            >
              <span class="fas fa-minus"></span>
            </button>
          </span>
          <input
            type="text"
            class="form-control input-number"
            readOnly={true}
            value={quantity}
            min="1"
          />
          <span class="input-group-btn">
            <button
              type="button"
              class="btn btn-default btn-number"
              data-type="plus"
              onClick={() => updateQty('add')}
            >
              <span class="fas fa-plus"></span>
            </button>
          </span>
        </div>
        <br />
        <Button variant="danger" onClick={() => updateQty('remove')}>
          Delete
        </Button>
      </div>
    </div>
  )
}

export default CartItem
