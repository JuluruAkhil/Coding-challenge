import { createSlice } from '@reduxjs/toolkit'
import { GetOrders } from '../service'

export const ordersSlice = createSlice({
  name: 'orders',
  initialState: {
    orders: [],
    loading: true,
  },
  extraReducers: {
    [GetOrders.fulfilled]: (state, action) => {
      console.log(action.payload)
      function getProducts() {
        let products = {}
        for (let index = 0; index < action.payload[0].length; index++) {
          const order = action.payload[0][index]
          if (products[order['product']['id']]) {
            products[order['product']['id']] += order['quantity']
          } else {
            products[order['product']['id']] = order['quantity']
          }
        }
        return products
      }

      function GenerateTable() {
        let products = getProducts()
        let tableData = []
        const keys = Object.keys(products)
        keys.forEach((key) => {
          tableData.push({
            id: key,
            name: action.payload[1][key - 1]['name'],
            quantity: products[key],
          })
        })
        return tableData
      }

      state.orders = GenerateTable()
      state.loading = false
    },
    [GetOrders.rejected]: (state, action) => {},
  },
})

export default ordersSlice.reducer
