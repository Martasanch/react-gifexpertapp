import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import {createSerializer} from 'enzyme-to-json';

//npm install --save-dev enzyme
//npm install --save-dev @wojtekmaj/enzyme-adapter-react-17
Enzyme.configure({ adapter: new Adapter() });
expect.addSnapshotSerializer(createSerializer({mode: 'deep'})); 
//import '@testing-library/jest-dom/extend-expect';
