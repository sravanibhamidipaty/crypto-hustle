const CoinInfo = ({ id, image, name, symbol, price }) => {
  return (
    <li className="main-list">
      <span className="coin-name">
        <img
          className="icons"
          src={image}
          alt={`Small icon for ${name} crypto coin`}
        />
        {name} ({symbol?.toUpperCase()})
      </span>
      <span className="coin-price">
        {price != null ? `$${price} USD` : null}
      </span>
    </li>
  )
}

export default CoinInfo
