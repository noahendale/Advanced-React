import PropTypes from 'prop-types';
import Header from './Header';

export function Page({ children }) {
  return (
    <div>
      <Header />
      <h2>I'm the page component</h2>
      {children}
    </div>
  );
}

Page.propTypes = {
  children: PropTypes.any,
};
