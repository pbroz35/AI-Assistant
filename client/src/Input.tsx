import { FaSearch } from 'react-icons/fa';


const Input = () => {
    return (
        

        <div className="search-container">
        <form className="search">
          
          <input type="text" placeholder="Message AI" name="search" />
          <FaSearch className="search-icon"></FaSearch>
          
        
        </form>
      </div>


    )
}

export default Input
