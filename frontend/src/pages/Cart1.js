import React from 'react'
import { Button } from 'react-bootstrap'
import { Checkout } from '../service'
import { useSelector, useDispatch } from 'react-redux'





function CartItem({ key }) {


  const dispatch = useDispatch()
  const { cartQuant } = useSelector((state) => state.cartQuant)

  // const onChangeIncrease = (type, value) => {
  //   setcartQuant({ ...cartQuant, [type]: value })
  // }

  const increase(e) {
    e.preventDefault()
    dispatch(UpdateCart({key,cartQuant}))
  }
  const decrease(e) {
    e.preventDefault()
    dispatch(UpdateCart({key,cartQuant}))
  }

  const delete(e) {
    e.preventDefault()
    dispatch(UpdateCart({key,cartQuant}))
  }


  return (
    <div class="d-flex justify-content-between align-items-center p-2">
      <img
        class="img-thumbnail rounded"
        src="https://cdn1.vectorstock.com/i/thumb-large/44/70/hexagon-rocket-logo-vector-22374470.jpg"
        alt="Fast Starter"
        style={{ width: '20%' }}
      />
      <div class>
        <h5>Emoji 1</h5>
      </div>
      <div class="d-flex flex-column">
        <p class="text-center">
          <strong id="summary">$17.99</strong>
        </p>
        <div class="input-group">
          <span class="input-group-btn">
            <button
              type="button"
              class="btn btn-default btn-number"
              disabled="enabled"
              data-type="minus"
              data-field="quant[1]"
              onClick={decrease}
            >
              <span class="fas fa-minus"></span>
            </button>
          </span>
          <input
            type="text"
            name="quant[1]"
            class="form-control input-number"
            value="2"
            min="1"
            max="10"
          />
          <span class="input-group-btn">
            <button
              type="button"
              class="btn btn-default btn-number"
              data-type="plus"
              data-field="quant[1]"
              onClick={increase}
            >
              <span class="fas fa-plus"></span>
            </button>
          </span>
        </div>
        <br />
        <Button variant="danger"
        onclick={delete}>Delete</Button>
      </div>
    </div>
  )
}

export default CartItem