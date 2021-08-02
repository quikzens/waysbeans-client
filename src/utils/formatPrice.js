const formatPrice = (price) => {
  return new Intl.NumberFormat(['ban', 'id']).format(price.toString())
}

export default formatPrice
