import Adapter from 'enzyme-adapter-react-16';
import search from './services/search';

describe('Methods', () => {
  it('Test Search Request', async () => {
    const { items } = await search('issues+react');
    expect(Array.isArray(items)).toBe(true); 
  });
});
