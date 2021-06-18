import React from 'react';
import { render, screen } from '@testing-library/react';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Enzyme, { mount } from 'enzyme';
import { HashRouter } from 'react-router-dom';
import SalonsListView from './SalonListView';
import { SalonsContext } from 'store/SalonsProvider';
import { SALONS_LIST } from 'constants/constants';
import { initialState } from 'store/salonsReducer';

Enzyme.configure({ adapter: new Adapter() });

describe('SalonsListView', () => {
  test('should be rendered ', () => {
    render(
      <HashRouter>
        <SalonsListView />
      </HashRouter>,
    );
    const headerElement = screen.getByText('Hår');
    expect(headerElement).toBeInTheDocument();
  });

  test('should render all salon items after init', async () => {
    const wrapper = mount(
      <SalonsContext.Provider
        value={{
          ...initialState,
          dispatch: jest.fn(),
        }}
      >
        <HashRouter>
          <SalonsListView />
        </HashRouter>
      </SalonsContext.Provider>,
    );
    expect(wrapper.find('li.salons-list-item')).toHaveLength(
      SALONS_LIST.length,
    );
  });
});
