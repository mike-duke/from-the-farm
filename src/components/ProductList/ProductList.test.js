import React from 'react';
import { ProductList, mapStateToProps } from './ProductList';
import { shallow } from 'enzyme';

describe('ProductList', () => {
  it('should match snapshot with no products', () => {
    let wrapper = shallow(<ProductList products={[]} />)
    expect(wrapper).toMatchSnapshot()
  });

  it('should match snapshot with products', () => {
    const mockProducts = [
      {name: 'carrots', id: 2},
      {name: 'lettuce', id: 5}
    ]
    let wrapper = shallow(<ProductList products={mockProducts} />);
    expect(wrapper).toMatchSnapshot();
  });

  describe('mapStateToProps', () => {
    it('should return a props object', () => {
      const mockGlobalState = {
        vendors: [{id: 1, name: 'Farm Team'}],
        products: [{name: 'carrots', quantity: 'all'}],
        user: {name: 'Mike'}
      }

      const expected = {products: [{name: 'carrots', quantity: 'all'}]}

      const mappedProps = mapStateToProps(mockGlobalState);
      expect(mappedProps).toEqual(expected);
    });
  });
});