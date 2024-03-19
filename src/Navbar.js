import DevHub from './components/assets/DEV_HUB.svg'
const Navbar = () =>
(
    <>
        <header className="bg-gray-800 shadow-lg fixed top-0 left-0 right-0 z-10 flex justify-center items-center">
            <button className="flex justify-center">
                <img
                    src={DevHub}
                    alt="logo"
                    className="w-9/12"
                />
            </button>
        </header>
    </>
)

export default Navbar;