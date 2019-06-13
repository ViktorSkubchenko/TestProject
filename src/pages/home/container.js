import React from 'react';
import { connect } from 'react-redux';
import { List } from 'semantic-ui-react';
import moment from 'moment';
import PropTypes from 'prop-types';

import './style.scss';
import Header from '../../components/Header';
import Error from './components/error';

class HomePage extends React.PureComponent {
  render() {
    const {
      info,
      username,
      isInfoReceived,
    } = this.props;

    return (
      <>
        <Header />
        <div className="info">
          {!info.repos.length && isInfoReceived && <div className="infoTitle">This user don&apos;t have repositories!</div>}
          {info.repos.length > 0 && isInfoReceived
            && (
            <div>
              <div className="infoTitle">Repositories:</div>
              <List divided relaxed>
                { info.repos.map(item => (
                  <List.Item key={item.id}>
                    <List.Icon name="github" size="large" verticalAlign="middle" />
                    <List.Content>
                      <List.Header><a href={`https://github.com/${username}/${item.name}`}>{item.name}</a></List.Header>
                      <List.Description>
                        Updated at
                        {moment(item.updated_at).format('MMMM Do YYYY, h:mm:ss a')}
                      </List.Description>
                    </List.Content>
                  </List.Item>
                ))}
              </List>
            </div>
            )
          }
          {!info.orgs.length && isInfoReceived && <div className="infoTitle">This user don&apos;t belong to any organizations!</div>}
          {info.orgs.length > 0 && isInfoReceived
          && (
          <div>
            <div className="infoTitle">Organizations:</div>
            <List divided relaxed>
              { info.orgs.map(item => (
                <List.Item key={item.id}>
                  <List.Icon name="github" size="large" verticalAlign="middle" />
                  <List.Content>
                    <List.Header as="a">{item.login}</List.Header>
                  </List.Content>
                </List.Item>
              ))}
            </List>
          </div>
          )
          }
        </div>
        <Error />
      </>
    );
  }
}

const mapStateToProps = state => ({
  info: state.home.info,
  username: state.home.username,
  isInfoReceived: state.home.isInfoReceived,
});

HomePage.defaultProps = {
  info: {},
  username: '',
  isInfoReceived: false,
};

HomePage.propTypes = {
  info: PropTypes.objectOf(PropTypes.any).isRequired,
  username: PropTypes.string.isRequired,
  isInfoReceived: PropTypes.bool.isRequired,
};

export default connect(
  mapStateToProps,
  null,
)(HomePage);
