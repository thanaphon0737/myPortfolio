import { FaGithub,FaLinkedin } from 'react-icons/fa'

function Button(props) {
    function renderComponents(name) {
        switch (name) {
            case 'github':
                return <FaGithub size={24} />
            case 'linkedin':
                return <FaLinkedin size={24} />
            default:
                return null
        }
    }
    function navagateTo(e) {
        // window.location.href = e.target.value
        window.open(e.target.value, '_blank');
    }
  return (
    <button onClick={navagateTo} value={props.url}  className="bg-white text-gray-500 font-bold py-2 px-4 rounded flex items-center gap-2 cursor-pointer w-32">
        {props.name}
        {renderComponents(props.name)}
    </button>
  )
}
export default Button