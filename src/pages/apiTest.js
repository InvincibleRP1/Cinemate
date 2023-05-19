import Mockman from 'mockman-js';
import { Navbar } from '../components/navbar/navbar';
export const APITest = () => {

    return (
        <div>
            <Navbar></Navbar>
            <div className="test-area">
            <Mockman />
            </div>
            
        </div>
    )
}