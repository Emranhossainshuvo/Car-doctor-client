import { MdOutlineCalendarMonth } from 'react-icons/md';
import { LuPhoneCall } from 'react-icons/lu';
import { SlLocationPin } from 'react-icons/sl';

const MeetUs = () => {
    return (
        <div className='bg-black flex mt-8 mb-5 h-36 rounded-2xl p-10 text-center text-white justify-around'>
            <div className='flex items-center justify-between'>
                <div className='mr-5'>
                    <MdOutlineCalendarMonth />
                </div>
                <div>
                    <h4>We are open monday-friday</h4>
                    <h3>7:00 am - 9:00 pm</h3>
                </div>
            </div>
            <div className='flex items-center justify-between'>
                <div className='mr-5'>
                    <LuPhoneCall />
                </div>
                <div>
                    <h4>Have a question?</h4>
                    <h3>+2546 251 2658</h3>
                </div>
            </div>
            <div className='flex items-center justify-between'>
                <div className='mr-5'>
                    <SlLocationPin />
                </div>
                <div>
                    <h4>Need a repair? our address</h4>
                    <h3>Liza Street, New York</h3>
                </div>
            </div>
        </div>
    );
};

export default MeetUs;