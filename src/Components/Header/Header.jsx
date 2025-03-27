function Header() {
  return (
    <>
        <header className="bg-gray-900 text-white p-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold">My App</h1>
            <nav>
            <ul className="flex space-x-4">
                <li><a href="#" className="hover:underline">Home</a></li>
                <li><a href="#" className="hover:underline">About</a></li>
                <li><a href="#" className="hover:underline">Contact</a></li>
            </ul>
            </nav>
        </header>
    </>
  )
}
export default Header