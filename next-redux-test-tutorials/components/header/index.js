import PropTypes from "prop-types"

const Header = props => {
  return (
    <header data-test="headerComponent">
      <div data-test="headerText">Header</div>
      <img
        data-test="headerLogo"
        src="https://t3.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/Aay/image/t5G9QrwYFAOD3fif7IQAa6D0Ppg"
      />
    </header>
  )
}

export default Header
