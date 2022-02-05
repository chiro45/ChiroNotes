import {createSerializer} from 'enzyme-to-json';

import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import Swal from 'sweetalert2'

expect.addSnapshotSerializer(createSerializer({mode: 'deep'}));


Enzyme.configure({ adapter: new Adapter() });



//  const noScroll = ()=>{};

// Object.defineProperty(window, 'scrollTo',{value: noScroll, Writable: true})




 jest.mock('sweetalert2',()=>({
    fire: jest.fn(),
    close: jest.fn()
}))