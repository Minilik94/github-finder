import { Link } from "react-router-dom"
import Spinner from "../layout/Spinner"
import PropTypes from "prop-types"


function UserItem({user: {login, avatar_url}}) {
  return (
    <div className="card shadow-md compact card-side bg-base-100">
        <div className="flex-row items-center space-x-4 card-body">
            <div>
                <div className="avater">
                    <div className="rounded-full shadow w-14 h-14">
                        <img src={avatar_url}  className="rounded-full" alt="profile" />
                    </div>
                </div>
            </div>
            <div>
                <h2 className="card-title">
                    {login}
                </h2>
                <Link to={`/user/${login}`} className="text-base-content text-opacity-14">
                    Visit Profile
                </Link>
            </div>
        </div>
    </div>
  )
}

UserItem.propTypes = {
    user: PropTypes.object.isRequired
}

export default UserItem
