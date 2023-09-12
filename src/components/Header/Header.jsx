 import profile from '../../assets/images/profile.png'
const Header = () => {
    return (
        <div className='flex justify-between items-center max-w-7xl mx-auto border-b-2 py-4 px-2'>
          <h1 className='text-3xl text-center mt-4'>Kowladge Cafe</h1>
            <img src={profile} alt=""  />
        </div>
    );
};

export default Header;