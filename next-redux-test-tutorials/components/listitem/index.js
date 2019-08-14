import PropTypes from "prop-types";

const ListItem = props => {
  const { title, description } = props;

  if (!title) {
    return null;
  }

  return (
    <div data-test="listItemComponent">
      <h2 data-test="componentTitle">{title}</h2>
      <div data-test="componentDescription">{description}</div>
    </div>
  );
};

ListItem.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string
};

export default ListItem;
