import React from 'react';
import { connect } from 'react-redux';
import { Message } from 'semantic-ui-react';
import PropTypes from 'prop-types';

class Error extends React.PureComponent {
  render() {
    const {
      error,
    } = this.props;

    return (
      <>
        {error && (
        <Message>
          <Message.Header>
              Error code:
            {' '}
            { error.response.status }
          </Message.Header>
          <p>
            { error.response.statusText }
          </p>
        </Message>
        )}
      </>
    );
  }
}

const mapStateToProps = state => ({
  error: state.home.error,
});

Error.defaultProps = {
  error: {},
};

Error.propTypes = {
  error: PropTypes.objectOf(PropTypes.any),
};


export default connect(
  mapStateToProps,
  null,
)(Error);
