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

export default Headline
