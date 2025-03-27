function Footer() {
    const year = new Date().getFullYear()
  return (
    <>
        <footer className="bg-gray-800 text-white text-center p-4">
            <p> Thanaphon Thanusan | &copy; {year} Develop in Thailand</p>
        </footer>
    </>
  )
}
export default Footer