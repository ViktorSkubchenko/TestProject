import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Button, Input } from 'semantic-ui-react';
import PropTypes from 'prop-types';

import { changeNameRequest, getInfoRequest } from '../../pages/home/actions';
import logo from '../../assets/images/logo.svg';
import './header.scss';


const Header = ({
  username,
  actions,
}) => {
  const handleChangeLoginFields = field => (e) => {
    const { value } = e.target;
    actions.changeNameRequest({ [field]: value });
  };

  return (
    <>
      <div className="header_title"> GET LIST OF REPOSITORIES AND ORGANIZATIONS</div>
      <header className="header">
        <img className="logo" src={logo} alt="logo" />
        <Input
          type="text"
          className="input"
          name="username"
          value={username}
          onChange={handleChangeLoginFields('username')}
        />
        <Button
          disabled={!username}
          className="ui button"
          onClick={(event) => {
            event.persist();
            actions.getInfoRequest();
          }}
        >
          Get Info
        </Button>
      </header>
    </>
  );
};

const mapStateToProps = state => ({
  username: state.home.username,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    {
      changeNameRequest,
      getInfoRequest,
    },
    dispatch,
  ),
});

Header.defaultProps = {
  username: '',
  actions: {}
};

Header.propTypes = {
  username: PropTypes.string.isRequired,
  actions: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header);
