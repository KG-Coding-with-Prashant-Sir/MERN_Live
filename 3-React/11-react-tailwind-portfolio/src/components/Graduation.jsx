const Graduation = ({title, school, year}) => {
  return <>
  <h1 className="font-bold text-lg">{title}</h1>
  <p className="text-sm text-gray-700 mb-4">
     {school}, {year}
  </p>
  </>
}

export default Graduation;