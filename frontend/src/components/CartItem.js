import React from 'react'
import { Button } from 'react-bootstrap'
import { UpdateCart, GetCart, RemoveItemFromCart } from '../service'
import { useDispatch } from 'react-redux'

function CartItem({ cartItemData, quantity }) {
  const dispatch = useDispatch()

  function updateQty(Action) {
    if (Action === 'add' && cartItemData['quantity'] <= 9) {
      dispatch(
        UpdateCart({
          customer_id: cartItemData['customer']['id'],
          product_id: cartItemData['product']['id'],
          quantity: cartItemData['quantity'] + 1,
        })
      )
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
            max="10"
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
