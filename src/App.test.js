import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import search from './services/search';
import Form from './components/Form.js';

configure({ adapter: new Adapter() });

describe('Methods', () => {
  it('Test Search Request', async () => {
    const { items } = await search('issues+react');
    expect(Array.isArray(items)).toBe(true); 
  });
});


describe('Components', () => {
  it('Test Form search', () => {
    const addToList = jest.fn();
    const isLoading = jest.fn();
    const setWithData = jest.fn();
    const wrapper = shallow(<Form addToList={addToList} isLoading={isLoading} setWithData={setWithData} />);
    const input = wrapper.find('.search');
    
    expect(input.simulate('change', { target: { value: 'issue' } }));
  });
});