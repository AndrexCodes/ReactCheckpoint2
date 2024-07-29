const Player = ({ name, team, nationality, age, image, jerseyNumber }) => {
    return (
        <div className="bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden">
            <img className="w-full h-48 object-cover" src={image} alt={name} />
            <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">{name}</h2>
                <p className="text-gray-700 mb-1"><strong>Team:</strong> {team}</p>
                <p className="text-gray-700 mb-1"><strong>Nationality:</strong> {nationality}</p>
                <p className="text-gray-700 mb-1"><strong>Jersey Number:</strong> {jerseyNumber}</p>
                <p className="text-gray-700"><strong>Age:</strong> {age}</p>
            </div>
        </div>
    )
}

export default Player