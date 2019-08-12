import PropTypes from "prop-types"

const Headline = props => {
  const { header, description } = props

  if (!header) return null

  return (
    <div data-test="HeadlineComponent">
      <h1 data-test="header">{header}</h1>
      <p data-test="description">{description}</p>
    </div>
  )
}

Headline.propTypes = {
  header: PropTypes.string,
  description: PropTypes.string,
  user: PropTypes.arrayOf(
    PropTypes.shape({
      fName: PropTypes.string,
      lName: PropTypes.string,
      age: PropTypes.number,
      onlineStatus: PropTypes.bool
    })
  )
}

export default Headline
